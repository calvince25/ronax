-- 1. Create Profiles Table (Linked to Auth Users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  role TEXT DEFAULT 'pending'::text,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Turn on RLS for profiles (optional but good practice)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone."
  ON public.profiles FOR SELECT
  USING ( true );

CREATE POLICY "Users can insert their own profile."
  ON public.profiles FOR INSERT
  WITH CHECK ( auth.uid() = id );

CREATE POLICY "Admins can update all profiles."
  ON public.profiles FOR UPDATE
  USING ( (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin' );

-- 3. Create a Function and Trigger to automatically handle new signups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  user_count INT;
BEGIN
  SELECT count(*) INTO user_count FROM public.profiles;
  
  IF user_count = 0 THEN
    INSERT INTO public.profiles (id, email, role)
    VALUES (new.id, new.email, 'admin');
  ELSE
    INSERT INTO public.profiles (id, email, role)
    VALUES (new.id, new.email, 'pending');
  END IF;
  
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 4. Create the Programs Table
CREATE TABLE public.programs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  lead_description TEXT,
  main_description TEXT,
  image_url TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  price_info JSONB DEFAULT '[]'::jsonb,
  schedule_info JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5. Create the Gallery Table
CREATE TABLE public.gallery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 6. Storage Bucket setup for public images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('public-images', 'public-images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'public-images' );

CREATE POLICY "Auth Insert" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'public-images' AND auth.role() = 'authenticated' );

CREATE POLICY "Auth Update" 
ON storage.objects FOR UPDATE 
USING ( bucket_id = 'public-images' AND auth.role() = 'authenticated' );

CREATE POLICY "Auth Delete" 
ON storage.objects FOR DELETE 
USING ( bucket_id = 'public-images' AND auth.role() = 'authenticated' );
