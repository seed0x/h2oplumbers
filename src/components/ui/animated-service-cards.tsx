'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Droplets } from 'lucide-react'
import Link from 'next/link'

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface AnimatedServiceCardsProps {
  services: Service[]
}

export function AnimatedServiceCards({ services }: AnimatedServiceCardsProps) {
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

  const cardVariants = {
    hidden: { 
      y: 60, 
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
        damping: 15,
        duration: 0.6
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service) => {
        const IconComponent = service.icon
        return (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            className="group"
          >
            <Link href={service.href} className="block">
              <motion.div
                variants={hoverVariants}
                className="service-card bg-white rounded-xl p-8 border border-gray-200 h-full transition-all duration-300"
              >
                <div className="service-icon w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-12 h-12 text-primary-500" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
        <ul className="text-gray-700 mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
          <span className="text-primary-500 mr-2 mt-1">-</span>
          <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="text-primary-500 font-bold flex items-center">
                  <span>Learn More →</span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

// Pre-built service data for the homepage
export function HomeServiceCards() {
  const services = [
    {
      id: 'service-repair',
      title: 'Service & Repair Calls',
      description: 'Now accepting residential service calls! From minor repairs to major fixes, we bring our construction-grade expertise to your home plumbing needs.',
      features: [
        'Leak repairs & pipe fixes',
        'Fixture installation',
        'Toilet & faucet repair',
        'General plumbing service'
      ],
      href: '/residential',
      icon: Wrench
    },
    {
      id: 'drain-cleaning',
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning services using advanced equipment to clear blockages and restore proper flow. From kitchen sinks to main sewer lines.',
      features: [
        'Kitchen & bathroom drains',
        'Main sewer line cleaning',
        'Hydro jetting services',
        'Root removal & prevention'
      ],
      href: '/services/drain-cleaning',
      icon: Droplets
    },
    {
      id: 'water-heater',
      title: 'Water Heater Services',
      description: 'Complete water heater services including repair, replacement, and maintenance. We work with all major brands and both tank and tankless systems.',
      features: [
        'Water heater repair',
        'Tank & tankless installation', 
        'Energy efficiency upgrades',
        'Maintenance programs'
      ],
      href: '/services/water-heater-repair',
      icon: Wrench
    }
  ]

  return <AnimatedServiceCards services={services} />
}

