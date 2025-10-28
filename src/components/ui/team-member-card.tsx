import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

export const TeamMemberCard = ({ name, title, imageUrl, bio }: TeamMemberProps) => {
  return (
    <div className="text-center bg-white p-6 rounded-xl shadow-lg border-2 border-brand-red/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
      <div className="relative w-40 h-40 mx-auto mb-4">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full ring-4 ring-brand-red group-hover:ring-white transition-all"
        />
      </div>
      <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">{name}</h3>
      <p className="text-brand-red font-semibold mb-3">{title}</p>
      <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
};


