import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { BUSINESS_DATA } from '@/lib/business-data'
import { Heart, Users, Award, Shield, CheckCircle2, Phone, MapPin, Clock, Wrench, TrendingUp, Building2, Trophy, Sparkles, Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: `About ${BUSINESS_DATA.name} | Family-Owned Since ${BUSINESS_DATA.established} | ${BUSINESS_DATA.address.city}, ${BUSINESS_DATA.address.state}`,
  description: `Learn about ${BUSINESS_DATA.name} - family-owned and operated plumbing company serving Southwest Washington since ${BUSINESS_DATA.established}. Licensed, insured, and community-focused.`,
  keywords: `${BUSINESS_DATA.name} history, family owned plumbing, ${BUSINESS_DATA.address.city} plumber, Southwest Washington plumbers, licensed contractor`,
}

const teamMembers = [
  {
    name: 'Ron Veach',
    role: 'Founder / Owner – Master Plumber',
    experience: 'Leadership',
    initials: 'RV',
    photo: '/images/ron-veach.jpg',
    certifications: ['Business Development', 'Quality Assurance', 'Customer Relations'],
    description: 'Founded All County Plumbing with a mission to serve every customer with honesty and care. Leads the company with integrity and dedication to excellence.'
  },
  {
    name: 'Josh Veach',
    role: 'Co-Owner / Operations',
    experience: 'Management',
    initials: 'JV',
    photo: '/images/josh-veach.jpg',
    certifications: ['Operations Management', 'Project Coordination', 'Team Leadership'],
    description: 'Grew up in the family business. Now leads operations with the same values his father taught - every customer matters.'
  },
  {
    name: 'Field & Support Team',
    role: 'Licensed Technicians & Staff',
    experience: 'Field Experts',
    initials: 'FT',
    photo: '/images/family-Allcountyteam.webp',
    certifications: ['Licensed Plumbers', 'Safety Certified', 'Customer Service'],
    description: 'Skilled professionals delivering reliable residential, commercial, and new construction plumbing solutions.'
  }
]

const certifications = [
  {
    title: 'WA State Contractor License',
    number: '#ALLCOPL030RW',
    authority: 'Washington State Department of Labor & Industries',
    status: 'Active & Current'
  },
  {
    title: 'Oregon CCB License',
    number: '#147151',
    authority: 'Oregon Construction Contractors Board',
    status: 'Active & Current'
  },
  {
    title: 'General Liability Insurance',
    number: 'Policy Active',
    authority: 'Commercial Insurance Coverage',
    status: '$1M Coverage'
  },
  {
    title: 'Workers Compensation',
    number: 'WA State Required',
    authority: 'L&I Coverage',
    status: 'Fully Compliant'
  }
]

