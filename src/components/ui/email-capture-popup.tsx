'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Gift, Check } from 'lucide-react'
import Cookies from 'js-cookie'

export function EmailCapturePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // Check if user has already signed up or dismissed
    const hasSignedUp = Cookies.get('emailSignup')
    const hasDismissed = Cookies.get('dismissedEmailPopup')
    
    if (!hasSignedUp && !hasDismissed) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setIsVisible(true);
          document.removeEventListener('mouseleave', handleMouseLeave);
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would normally send the email to your backend
  // email submitted (removed console)
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Set cookie to remember signup
    Cookies.set('emailSignup', 'true', { expires: 365 }) // 1 year

    // Hide popup after showing success for 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  const handleDismiss = () => {
    setIsVisible(false)
    Cookies.set('dismissedEmailPopup', 'true', { expires: 7 }) // 7 days
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSuccess ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Gift className="w-8 h-8 text-primary-500" />
                </motion.div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Get 10% Off Your First Service!
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Join our newsletter and receive exclusive discounts, plumbing tips, 
                  and priority booking for emergency services.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-500 text-white py-3 rounded-lg font-bold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <span>Get My 10% Discount</span>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome to the Family!
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Check your email for your 10% discount code and exclusive plumbing tips. 
                  We'll be in touch soon!
                </p>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <p className="text-red-800 font-semibold">
                    Discount Code: <span className="font-mono">FIRST10</span>
                  </p>
                  <p className="text-primary-500 text-sm mt-1">
                    Use this code when booking your first service
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}




