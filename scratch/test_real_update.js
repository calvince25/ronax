const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lmjlpucdyjznsdnewoic.supabase.co';
const supabaseAnonKey = 'sb_publishable_zuVs_w-dQN1OCAtDNLzDZA_9et4hrLO';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testRealUpdate() {
  const { data: prices } = await supabase.from('prices').select('*').limit(1);
  if (!prices || prices.length === 0) return;
  
  const p = prices[0];
  const originalPrice = p.price;
  const newPrice = originalPrice + " (test)";
  
  console.log(`Updating ${p.name} from ${originalPrice} to ${newPrice}`);
  
  const { error } = await supabase.from('prices').update({ price: newPrice }).eq('id', p.id);
  if (error) {
    console.error('Update failed:', error.message);
  } else {
    console.log('Update success!');
    // Revert it back
    await supabase.from('prices').update({ price: originalPrice }).eq('id', p.id);
    console.log('Reverted back.');
  }
}

testRealUpdate();
