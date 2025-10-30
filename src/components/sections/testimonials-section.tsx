import { TestimonialCard } from '../ui/testimonial-card';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: "H2O Plumbing was fast, professional, and fixed our leak in no time. We've found our go-to plumber for our home in Vancouver. Highly recommend!",
    author: "Sarah J., Vancouver",
    rating: 5,
    source: 'Google',
  },
  {
    quote: "The team was courteous and knowledgeable. They explained everything clearly and the price was fair for our water heater replacement. Will call them again.",
    author: "Mark T., Battle Ground",
    rating: 5,
    source: 'Yelp',
  },
  {
    quote: "I've used them for both my business and my home. Consistently great service and they always stand by their work. The best plumbers in Camas.",
    author: "David L., Camas",
    rating: 5,
    source: 'Facebook',
  },
] as const;

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Badge matching hero and services style */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan mb-6" aria-label="Customer reviews">
            <MessageSquare className="h-4 w-4" />
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Trusted by Your Neighbors</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            We're proud to have earned the trust of families and businesses across Southwest Washington. <strong className="text-brand-cyan">Here's what they have to say.</strong>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};


