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

CREATE POLICY "Admins can insert gallery" ON gallery FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admins can update gallery" ON gallery FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admins can delete gallery" ON gallery FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);

-- PROGRAMS POLICIES
DROP POLICY IF EXISTS "Admins can insert programs" ON programs;
DROP POLICY IF EXISTS "Admins can update programs" ON programs;
DROP POLICY IF EXISTS "Admins can delete programs" ON programs;

CREATE POLICY "Admins can insert programs" ON programs FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admins can update programs" ON programs FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);
CREATE POLICY "Admins can delete programs" ON programs FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
);

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
