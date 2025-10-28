import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'La Center WA Plumber | Local Plumbing Services | All County Plumbing',
  description: 'Professional plumber in La Center, WA. Emergency plumbing, drain cleaning, water heater repair. Licensed, insured, local experts. Call (360) 883-2506 today!',
  keywords: 'La Center WA plumber, plumber La Center Washington, emergency plumbing La Center, drain cleaning La Center WA, water heater repair La Center'
};

export default function LaCenterPlumberPage() {
  const data = getServiceArea('la-center-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}
