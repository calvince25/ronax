const fs = require('fs');
const path = require('path');
const https = require('https');

const images = {
  'private_lessons.jpg': 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dGVubmlzfGVufDB8fHx8MTc3Njk2NzM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'group_classes.jpg': 'https://images.unsplash.com/photo-1576972405668-2d020a01cbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8dGVubmlzfGVufDB8fHx8MTc3Njk2NzM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'ten_session_pack.jpg': 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8dGVubmlzfGVufDB8fHx8MTc3Njk2NzM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'after_school.jpg': 'https://images.unsplash.com/photo-1587683437362-da7775ffc532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8a2lkcyUyMHRlbm5pc3xlbnwwfHx8fDE3NzY5Njc0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  
  'aga_khan.jpg': 'https://images.unsplash.com/photo-1747647455910-6356d52f45da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHRlbm5pcyUyMGNsdWJ8ZW58MHx8fHwxNzc2OTY3NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'public_service_club.jpg': 'https://images.unsplash.com/photo-1756728584667-8d03d4fed27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHRlbm5pcyUyMGNsdWJ8ZW58MHx8fHwxNzc2OTY3NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'karura.jpg': 'https://images.unsplash.com/photo-1696661629651-c418070919f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8dGVubmlzJTIwY2x1YnxlbnwwfHx8fDE3NzY5Njc0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
};

const targetDir = path.join(__dirname, 'public', 'images', 'locations_coaching');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      
      const filePath = path.join(targetDir, filename);
      const fileStream = fs.createWriteStream(filePath);
      
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(filePath);
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  for (const [filename, url] of Object.entries(images)) {
    try {
      console.log(`Downloading ${filename}...`);
      await downloadImage(url, filename);
      console.log(`Successfully downloaded ${filename}`);
    } catch (e) {
      console.error(`Error downloading ${filename}: ${e.message}`);
    }
  }
}

downloadAll();
