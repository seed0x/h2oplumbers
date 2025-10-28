'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

export function FloatingBookButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-28 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Link href="/booking">
        <motion.button
          className="bg-brand-red text-white px-6 py-4 rounded-full shadow-2xl hover:bg-brand-red-dark transition-colors flex items-center space-x-3 font-bold text-base border-2 border-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 4px 20px 0 rgba(220, 38, 38, 0.5)',
              '0 4px 30px 0 rgba(220, 38, 38, 0.7)',
              '0 4px 20px 0 rgba(220, 38, 38, 0.5)'
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))'
          }}
        >
          <Calendar className="w-6 h-6" />
          <span className="hidden sm:inline uppercase tracking-wider">Book Now</span>
        </motion.button>
      </Link>
    </motion.div>
  )
}
