const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lmjlpucdyjznsdnewoic.supabase.co';
const supabaseAnonKey = 'sb_publishable_zuVs_w-dQN1OCAtDNLzDZA_9et4hrLO';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testUpdate() {
  const { data: prices } = await supabase.from('prices').select('id, name').limit(1);
  if (!prices || prices.length === 0) {
    console.log('No prices found');
    return;
  }
  
  const id = prices[0].id;
  const name = prices[0].name;
  console.log(`Testing update for: ${name} (${id})`);
  
  const { error } = await supabase.from('prices').update({ name: name }).eq('id', id);
  if (error) {
    console.error('Update failed:', error.message);
    console.error('Error details:', error);
  } else {
    console.log('Update successful (though we didn\'t change anything)');
  }
}

testUpdate();
