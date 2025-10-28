'use client'

import React from 'react'
import { ShieldCheck, Star, Award, BadgeCheck, CreditCard, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

// A compact horizontal trust bar placed directly under the hero
// Strict professional styling: subdued gray background, red accents, no gimmicks.
export function TrustBar() {
  const items: { icon: React.ElementType; title: string; subtitle?: string }[] = [
    { icon: Award, title: 'Celebrating 20 Years', subtitle: 'Established 2004' },
    { icon: Star, title: '4.9★ Google Rating', subtitle: '200+ Local Reviews' },
    { icon: ShieldCheck, title: 'BBB A+ Accredited', subtitle: 'Trusted & Verified' },
    { icon: CheckCircle2, title: 'Satisfaction Guaranteed', subtitle: 'Quality Backed Work' },
    { icon: CreditCard, title: 'All Major Cards', subtitle: 'Visa · MC · AmEx · Discover' },
    { icon: BadgeCheck, title: 'Licensed & Insured', subtitle: 'WA & OR Certified' }
  ]

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center space-x-2 bg-gray-50 rounded-md px-3 py-2 hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary-500" />
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-gray-900">{item.title}</p>
                  {item.subtitle && <p className="text-[10px] text-gray-600">{item.subtitle}</p>}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


