import { Star, MessageSquare } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  source: 'Google' | 'Yelp' | 'Facebook';
}

const sourceInfo = {
  Google: { icon: '/google-logo.svg', name: 'Google Review' },
  Yelp: { icon: '/yelp-logo.svg', name: 'Yelp Review' },
  Facebook: { icon: '/facebook-logo.svg', name: 'Facebook Recommendation' },
};

export const TestimonialCard = ({ quote, author, rating, source }: TestimonialCardProps) => {
  const { icon, name } = sourceInfo[source];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brand-red/20 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl group">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-brand-red' : 'text-slate-300'}`}
            fill="currentColor"
          />
        ))}
      </div>
      <p className="text-slate-700 italic mb-4 flex-grow leading-relaxed">"{quote}"</p>
      <div className="mt-auto">
        <p className="text-slate-900 font-heading font-semibold text-right">- {author}</p>
        <div className="flex items-center justify-end mt-4 pt-4 border-t border-brand-red/20">
          <Image src={icon} alt={`${name} logo`} width={16} height={16} className="mr-2" />
          <span className="text-xs text-slate-500 font-medium">{name}</span>
        </div>
      </div>
    </div>
  );
};
