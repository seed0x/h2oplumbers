'use client'

import { useEffect } from 'react'

// Extend Window interface for workbox
interface WorkboxLike {
  addEventListener(type: string, listener: (...args: unknown[]) => void): void
  messageSkipWaiting(): void
  register(): void
}

declare global {
  interface Window {
    workbox?: WorkboxLike;
  }
}

export function ServiceWorkerProvider() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox
    ) {
      const wb = window.workbox
      
      // Add event listeners to handle updates
      wb.addEventListener('controlling', () => {
        window.location.reload()
      })

      wb.addEventListener('waiting', () => {
        // Show update available notification
        if (confirm('A new version is available. Update now?')) {
          wb.messageSkipWaiting()
        }
      })

      wb.register()
    } else if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      // Fallback registration without workbox
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          // SW registered
          
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New update available
                  if (confirm('A new version is available. Update now?')) {
                    newWorker.postMessage({ action: 'skipWaiting' })
                  }
                }
              })
            }
          })
        })
        .catch((error) => {
          // SW registration failed
        })

      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
      })
    }
  }, [])

  return null
}

// Hook for offline storage
export function useOfflineStorage() {
  // Use function declaration to avoid TSX generic parsing ambiguity
  async function storeOfflineData<T>(key: string, data: T) {
    if (typeof window === 'undefined') return

    try {
      const dbRequest = indexedDB.open('AllCountyPlumbers', 1)
      
      dbRequest.onupgradeneeded = () => {
        const db = dbRequest.result
        if (!db.objectStoreNames.contains('bookings')) {
          db.createObjectStore('bookings', { keyPath: 'id' })
        }
      }

      dbRequest.onsuccess = () => {
        const db = dbRequest.result
        const transaction = db.transaction(['bookings'], 'readwrite')
        const store = transaction.objectStore('bookings')
        
        store.put({ id: key, data, timestamp: Date.now() })
      }
    } catch (error) {
  // offline storage failed
    }
  }

  const requestBackgroundSync = async (tag: string) => {
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      const registration = await navigator.serviceWorker.ready
      try {
  // sync is still experimental; cast narrowly
  await (registration as ServiceWorkerRegistration & { sync: { register: (t: string) => Promise<void> }}).sync.register(tag)
      } catch (error) {
  // background sync registration failed
      }
    }
  }

  return {
    storeOfflineData,
    requestBackgroundSync
  }
}
