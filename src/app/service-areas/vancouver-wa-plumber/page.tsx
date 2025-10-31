import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Plumbers Vancouver WA | #1 Rated Plumber Near Me | H2O Plumbing',
  description: '⭐ Vancouver WA\'s #1 Plumber! 24/7 Emergency Service | Same-Day Repairs | Licensed & Insured | Water Heater Repair | Drain Cleaning | Repiping Specialists | Serving Clark County Since 2009 | 360-433-9748 | Free Estimates!',
  keywords: 'plumbers vancouver wa, plumber vancouver wa, vancouver wa plumber, plumbers near me vancouver, emergency plumber vancouver wa, plumbing contractors vancouver wa, licensed plumber vancouver washington, drain cleaning vancouver wa, clark county plumbing, commercial repipe vancouver, repipe specialists vancouver, water heater repair vancouver wa, plumbing vancouver wa, vancouver plumbers, best plumber vancouver wa',
  openGraph: {
    title: 'Vancouver WA\'s #1 Rated Plumber | H2O Plumbing Services',
    description: '24/7 Emergency Plumber in Vancouver WA. Same-day service for all plumbing needs. Licensed, insured & family-owned since 2009.',
    type: 'website',
    locale: 'en_US',
    url: 'https://h2oplumbers.com/service-areas/vancouver-wa-plumber/',
    siteName: 'H2O Plumbing Services'
  },
  alternates: {
    canonical: 'https://h2oplumbers.com/service-areas/vancouver-wa-plumber/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function VancouverPlumberPage() {
  const data = getServiceArea('vancouver-wa-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}


