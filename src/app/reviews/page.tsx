import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_DATA } from '@/lib/business-data'
import { Star, Heart, ThumbsUp, MessageCircle, Award, Users, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | H2O Plumbing',
  description: 'Read real customer reviews from homeowners and businesses across Southwest Washington. See why families trust H2O Plumbing for honest, reliable service since 2004.'
}

interface PlatformBadgeProps { platform: string; rating: string; count: string; icon: React.ReactNode; url: string; }
const platforms: PlatformBadgeProps[] = [
  { platform: 'Google', rating: '4.9', count: '200+ Reviews', icon: <Star className="w-12 h-12" />, url: 'https://www.google.com/search?q=all+county+plumbing+vancouver+wa+reviews' },
  { platform: 'Yelp', rating: '4.8', count: '150+ Reviews', icon: <Award className="w-12 h-12" />, url: 'https://www.yelp.com/biz/all-county-plumbing-vancouver' },
  { platform: 'Facebook', rating: '4.9', count: '100+ Reviews', icon: <ThumbsUp className="w-12 h-12" />, url: 'https://www.facebook.com/allcountyplumbers' }
]

interface UnifiedReview {
  id: number
  platform: 'Google' | 'Yelp' | 'Facebook'
  stars: number
  text: string
  author: string
  time: string
  location?: string
}

const unifiedReviews: UnifiedReview[] = [
  { id: 1, platform: 'Google', stars: 5, text: 'H2O Plumbing was fast, professional, and fixed our leak in no time. We\'ve found our go-to plumber for our home in Vancouver. Highly recommend!', author: 'Sarah J.', time: '2 weeks ago', location: 'Vancouver, WA' },
  { id: 2, platform: 'Yelp', stars: 5, text: 'The team was courteous and knowledgeable. They explained everything clearly and the price was fair for our water heater replacement. Will call them again.', author: 'Mark T.', time: '1 month ago', location: 'Battle Ground, WA' },
  { id: 3, platform: 'Facebook', stars: 5, text: 'I\'ve used them for both my business and my home. Consistently great service and they always stand by their work. The best plumbers in Camas.', author: 'David L.', time: '3 weeks ago', location: 'Camas, WA' },
  { id: 4, platform: 'Google', stars: 5, text: 'Transparent pricing and clean work. They treated my home with respect and got the job done right the first time.', author: 'Jennifer M.', time: '5 days ago', location: 'Ridgefield, WA' },
  { id: 5, platform: 'Yelp', stars: 5, text: 'Camera inspected and cleared our drain line perfectly. No high-pressure sales, just honest work at a fair price.', author: 'Robert P.', time: '3 weeks ago', location: 'La Center, WA' },
  { id: 6, platform: 'Google', stars: 5, text: 'Family-owned business that really cares. Upfront estimate, quality parts, and stood by their warranty. Will use again!', author: 'Anna W.', time: '4 weeks ago', location: 'Vancouver, WA' },
  { id: 7, platform: 'Facebook', stars: 5, text: 'They solved water pressure issues other plumbers couldn\'t figure out. Detailed, professional workmanship.', author: 'Chris B.', time: '2 months ago', location: 'Woodland, WA' },
  { id: 8, platform: 'Google', stars: 5, text: 'Installed fixtures in our new home. Clean work, respectful crew, and passed inspection without issues.', author: 'Michelle K.', time: '6 days ago', location: 'Washougal, WA' },
  { id: 9, platform: 'Yelp', stars: 5, text: 'Honest pricing, no surprises. They\'re the only plumbers we trust for our rental properties in Clark County.', author: 'Tom R.', time: '1 week ago', location: 'Vancouver, WA' },
  { id: 10, platform: 'Google', stars: 5, text: 'Quick response time and professional service. They care about doing the job right, not just fast.', author: 'Lisa H.', time: '3 days ago', location: 'Camas, WA' },
  { id: 11, platform: 'Facebook', stars: 5, text: 'Used them for commercial plumbing in our restaurant. Reliable, on-time, and communicated every step.', author: 'Carlos M.', time: '2 weeks ago', location: 'Vancouver, WA' },
  { id: 12, platform: 'Google', stars: 5, text: 'Family business with integrity. They gave me options instead of pushing the most expensive fix. Really appreciate that.', author: 'Patricia G.', time: '5 weeks ago', location: 'Battle Ground, WA' }
]

const platformColors: Record<string, string> = {
  Google: 'bg-secondary-50 text-secondary-600 border-secondary-200',
  Yelp: 'bg-primary-50 text-primary-600 border-primary-200',
  Facebook: 'bg-indigo-50 text-indigo-700 border-indigo-200'
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-red">Reviews</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium tracking-wide mb-6 ring-1 ring-white/10 shadow-lg shadow-black/10">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Trusted by Your Community</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight uppercase">
              Customer <span className="text-brand-red">Reviews</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Real feedback from <span className="text-brand-red font-bold">real families and businesses</span> across Southwest Washington. See why your neighbors trust us.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-brand-red" />
                  <span className="text-2xl font-heading font-bold">450+</span>
                </div>
                <p className="text-sm text-slate-300">5-Star Reviews</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-brand-red" />
                  <span className="text-2xl font-heading font-bold">{BUSINESS_DATA.yearsInBusiness}</span>
                </div>
                <p className="text-sm text-slate-300">Years Family-Owned</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ThumbsUp className="w-5 h-5 text-brand-red" />
                  <span className="text-2xl font-heading font-bold">98%</span>
                </div>
                <p className="text-sm text-slate-300">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-4">
                <Star className="w-5 h-5 text-brand-red" />
                <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Review Platforms</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 uppercase">Where You Can Find Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map(p => (
                <a 
                  key={p.platform} 
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border-2 border-brand-red/20 p-8 text-center hover:border-brand-red hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-center text-brand-red mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
                  <h3 className="text-xl font-heading font-bold mb-3 uppercase text-slate-900">{p.platform}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-heading font-bold text-brand-red">{p.rating}</span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">{p.count}</p>
                  <div className="flex items-center justify-center gap-2 text-brand-red text-sm font-semibold mt-3 group-hover:gap-3 transition-all">
                    <span>View Reviews</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-4">
                <Heart className="w-5 h-5 text-brand-red" />
                <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase">
                Hear From Your <span className="text-brand-red">Neighbors</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                From Vancouver to Woodland, families and businesses trust us to treat their homes and projects like our own.
              </p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {unifiedReviews.map(r => (
              <div key={r.id} className="bg-white border-2 border-brand-red/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-brand-red hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full border ${platformColors[r.platform]}`}>
                    {r.platform}
                  </span>
                  <div className="flex text-yellow-500">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 flex-grow">“{r.text}”</p>
                <div className="mt-auto pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-900">{r.author}</span>
                    <span className="text-slate-500">{r.time}</span>
                  </div>
                  <p className="text-xs text-brand-red font-medium mt-1">{r.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Message */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-brand-red/20 p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/10 text-brand-red mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 uppercase">
              Your Review Matters
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              As a family-owned business, every review helps us grow and improve. We read every single one and use your feedback to serve our community better. Thank you for trusting us with your home!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </Link>
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Call {BUSINESS_DATA.phone}
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}






