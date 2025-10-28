import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Battle Ground Plumber | Local Plumbing Services | H2O Plumbing WA',
  description: 'Top-rated plumber in Battle Ground, WA. Local plumbing experts serving Battle Ground residents with drain cleaning, water heater repair, emergency services & more.',
  keywords: 'Battle Ground plumber, plumber Battle Ground WA, local plumbing services, Battle Ground emergency plumber, residential plumbing Battle Ground'
};

export default function BattleGroundPlumberPage() {
  const data = getServiceArea('battle-ground-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}


