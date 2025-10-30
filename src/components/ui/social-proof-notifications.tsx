'use client'

import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Calendar, MapPin, Clock, Star, CheckCircle, Users, Award } from 'lucide-react'

interface SocialProofNotification {
  id: string
  type: 'booking' | 'review' | 'completion' | 'milestone'
  name: string
  location: string
  service?: string
  rating?: number
  time: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  message: string
}

export function SocialProofNotifications() {
  const [notificationHistory, setNotificationHistory] = useState<Set<string>>(new Set())
  const [shownCount, setShownCount] = useState(0);
  const maxToasts = 3; // Show max 3 notifications per session

  const notifications: SocialProofNotification[] = [
    // Recent bookings
    {
      id: 'booking-1',
      type: 'booking',
      name: 'Michael from Vancouver',
      location: 'Vancouver, WA',
      service: 'drain cleaning',
      time: '2 minutes ago',
      icon: Calendar,
      color: 'bg-secondary-500',
      message: 'Just scheduled drain cleaning service'
    },
    {
      id: 'booking-2', 
      type: 'booking',
      name: 'Sarah from Battle Ground',
      location: 'Battle Ground, WA',
      service: 'water heater repair',
      time: '8 minutes ago',
      icon: Calendar,
      color: 'bg-secondary-500',
      message: 'Just booked same-day water heater repair'
    },
    {
      id: 'booking-3',
      type: 'booking',
      name: 'John from Camas',
      location: 'Camas, WA', 
      service: 'same-day service',
      time: '15 minutes ago',
      icon: Calendar,
      color: 'bg-primary-500',
      message: 'Just requested same-day plumbing service'
    },

    // Completed services
    {
      id: 'completion-1',
      type: 'completion',
      name: 'Lisa from Ridgefield',
      location: 'Ridgefield, WA',
      service: 'kitchen sink installation',
      time: '1 hour ago',
      icon: CheckCircle,
      color: 'bg-green-500',
      message: 'Service completed successfully'
    },
    {
      id: 'completion-2',
      type: 'completion',
      name: 'David from Washougal',
      location: 'Washougal, WA',
      service: 'toilet repair',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'bg-green-500',
      message: 'Toilet repair completed'
    },

    // Reviews
    {
      id: 'review-1',
      type: 'review',
      name: 'Jennifer from La Center',
      location: 'La Center, WA',
      service: 'leak repair',
      rating: 5,
      time: '3 hours ago',
      icon: Star,
      color: 'bg-yellow-500',
      message: 'Left a 5-star review for their recent service'
    },
    {
      id: 'review-2',
      type: 'review',
      name: 'Robert from Woodland',
      location: 'Woodland, WA',
      service: 'drain cleaning',
      rating: 5,
      time: '5 hours ago',
      icon: Star,
      color: 'bg-yellow-500',
      message: 'Rated our drain cleaning service 5 stars'
    },

    // Milestones
    {
      id: 'milestone-1',
      type: 'milestone',
      name: 'H2O Plumbing',
      location: 'Southwest WA',
      time: 'Today',
      icon: Award,
      color: 'bg-purple-500',
      message: 'Completed 500+ services this month'
    },
    {
      id: 'milestone-2',
      type: 'milestone',
      name: 'H2O Plumbing',
      location: 'Southwest WA',
      time: 'This week',
      icon: Users,
      color: 'bg-indigo-500',
      message: 'Just served our 1,000th customer in Clark County!'
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || shownCount >= maxToasts) {
      return;
    }

    const interval = setInterval(() => {
      if (document.hidden || shownCount >= maxToasts) {
        return;
      }

      let availableNotifications = notifications.filter(n => !notificationHistory.has(n.id))
      
      if (availableNotifications.length === 0) {
        // Reset history if all notifications have been shown
        setNotificationHistory(new Set())
        return
      }

      const randomIndex = Math.floor(Math.random() * availableNotifications.length);
      const notification = availableNotifications[randomIndex];

      setNotificationHistory(prev => new Set(prev).add(notification.id));
      setShownCount(prev => prev + 1);

      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-[280px] w-full bg-white/95 backdrop-blur-sm shadow-md rounded-lg pointer-events-auto flex ring-1 ring-black/10 transform transition-all duration-300`}
          >
            <div className="flex-1 w-0 p-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className={`w-7 h-7 ${notification.color} rounded-full flex items-center justify-center text-white`}>
                    <notification.icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="ml-2 flex-1">
                  <p className="text-[11px] font-semibold text-gray-900">
                    {notification.name}
                  </p>
                  
                  <p className="mt-0.5 text-[10px] text-gray-600 leading-snug">
                    {notification.message}
                  </p>
                  
                  <div className="mt-0.5 flex items-center text-[9px] text-gray-500">
                    <Clock className="w-2 h-2 mr-0.5" />
                    <span>{notification.time}</span>
                  </div>
                </div>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="ml-1.5 text-gray-400 hover:text-gray-600 focus:outline-none text-sm"
                  aria-label="Close notification"
                >
                  <span className="text-base leading-none">×</span>
                </button>
              </div>
            </div>
          </div>
        ), {
        duration: 3500, // Shorter display time
        position: 'bottom-left',
      }
      );
    }, 15000); // Display notification every 15 seconds (less frequent)

    return () => clearInterval(interval);
  }, [notificationHistory, shownCount]);

  return (
    <>
      <Toaster
        position="bottom-left"
        toastOptions={{
          className: '',
          style: {
            background: 'transparent',
            boxShadow: 'none',
            padding: '0',
          },
        }}
      />
      
      {/* Custom styles for animations */}
      <style jsx global>{`
        .animate-enter {
          animation: slideInUp 0.4s ease-out forwards;
        }
        .animate-leave {
          animation: slideOutDown 0.3s ease-in forwards;
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(100%) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slideOutDown {
          from {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translateY(100%) scale(0.95);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}





