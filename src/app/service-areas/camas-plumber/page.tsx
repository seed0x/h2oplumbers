import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Camas WA Plumber | Local Plumbing Services | H2O Plumbing',
  description: 'Professional plumber in Camas, WA. Same-day plumbing, drain cleaning, water heater repair. Licensed, insured, local experts. Call (360) 883-2506 today!',
  keywords: 'Camas WA plumber, plumber Camas Washington, same day plumbing Camas, drain cleaning Camas WA, water heater repair Camas'
};

export default function CamasPlumberPage() {
  const data = getServiceArea('camas-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}


