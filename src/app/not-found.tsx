'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Home, Search, Phone, ArrowLeft } from 'lucide-react'
import { MasterButton } from '@/components/ui/master-button'

export const metadata: Metadata = {
  title: '404 - Page Not Found | H2O Plumbing',
  description: 'The page you\'re looking for doesn\'t exist. Find plumbing services, contact information, and more on our homepage.',
  robots: 'noindex, nofollow'
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main id="main-content" role="main" className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold text-gray-200 mb-4">404</div>
              <div className="text-6xl mb-4">🔧</div>
            </div>
            
            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! This Pipe is Broken
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              We can't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Link 
                href="/"
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow group"
              >
                <Home className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900">Homepage</h3>
                <p className="text-sm text-gray-600">Return to our main page</p>
              </Link>
              
              <Link 
                href="/services"
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow group"
              >
                <Search className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900">Services</h3>
                <p className="text-sm text-gray-600">Browse our plumbing services</p>
              </Link>
              
              <Link 
                href="/contact"
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow group"
              >
                <Phone className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900">Contact</h3>
                <p className="text-sm text-gray-600">Get in touch with us</p>
              </Link>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="w-8 h-8 text-primary mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-2">Call us directly</p>
                <a 
                  href="tel:+13608832506" 
                  className="text-primary font-medium hover:text-primary-dark"
                  aria-label="Call H2O Plumbing"
                >
                  (360) 883-2506
                </a>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <MasterButton asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </MasterButton>
              
              <MasterButton asChild variant="outline" size="lg">
                <MasterButton onClick={() => window.history.back()}>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </MasterButton>
              </MasterButton>
            </div>
            
            {/* Popular Pages */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Pages</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/services/emergency-plumbing" className="text-primary hover:text-primary-dark">
                  Emergency Plumbing
                </Link>
                <Link href="/services/drain-cleaning" className="text-primary hover:text-primary-dark">
                  Drain Cleaning
                </Link>
                <Link href="/services/water-heater-repair" className="text-primary hover:text-primary-dark">
                  Water Heater Repair
                </Link>
                <Link href="/service-areas/vancouver-wa-plumber" className="text-primary hover:text-primary-dark">
                  Vancouver Plumber
                </Link>
                <Link href="/service-areas/battle-ground-plumber" className="text-primary hover:text-primary-dark">
                  Battle Ground
                </Link>
                <Link href="/residential" className="text-primary hover:text-primary-dark">
                  Residential Services
                </Link>
                <Link href="/commercial" className="text-primary hover:text-primary-dark">
                  Commercial Services
                </Link>
                <Link href="/booking" className="text-primary hover:text-primary-dark">
                  Schedule Service
                </Link>
              </div>
            </div>
            
            {/* SEO Help Text */}
            <p className="text-sm text-gray-500 mt-8">
              If you believe this is an error, please contact our support team or try searching for what you need on our homepage.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}



