'use client'

import React from 'react'
import { Star, Users, Wrench, Award } from 'lucide-react'
import { StatsCounter } from '../ui/animated-counter'

export function HomePageStats() {
  const stats = [
    {
      label: "Founded",
      value: 2020,
      suffix: "",
      icon: Award
    },
    {
      label: "Happy Customers", 
      value: 500,
      suffix: "+",
      icon: Users
    },
    {
      label: "Projects Completed",
      value: 1200,
      suffix: "+",
      icon: Wrench
    },
    {
      label: "Average Rating",
      value: 4.9,
      prefix: "",
      suffix: "/5",
      icon: Star
    }
  ]

  return (
    <section className="py-16 bg-white" id="stats">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Clark County</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over two decades of reliable plumbing services with thousands of satisfied customers
          </p>
        </div>
        <StatsCounter stats={stats} />
      </div>
    </section>
  )
}


