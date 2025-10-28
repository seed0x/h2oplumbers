'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, X } from 'lucide-react'
import Link from 'next/link'

interface ViewedService {
  id: string
  name: string
  url: string
  timestamp: number
}

declare global {
  interface Window {
    addRecentlyViewed?: (service: Omit<ViewedService, 'timestamp'>) => void
  }
}

export function RecentlyViewedServices() {
  const [viewedServices, setViewedServices] = useState<ViewedService[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewedServices')
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ViewedService[]
        setViewedServices(parsed.filter(item => Date.now() - item.timestamp < 7 * 24 * 60 * 60 * 1000))
      } catch { /* ignore parse errors */ }
    }
  }, [])

  // Show panel after delay only once when there is content
  useEffect(() => {
    if (viewedServices.length === 0) return
    const timer = setTimeout(() => setIsVisible(true), 10000)
    return () => clearTimeout(timer)
  }, [viewedServices.length])

  // Function to add a service (to be called from other components)
  const addViewedService = useCallback((service: Omit<ViewedService, 'timestamp'>) => {
    const newService = { ...service, timestamp: Date.now() }
    const updated = [newService, ...viewedServices.filter(s => s.id !== service.id)].slice(0, 5)
    setViewedServices(updated)
    localStorage.setItem('recentlyViewedServices', JSON.stringify(updated))
  }, [viewedServices])

  // Expose function globally for other components to use
  useEffect(() => {
  window.addRecentlyViewed = addViewedService
  return () => { delete window.addRecentlyViewed }
  }, [addViewedService])

  if (viewedServices.length === 0 || !isVisible) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 bg-white shadow-2xl rounded-l-2xl border border-gray-200 max-w-xs"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-gray-600" />
              <h3 className="font-bold text-sm text-gray-900">Recently Viewed</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2">
            {viewedServices.map((service) => (
              <Link
                key={service.id}
                href={service.url}
                className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <p className="text-sm font-medium text-gray-900">{service.name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(service.timestamp).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
          
          <button
            onClick={() => {
              localStorage.removeItem('recentlyViewedServices')
              setViewedServices([])
              setIsVisible(false)
            }}
            className="w-full mt-3 text-xs text-gray-500 hover:text-gray-700 underline"
          >
            Clear History
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}


