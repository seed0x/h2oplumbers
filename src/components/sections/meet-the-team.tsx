import { TeamMemberCard } from '../ui/team-member-card';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ron Veach',
    title: 'Founder & Master Plumber',
    imageUrl: '/images/ron-veach.jpg',
    bio: "With over 30 years of experience, Ron founded H2O to bring honest, family-focused plumbing to our community."
  },
  {
    name: 'Josh Veach',
    title: 'Lead Technician & Operations',
    imageUrl: '/images/josh-veach.jpg',
    bio: "Following in his father's footsteps, Josh leads our field team with a commitment to quality and customer satisfaction."
  },
  {
    name: 'Skylee Hewitt',
    title: 'Operations & Accounting',
    imageUrl: '/images/skylee-hewitt.jpg',
    bio: "Growing up in the family business, Skylee now leads H2O's operations, billing, and accounting with dedication and precision."
  },
  {
    name: 'Our Field Team',
    title: 'Licensed Plumbers & Apprentices',
    imageUrl: '/images/family-Allcountyteam.webp',
    bio: "Our skilled technicians are the friendly faces you'll see at your door, ready to solve your plumbing problems."
  },
];

export const MeetTheTeamSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Badge matching hero and services style */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan mb-6" aria-label="Our team">
            <Users className="h-4 w-4" />
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Meet Our Family</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            <strong className="text-brand-cyan">We're not just a team, we're a family.</strong> Get to know the friendly, professional faces who will be taking care of your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};


