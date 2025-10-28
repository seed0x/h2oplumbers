const CACHE_NAME = 'allcounty-plumbers-v1'
const OFFLINE_URL = '/offline'

// Files to cache immediately
const STATIC_CACHE_URLS = [
  '/',
  '/services',
  '/contact',
  '/offline',
  '/manifest.json'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...')
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_CACHE_URLS)
      })
      .then(() => {
        return self.skipWaiting()
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...')
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Serving from cache:', event.request.url)
          return cachedResponse
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response for caching
            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })

            return response
          })
          .catch(() => {
            // If both cache and network fail, show offline page
            if (event.request.destination === 'document') {
              return caches.match(OFFLINE_URL)
            }
          })
      })
  )
})

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-booking') {
    event.waitUntil(syncBookingData())
  }
})

async function syncBookingData() {
  try {
    const bookings = await getStoredBookings()
    
    for (const booking of bookings) {
      try {
        await fetch('/api/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(booking)
        })
        
        // Remove from storage after successful sync
        await removeStoredBooking(booking.id)
      } catch (error) {
        console.error('Failed to sync booking:', error)
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

// Utility functions for IndexedDB operations
async function getStoredBookings() {
  return new Promise((resolve) => {
    const request = indexedDB.open('AllCountyPlumbers', 1)
    
    request.onsuccess = () => {
      const db = request.result
      const transaction = db.transaction(['bookings'], 'readonly')
      const store = transaction.objectStore('bookings')
      const getAllRequest = store.getAll()
      
      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result)
      }
    }
  })
}

async function removeStoredBooking(id) {
  return new Promise((resolve) => {
    const request = indexedDB.open('AllCountyPlumbers', 1)
    
    request.onsuccess = () => {
      const db = request.result
      const transaction = db.transaction(['bookings'], 'readwrite')
      const store = transaction.objectStore('bookings')
      const deleteRequest = store.delete(id)
      
      deleteRequest.onsuccess = () => {
        resolve()
      }
    }
  })
}
