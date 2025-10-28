'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({ 
  value, 
  duration = 2, 
  prefix = '', 
  suffix = '',
  className = '' 
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const spring = useSpring(0, { 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.001
  })
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

interface StatsCounterProps {
  stats: Array<{
    label: string
    value: number
    prefix?: string
    suffix?: string
    icon?: React.ComponentType<{ className?: string }>
  }>
}

export function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
    >
      {stats.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center"
          >
            {IconComponent && (
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-8 h-8 text-primary-500" />
              </div>
            )}
            <div className="text-4xl font-bold text-gray-900 mb-2">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                duration={2}
              />
            </div>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

// Specialized component for testimonial ratings
export function RatingCounter({ rating, maxRating = 5 }: { rating: number; maxRating?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const [displayRating, setDisplayRating] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setDisplayRating(prev => {
          const next = prev + 0.1
          return next >= rating ? rating : next
        })
      }, 50)

      return () => clearInterval(timer)
    }
  }, [isInView, rating])

  return (
    <span ref={ref} className="font-bold text-2xl text-yellow-600">
      {displayRating.toFixed(1)}/{maxRating}
    </span>
  )
}




