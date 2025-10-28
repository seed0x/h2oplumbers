'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Clock, CheckCircle } from 'lucide-react'

export function AnimatedHeroSection() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Pattern */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: y1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-red-400 text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Family Owned & Licensed Plumbers
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="block">Your Family's</span>
          <motion.span
            className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Trusted Plumber
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Serving Vancouver, Clark County & Cowlitz County families for over 20 years. 
          <br />
          <span className="text-red-400 font-semibold">From your kitchen sink to new home construction - we're here for your family!</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="tel:512-331-7737"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            animate={pulseAnimation}
            className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call Now: 512-331-7737
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-lg transition-all shadow-lg text-lg"
          >
            <Clock className="w-5 h-5 mr-3" />
            Get Free Quote
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400"
        >
          <motion.div
            animate={floatingAnimation}
            className="flex flex-col items-center"
          >
            <div className="text-3xl font-bold text-white mb-2">20+</div>
            <div className="text-sm uppercase tracking-wide">Years Serving Families</div>
          </motion.div>

          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 }
            }}
            className="flex flex-col items-center"
          >
            <div className="text-3xl font-bold text-white mb-2">Family</div>
            <div className="text-sm uppercase tracking-wide">Owned & Operated</div>
          </motion.div>

          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 2 }
            }}
            className="flex flex-col items-center"
          >
            <div className="text-3xl font-bold text-white mb-2">1000s</div>
            <div className="text-sm uppercase tracking-wide">Happy Families Served</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}




