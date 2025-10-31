'use client'

import React, { useState, useEffect } from 'react'
import { Alert, AlertDescription } from '../ui/alert'
import { MasterButton } from '../ui/master-button'
import { Phone, Clock, X } from 'lucide-react'

interface BusinessHours {
  start: number // Hour in 24-hour format
  end: number   // Hour in 24-hour format
}

const BUSINESS_HOURS: BusinessHours = {
  start: 8,  // 8 AM
  end: 17    // 5 PM
}

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    // Check if outside business hours
    checkBusinessHours()

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    checkBusinessHours()
  }, [currentTime])

  const checkBusinessHours = () => {
    const now = new Date()
    const currentHour = now.getHours()
    const currentDay = now.getDay() // 0 = Sunday, 6 = Saturday
    
    // Check if it's a weekend (Saturday = 6, Sunday = 0)
    const isWeekend = currentDay === 0 || currentDay === 6
    
    // Check if outside business hours
    const isOutsideHours = currentHour < BUSINESS_HOURS.start || currentHour >= BUSINESS_HOURS.end
    
    // Show banner if outside business hours or on weekends
    setIsVisible(isWeekend || isOutsideHours)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const getNextBusinessDay = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    // If tomorrow is Saturday, move to Monday
    if (tomorrow.getDay() === 6) {
      tomorrow.setDate(tomorrow.getDate() + 2)
    }
    // If tomorrow is Sunday, move to Monday
    else if (tomorrow.getDay() === 0) {
      tomorrow.setDate(tomorrow.getDate() + 1)
    }
    
    return tomorrow.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-brand-cyan text-white shadow-lg">
      <Alert className="border-0 bg-transparent text-white rounded-none">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4 flex-1">
            <Clock className="h-5 w-5 text-white/80 animate-pulse" />
            
            <AlertDescription className="flex items-center space-x-6 text-sm">
              <span className="font-medium">
                Outside Business Hours — Same-Day On-Call Support
              </span>
              
              <span className="text-white/80">
                Current time: {formatTime(currentTime)}
              </span>
              
              <span className="text-white/80">
                Regular hours resume: {getNextBusinessDay()} at 8:00 AM
              </span>
            </AlertDescription>
          </div>

          <div className="flex items-center space-x-3">
            <MasterButton
              variant="secondary"
              size="sm"
              className="bg-white text-brand-cyan hover:bg-slate-50"
              asChild
            >
              <a href="tel:+13608832506" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call Now:</span>
                <span className="font-bold">(360) 883-2506</span>
              </a>
            </MasterButton>

            <MasterButton
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-brand-cyan-dark h-8 w-8 p-0"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </MasterButton>
          </div>
        </div>
      </Alert>
    </div>
  )
}




