'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MasterButton } from '@/components/ui/master-button';
import { Building2, Home, Award, MapPin, Calendar, Users, TrendingUp, Star } from 'lucide-react';
import { BookingCTA, PhoneCTA } from '@/components/ui/cta-button';

interface Builder {
  name: string;
  logo?: string;
  projectsCompleted: number;
  unitsBuilt: number;
  yearsWorked: string;
  locations: string[];
  projectTypes: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  featured?: boolean;
}

const builders: Builder[] = [
  {
    name: 'Toll Brothers',
    projectsCompleted: 45,
    unitsBuilt: 340,
    yearsWorked: '2018-2024',
    locations: ['Vancouver WA', 'Battle Ground', 'Camas'],
    projectTypes: ['Luxury Homes', 'Master-Planned Communities'],
    testimonial: {
      quote: 'All County Plumbing has been instrumental in our Vancouver developments. Their expertise and reliability are unmatched.',
      author: 'Mike Rodriguez',
      title: 'Project Manager'
    },
    featured: true
  },
  {
    name: 'DR Horton',
    projectsCompleted: 62,
    unitsBuilt: 485,
    yearsWorked: '2016-2024',
    locations: ['Clark County', 'Cowlitz County'],
    projectTypes: ['Single Family', 'Townhomes', 'Entry-Level Homes'],
    testimonial: {
      quote: 'Quality work, on-time delivery, and excellent communication. A trusted partner for all our plumbing needs.',
      author: 'Sarah Chen',
      title: 'Construction Supervisor'
    },
    featured: true
  },
  {
    name: 'Lennar',
    projectsCompleted: 38,
    unitsBuilt: 290,
    yearsWorked: '2019-2024',
    locations: ['Vancouver WA', 'Ridgefield'],
    projectTypes: ['Smart Homes', 'Family Communities'],
    featured: true
  },
  {
    name: 'Holt Home',
    projectsCompleted: 28,
    unitsBuilt: 156,
    yearsWorked: '2020-2024',
    locations: ['Battle Ground', 'Brush Prairie'],
    projectTypes: ['Custom Homes', 'Semi-Custom']
  },
  {
    name: 'Songbird Homes',
    projectsCompleted: 22,
    unitsBuilt: 98,
    yearsWorked: '2021-2024',
    locations: ['Vancouver WA', 'Washougal'],
    projectTypes: ['Modern Design', 'Sustainable Homes']
  },
  {
    name: 'Urban NW',
    projectsCompleted: 35,
    unitsBuilt: 142,
    yearsWorked: '2017-2024',
    locations: ['Portland Metro', 'Vancouver WA'],
    projectTypes: ['Urban Infill', 'Contemporary Homes']
  },
  {
    name: 'RS3 Homes',
    projectsCompleted: 19,
    unitsBuilt: 87,
    yearsWorked: '2022-2024',
    locations: ['Clark County'],
    projectTypes: ['Production Homes', 'Spec Builds']
  },
  {
    name: 'Timbercrest Homes',
    projectsCompleted: 26,
    unitsBuilt: 134,
    yearsWorked: '2019-2024',
    locations: ['Battle Ground', 'La Center'],
    projectTypes: ['Traditional Homes', 'Family-Focused']
  },
  {
    name: 'Palisch',
    projectsCompleted: 31,
    unitsBuilt: 178,
    yearsWorked: '2018-2024',
    locations: ['Southwest Washington'],
    projectTypes: ['Multi-Family', 'Commercial Projects']
  }
];

const totalStats = {
  builders: builders.length,
  projects: builders.reduce((sum, builder) => sum + builder.projectsCompleted, 0),
  units: builders.reduce((sum, builder) => sum + builder.unitsBuilt, 0),
  years: 8
};

export function BuilderPortfolio() {
  const [selectedBuilder, setSelectedBuilder] = useState<Builder | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayBuilders = showAll ? builders : builders.slice(0, 6);
  const featuredBuilders = builders.filter(b => b.featured);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-6">
            Trusted by Leading <span className="text-brand-red">Builders</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            All County Plumbing works with residential and commercial builders throughout Southwest Washington,
            delivering reliable plumbing systems for projects of all sizes.
          </p>
          
          {/* Aggregate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">{totalStats.builders}</div>
              <div className="text-sm font-medium text-slate-600">Builder Partners</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">{totalStats.projects}+</div>
              <div className="text-sm font-medium text-slate-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">{totalStats.units}+</div>
              <div className="text-sm font-medium text-slate-600">Units Built</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">{totalStats.years}+</div>
              <div className="text-sm font-medium text-slate-600">Years Partnership</div>
            </div>
          </div>
        </div>

        {/* Featured Builder Testimonials */}
        {featuredBuilders.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-slate-900 mb-10">What Builders Say</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredBuilders.filter(b => b.testimonial).map((builder, index) => (
                <div key={index} className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 text-lg leading-relaxed">
                    "{builder.testimonial?.quote}"
                  </p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-bold text-slate-900">{builder.testimonial?.author}</p>
                    <p className="text-sm text-slate-600">{builder.testimonial?.title} • {builder.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Builder Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-slate-900 mb-10">Our Builder Partners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayBuilders.map((builder, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-brand-red transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedBuilder(builder)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-heading font-bold text-slate-900">{builder.name}</h4>
                  {builder.featured && (
                    <Badge variant="secondary" className="bg-brand-red/10 text-brand-red border-brand-red/20">Featured</Badge>
                  )}
                </div>
                
                <div className="space-y-3 text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-brand-red" />
                    <span>{builder.yearsWorked}</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="w-4 h-4 mr-2 text-brand-red" />
                    <span>{builder.projectsCompleted} Projects • {builder.unitsBuilt} Units</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 text-brand-red flex-shrink-0" />
                    <span>{builder.locations.join(', ')}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {builder.projectTypes.map((type, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">{type}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More/Less Button */}
        {builders.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md"
            >
              {showAll ? 'Show Less' : `View All ${builders.length} Builders`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}




