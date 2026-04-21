-- SQL to add description to gallery table
ALTER TABLE gallery ADD COLUMN IF NOT EXISTS description TEXT;

-- SQL to ensure bookings table handles the new lead capture fields
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    location TEXT NOT NULL,
    program TEXT NOT NULL,
    message TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for bookings
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public inserts" ON bookings FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view
CREATE POLICY "Allow authenticated users to view" ON bookings FOR SELECT USING (auth.role() = 'authenticated');
