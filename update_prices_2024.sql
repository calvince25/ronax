-- Reset and insert new standardized prices
DELETE FROM public.prices;

-- Private Lessons
INSERT INTO public.prices (name, price, unit, description, features, icon, popular, display_order, category)
VALUES 
('Adult Private', '2,500', 'per session', 'One-on-one professional coaching for adults focusing on technique and strategy.', '["1-on-1 Coaching", "Personalized Drills", "Flexible Scheduling", "Video Analysis"]'::jsonb, 'Star', true, 1, 'Private Lessons'),
('Kids Private', '1,500', 'per session', 'Engaging one-on-one sessions for junior players to build a strong foundation.', '["Fundamentals", "Junior Equipment", "Fun Drills", "Safe Environment"]'::jsonb, 'Star', false, 2, 'Private Lessons');

-- Group Classes
INSERT INTO public.prices (name, price, unit, description, features, icon, popular, display_order, category)
VALUES 
('Adult Group', '2,000', 'per session', 'Social and dynamic group training for adults (minimum 3 players).', '["Social Environment", "Tactical Drills", "Competitive Play", "Cost Effective"]'::jsonb, 'Zap', true, 3, 'Group Classes'),
('Kids Group', '1,200', 'per session', 'Group drills for kids to learn together in a fun, social setting.', '["Social Interaction", "Game-based Learning", "Basic Coordination", "Fun atmosphere"]'::jsonb, 'Zap', false, 4, 'Group Classes');

-- 10 Session Pack
INSERT INTO public.prices (name, price, unit, description, features, icon, popular, display_order, category)
VALUES 
('Adult 10-Pack', '23,500', '10 sessions', 'Premium bulk package for dedicated adult players.', '["At least 2 sessions/week", "Expires in 2 months", "Priority Booking", "Save 1,500"]'::jsonb, 'ShieldCheck', true, 5, '10 Session Pack'),
('Kids 10-Pack', '13,500', '10 sessions', 'The best value for committed junior players.', '["At least 2 sessions/week", "Expires in 2 months", "Progress Tracking", "Save 1,500"]'::jsonb, 'ShieldCheck', false, 6, '10 Session Pack');

-- After School Program
INSERT INTO public.prices (name, price, unit, description, features, icon, popular, display_order, category)
VALUES 
('After School', '10,200', 'per month', 'Structured program for students aged 4-16 years.', '["Mon, Wed, Fri sessions", "Consistent Progress", "After School Hours", "Peer Competition"]'::jsonb, 'Zap', true, 7, 'After School Program');
