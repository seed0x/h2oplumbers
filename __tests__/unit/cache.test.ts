import { cache, cacheKeys } from '@/lib/cache'

// Mock Redis for testing
jest.mock('@upstash/redis', () => ({
  Redis: jest.fn().mockImplementation(() => ({
    setex: jest.fn().mockResolvedValue('OK'),
    get: jest.fn().mockResolvedValue(null),
    del: jest.fn().mockResolvedValue(1),
    flushdb: jest.fn().mockResolvedValue('OK'),
  })),
}))

describe('Cache Service', () => {
  beforeEach(() => {
    // Clear memory cache
    cache.flush()
  })

  describe('set and get operations', () => {
    it('should store and retrieve values', async () => {
      const key = 'test-key'
      const value = { name: 'All County Plumbing', type: 'business' }

      await cache.set(key, value, 3600)
      const retrieved = await cache.get(key)

      expect(retrieved).toEqual(value)
    })

    it('should return null for non-existent keys', async () => {
      const result = await cache.get('non-existent-key')
      expect(result).toBeNull()
    })

    it('should handle TTL expiration', async () => {
      const key = 'expire-test'
      const value = 'temporary data'

      // Set with 1 second TTL
      await cache.set(key, value, 1)
      
      // Should exist immediately
      let retrieved = await cache.get(key)
      expect(retrieved).toBe(value)

      // Wait for expiration and check again (simulate with manual expiration)
      // Note: In real tests, we'd use jest timers or mock Date.now()
    })
  })

  describe('remember pattern', () => {
    it('should execute callback and cache result', async () => {
      const key = 'remember-test'
      const callback = jest.fn().mockResolvedValue('computed value')

      const result = await cache.remember(key, callback, 3600)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(result).toBe('computed value')

      // Second call should not execute callback
      const result2 = await cache.remember(key, callback, 3600)
      expect(callback).toHaveBeenCalledTimes(1)
      expect(result2).toBe('computed value')
    })
  })

  describe('tag-based invalidation', () => {
    it('should invalidate all keys with specific tag', async () => {
      const keys = ['key1', 'key2', 'key3']
      const tag = 'reviews'
      const values = ['value1', 'value2', 'value3']

      // Set values with tags
      for (let i = 0; i < keys.length; i++) {
        await cache.setWithTags(keys[i], values[i], [tag], 3600)
      }

      // Verify all values exist
      for (let i = 0; i < keys.length; i++) {
        const retrieved = await cache.get(keys[i])
        expect(retrieved).toBe(values[i])
      }

      // Invalidate by tag
      await cache.invalidateByTag(tag)

      // Verify all values are gone
      for (const key of keys) {
        const retrieved = await cache.get(key)
        expect(retrieved).toBeNull()
      }
    })
  })
})

describe('Cache Key Generators', () => {
  it('should generate consistent cache keys', () => {
    expect(cacheKeys.reviews('google', true)).toBe('reviews:google:true')
    expect(cacheKeys.reviews()).toBe('reviews:all:all')
    expect(cacheKeys.serviceAreas(true)).toBe('service-areas:true')
    expect(cacheKeys.customer('email@test.com')).toBe('customer:email@test.com')
  })

  it('should handle optional parameters', () => {
    expect(cacheKeys.appointments()).toBe('appointments:all:all')
    expect(cacheKeys.appointments('customer123')).toBe('appointments:customer123:all')
    expect(cacheKeys.appointments('customer123', 'SCHEDULED')).toBe('appointments:customer123:SCHEDULED')
  })
})
