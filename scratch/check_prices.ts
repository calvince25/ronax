import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase env vars');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkPrices() {
  const { data, error } = await supabase.from('prices').select('category, name, price');
  if (error) {
    console.error('Error fetching prices:', error);
    return;
  }
  
  const categories = [...new Set(data.map(p => p.category))];
  console.log('Categories in DB:', categories);
  console.log('Total prices:', data.length);
  console.log('Data:', JSON.stringify(data, null, 2));
}

checkPrices();
