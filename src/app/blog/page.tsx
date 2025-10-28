import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { BookOpen, Calendar, ArrowRight, Wrench, Lightbulb, Shield, Droplets, ThermometerSnowflake, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plumbing Tips & Expert Advice Blog | All County Plumbing',
  description: 'Expert plumbing advice from Vancouver\'s trusted family plumbers. Learn maintenance tips, repair guides, and home improvement insights from 20+ years of experience.',
};

const posts = [
  {
    slug: 'prepare-pipes-for-winter',
    title: 'How to Prepare Your Pipes for a Pacific Northwest Winter',
    excerpt: 'Winter in the Pacific Northwest can be tough on your plumbing. Learn how to prevent frozen pipes and other common winter plumbing issues with these essential tips.',
    date: 'January 28, 2025',
    category: 'Maintenance',
    icon: <ThermometerSnowflake className="w-6 h-6" />,
    readTime: '5 min read'
  },
  {
    slug: 'choosing-a-new-water-heater',
    title: 'Tank vs. Tankless: Choosing the Right Water Heater for Your Home',
    excerpt: 'Is a traditional tank water heater or a modern tankless system the right choice for your family? We break down the pros and cons of each to help you decide.',
    date: 'January 22, 2025',
    category: 'Upgrades',
    icon: <Droplets className="w-6 h-6" />,
    readTime: '7 min read'
  },
  {
    slug: 'signs-of-a-hidden-water-leak',
    title: '5 Signs You Might Have a Hidden Water Leak',
    excerpt: 'Hidden water leaks can cause significant damage to your home. Learn to spot the early warning signs before a small leak becomes a major problem.',
    date: 'January 15, 2025',
    category: 'Repairs',
    icon: <Shield className="w-6 h-6" />,
    readTime: '6 min read'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-red">Blog</span>
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
              <span>Expert Plumbing Advice</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight uppercase">
              Plumbing <span className="text-brand-red">Tips & Insights</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Learn from <span className="text-brand-red font-bold">{BUSINESS_DATA.yearsInBusiness} years of experience</span> serving Southwest Washington families. Practical tips, honest advice, and insider knowledge.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-brand-red" />
                <span className="text-sm font-medium">Expert Tips</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-brand-red" />
                <span className="text-sm font-medium">DIY Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-red" />
                <span className="text-sm font-medium">Prevention Tips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-4">
                <BookOpen className="w-5 h-5 text-brand-red" />
                <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Latest Articles</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">
                Recent <span className="text-brand-red">Posts</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Helpful articles written by our team to help you maintain and protect your home's plumbing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`} 
                  className="group block h-full"
                >
                  <article className="bg-white rounded-2xl border-2 border-brand-red/20 shadow-lg hover:shadow-2xl hover:border-brand-red hover:-translate-y-2 transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Category Badge & Icon */}
                    <div className="bg-gradient-to-br from-brand-red to-red-700 p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {post.category}
                          </span>
                          <div className="text-white/80">
                            {post.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-sm">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <FileText className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-brand-red font-bold mt-4 group-hover:gap-3 transition-all">
                        <span>Read Article</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-slate-800 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url('/images/Work Van Good Image.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/20 text-white mb-6">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 uppercase">
                  Need Professional Help?
                </h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  While DIY tips are helpful, some plumbing jobs require professional expertise. Our family has been serving Southwest Washington for over <strong className="text-brand-red">{BUSINESS_DATA.yearsInBusiness} years</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Book Service
              </Link>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-red px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                  >
                    <Wrench className="w-5 h-5" />
                    Call {BUSINESS_DATA.phone}
                  </a>
                </div>
                <p className="text-sm text-slate-400">
                  Same-day service available • Licensed & Insured • Family-Owned
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
