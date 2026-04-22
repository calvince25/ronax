-- Rename 'Junior Tennis' to 'Junior Program' to match the new standardized categories
UPDATE public.prices 
SET category = 'Junior Program' 
WHERE category = 'Junior Tennis';

-- Clean up any other potential category mismatches
UPDATE public.prices 
SET category = 'Private Lessons' 
WHERE category = 'Private';

UPDATE public.prices 
SET category = 'Group Classes' 
WHERE category = 'Group';
