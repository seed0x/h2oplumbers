jest.mock('@upstash/redis', () => ({ Redis: jest.fn().mockImplementation(() => ({ get: jest.fn(), setex: jest.fn() })) }))
import { fetchExternalReviews } from '@/lib/external-reviews'

describe('external reviews', () => {
  const env = { ...process.env }
  afterEach(() => { process.env = { ...env }; jest.resetModules() })

  it('disabled returns empty', async () => {
    process.env.ENABLE_EXTERNAL_REVIEWS = 'false'
    const r = await fetchExternalReviews()
    expect(r).toEqual([])
  })

  it('aggregates when enabled', async () => {
    process.env.ENABLE_EXTERNAL_REVIEWS = 'true'
    process.env.GOOGLE_PLACES_API_KEY = 'k'
    process.env.GOOGLE_PLACE_ID = 'p'
    process.env.YELP_API_KEY = 'yk'
    process.env.YELP_BUSINESS_ID = 'yb'
    process.env.FACEBOOK_PAGE_ID = 'fb'
    process.env.FACEBOOK_ACCESS_TOKEN = 'ft'
    const f = jest.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ result: { reviews: [{ time: 1, rating: 5, text: 'G', author_name: 'GA' }] } }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ reviews: [{ id: 'y1', rating: 4, text: 'Y', user: { name: 'YA', image_url: '' }, time_created: '2024-01-01T00:00:00Z' }] }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ data: [{ id: 'f1', rating: 5, review_text: 'F', reviewer: { name: 'FA' }, created_time: '2024-02-01T00:00:00Z' }] }) })
    const res = await fetchExternalReviews({ ctx: { fetchImpl: f } })
    expect(res.length).toBe(3)
    expect(res.map(r => r.platform).sort()).toEqual(['facebook', 'google', 'yelp'])
  })
})