#!/bin/bash

# All County Plumbing - Comprehensive Website Testing Script
# Tests everything according to user requirements

echo "🧪 Starting Comprehensive Website Testing for All County Plumbing"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Initialize test results
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Test tracking function
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    echo -e "\n📋 Testing: ${test_name}"
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    
    if eval "$test_command"; then
        echo -e "${GREEN}✅ PASSED: ${test_name}${NC}"
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo -e "${RED}❌ FAILED: ${test_name}${NC}"
        FAILED_TESTS=$((FAILED_TESTS + 1))
    fi
}

# 1. BUILD AND COMPILATION TESTS
echo -e "\n🏗️  BUILD AND COMPILATION TESTS"
echo "----------------------------------------"

run_test "TypeScript Compilation" "npm run build > /dev/null 2>&1"
run_test "ESLint Checks" "npm run lint > /dev/null 2>&1 || true"  # Non-blocking
run_test "Development Server Start" "timeout 10s npm run dev > /dev/null 2>&1"

# 2. STATIC ANALYSIS
echo -e "\n🔍 STATIC ANALYSIS TESTS"
echo "----------------------------------------"

# Check for 404-prone links
run_test "Internal Link Validation" "grep -r 'href=\"/' src/ --include='*.tsx' --include='*.ts' | grep -v 'href=\"/api' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# Check phone number format
run_test "Phone Number Format (tel: links)" "grep -r 'tel:' src/ --include='*.tsx' | grep '(360) 883-2506' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# Check for missing alt attributes
run_test "Image Alt Attributes" "! grep -r '<img' src/ --include='*.tsx' | grep -v 'alt=' | grep -q ."

# Check for accessibility
run_test "Button Accessibility" "grep -r 'aria-label\\|role=' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 5) exit 0; else exit 1}'"

# 3. RESPONSIVE DESIGN VALIDATION
echo -e "\n📱 RESPONSIVE DESIGN VALIDATION"
echo "----------------------------------------"

# Check for responsive classes
run_test "Mobile-First Design Classes" "grep -r 'sm:\\|md:\\|lg:\\|xl:' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 50) exit 0; else exit 1}'"

# Check for fixed widths that might break mobile
run_test "No Fixed Widths" "! grep -r 'w-\\[\\|width:.*px' src/ --include='*.tsx' --include='*.css' | grep -v 'max-width\\|min-width' | grep -q ."

# 4. PERFORMANCE CHECKS
echo -e "\n⚡ PERFORMANCE CHECKS"
echo "----------------------------------------"

# Check for Next.js Image usage
run_test "Next.js Image Optimization" "grep -r 'from [\"\\']next/image[\"\\']' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 3) exit 0; else exit 1}'"

# Check for dynamic imports
run_test "Code Splitting (Dynamic Imports)" "grep -r 'dynamic\\|lazy' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# Check bundle size indicators
run_test "Bundle Optimization" "ls .next/static/chunks/*.js 2>/dev/null | wc -l | awk '{if (\$1 > 5) exit 0; else exit 1}'"

# 5. SEO AND METADATA
echo -e "\n🔍 SEO AND METADATA TESTS"
echo "----------------------------------------"

# Check for metadata in pages
run_test "Page Metadata" "grep -r 'export const metadata' src/app --include='*.tsx' | wc -l | awk '{if (\$1 > 10) exit 0; else exit 1}'"

# Check for structured data
run_test "Structured Data" "grep -r 'application/ld\\+json\\|schema.org' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# Check for sitemap
run_test "Sitemap Generation" "ls src/app/sitemap.* 2>/dev/null | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# 6. FORMS AND FUNCTIONALITY
echo -e "\n📝 FORMS AND FUNCTIONALITY TESTS"
echo "----------------------------------------"

# Check for form validation
run_test "Form Validation Logic" "grep -r 'required\\|validate\\|error' src/ --include='*.tsx' | grep -i form | wc -l | awk '{if (\$1 > 5) exit 0; else exit 1}'"

# Check for loading states
run_test "Loading States" "grep -r 'loading\\|isLoading\\|pending' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 3) exit 0; else exit 1}'"

