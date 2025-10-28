#!/bin/bash
# Database Setup Script for Production

echo "🗄️  Setting up Production Database Schema..."
echo "============================================="

echo "📋 This script will:"
echo "1. Generate Prisma client"
echo "2. Push database schema to production"
echo "3. Verify database connection"
echo ""

read -p "🔗 Enter your DATABASE_URL from Vercel: " DATABASE_URL

if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL is required"
    exit 1
fi

echo "🔧 Generating Prisma client..."
npx prisma generate

echo "🚀 Pushing schema to production database..."
DATABASE_URL="$DATABASE_URL" npx prisma db push

echo "✅ Database setup complete!"
echo ""
echo "🎯 Your database is now ready for:"
echo "   • Booking submissions"
echo "   • Quote requests"  
echo "   • Contact forms"
echo "   • Newsletter subscriptions"
echo "   • Error logging"
echo "   • Analytics tracking"
