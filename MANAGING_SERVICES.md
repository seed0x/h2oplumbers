# Managing Services - Quick Guide

## 📝 How to Edit Services

You have **two ways** to manage your services:

### Option 1: Edit Config File (Recommended for bulk changes)
**File:** `src/config/services.ts`

This is the easiest way to manage your services. Just edit the file and sync to database.

#### Steps:
1. Open `src/config/services.ts`
2. Edit the services array:
   ```typescript
   {
     name: 'Your Service Name',
     slug: 'your-service-name',  // URL-friendly
     description: 'Description of the service',
     category: 'Repair',  // Or Emergency, Installation, etc.
     basePrice: 150,  // Starting price
     hourlyRate: 125,  // Optional hourly rate
     isEmergency: false,
     isActive: true,  // Set to false to hide service
     estimatedDuration: 120,  // Minutes
     features: [
       'Feature 1',
       'Feature 2'
     ]
   }
   ```
3. Save the file
4. Run: `npm run sync-services`
5. Services are now in the database!

### Option 2: Prisma Studio (Recommended for quick edits)
**URL:** http://localhost:5555

Visual database editor - great for quick price changes or single edits.

#### Steps:
1. Run: `npm run db:studio`
2. Opens at: http://localhost:5555
3. Click on **Service** table
4. Click **Add record** or edit existing
5. Fill in fields and save
6. Changes are instant!

---

## 🎯 Common Tasks

### Add a New Service
**Via Config File:**
```typescript
// Add to src/config/services.ts
{
  name: 'Tankless Water Heater Installation',
  slug: 'tankless-water-heater-installation',
  description: 'Professional installation of energy-efficient tankless water heaters',
  category: 'Installation',
  basePrice: 1200,
  hourlyRate: 150,
  isEmergency: false,
  isActive: true,
  estimatedDuration: 240,
  features: [
    'Energy efficient',
    'Unlimited hot water',
    'Space saving',
    'Professional installation'
  ]
}
```
Then run: `npm run sync-services`

**Via Prisma Studio:**
1. Open http://localhost:5555
2. Click **Service** table
3. Click **Add record**
4. Fill in all fields
5. Click **Save 1 change**

### Change a Price
**Quick Method (Prisma Studio):**
1. Open http://localhost:5555
2. Find the service
3. Click on basePrice field
4. Type new price
5. Save

**Config Method:**
1. Edit price in `src/config/services.ts`
2. Run `npm run sync-services`

### Temporarily Disable a Service
**Prisma Studio:**
1. Find the service
2. Set `isActive` to `false`
3. Save

**Config File:**
1. Change `isActive: false` in services.ts
2. Run `npm run sync-services`

### Delete a Service
**⚠️ Warning:** Deleting a service that has bookings will cause errors!

**Recommended:** Set `isActive: false` instead

**If you must delete (Prisma Studio):**
1. Check that no appointments use this service
2. Click the delete icon (trash can)
3. Confirm deletion

---

## 📊 Service Categories

Available categories (defined in `src/config/services.ts`):
- `Emergency` - 24/7 urgent services
- `Water Heater` - Water heater related
- `Drain & Sewer` - Drain and sewer services  
- `Repair` - General repairs
- `Installation` - New installations
- `Gas Line` - Gas line services
- `Repiping` - Pipe replacement
- `Inspection` - Inspections and diagnostics
- `Maintenance` - Preventive maintenance

---

## 🔄 Workflow

### Making Changes

```
Edit services.ts
     ↓
npm run sync-services
     ↓
Database updated
     ↓
Changes live on website
```

### Quick Price Update

```
Open Prisma Studio
     ↓
Edit price
     ↓
Save
     ↓
Changes instant
```

---

## 🛠️ Useful Commands

```powershell
# Sync services from config to database
npm run sync-services

# Open Prisma Studio (database GUI)
npm run db:studio

# Push schema changes to database
npm run db:push

# View database
npx prisma studio
```

---

## 📍 Service Areas

Service areas are also managed the same way!

**Config:** Define in `scripts/sync-services.js` (serviceAreas array)
**GUI:** Edit in Prisma Studio → ServiceArea table

### Add a New ZIP Code:
```javascript
// In scripts/sync-services.js
{ 
  zipCode: '98685', 
  city: 'Vancouver', 
  county: 'Clark', 
  state: 'WA', 
  isActive: true, 
  travelTime: 25 
}
```
Then run: `npm run sync-services`

---

## ✅ Best Practices

1. **Use Config File for Initial Setup**
   - Define all your services once
   - Run sync-services
   - Everything is in the database

2. **Use Prisma Studio for Daily Updates**
   - Quick price changes
   - Enable/disable services
   - Edit descriptions

3. **Never Delete Services with Bookings**
   - Set `isActive: false` instead
   - This preserves appointment history

4. **Test After Changes**
   - Visit booking page
   - Verify service appears/works
   - Test booking submission

5. **Backup Before Major Changes**
   - Export data from Prisma Studio
   - Or commit changes to git first

---

## 🚀 Deployment

### When deploying to Vercel:

1. **Push code changes (if you edited services.ts)**
   ```powershell
   git add .
   git commit -m "Updated services"
   git push
   ```

2. **Sync services on production**
   - Option A: Run sync script locally (connects to prod DB)
   - Option B: Add services via Prisma Studio in production
   - Option C: Create a deploy script that runs sync

3. **Verify**
   - Check production site
   - Test booking form
   - Ensure all services appear

---

## 📋 Current Services

Run this to see all active services:
```javascript
// In browser console on your site
fetch('/api/services').then(r => r.json()).then(console.log)
```

Or view in Prisma Studio:
```powershell
npm run db:studio
# Then click Service table
```

---

## 🆘 Troubleshooting

### "Service not found" error on booking
- Service might be inactive (`isActive: false`)
- Service might not exist in database
- Run `npm run sync-services` to sync

### Services not showing on website
- Check `isActive: true` in database
- Clear Next.js cache: delete `.next` folder
- Restart dev server

### Sync fails
- Check database connection (DATABASE_URL)
- Ensure dev server isn't using the database
- Check for typos in services.ts

---

## 💡 Pro Tips

1. **Keep Config and DB in Sync**
   - After editing Prisma Studio, update services.ts
   - This keeps your code as source of truth

2. **Use Meaningful Slugs**
   - Good: `water-heater-repair`
   - Bad: `service1`

3. **Pricing Strategy**
   - `basePrice`: Minimum/starting price
   - `hourlyRate`: For time-based billing
   - Show both on your site for transparency

4. **Features Array**
   - Use bullet points
   - 3-5 key selling points
   - Helps with SEO and conversions

---

Need help? Check:
- `SETUP_SUCCESS.md` - Full setup guide
- `DATABASE_SETUP.md` - Database details
- Prisma Docs: https://www.prisma.io/docs
