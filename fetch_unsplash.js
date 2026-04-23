const https = require('https');
https.get('https://unsplash.com/s/photos/tennis', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g;
    const matches = data.match(regex);
    console.log([...new Set(matches)].slice(0, 20));
  });
});
