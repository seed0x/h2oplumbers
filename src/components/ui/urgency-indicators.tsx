'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, AlertCircle } from 'lucide-react'

export function UrgencyIndicators() {
  const [appointmentsLeft, setAppointmentsLeft] = useState(4)
  const [viewingCount, setViewingCount] = useState(3)

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Random chance to decrease appointments
      if (Math.random() > 0.8 && appointmentsLeft > 0) {
        setAppointmentsLeft(prev => Math.max(0, prev - 1))
      }
      
      // Fluctuate viewing count
      setViewingCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1 // -1 to +1
        return Math.max(2, Math.min(5, prev + change))
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [appointmentsLeft])

  return (
    <div className="fixed bottom-6 left-6 z-40 space-y-2">
      {/* Appointments Left */}
      {appointmentsLeft <= 5 && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg shadow-md max-w-[240px]"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <AlertCircle className="w-4 h-4" />
            </motion.div>
            <div>
              <p className="font-bold text-xs">Only {appointmentsLeft} spots left today!</p>
              <p className="text-[10px] opacity-90">Book now</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* People Viewing */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white border border-gray-200 px-3 py-2 rounded-lg shadow-md max-w-[240px]"
      >
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="w-4 h-4 text-green-600" />
          </motion.div>
          <div>
            <p className="font-medium text-xs text-gray-900">
              <motion.span
                key={viewingCount}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {viewingCount}
              </motion.span>
              {" "}viewing
            </p>
            <p className="text-[10px] text-gray-500">Right now</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
