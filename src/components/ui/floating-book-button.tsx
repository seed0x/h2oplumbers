'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

export function FloatingBookButton() {
  return (
    <motion.div
      className="fixed bottom-24 right-6 z-30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Link href="/booking">
        <motion.button
          className="bg-gradient-to-r from-brand-cyan to-brand-turquoise text-white px-5 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 font-bold text-sm"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              '0 8px 24px rgba(6, 182, 212, 0.4)',
              '0 12px 32px rgba(6, 182, 212, 0.6)',
              '0 8px 24px rgba(6, 182, 212, 0.4)'
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">Book Now</span>
        </motion.button>
      </Link>
    </motion.div>
  )
}


