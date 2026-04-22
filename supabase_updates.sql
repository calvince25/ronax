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
