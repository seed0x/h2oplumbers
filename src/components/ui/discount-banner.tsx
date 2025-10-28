'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Clock } from 'lucide-react'
import Cookies from 'js-cookie'

export function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = Cookies.get('hasVisited')
    const dismissedOffer = Cookies.get('dismissedOffer')
    
    if (!hasVisited && !dismissedOffer) {
      // Show banner after 30 seconds for first-time visitors
      const timer = setTimeout(() => {
        setIsVisible(true)
        // Start countdown
        const interval = setInterval(() => {
          setTimeLeft(prev => {
            if (prev <= 1) {
              clearInterval(interval)
              setIsVisible(false)
              return 0
            }
            return prev - 1
          })
        }, 1000)
        
        return () => clearInterval(interval)
      }, 30000)

      // Set cookie to mark as visited
      Cookies.set('hasVisited', 'true', { expires: 365 }) // 1 year
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    Cookies.set('dismissedOffer', 'true', { expires: 30 }) // 30 days
  }

  const handleClaim = () => {
    setIsVisible(false)
    Cookies.set('claimedOffer', 'true', { expires: 30 }) // 30 days
    // Redirect to contact form with discount code
    window.location.href = '/contact?discount=FIRST10'
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Gift className="w-8 h-8 text-yellow-300" />
                </motion.div>
                
                <div>
                  <h3 className="font-bold text-lg">Welcome! Get 10% Off Your First Service</h3>
                  <p className="text-red-100 text-sm">
                    First-time customers save on any plumbing service. Limited time offer!
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                </div>
                
                <button
                  onClick={handleClaim}
                  className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Claim Discount
                </button>
                
                <button
                  onClick={handleDismiss}
                  className="text-red-200 hover:text-white p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}



