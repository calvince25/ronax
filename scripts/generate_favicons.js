const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/WhatsApp Image 2026-05-04 at 10.54.23.jpeg');
const outputDir = path.join(__dirname, '../public');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
};

async function generate() {
  try {
    const inputBuffer = fs.readFileSync(inputPath);
    
    // First, convert the input to a raw buffer or flatten it onto a black background
    const baseImage = sharp(inputBuffer)
      .flatten({ background: { r: 0, g: 0, b: 0 } })
      .toFormat('png');

    const baseBuffer = await baseImage.toBuffer();

    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(baseBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        })
        .toFile(path.join(outputDir, filename));
      console.log(`Generated ${filename}`);
    }

    // For favicon.ico, we can just use the 32x32 png, as sharp does not support native .ico export
    // But many browsers accept a 32x32 PNG renamed to .ico
    // Or we just use a small PNG for favicon.ico.
    await sharp(baseBuffer)
        .resize(32, 32, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        })
        .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('Generated favicon.ico (as PNG 32x32)');
    
    console.log('All images generated successfully.');
  } catch (err) {
    console.error('Error generating images:', err);
  }
}

generate();
