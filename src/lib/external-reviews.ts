import { cache } from '@/lib/cache'

export interface ExternalReview {
  id: string
  platform: 'google' | 'yelp' | 'facebook'
  rating: number
  content: string
  authorName: string
  authorImage?: string
  reviewDate: string
  isPublished: true
  isExternal: true
}

interface FetchContext { fetchImpl?: typeof fetch }

async function fetchGoogle(ctx: FetchContext): Promise<ExternalReview[]> {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const place = process.env.GOOGLE_PLACE_ID
  if (!key || !place) return []
  const f = ctx.fetchImpl || fetch
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place}&fields=reviews,rating&key=${key}`
    const r = await f(url)
    if (!r.ok) return []
    const j = await r.json()
    return (j.result?.reviews || []).map((rev: any) => ({
      id: rev.time?.toString() || `${rev.author_name}-${rev.time}`,
      platform: 'google',
      rating: rev.rating,
      content: rev.text,
      authorName: rev.author_name,
      authorImage: rev.profile_photo_url,
      reviewDate: new Date(rev.time * 1000).toISOString(),
      isPublished: true,
      isExternal: true,
    }))
  } catch (e) {
    console.error('Google reviews error', e)
    return []
  }
}

async function fetchYelp(ctx: FetchContext): Promise<ExternalReview[]> {
  const key = process.env.YELP_API_KEY
  const biz = process.env.YELP_BUSINESS_ID
  if (!key || !biz) return []
  const f = ctx.fetchImpl || fetch
  try {
    const r = await f(`https://api.yelp.com/v3/businesses/${biz}/reviews`, { headers: { Authorization: `Bearer ${key}` } })
    if (!r.ok) return []
    const j = await r.json()
    return (j.reviews || []).map((rev: any) => ({
      id: rev.id,
      platform: 'yelp',
      rating: rev.rating,
      content: rev.text,
      authorName: rev.user?.name || 'Yelp User',
      authorImage: rev.user?.image_url,
      reviewDate: new Date(rev.time_created).toISOString(),
      isPublished: true,
      isExternal: true,
    }))
  } catch (e) {
    console.error('Yelp reviews error', e)
    return []
  }
}

async function fetchFacebook(ctx: FetchContext): Promise<ExternalReview[]> {
  const page = process.env.FACEBOOK_PAGE_ID
  const token = process.env.FACEBOOK_ACCESS_TOKEN
  if (!page || !token) return []
  const f = ctx.fetchImpl || fetch
  try {
    const fields = 'review_text,rating,created_time,reviewer'
    const r = await f(`https://graph.facebook.com/v19.0/${page}/ratings?access_token=${token}&fields=${fields}`)
    if (!r.ok) return []
    const j = await r.json()
    return (j.data || []).filter((rev: any) => rev.review_text).map((rev: any) => ({
      id: rev.id || rev.created_time,
      platform: 'facebook',
      rating: rev.rating || 0,
      content: rev.review_text,
      authorName: rev.reviewer?.name || 'Facebook User',
      reviewDate: new Date(rev.created_time).toISOString(),
      isPublished: true,
      isExternal: true,
    }))
  } catch (e) {
    console.error('Facebook reviews error', e)
    return []
  }
}

export async function fetchExternalReviews(opts: { force?: boolean; ctx?: FetchContext } = {}) {
  if (process.env.ENABLE_EXTERNAL_REVIEWS !== 'true') return []
  const ttl = parseInt(process.env.EXTERNAL_REVIEWS_TTL || '3600', 10)
  const key = 'external-reviews:all'
  if (!opts.force) {
    const cached = await cache.get<ExternalReview[]>(key)
    if (cached) return cached
  }
  const ctx = opts.ctx || {}
  const [g, y, f] = await Promise.all([fetchGoogle(ctx), fetchYelp(ctx), fetchFacebook(ctx)])
  const all = [...g, ...y, ...f]
  await cache.set(key, all, ttl)
  return all
}
