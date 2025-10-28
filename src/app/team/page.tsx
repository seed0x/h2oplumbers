import { CompactHeroSection } from '@/components/ui/compact-hero-section';
import { TeamGallery, ImageGallery, FleetGallery } from '../../components/ui/image-gallery';
import { Logo } from '../../components/ui/logo';
import { Star, Award, Users, Clock } from 'lucide-react';

export const metadata = {
  title: 'Meet Our Team - H2O Plumbing | Experienced Plumbers',
  description: 'Meet the experienced team at H2O Plumbing. Family-owned business with certified plumbers serving Battle Ground, WA and surrounding areas.',
};

// Sample team data - replace with actual team photos when provided
const teamMembers = [
  {
    name: 'Ron Veach',
    role: 'Founder & Master Plumber',
    image: '/images/ron-veach.jpg',
    bio: 'Ron founded H2O Plumbing in 2004 and continues to lead with a focus on craftsmanship, honesty, and community.',
    experience: '20+ Years Experience'
  },
  {
    name: 'Josh Veach',
    role: 'Current Owner & Operations Lead',
    image: '/images/fleet/josh-.jpg',
    bio: 'Josh oversees daily operations and ensures every crew member delivers the level of service our family promises.',
    experience: '15+ Years Experience'
  },
  {
    name: 'Field Team',
    role: 'Licensed Plumbers & Apprentices',
    image: '/images/team/team-field-support.jpg',
    bio: 'Our technicians bring decades of combined experience handling residential, commercial, and new construction plumbing.',
    experience: 'Combined 50+ Years'
  },
  {
    name: 'Family-Owned Service',
    role: 'Serving Clark County Families',
    image: '/images/family/veach-family.jpg',
    bio: 'We are a multi-generation family business committed to building lasting relationships with every customer we serve.',
    experience: 'Local & Trusted'
  }
];

// Sample work gallery - replace with actual project photos
const workGallery = [
  {
    src: '/images/work/all_county_plumbing_codee.jpg',
    alt: 'H2O Plumbing technician preparing pipe fittings on site',
    category: 'Residential Service',
    description: 'Our licensed technicians arrive prepared for everything from leak repairs to fixture replacements.'
  },
  {
    src: '/images/jobs/job-water-heater-vancouver-09-2024.jpg',
    alt: 'Installed water heater in a Vancouver home',
    category: 'Water Heaters',
    description: 'Energy-efficient water heater upgrade completed for a Vancouver homeowner.'
  },
  {
    src: '/images/work/tankless-water-heater-rheem.jpg',
    alt: 'Tankless water heater system mounted on wall',
    category: 'Upgrades',
    description: 'High-efficiency tankless water heater installed with proper venting and safety features.'
  },
  {
    src: '/images/work/commercial-plumbing.jpg',
    alt: 'Commercial plumbing infrastructure in progress',
    category: 'Commercial',
    description: 'Commercial plumbing project showcasing our experience with larger facilities and build-outs.'
  },
  {
    src: '/images/work/sewer-hookups.jpg',
    alt: 'Crew completing sewer hookup installation',
    category: 'Infrastructure',
    description: 'New sewer hookup installed with careful trenching and inspection readiness.'
  },
  {
    src: '/images/jobs/job-newconstruction-ridgefield-4-23.jpg',
    alt: 'New construction plumbing rough-in work',
    category: 'New Construction',
    description: 'Rough-in plumbing completed for a new build project in Ridgefield, Washington.'
  }
];

// Sample fleet images - replace with actual vehicle photos
const fleetImages = [
  {
    src: '/images/Work Van Good Image.png',
    alt: 'H2O Plumbing service van parked at a customer home',
    description: 'Fully stocked service van ready for residential and commercial calls across Clark County.',
    year: '2024',
    type: 'Ford Transit'
  },
  {
    src: '/images/truck-1.jpg',
    alt: 'H2O Plumbing service truck at a job site',
    description: 'Service truck equipped with essential parts to complete most jobs in a single visit.',
    year: '2023',
    type: 'Service Truck'
  },
  {
    src: '/images/fleet/jim-utton-journeyman-plumber.jpg',
    alt: 'Journeyman plumber preparing tools next to service van',
    description: 'Journeyman plumber Jim on site ensuring every detail meets our quality standards.',
    year: '2024',
    type: 'Field Operations'
  },
  {
    src: '/images/fleet/josh-.jpg',
    alt: 'Josh Veach assisting a customer during a service call',
    description: 'Josh leads our teams in the field and keeps projects on schedule for homeowners and builders.',
    year: '2024',
    type: 'Operations Lead'
  }
];

export default function TeamPage() {
  return (
    <>
      <CompactHeroSection
        title="Meet Our Expert Team"
        subtitle="Experienced professionals dedicated to quality plumbing services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Our Team' }
        ]}
  backgroundImage="/images/family-Allcountyteam.webp"
      />

      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-6">
              <Logo size="md" className="mx-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Family-Owned, Professionally Trained
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At H2O Plumbing, we're more than just a plumbing company – we're your neighbors, 
              committed to providing honest, reliable service to every family we serve. Meet the team 
              that makes the difference.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, value: '1000+', label: 'Families Served' },
              { icon: Clock, value: '20+', label: 'Years in Business' },
              { icon: Star, value: '4.9', label: 'Average Rating' },
              { icon: Award, value: '100%', label: 'Licensed & Insured' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-red" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Certified Plumbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each member of our team brings years of experience and a commitment to excellence. 
              We're licensed, insured, and dedicated to your satisfaction.
            </p>
          </div>

          <TeamGallery members={teamMembers} />
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to complete remodels, see the quality workmanship 
              that has earned us the trust of families throughout Battle Ground and beyond.
            </p>
          </div>

          <ImageGallery 
            images={workGallery} 
            columns={3}
            showCategories
            className="mb-8"
          />
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fully Equipped Service Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our modern fleet of service vehicles ensures we arrive at your home or business 
              fully prepared with the right tools and parts for any job.
            </p>
          </div>

          <FleetGallery vehicles={fleetImages} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-red">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <Logo size="md" variant="white" className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the H2O Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team of professionals today for honest, reliable plumbing services 
              you can trust. Available 24/7 for emergencies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13608832506"
              className="bg-white text-brand-red px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Call Now: (360) 883-2506
            </a>
            <a 
              href="/booking"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-red transition-colors"
            >
              Schedule Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


