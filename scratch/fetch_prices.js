const https = require('https');

const url = 'https://lmjlpucdyjznsdnewoic.supabase.co/rest/v1/prices?select=*';
const options = {
  headers: {
    'apikey': 'sb_publishable_zuVs_w-dQN1OCAtDNLzDZA_9et4hrLO',
    'Authorization': 'Bearer sb_publishable_zuVs_w-dQN1OCAtDNLzDZA_9et4hrLO'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error('Error: ' + err.message);
});
