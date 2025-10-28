#!/usr/bin/env node
/**
 * Simple favicon generation helper.
 * Place a high-res square source image at: assets/favicon-source.png (min 1024x1024)
 * Run: npm run generate-favicons
 * Outputs favicons directly into /public.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SIZES = [16,32,48,96,192,512];
const SRC = path.join(process.cwd(), 'assets', 'favicon-source.png');
const OUT = path.join(process.cwd(), 'public');

(async () => {
  if (!fs.existsSync(SRC)) {
    console.error('Missing source image:', SRC);
    process.exit(1);
  }
  const buffer = fs.readFileSync(SRC);
  await Promise.all(SIZES.map(async size => {
    const file = path.join(OUT, `favicon-${size}x${size}.png`);
    await sharp(buffer).resize(size, size).png().toFile(file);
    console.log('Generated', file);
  }));
  // Copy 180x180 apple-touch-icon
  await sharp(buffer).resize(180,180).png().toFile(path.join(OUT, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');
  console.log('Done. Remember to supply favicon.svg and safari-pinned-tab.svg manually if desired.');
})();
