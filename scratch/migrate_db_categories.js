const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lmjlpucdyjznsdnewoic.supabase.co';
const supabaseAnonKey = 'sb_publishable_zuVs_w-dQN1OCAtDNLzDZA_9et4hrLO';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrate() {
  console.log('Migrating categories...');
  
  // 1. After School Program -> Junior Program
  const { error: err1 } = await supabase
    .from('prices')
    .update({ category: 'Junior Program' })
    .eq('category', 'After School Program');
  
  if (err1) console.error('Error migrating Junior Program:', err1);
  else console.log('Migrated Junior Program.');

  // 2. Junior Tennis -> Junior Program
  const { error: err2 } = await supabase
    .from('prices')
    .update({ category: 'Junior Program' })
    .eq('category', 'Junior Tennis');
    
  if (err2) console.error('Error migrating Junior Tennis:', err2);
  else console.log('Migrated Junior Tennis.');

  console.log('Migration complete.');
}

migrate();
