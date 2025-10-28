# ✅ Database & Forms - COMPLETE SETUP

## What We Accomplished

### ✅ Database Connected
- **Prisma Postgres** database is connected and working
- Connection URL configured in `.env` and `.env.local`
- All tables created via `npx prisma db push`

### ✅ Forms Saving to Database
1. **Contact Forms** (`/api/contact`) - ✅ WORKING
   - General contact form
   - Service request form
   - Emergency form
   - Construction project form
   - All save to: `customers`, `leads`, `emergency_queue` tables

2. **Booking Form** (`/api/booking`) - ✅ WORKING
   - Saves appointments to database
   - Creates/updates customers
   - Links to services
   - Saves to: `customers`, `appointments` tables

### ✅ Services Configured
- **9 services** added to database
- **16 service areas** (ZIP codes) configured
- Manage via:
  - **Config file**: `src/config/services.ts`
  - **Sync command**: `npm run sync-services`
  - **GUI**: `npm run db:studio` (http://localhost:5555)

### ✅ Files Cleaned Up
- Deleted old file-based booking system (`/api/bookings`)
- Removed file-based admin API
- All forms now use single database system
- No more `data/bookings.json` files

## How to Use

### View Database
```powershell
npm run db:studio
```
Opens Prisma Studio at http://localhost:5555 to view/edit all data

### Manage Services
**Option 1: Edit config file**
1. Edit `src/config/services.ts`
2. Run `npm run sync-services`

**Option 2: Use Prisma Studio**
1. Run `npm run db:studio`
2. Click **Service** table
3. Add/edit services visually

### Start Development
```powershell
npm run dev
```
Server runs at http://localhost:3000

### Test Forms
```powershell
# Test database connection
node test-database.js

# Test contact form (when server is running)
node test-contact-form.js
```

## Key Endpoints

| Endpoint | Purpose | Method | Database Tables |
|----------|---------|--------|-----------------|
| `/api/contact` | Contact forms | POST | customers, leads, emergency_queue |
| `/api/booking` | Appointment bookings | POST | customers, appointments, services |
| `/api/services` | List services | GET | services |
| `/api/service-areas` | Check ZIP codes | GET | service_areas |

## Database Tables

### customers
- firstName, lastName, email, phone
- address, city, state, zipCode
- source (how they found you)
- Created from both contact & booking forms

### leads
- Contact form submissions
- Links to customer
- description, urgency, status
- metadata (JSON with form details)

### appointments
- Booking/appointments
- Links to customer & service
- scheduledAt, duration, status
- estimatedCost, actualCost

### services
- Available plumbing services
- name, description, category
- basePrice, hourlyRate
- isEmergency, isActive

### service_areas
- Supported ZIP codes
- city, county, state
- travelTime, surcharge
- isActive

### emergency_queue
- Emergency service requests
- severity, status
- estimatedArrival, completedAt

## Common Commands

```powershell
# Development
npm run dev                  # Start dev server
npm run build                # Build for production
npm run start                # Start production server

# Database
npm run db:studio            # Open Prisma Studio GUI
npm run db:push              # Push schema changes
npx prisma generate          # Regenerate Prisma Client

# Services
npm run sync-services        # Sync services from config to DB

# Testing
node test-database.js        # Test database connection
node test-contact-form.js    # Test contact forms
```

## Environment Variables

Required in `.env` and `.env.local`:

```env
# Database
DATABASE_URL="postgres://..."

# Email (optional - for notifications)
RESEND_API_KEY="re_..."
CONTACT_NOTIFICATION_EMAIL="scheduling@all-county-plumbing.net"

# Auth (optional - for admin features)
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Troubleshooting

### Server won't start
```powershell
Remove-Item -Path ".next" -Recurse -Force
npm run dev
```

### Forms not saving
1. Check DATABASE_URL is set
2. Run `npx prisma generate`
3. Restart dev server

### Services not showing
1. Run `npm run sync-services`
2. Check Prisma Studio: `npm run db:studio`
3. Verify services have `isActive: true`

### View all data
```powershell
npm run db:studio
```
Opens http://localhost:5555 - you can see everything!

## Next Steps

1. ✅ **Test the forms** in browser
   - Contact: http://localhost:3000/contact
   - Booking: http://localhost:3000/booking

2. ✅ **Configure email notifications**
   - Sign up at https://resend.com
   - Add `RESEND_API_KEY` to `.env.local`

3. ✅ **Deploy to Vercel**
   - `vercel --prod`
   - Add environment variables in Vercel dashboard

4. ✅ **Monitor submissions**
   - Use Prisma Studio to view leads
   - Export data as needed

## Documentation
- `MANAGING_SERVICES.md` - Complete services guide
- `DATABASE_SETUP.md` - Database configuration
- `SETUP_SUCCESS.md` - Full setup walkthrough

---

## 🎉 Everything is Working!

Your booking and contact forms are now fully connected to your Prisma Postgres database. All submissions are being saved and you can manage everything through Prisma Studio!
