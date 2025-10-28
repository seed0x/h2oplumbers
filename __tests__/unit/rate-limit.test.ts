import { rateLimit } from '@/lib/rate-limit'

// Mock @upstash/redis
jest.mock('@upstash/redis', () => ({
  Redis: jest.fn().mockImplementation(() => ({})),
}))

// Mock rate-limiter-flexible
const consumeMock = jest.fn().mockResolvedValue(undefined)
jest.mock('rate-limiter-flexible', () => ({
  RateLimiterRedis: jest.fn().mockImplementation(() => ({
    consume: (...args: unknown[]) => consumeMock(...args),
  })),
}))

describe('Rate Limiter', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should allow requests within rate limit', async () => {
    const result = await rateLimit.limit('test-ip')
    expect(result).toEqual({ success: true })
  })

  it('returns success false when underlying limiter rejects', async () => {
    consumeMock.mockResolvedValueOnce(undefined)
    consumeMock.mockRejectedValueOnce(new Error('rate limited'))
    const first = await rateLimit.limit('ip-1')
    const second = await rateLimit.limit('ip-1')
    expect(first).toEqual({ success: true })
    expect(second).toEqual({ success: false })
  })

  it('should use environment variables for configuration', () => {
    const originalEnv = process.env
    process.env = {
      ...originalEnv,
      RATE_LIMIT_MAX_REQUESTS: '50',
      RATE_LIMIT_WINDOW: '10',
    }

    jest.resetModules()
    require('@/lib/rate-limit')

    const { RateLimiterRedis } = require('rate-limiter-flexible')
    expect(RateLimiterRedis).toHaveBeenCalledWith({
      storeClient: {},
      points: 50,
      duration: 600, // 10 minutes * 60 seconds
    })

    process.env = originalEnv
  })
})
