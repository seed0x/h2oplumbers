#!/bin/bash

# All County Plumbing - Image Setup Script
# This script helps create the directory structure and placeholder files for brand images

echo "🔧 All County Plumbing - Brand Image Setup"
echo "======================================="

# Create image directories if they don't exist
echo "📁 Creating image directories..."

mkdir -p public/images/team
mkdir -p public/images/work
mkdir -p public/images/fleet
mkdir -p public/images/backgrounds
mkdir -p public/favicons

echo "✅ Image directories created successfully!"

# Create placeholder README files in each directory
echo "📝 Creating placeholder documentation..."

# Team directory
cat > public/images/team/README.md << 'EOF'
# Team Photos Directory

## Required Images:
- Professional headshots of team members
- Recommended size: 800x800px minimum
- Format: JPG or PNG
- Good lighting, clean backgrounds

## Naming Convention:
- firstname-lastname.jpg
- Example: mike-johnson.jpg, sarah-wilson.jpg

## Current Placeholders Needed:
- mike-johnson.jpg (Master Plumber & Owner)
- sarah-wilson.jpg (Licensed Plumber)
- david-chen.jpg (Commercial Plumber)
- lisa-rodriguez.jpg (Emergency Service Specialist)

Replace the placeholder names in /src/app/team/page.tsx with actual team member information.
EOF

# Work portfolio directory
cat > public/images/work/README.md << 'EOF'
# Work Portfolio Directory

## Image Categories:
1. **Bathroom Remodels** - bathroom-remodel-[number].jpg
2. **Kitchen Plumbing** - kitchen-plumbing-[number].jpg
3. **Drain Cleaning** - drain-[before/after]-[number].jpg
4. **Water Heaters** - water-heater-[number].jpg
5. **Emergency Repairs** - emergency-repair-[number].jpg
6. **Commercial Projects** - commercial-project-[number].jpg

## Requirements:
- Size: 1200x800px minimum
- Format: JPG (WebP conversion automatic)
- High quality, professional lighting
- Before/after pairs when applicable

## Example Files Needed:
- bathroom-remodel-1.jpg
- kitchen-plumbing-1.jpg
- drain-before-1.jpg / drain-after-1.jpg
- water-heater-install-1.jpg
- pipe-repair-1.jpg
- commercial-project-1.jpg
EOF

# Fleet directory
cat > public/images/fleet/README.md << 'EOF'
# Fleet Photos Directory

## Required Images:
- Service vehicles with All County Plumbing branding
- Size: 1600x900px minimum
- Format: JPG
- Clean vehicles, professional angles

## Suggested Shots:
1. **Full vehicle side view** - showing complete branding
2. **Vehicle with technician** - professional in uniform
3. **Open vehicle** - showing organized tools/equipment
4. **Multiple vehicles** - fleet overview

## Naming Convention:
- truck-[number].jpg
- van-[number].jpg
- fleet-overview.jpg

## Example Files:
- truck-1.jpg
- truck-2.jpg
- truck-3.jpg
EOF

# Backgrounds directory
cat > public/images/backgrounds/README.md << 'EOF'
# Background Images Directory

## Hero Backgrounds:
- all-county-hero-bg.jpg (Main homepage hero)
- team-hero-bg.jpg (Team page hero)
- service-hero-bg.jpg (Service pages hero)

## Requirements:
- Size: 1920x1080px minimum
- Format: JPG
- High quality, professional appearance
- Should work well with text overlays

## Suggestions:
- Professional plumber at work
- Clean, modern home interior
- Service truck on location
- Team group photo location
EOF

# Create example image generation script
cat > scripts/generate-placeholder-images.js << 'EOF'
// Placeholder Image Generator for All County Plumbing
// Run with: node scripts/generate-placeholder-images.js

const fs = require('fs');
const path = require('path');

// This is a basic script to create placeholder images
// Replace with actual photo processing when real images are available

const placeholders = {
  team: [
    'mike-johnson.jpg',
    'sarah-wilson.jpg', 
    'david-chen.jpg',
    'lisa-rodriguez.jpg'
  ],
  work: [
    'bathroom-remodel-1.jpg',
    'kitchen-plumbing-1.jpg',
    'drain-before-1.jpg',
    'drain-after-1.jpg',
    'water-heater-install.jpg',
    'pipe-repair-1.jpg',
    'commercial-project-1.jpg'
  ],
  fleet: [
    'truck-1.jpg',
    'truck-2.jpg',
    'truck-3.jpg'
  ],
  backgrounds: [
    'all-county-hero-bg.jpg',
    'team-hero-bg.jpg',
    'service-hero-bg.jpg'
  ]
};

// Create placeholder text files (replace with actual image processing)
Object.entries(placeholders).forEach(([category, files]) => {
  files.forEach(filename => {
    const filePath = path.join('public', 'images', category, filename);
    const placeholderText = `Placeholder for ${filename}\nCategory: ${category}\nReplace with actual image`;
    
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath.replace('.jpg', '.txt'), placeholderText);
    }
  });
});

console.log('✅ Placeholder files created! Replace .txt files with actual .jpg images.');
EOF

# Create favicon generation guide
cat > public/favicons/README.md << 'EOF'
# Favicon Directory

## Required Favicon Sizes:
- favicon-16x16.png
- favicon-32x32.png
- favicon-48x48.png
- favicon-96x96.png
- favicon-192x192.png
- favicon-512x512.png

## Apple Touch Icons:
- apple-touch-icon-57x57.png
- apple-touch-icon-60x60.png
- apple-touch-icon-72x72.png
- apple-touch-icon-76x76.png
- apple-touch-icon-114x114.png
- apple-touch-icon-120x120.png
- apple-touch-icon-144x144.png
- apple-touch-icon-152x152.png
- apple-touch-icon-180x180.png

## Generation Instructions:
1. Start with high-resolution logo (1024x1024px minimum)
2. Use favicon generator tool (like realfavicongenerator.net)
3. Use brand red (#DC2626) as background color
4. Ensure icon is visible at small sizes

## Automated Generation:
Run the favicon generator script: npm run generate-favicons
EOF

echo "📋 Documentation files created in each image directory!"

# Create package.json script suggestions
echo ""
echo "🛠️  Suggested package.json scripts to add:"
echo ""
echo '"scripts": {'
echo '  "generate-favicons": "node scripts/generate-favicons.js",'
echo '  "optimize-images": "node scripts/optimize-images.js",'
echo '  "setup-images": "node scripts/generate-placeholder-images.js"'
echo '}'

echo ""
echo "📸 Next Steps:"
echo "1. Replace placeholder files with actual company images"
echo "2. Update team member information in /src/app/team/page.tsx"
echo "3. Customize brand colors based on actual logo colors"
echo "4. Generate favicons from high-resolution logo"
echo "5. Test image loading and responsiveness"

echo ""
echo "✨ Brand integration system is ready!"
echo "📖 See BRAND_INTEGRATION_GUIDE.md for complete documentation"
