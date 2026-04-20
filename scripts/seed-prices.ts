import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''; // Usually better to use service_role key for admin tasks, but for initial seeding anon might work if RLS is not fully active yet. Let's try anon.

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const initialPrices = [
  {
    name: 'Private Lessons',
    price: '2,500',
    unit: 'per hour',
    description: '1-on-1 coaching at Westlands or Karen.',
    features: ['Technical Assessment', 'Personalized Drills', 'Video Analysis (Optional)', 'Match Strategy'],
    icon: 'Star',
    popular: false,
    display_order: 1
  },
  {
    name: '10 Session Package',
    price: '22,000',
    unit: 'for 10 hours',
    description: 'Our most popular transformation package.',
    features: ['Significant Savings', 'Flexible Scheduling', 'Tracking Progress', 'Equipment Advice'],
    icon: 'Zap',
    popular: true,
    display_order: 2
  },
  {
    name: 'Junior Programs',
    price: '12,000',
    unit: 'per term',
    description: 'Weekly sessions for young champions.',
    features: ['Age-grouped classes', 'Fundamentals & Fun', 'Term Certificates', 'Holiday Camps Discount'],
    icon: 'ShieldCheck',
    popular: false,
    display_order: 3
  }
];

async function seed() {
  console.log("Seeding prices...");
  const { data, error } = await supabase.from('prices').upsert(initialPrices, { onConflict: 'name' });
  
  if (error) {
    console.error("Error seeding prices:", error.message);
  } else {
    console.log("Successfully seeded prices:", initialPrices.length);
  }
}

seed();
