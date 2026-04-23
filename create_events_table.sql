-- Create events table
CREATE TABLE IF NOT EXISTS public.events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    date TIMESTAMPTZ NOT NULL,
    location TEXT NOT NULL,
    price_individual DECIMAL(10, 2) DEFAULT 0,
    price_group DECIMAL(10, 2) DEFAULT 0,
    image_url TEXT,
    max_slots INTEGER,
    booked_slots INTEGER DEFAULT 0,
    status TEXT DEFAULT 'upcoming', -- 'upcoming', 'past', 'cancelled'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Allow public to view upcoming events
CREATE POLICY "Upcoming events are viewable by everyone" ON public.events
    FOR SELECT USING (status = 'upcoming' OR status = 'past');

-- Only admins can manage events
CREATE POLICY "Admins can manage events" ON public.events
    FOR ALL USING (
        EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
    );

-- Create event bookings table (optional but good for records)
CREATE TABLE IF NOT EXISTS public.event_bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    booking_type TEXT NOT NULL, -- 'individual', 'group'
    group_size INTEGER DEFAULT 1,
    total_price DECIMAL(10, 2),
    status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for bookings
ALTER TABLE public.event_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create event bookings" ON public.event_bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view event bookings" ON public.event_bookings
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
    );
