# Database Setup Guide for All County Plumbers

## Overview
Your booking and contact forms are configured to save submissions to a PostgreSQL database using Prisma ORM. This guide will help you get everything connected and working.

## Current Status
✅ **Prisma Schema**: Defined in `prisma/schema.prisma`
✅ **Prisma Client**: Generated and available
✅ **API Endpoints**: 
   - `/api/booking` - Handles appointment bookings
   - `/api/contact` - Handles contact form submissions
❌ **Database Connection**: Needs to be established

## Database Schema

Your application has the following main tables:

### 1. **Customer** (`customers` table)
Stores customer information (created from form submissions)
- Basic info: firstName, lastName, email, phone
- Address: address, city, state, zipCode
- Tracking: source, createdAt, updatedAt

### 2. **Appointment** (`appointments` table)
Stores booking/appointment data
- Links to: Customer, Service
- Details: scheduledAt, duration, status, priority
- Location: address, city, state, zipCode
- Cost: estimatedCost, actualCost
- Status tracking: SCHEDULED, CONFIRMED, IN_PROGRESS, COMPLETED, CANCELLED

### 3. **Lead** (`leads` table)
Stores contact form submissions and leads
- Links to: Customer (optional), Service (optional)
- Contact: name, email, phone
- Details: description, urgency, preferredDate, preferredTime
- Status: NEW, CONTACTED, QUALIFIED, QUOTED, CONVERTED, LOST
- Metadata: JSON field for form-specific data

### 4. **EmergencyQueue** (`emergency_queue` table)
Stores emergency service requests
- Priority handling with severity levels
- Status tracking: PENDING, ASSIGNED, EN_ROUTE, ON_SITE, COMPLETED

### 5. **Service** (`services` table)
Stores available plumbing services
- Service details: name, description, category
- Pricing: basePrice, hourlyRate
- Configuration: isEmergency, isActive, estimatedDuration

### 6. **ServiceArea** (`service_areas` table)
Stores service area ZIP codes
- Coverage: zipCode, city, county
- Pricing: travelTime, surcharge, emergencyFee

### Other Tables:
- **Review**: Customer reviews (Google, Yelp, Facebook integration)
- **Newsletter**: Email newsletter subscriptions
- **User/Account/Session**: NextAuth.js authentication

## Setup Options

You have several options for setting up your database:

### Option 1: Local PostgreSQL (Development)
**Best for:** Local development and testing

1. Install PostgreSQL locally:
   - Download from: https://www.postgresql.org/download/windows/
   - Or use Docker: `docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres`

2. Update `.env.local`:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/allcountyplumbers?schema=public"
   ```

3. Create the database:
   ```powershell
   npx prisma db push
   ```

### Option 2: Vercel Postgres (Recommended for Production)
**Best for:** Production deployment on Vercel

1. Go to your Vercel project dashboard
2. Navigate to Storage → Create Database → Postgres
3. Copy the `DATABASE_URL` provided by Vercel
4. Add to Vercel environment variables
5. For local development, pull the URL:
   ```powershell
   vercel env pull .env.local
   ```

### Option 3: Supabase (Free PostgreSQL hosting)
**Best for:** Free hosted database with easy setup

1. Sign up at https://supabase.com
2. Create a new project
3. Go to Project Settings → Database
4. Copy the connection string (choose "Pooler" for best performance)
5. Update `.env.local`:
   ```env
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   ```

### Option 4: Railway (Easy PostgreSQL hosting)
**Best for:** Simple hosted database with generous free tier

1. Sign up at https://railway.app
2. Create a new project → Add PostgreSQL
3. Copy the `DATABASE_URL` from the Variables tab
4. Update `.env.local`

## Step-by-Step Setup

### 1. Choose and Set Up Your Database
Select one of the options above and get your `DATABASE_URL`.

### 2. Update Environment Variables
Create/update `.env.local` with your database URL:
```env
DATABASE_URL="your-connection-string-here"
```

### 3. Push Schema to Database
This creates all tables in your database:
```powershell
npx prisma db push
```

### 4. (Optional) Seed Initial Data
You can create initial services and service areas:
```powershell
npx prisma db seed
```

### 5. Verify Connection
Test the connection:
```powershell
npx prisma studio
```
This opens a GUI to view/edit your database at http://localhost:5555

### 6. Start Development Server
```powershell
npm run dev
```

## Testing the Forms

### Test Booking Form
1. Navigate to http://localhost:3000/booking
2. Fill out the form with test data
3. Submit and check for success message
4. Verify in Prisma Studio that:
   - A `Customer` record was created
   - An `Appointment` record was created

### Test Contact Form
1. Navigate to http://localhost:3000/contact
2. Fill out the form
3. Submit and verify:
   - A `Customer` record was created
   - A `Lead` record was created
   - For emergency forms, an `EmergencyQueue` record was created

## How the Forms Work

### Booking Form Flow (`/api/booking`)
```
1. User submits booking form
   ↓
