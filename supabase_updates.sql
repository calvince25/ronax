-- ============================================================
-- STEP 1: Run this in Supabase SQL Editor
-- Go to: https://supabase.com → Your Project → SQL Editor
-- ============================================================

-- Confirm your email and allow login (bypasses email verification)
UPDATE auth.users
SET 
  email_confirmed_at = NOW(),
  raw_app_meta_data = raw_app_meta_data || '{"provider":"email","providers":["email"]}',
  raw_user_meta_data = raw_user_meta_data || '{"email_verified": true}',
  updated_at = NOW()
WHERE email = 'omondicalvince4714@gmail.com';

-- ============================================================
-- STEP 2: Ensure your profile exists with admin role
-- ============================================================

-- Insert profile if it doesn't exist, or update if it does
INSERT INTO public.profiles (id, role)
SELECT 
  id,
  'admin'
FROM auth.users 
WHERE email = 'omondicalvince4714@gmail.com'
ON CONFLICT (id) DO UPDATE 
  SET role = 'admin';

-- ============================================================
-- STEP 3: Ensure the bookings table has 'level' column (not 'program')
-- ============================================================

-- Add level column if it doesn't exist (for the booking modal)
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS level TEXT;
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS phone TEXT;

-- ============================================================
-- STEP 4: Add gallery description column
-- ============================================================
ALTER TABLE gallery ADD COLUMN IF NOT EXISTS description TEXT;

-- ============================================================
-- VERIFICATION: Check your user is correctly set up
-- ============================================================
SELECT 
  u.email, 
  u.email_confirmed_at,
  p.role
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
WHERE u.email = 'omondicalvince4714@gmail.com';

-- ============================================================
-- STEP 5: Add category to prices and upcoming_events to programs
-- ============================================================
ALTER TABLE prices ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'General';
ALTER TABLE programs ADD COLUMN IF NOT EXISTS upcoming_events JSONB DEFAULT '[]'::jsonb;

-- ============================================================
-- STEP 6: Allow Admins to Update and Delete Bookings
-- ============================================================

-- Drop existing policies if necessary, then create new ones
DROP POLICY IF EXISTS "Admins can update bookings" ON bookings;
DROP POLICY IF EXISTS "Admins can delete bookings" ON bookings;

CREATE POLICY "Admins can update bookings"
  ON bookings
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can delete bookings"
  ON bookings
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- ============================================================
-- STEP 7: Add RLS Policies for Gallery and Programs
-- ============================================================

-- GALLERY POLICIES
DROP POLICY IF EXISTS "Admins can insert gallery" ON gallery;
DROP POLICY IF EXISTS "Admins can update gallery" ON gallery;
DROP POLICY IF EXISTS "Admins can delete gallery" ON gallery;
DROP POLICY IF EXISTS "Gallery is viewable by everyone" ON gallery;

CREATE POLICY "Admins can insert gallery" ON gallery FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admins can update gallery" ON gallery FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admins can delete gallery" ON gallery FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Gallery is viewable by everyone" ON gallery FOR SELECT USING (true);

-- PROGRAMS POLICIES
DROP POLICY IF EXISTS "Admins can insert programs" ON programs;
DROP POLICY IF EXISTS "Admins can update programs" ON programs;
DROP POLICY IF EXISTS "Admins can delete programs" ON programs;
DROP POLICY IF EXISTS "Programs are viewable by everyone" ON programs;

CREATE POLICY "Admins can insert programs" ON programs FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admins can update programs" ON programs FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admins can delete programs" ON programs FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Programs are viewable by everyone" ON programs FOR SELECT USING (true);

-- PRICES POLICIES
DROP POLICY IF EXISTS "Prices are viewable by everyone" ON prices;
CREATE POLICY "Prices are viewable by everyone" ON prices FOR SELECT USING (true);

-- ============================================================
-- STEP 8: Create Secure Function to Delete Users
-- ============================================================

CREATE OR REPLACE FUNCTION delete_user_by_admin(target_user_id UUID)
RETURNS VOID AS $$
BEGIN
  -- Check if the requester is an admin
  IF EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  ) THEN
    -- Delete from profiles first
    DELETE FROM public.profiles WHERE id = target_user_id;
    -- Delete from auth.users
    DELETE FROM auth.users WHERE id = target_user_id;
  ELSE
    RAISE EXCEPTION 'Only admins can delete users';
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- STEP 9: Insert Seed Gallery Images
-- ============================================================

INSERT INTO public.gallery (image_url, alt_text, description)
VALUES 
  ('https://images.unsplash.com/photo-1542144582-1ba00540f367?q=80&w=1200', 'Advanced Training Session', 'Coach Ronax works one-on-one with advanced players to sharpen technique and mental focus.'),
  ('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200', 'Junior Tennis Development', 'Our junior program uses the Red-Orange-Green ball progression system to build confidence and skill.'),
  ('https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1200', 'Group Training At Westlands', 'Our flagship Westlands location hosts group sessions every Monday, Wednesday, and Friday.'),
  ('https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1200', 'Serving Technique Clinic', 'A focused serving clinic that covers biomechanics, toss consistency, and power generation.'),
  ('https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1200', 'Karen Private Court Sessions', 'Exclusive private sessions at our Karen courts — serene, focused, and premium.'),
  ('https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1200', 'Adults Beginner Class', 'It''s never too late to start. Our adult beginner program makes learning fun and comfortable.')
ON CONFLICT DO NOTHING;