const journey = [
  { 
    year: BUSINESS_DATA.established, 
    title: 'A Father\'s Dream Begins', 
    desc: `Ron Veach starts All County Plumbing with one truck, a toolbox, and an unwavering commitment to treat every customer like family. The journey begins in ${BUSINESS_DATA.address.city}.`,
    icon: <Wrench className="w-6 h-6" />
  },
  { 
    year: '2008', 
    title: 'Growing Roots', 
    desc: 'Survived the recession by staying true to our values. While others cut corners, we doubled down on quality and earned lifelong customers who still call us today.',
    icon: <Heart className="w-6 h-6" />
  },
  { 
    year: '2012', 
    title: 'Next Generation Joins', 
    desc: 'Josh Veach officially joins the business, bringing fresh energy while honoring the family legacy. Father and son working side-by-side becomes our signature.',
    icon: <Users className="w-6 h-6" />
  },
  { 
    year: '2015', 
    title: '1,000 Families Served', 
    desc: 'Hit a major milestone - over 1,000 Clark County families trust us with their homes. Each customer represents a relationship, not just a transaction.',
    icon: <Trophy className="w-6 h-6" />
  },
  { 
    year: '2018', 
    title: 'Commercial Division Launch', 
    desc: 'Expanded to serve commercial clients and new construction projects. Now helping build the community we call home, one building at a time.',
    icon: <Building2 className="w-6 h-6" />
  },
  { 
    year: '2020', 
    title: 'H2O Service Division Born', 
    desc: 'Launched our specialized H2O plumbing service division, bringing cutting-edge water solutions and 24/7 emergency support to residential and commercial clients.',
    icon: <Droplets className="w-6 h-6" />
  },
  { 
    year: '2024', 
    title: '20 Years Strong', 
    desc: `Two decades of service, thousands of satisfied customers, and still family-owned. We\'re just getting started - Vancouver\'s trusted plumber for the next generation.`,
    icon: <Sparkles className="w-6 h-6" />
  }
];

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'About' }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-red">About</span>
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
              <span>Celebrating {BUSINESS_DATA.yearsInBusiness} Years of Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              About <span className="text-brand-red">All County Plumbing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Where <span className="text-brand-red font-bold">family values</span> meet master craftsmanship. We treat your pipes like our reputation depends on it - because it does.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Get to Know Us
              </Link>
              <Link
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white/40"
              >
                Call {BUSINESS_DATA.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-4">
                <Heart className="w-5 h-5 text-brand-red" />
                <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Family Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase">
                Our <span className="text-brand-red">Story</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold text-brand-red">It started with a father and son.</span> Ron Veach founded {BUSINESS_DATA.name} in {BUSINESS_DATA.established} with a simple mission: treat every customer like family. What began as a small family operation has grown into one of Southwest Washington's most trusted plumbing companies.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Today, with Josh Veach running operations alongside his father Ron, we carry forward that same family-first philosophy. For over {BUSINESS_DATA.yearsInBusiness} years, we have been honored to serve families throughout Clark County. We are not just fixing pipes - we are building lasting relationships with our neighbors.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Being family-owned means something special to us. We answer our own phones, show up when we say we will, and treat your home with respect. That is the All County Plumbing difference.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border-2 border-brand-red/20">
              <h3 className="text-3xl font-heading font-bold text-brand-red mb-8">Why Clark County Families Choose Us</h3>
              <div className="space-y-6">
                {[
                  { label: 'True Family Business', desc: 'Father and son team serving your family like our own' },
                  { label: `${BUSINESS_DATA.yearsInBusiness} Years in Your Community`, desc: `Your neighbors since ${BUSINESS_DATA.established}` },
                  { label: 'Licensed & Insured', desc: BUSINESS_DATA.licenses.display },
                  { label: 'Clark County Choice', desc: '1000+ local families served with 4.9 star ratings' }
                ].map(item => (
                  <div key={item.label} className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center mr-4">
                      <CheckCircle2 className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-slate-900">{item.label}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase">
              Our Core <span className="text-brand-red">Values</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The principles that guide our work and customer relationships every day</p>
          </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Family First', desc: 'We treat your home and family with the same care as our own.' },
                { title: 'Honest Work', desc: 'Fair pricing, no surprises, and quality craftsmanship every time.' },
                { title: 'Local Roots', desc: 'Your neighbors in Clark County, invested in our community success.' },
                { title: 'Personal Service', desc: 'Real people, real relationships - not a call center or franchise.' }
              ].map((v, idx) => {
                const icons = [
                  <Heart key="heart" className="w-10 h-10" />, 
                  <Award key="award" className="w-10 h-10" />, 
                  <Users key="users" className="w-10 h-10" />, 
                  <Shield key="shield" className="w-10 h-10" />
                ];
                return (
                  <div key={v.title} className="bg-white border-2 border-brand-red/20 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors text-brand-red">
                      {icons[idx]}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-brand-red transition-colors">{v.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Photos / Placeholders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">Our Experts</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase">
              Meet Our <span className="text-brand-red">Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">The <span className="font-semibold text-brand-red">Veach family</span> and our experienced team of licensed professionals - dedicated to serving Clark County families with integrity and excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map(member => {
              const hasPhoto = !!member.photo; 
              return (
                <Card key={member.name} className="border-2 border-brand-red/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-5 relative">
                      {hasPhoto ? (
                        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-brand-red shadow-md">
                          <Image 
                            src={member.photo}
                            alt={member.name}
                            width={250}
                            height={250}
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="member-photo-placeholder w-48 h-48 mx-auto" aria-label={`${member.name} placeholder`}>
                          {member.initials}
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold text-brand-red mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">{member.role}</CardDescription>
                    <Badge variant="outline" className="mt-3 py-1 px-3 text-sm font-medium bg-brand-red/10 border-brand-red/30 text-brand-red">{member.experience}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-5 leading-relaxed">{member.description}</p>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                        <Award className="w-4 h-4 text-brand-red" />
                        Certifications & Expertise
                      </h4>
                      <ul className="space-y-2">
                        {member.certifications.map((cert, idx) => (
                          <li key={idx} className="text-sm text-slate-700 flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-brand-red mr-2 flex-shrink-0 mt-0.5" /> {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          {/* Family / Culture Gallery */}
          <div className="mt-24">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 text-center uppercase">Meet the All County <span className="text-brand-red">Family</span></h3>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-10">These are not stock photos - they are real moments from our family, our team, and the Clark County homes we are honored to serve.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/images/family/veach-family.jpg', alt: 'The Veach Family' },
                { src: '/images/family/family-technicans.jpg', alt: 'Technicians Ready for Dispatch' },
                { src: '/images/about_us_page_photos/company van on the job.webp', alt: 'Company Van On The Job' },
                { src: '/images/about_us_page_photos/dave in the attic.webp', alt: 'Dave Working In The Attic' },
                { src: '/images/about_us_page_photos/josh on post and beam.jpg', alt: 'Josh On Post And Beam' },
                { src: '/images/about_us_page_photos/josh&ron.jpg', alt: 'Josh and Ron Veach' },
                { src: '/images/about_us_page_photos/team memebrs installing a water heater.jpg', alt: 'Team Members Installing Water Heater' },
                { src: '/images/about_us_page_photos/teven & Dave on the field.webp', alt: 'Teven and Dave On The Field' },
                { src: '/images/work/sewer-hookups.jpg', alt: 'Sewer Hookup Work in Progress' },
                { src: '/images/work/commercial-plumbing.jpg', alt: 'Commercial Plumbing Project' },
                { src: '/images/family-Allcountyteam.webp', alt: 'All County Team Family Photo' }
              ].map(img => (
                <div key={img.alt} className="relative group overflow-hidden rounded-lg shadow-sm border border-gray-100">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    width={400}
                    height={400}
                    className="object-cover w-full h-40 md:h-48 group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-2">
                    <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase">
              Certifications & <span className="text-brand-red">Licensing</span>
            </h2>
            <p className="text-xl text-slate-600">Fully licensed, insured, and compliant</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border-2 border-brand-red/20 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-brand-red">{cert.title}</h3>
                  <Badge className="bg-green-100 text-green-800 px-3 py-1">{cert.status}</Badge>
                </div>
                <p className="text-lg font-semibold text-slate-900 mb-2">{cert.number}</p>
                <p className="text-slate-600">{cert.authority}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white" id="journey">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase">
              Our <span className="text-brand-red">Journey</span>
            </h2>
            <p className="text-xl text-slate-600">Milestones that shaped our company</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-brand-red to-red-200" aria-hidden="true" />
            <ul className="space-y-16">
              {journey.map((item, idx) => (
                <li key={item.year} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className={"flex md:justify-end mb-6 md:mb-0 " + (idx % 2 === 0 ? 'md:order-1' : 'md:order-2') }>
                    <div className="flex flex-col items-center md:items-end gap-3">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-red to-red-700 text-white flex items-center justify-center font-heading font-bold shadow-xl ring-4 ring-white z-10 relative">
                        <div className="text-center">
                          <div className="text-2xl">{item.year}</div>
                        </div>
                      </div>
                      <div className="hidden md:flex w-16 h-16 rounded-xl bg-red-100 text-brand-red items-center justify-center shadow-md">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className={(idx % 2 === 0 ? 'md:order-2' : 'md:order-1') + ' relative'}>
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-brand-red/20 p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-red transition-all duration-300 group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 text-brand-red flex items-center justify-center">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-slate-900 group-hover:text-brand-red transition-colors">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.15),transparent_60%)]" aria-hidden="true"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 uppercase">
            Let Our <span className="text-brand-red">Family</span> Serve Yours
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-300 leading-relaxed">
            When you call All County Plumbing, you are not getting a corporate call center - you are getting Ron, Josh, and our local team who genuinely care about your home. Experience the family difference in Vancouver, Battle Ground, Camas, and throughout Clark County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-12 py-5 rounded-xl font-heading font-bold text-2xl hover:shadow-2xl hover:shadow-brand-red/50 transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 transform"
            >
              Call {BUSINESS_DATA.phone} Now
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-5 rounded-xl font-heading font-bold text-2xl transition-all duration-300 inline-flex items-center justify-center border-2 border-white/40 hover:-translate-y-1 transform"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}



