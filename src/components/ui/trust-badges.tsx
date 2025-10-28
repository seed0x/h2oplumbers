'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Star, Award, Users } from 'lucide-react'

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      subtitle: "WA State Licensed"
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      subtitle: "Established 2004"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      subtitle: "200+ Reviews"
    },
    {
      icon: Users,
      title: "Family Owned",
      subtitle: "Local Business"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => {
            const IconComponent = badge.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{badge.title}</h4>
                  <p className="text-gray-600 text-xs">{badge.subtitle}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