2. Validate form data (Zod schema)
   ↓
3. Check if service exists and is active
   ↓
4. Check if ZIP code is in service area
   ↓
5. Create/update Customer record
   ↓
6. Create Appointment record
   ↓
7. Send confirmation email
   ↓
8. Send SMS notification to business
   ↓
9. Return success response
```

### Contact Form Flow (`/api/contact`)
```
1. User submits contact form
   ↓
2. Validate based on form type (service/emergency/construction/general)
   ↓
3. Create/update Customer record
   ↓
4. Create Lead record with form-specific data
   ↓
5. For emergency: Also create EmergencyQueue record
   ↓
6. Send notification email to business
   ↓
7. Return success message
```

## Database Schema Details

### Key Relationships
- **Customer** → has many **Appointments**
- **Customer** → has many **Leads**
- **Service** → has many **Appointments**
- **Appointment** → belongs to one **Customer** and one **Service**
- **Lead** → optionally belongs to **Customer** and **Service**

### Status Enums
- **AppointmentStatus**: SCHEDULED, CONFIRMED, IN_PROGRESS, COMPLETED, CANCELLED, NO_SHOW, RESCHEDULED
- **LeadStatus**: NEW, CONTACTED, QUALIFIED, QUOTED, CONVERTED, LOST, FOLLOW_UP
- **Priority**: LOW, NORMAL, HIGH, URGENT
- **EmergencySeverity**: LOW, MODERATE, HIGH, CRITICAL

## Troubleshooting

### "Can't reach database server"
- Ensure your database is running
- Check that the port in `DATABASE_URL` matches your database port
- Verify firewall/network settings

### "Invalid Prisma Client"
Run:
```powershell
npx prisma generate
```

### "Table does not exist"
Push the schema:
```powershell
npx prisma db push
```

### Forms Submit but No Data Saved
1. Check console for errors
2. Verify `DATABASE_URL` is set correctly
3. Check that Prisma Client is generated
4. Ensure database tables exist

### View Error Details
Check the terminal/console where your Next.js dev server is running for detailed error logs.

## Useful Prisma Commands

```powershell
# Generate Prisma Client
npx prisma generate

# Push schema changes to database (development)
npx prisma db push

# Create a migration (production)
npx prisma migrate dev --name your_migration_name

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (WARNING: Deletes all data)
npx prisma migrate reset

# View database schema
npx prisma db pull
```

## Next Steps

Once your database is connected:

1. **Seed Services**: Add your plumbing services to the `Service` table
2. **Configure Service Areas**: Add supported ZIP codes to `ServiceArea` table
3. **Set Up Email**: Configure email sending for notifications (see email setup in `.env`)
4. **Test Thoroughly**: Submit test bookings and contact forms
5. **Set Up Admin Panel**: Access and manage appointments/leads

## Environment Variables Needed

```env
# Database
DATABASE_URL="your-postgres-connection-string"

# Email (for notifications)
RESEND_API_KEY="re_..."
CONTACT_NOTIFICATION_EMAIL="scheduling@all-county-plumbing.net"

# SMS (optional - for Twilio notifications)
TWILIO_ACCOUNT_SID="AC..."
TWILIO_AUTH_TOKEN="..."
BUSINESS_PHONE="+13608832506"

# NextAuth (for admin authentication)
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Support

If you encounter issues:
1. Check the error message in the terminal
2. Review this guide for common solutions
3. Check Prisma logs: Set `log: ['query', 'info', 'warn', 'error']` in `src/lib/prisma.ts`
4. Verify all environment variables are set correctly
