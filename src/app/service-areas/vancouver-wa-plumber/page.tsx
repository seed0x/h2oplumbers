import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Plumbers Vancouver WA | Same-Day Plumber Near Me | H2O Plumbing',
  description: 'Top-rated plumbers in Vancouver, WA. Fast same-day plumber near you, drain cleaning, water heater repair, repiping. Licensed & insured. Serving all Vancouver neighborhoods: Downtown, East Vancouver, Cascade Park, Salmon Creek, Hazel Dell. Call (360) 883-2506 for same-day service!',
  keywords: 'plumbers vancouver wa, plumber vancouver, vancouver plumbers, plumbers near me, same day plumber vancouver wa, plumbing contractors vancouver wa, licensed plumber vancouver washington, drain cleaning vancouver, clark county plumbing'
};

export default function VancouverPlumberPage() {
  const data = getServiceArea('vancouver-wa-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}