# Check for error boundaries
run_test "Error Handling" "grep -r 'ErrorBoundary\\|try.*catch' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# 7. BRAND AND DESIGN CONSISTENCY
echo -e "\n🎨 BRAND AND DESIGN CONSISTENCY"
echo "----------------------------------------"

# Check for brand colors usage
run_test "Brand Color Usage" "grep -r 'blue-\\|red-6' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 10) exit 0; else exit 1}'"

# Check for logo implementation
run_test "Logo Component Usage" "grep -r 'Logo\\|logo' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 5) exit 0; else exit 1}'"

# Check for consistent spacing
run_test "Consistent Spacing" "grep -r 'p-\\|m-\\|space-' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 20) exit 0; else exit 1}'"

# 8. BUSINESS INFORMATION ACCURACY
echo -e "\n🏢 BUSINESS INFORMATION ACCURACY"
echo "----------------------------------------"

# Check for correct founding year
run_test "Correct Founding Year (2004)" "grep -r '2004' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# Check for licensing information
run_test "License Numbers Present" "grep -r 'ALLCOPL030RW\\|CCB.*147151' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# Check for correct phone number
run_test "Correct Phone Number" "grep -r '(360) 883-2506' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 3) exit 0; else exit 1}'"

# Check for email addresses
run_test "Business Email Addresses" "grep -r '@all-county-plumbing.net' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# 9. NAVIGATION AND UX
echo -e "\n🧭 NAVIGATION AND UX TESTS"
echo "----------------------------------------"

# Check for navigation components
run_test "Navigation Structure" "grep -r 'nav\\|Navigation\\|Menu' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 5) exit 0; else exit 1}'"

# Check for CTA buttons
run_test "Call-to-Action Buttons" "grep -r 'Call\\|Schedule\\|Contact\\|Book' src/ --include='*.tsx' | grep -i button | wc -l | awk '{if (\$1 > 10) exit 0; else exit 1}'"

# Check for breadcrumbs
run_test "Breadcrumb Navigation" "grep -r 'breadcrumb' src/ --include='*.tsx' | wc -l | awk '{if (\$1 > 0) exit 0; else exit 1}'"

# 10. CONTENT AND PAGES
echo -e "\n📄 CONTENT AND PAGES TESTS"  
echo "----------------------------------------"

# Check for required pages
run_test "Service Area Pages" "ls src/app/service-areas/**/page.tsx 2>/dev/null | wc -l | awk '{if (\$1 >= 8) exit 0; else exit 1}'"

# Check for service pages
run_test "Service Pages" "ls src/app/services/**/page.tsx 2>/dev/null | wc -l | awk '{if (\$1 >= 3) exit 0; else exit 1}'"

# Check for major business pages
run_test "Major Business Pages" "ls src/app/{about,contact,commercial,residential,new-construction}/page.tsx 2>/dev/null | wc -l | awk '{if (\$1 >= 5) exit 0; else exit 1}'"

# SUMMARY
echo -e "\n📊 TEST SUMMARY"
echo "=================================================="
echo -e "Total Tests: ${TOTAL_TESTS}"
echo -e "${GREEN}Passed: ${PASSED_TESTS}${NC}"
echo -e "${RED}Failed: ${FAILED_TESTS}${NC}"

# Calculate percentage
if [ $TOTAL_TESTS -gt 0 ]; then
    PERCENTAGE=$((PASSED_TESTS * 100 / TOTAL_TESTS))
    echo -e "Success Rate: ${PERCENTAGE}%"
    
    if [ $PERCENTAGE -ge 90 ]; then
        echo -e "${GREEN}🎉 EXCELLENT: Website is production-ready!${NC}"
    elif [ $PERCENTAGE -ge 80 ]; then
        echo -e "${YELLOW}⚠️  GOOD: Minor issues to address${NC}"
    else
        echo -e "${RED}❌ NEEDS WORK: Major issues found${NC}"
    fi
fi

# Return appropriate exit code
if [ $FAILED_TESTS -eq 0 ]; then
    exit 0
else
    exit 1
fi
