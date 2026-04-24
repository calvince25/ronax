const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lmjlpucdyjznsdnewoic.supabase.co';
const supabaseAnonKey = 'sb_publishable_zuVs_w-dQN1OCAtDNLzDZA_9et4hrLO';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkGallery() {
  const { data, error } = await supabase.from('gallery').select('*');
  if (error) {
    console.error('Error fetching gallery:', error);
    return;
  }
  
  console.log('Gallery Images in DB:', data.length);
  console.log('Data:', JSON.stringify(data, null, 2));
}

checkGallery();
