const fs = require('fs');
const path = require('path');
const https = require('https');

const images = {
  // Coaching category images
  'private_lessons.jpg': 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1080',
  'group_classes.jpg': 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800',
  'ten_session_pack.jpg': 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=1080',
  'after_school.jpg': 'https://images.unsplash.com/photo-1587683437362-da7775ffc532?q=80&w=1080',
  
  // Location images
  'aga_khan.jpg': 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1080',
  'public_service_club.jpg': 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=1080',
  'karura.jpg': 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1080',
  
  // Hero images
  'coaching_hero.jpg': 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1440',
  'locations_hero.jpg': 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=1440'
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
    const filePath = path.join(targetDir, filename);
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 10000) {
      console.log(`Skipping ${filename} (already exists)`);
      continue;
    }
    try {
      console.log(`Downloading ${filename}...`);
      await downloadImage(url, filename);
      console.log(`✓ Successfully downloaded ${filename}`);
    } catch (e) {
      console.error(`✗ Error downloading ${filename}: ${e.message}`);
    }
  }
  console.log('\nDone!');
}

downloadAll();
