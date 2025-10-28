import { Redis } from '@upstash/redis'

// Initialize Redis client
const redis = process.env.UPSTASH_REDIS_REST_URL 
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null

// Generic fallback in-memory cache for development
interface MemoryCacheEntry<T> { value: T; expires: number }
const memoryCache = new Map<string, MemoryCacheEntry<unknown>>()

export class CacheService {
  private static instance: CacheService
  
  static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService()
    }
    return CacheService.instance
  }

  async set<T>(key: string, value: T, ttlSeconds: number = 3600): Promise<void> {
    try {
      if (redis) {
        await redis.setex(key, ttlSeconds, JSON.stringify(value))
      } else {
        // Fallback to memory cache
        memoryCache.set(key, {
          value,
          expires: Date.now() + (ttlSeconds * 1000),
        })
      }
    } catch (error) {
      console.error('Cache set error:', error)
    }
  }

  async get<T = unknown>(key: string): Promise<T | null> {
    try {
      if (redis) {
        const result = await redis.get(key)
        return result ? JSON.parse(result as string) : null
      } else {
        // Fallback to memory cache
        const cached = memoryCache.get(key)
        if (cached) {
          if (Date.now() < cached.expires) {
            return cached.value as T
          } else {
            memoryCache.delete(key)
          }
        }
        return null
      }
    } catch (error) {
      console.error('Cache get error:', error)
      return null
    }
  }

  async del(key: string): Promise<void> {
    try {
      if (redis) {
        await redis.del(key)
      } else {
        memoryCache.delete(key)
      }
    } catch (error) {
      console.error('Cache delete error:', error)
    }
  }

  async flush(): Promise<void> {
    try {
      if (redis) {
        await redis.flushdb()
      } else {
        memoryCache.clear()
      }
    } catch (error) {
      console.error('Cache flush error:', error)
    }
  }

  // Utility methods for common caching patterns
  async remember<T>(key: string, callback: () => Promise<T>, ttlSeconds: number = 3600): Promise<T> {
    const cached = await this.get<T>(key)
    if (cached !== null) {
      return cached
    }

    const fresh = await callback()
    await this.set(key, fresh, ttlSeconds)
    return fresh
  }

  // Cache with tags for invalidation
  async setWithTags<T>(key: string, value: T, tags: string[], ttlSeconds: number = 3600): Promise<void> {
    await this.set(key, value, ttlSeconds)
    
    // Store reverse mapping for tag-based invalidation
    for (const tag of tags) {
      const tagKey = `tag:${tag}`
      const taggedKeys = await this.get<string[]>(tagKey) || []
      taggedKeys.push(key)
      await this.set(tagKey, Array.from(new Set(taggedKeys)), ttlSeconds)
    }
  }

  async invalidateByTag(tag: string): Promise<void> {
    const tagKey = `tag:${tag}`
    const keys = await this.get<string[]>(tagKey)
    
    if (keys && keys.length > 0) {
      // Delete all keys with this tag
      for (const key of keys) {
        await this.del(key)
      }
      // Delete the tag itself
      await this.del(tagKey)
    }
  }
}

export const cache = CacheService.getInstance()

// Cache key generators for consistent naming
export const cacheKeys = {
  reviews: (platform?: string, published?: boolean) => 
    `reviews:${platform || 'all'}:${published !== undefined ? published : 'all'}`,
  
  serviceAreas: (active?: boolean) => 
    `service-areas:${active !== undefined ? active : 'all'}`,
  
  services: (category?: string, emergency?: boolean) => 
    `services:${category || 'all'}:${emergency !== undefined ? emergency : 'all'}`,
  
  appointments: (customerId?: string, status?: string) => 
    `appointments:${customerId || 'all'}:${status || 'all'}`,
  
  emergencies: (status?: string, severity?: string) => 
    `emergencies:${status || 'all'}:${severity || 'all'}`,
  
  analytics: (period: string) => `analytics:${period}`,
  
  customer: (identifier: string) => `customer:${identifier}`,
}
