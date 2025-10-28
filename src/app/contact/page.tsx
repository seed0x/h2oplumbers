import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './contact-form';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { generateSocialMeta, socialMetaTemplates } from '@/lib/social-meta';
import { QuickShareButtons } from '@/components/social/social-share';
import { SocialFollowButtons } from '@/components/social/social-share';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Phone, Mail, MapPin, Clock, Shield, Award, Users, CheckCircle2, Heart, Sparkles } from 'lucide-react';

export const metadata: Metadata = generateSocialMeta({
  ...socialMetaTemplates.contact,
});

export default function ContactPage() {
  const breadcrumbItems = [
    { label: 'Contact' }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-red">Contact</span>
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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Your Vancouver <span className="text-brand-red">Plumbing Problems</span> End Here
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Family-owned plumber serving <span className="text-brand-red font-bold">Vancouver, Battle Ground, Camas & Clark County</span> since 2004. No runaround, no surprises—just honest plumbing from neighbors you can trust. Licensed #ALLCOPL030RW.
            </p>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_DATA.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_DATA.email}`}
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 text-slate-700" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-heading font-bold text-brand-red mb-2 group-hover:scale-110 transition-transform">2-4 Hours</div>
              <p className="text-sm md:text-lg">Response Time</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-heading font-bold text-brand-red mb-2 group-hover:scale-110 transition-transform">Same Day</div>
              <p className="text-sm md:text-lg">Service Available</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-heading font-bold text-brand-red mb-2 group-hover:scale-110 transition-transform">Licensed</div>
              <p className="text-sm md:text-lg">& Insured</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-heading font-bold text-brand-red mb-2 group-hover:scale-110 transition-transform">20+ Years</div>
              <p className="text-sm md:text-lg">Local Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-slate-900 mb-4">
                We're Here to Help
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From repairs to new construction projects, our family treats your home like our own. No call centers, no runaround—just honest advice and reliable service from Vancouver's trusted family plumbers.
              </p>
              
              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-brand-red/20 hover:border-brand-red hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <Phone className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2 text-slate-900 group-hover:text-brand-red transition-colors">Call Us Directly</h3>
                      <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-xl font-bold text-brand-red hover:text-brand-red-dark">
                        {BUSINESS_DATA.phone}
                      </a>
                      <p className="text-sm text-slate-600 mt-1">Available for all your plumbing needs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-brand-red/20 hover:border-brand-red hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <Mail className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2 text-slate-900 group-hover:text-brand-red transition-colors">Email Us</h3>
                      <a href={`mailto:${BUSINESS_DATA.email}`} className="text-lg text-brand-red hover:text-brand-red-dark break-all">
                        {BUSINESS_DATA.email}
                      </a>
                      <p className="text-sm text-slate-600 mt-1">We respond within 2-4 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-brand-red/20 hover:border-brand-red hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2 text-slate-900 group-hover:text-brand-red transition-colors">Our Office</h3>
                      <p className="text-slate-700">
                        {BUSINESS_DATA.address.street}<br />
                        {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.state} {BUSINESS_DATA.address.zip}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-brand-red/20 hover:border-brand-red hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <Clock className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2 text-slate-900 group-hover:text-brand-red transition-colors">Business Hours</h3>
                      <p className="text-slate-700">{BUSINESS_DATA.hours.display}</p>
                      <p className="text-sm text-brand-red font-semibold mt-1">Same-day service available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-white rounded-lg p-4 border-2 border-brand-red/20 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                  <Shield className="w-8 h-8 text-brand-red mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-700">Licensed</p>
                </div>
                <div className="text-center bg-white rounded-lg p-4 border-2 border-brand-red/20 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                  <Award className="w-8 h-8 text-brand-red mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-700">Insured</p>
                </div>
                <div className="text-center bg-white rounded-lg p-4 border-2 border-brand-red/20 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                  <Heart className="w-8 h-8 text-brand-red mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-700">Family-Owned</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-brand-red/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/10 text-brand-red mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Send Us a Message</h3>
                <p className="text-sm text-slate-600">We typically respond within 2-4 hours during business hours</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96 bg-slate-200">
        <iframe 
          title="Service Area Map"
          className="w-full h-full grayscale contrast-125 brightness-95"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26833.93054838915!2d-122.567!3d45.7804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495af9ab0fef2a9%3A0xebe7e9b1b9d465d7!2sBattle%20Ground%2C%20WA!5e0!3m2!1sen!2sus!4v0000000000">
        </iframe>
      </section>

      {/* Service Areas CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-4">
            Proudly Serving Southwest Washington
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Vancouver • Battle Ground • Camas • Washougal • Ridgefield • La Center • Longview • Woodland
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


