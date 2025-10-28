import { CheckCircle, Shield, Award, Star } from 'lucide-react';

const trustBadges = [
  {
    icon: <Shield className="h-8 w-8 text-secondary-500" />,
    title: 'Licensed & Insured',
    description: 'WA #ALLCOPL030RW',
  },
  {
    icon: <Award className="h-8 w-8 text-secondary-500" />,
    title: 'BBB A+ Accredited',
    description: 'Trusted & Verified',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    title: 'Satisfaction Guaranteed',
    description: 'Quality Backed Work',
  },
  {
    icon: <Star className="h-8 w-8 text-yellow-500" />,
    title: '4.9+ Google Rating',
    description: '200+ Local Reviews',
  },
];

export function TrustBadgeSection() {
  return (
    <section className="bg-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-3 text-primary-500">{badge.icon}</div>
              <h3 className="font-bold text-white text-sm md:text-base">{badge.title}</h3>
              <p className="text-xs md:text-sm text-slate-400">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


