'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MasterButton } from '@/components/ui/master-button';
import { 
  Building2, 
  UtensilsCrossed, 
  ShoppingBag, 
  Factory, 
  Stethoscope, 
  Users,
  Clock,
  Shield,
  Award,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { BookingCTA, PhoneCTA } from '@/components/ui/cta-button';

interface CommercialClient {
  industry: string;
  icon: React.ElementType;
  projectsCompleted: number;
  clientCount: number;
  specialties: string[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    location: string;
  };
  featured?: boolean;
}

const commercialClients: CommercialClient[] = [
  {
    industry: 'Restaurants & Food Service',
    icon: UtensilsCrossed,
    projectsCompleted: 85,
    clientCount: 45,
    specialties: ['Grease Trap Systems', 'Commercial Kitchen Plumbing', 'Hood Suppression Hookups', 'Health Dept Compliance'],
    testimonial: {
      quote: 'H2O Plumbing understands the urgency of restaurant operations. They\'ve kept our locations running smoothly for years.',
      author: 'Maria Gonzalez',
      company: 'Local Restaurant Chain',
      location: 'Vancouver, WA'
    },
    featured: true
  },
  {
    industry: 'Office Buildings & Corporate',
    icon: Building2,
    projectsCompleted: 120,
    clientCount: 65,
    specialties: ['Restroom Facilities', 'Break Room Plumbing', 'Water Fountains', 'Emergency Repairs'],
    testimonial: {
      quote: 'Professional, reliable, and minimal disruption to our business operations. Exactly what we need from a commercial plumber.',
      author: 'David Kim',
      company: 'Property Management Corp',
      location: 'Portland Metro'
    },
    featured: true
  },
  {
    industry: 'Retail & Shopping Centers',
    icon: ShoppingBag,
    projectsCompleted: 95,
    clientCount: 38,
    specialties: ['Public Restrooms', 'ADA Compliance', 'Backflow Prevention', 'Tenant Improvements']
  },
  {
    industry: 'Medical & Dental Offices',
    icon: Stethoscope,
    projectsCompleted: 75,
    clientCount: 52,
    specialties: ['Water Systems', 'Sterilization Systems', 'Specialized Waste Systems', 'Patient Care Areas']
  },
  {
    industry: 'Industrial & Manufacturing',
    icon: Factory,
    projectsCompleted: 42,
    clientCount: 18,
    specialties: ['Process Water Systems', 'High-Pressure Lines', 'Waste Management', 'Safety Compliance']
  },
  {
    industry: 'Multi-Tenant Properties',
    icon: Users,
    projectsCompleted: 68,
    clientCount: 28,
    specialties: ['Common Area Plumbing', 'Individual Unit Service', 'Preventive Maintenance', 'Emergency Response']
  }
];

const totalStats = {
  industries: commercialClients.length,
  projects: commercialClients.reduce((sum, client) => sum + client.projectsCompleted, 0),
  clients: commercialClients.reduce((sum, client) => sum + client.clientCount, 0),
  experience: 20
};

export function CommercialPortfolio() {
  const [selectedIndustry, setSelectedIndustry] = useState<CommercialClient | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayClients = showAll ? commercialClients : commercialClients.slice(0, 4);
  const featuredClients = commercialClients.filter(client => client.featured);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-6">
            Trusted by Businesses Across Industries
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            For over 20 years, we've provided reliable commercial plumbing services to businesses 
            throughout Southwest Washington, from small offices to large industrial facilities.
          </p>
          
          {/* Business Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                {totalStats.industries}
              </div>
              <div className="text-sm text-slate-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                {totalStats.projects}+
              </div>
              <div className="text-sm text-slate-600">Commercial Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                {totalStats.clients}+
              </div>
              <div className="text-sm text-slate-600">Business Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                {totalStats.experience}+
              </div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Featured Testimonials */}
        {featuredClients.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-center text-slate-900 mb-8">
              What Our Commercial Clients Say
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {featuredClients.map((client, index) => (
                client.testimonial && (
                  <Card key={index} className="border-l-4 border-l-brand-red bg-white shadow-lg">
                    <CardContent className="pt-6">
                      <blockquote className="text-lg text-slate-700 mb-4 italic">
                        "{client.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-900">
                            {client.testimonial.author}
                          </div>
                          <div className="text-sm text-slate-600">
                            {client.testimonial.company}
                          </div>
                          <div className="text-xs text-slate-500">
                            {client.testimonial.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-brand-red border-brand-red mb-1">
                            {client.projectsCompleted} Projects
                          </Badge>
                          <div className="text-xs text-slate-500">
                            {client.industry}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              ))}
            </div>
          </div>
        )}

        {/* Industry Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayClients.map((client, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 bg-white border-slate-200"
              onClick={() => setSelectedIndustry(client)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-slate-900 flex items-center font-heading uppercase">
                    <client.icon className="w-5 h-5 mr-2 text-brand-red" />
                    {client.industry}
                  </CardTitle>
                  {client.featured && (
                    <Badge className="bg-red-50 text-brand-red border-brand-red">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-red">{client.projectsCompleted}</div>
                      <div className="text-xs text-slate-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-red">{client.clientCount}</div>
                      <div className="text-xs text-slate-600">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-red">{client.specialties.length}</div>
                      <div className="text-xs text-slate-600">Specialties</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-2">Our Specialties:</div>
                    <div className="space-y-1">
                      {client.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-brand-red mr-2 flex-shrink-0" />
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {commercialClients.length > 4 && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border-2 border-brand-red text-brand-red hover:bg-red-50 font-semibold rounded-lg transition-colors"
            >
              {showAll ? 'Show Less' : `View All ${commercialClients.length} Industries`}
            </button>
          </div>
        )}

        {/* Why Choose Us for Commercial */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">
              Why Businesses Choose H2O Plumbing
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We understand that plumbing issues can disrupt your business operations and affect your bottom line. 
              That's why we focus on prevention, quick response, and minimal downtime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-lg font-heading font-semibold uppercase mb-2">Fast Response</h4>
              <p className="text-slate-600">Same-day service within 2 hours. Scheduled maintenance at your convenience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-lg font-heading font-semibold uppercase mb-2">Minimal Disruption</h4>
              <p className="text-slate-600">We work around your business hours and minimize impact on operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-lg font-heading font-semibold uppercase mb-2">Preventive Focus</h4>
              <p className="text-slate-600">Proactive maintenance programs to prevent costly repairs.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
            Join hundreds of Southwest Washington businesses who trust H2O Plumbing 
            for reliable, professional commercial plumbing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3608832506"
              className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Get Commercial Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



