import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Woodland WA Plumber | Local Plumbing Services | H2O Plumbing',
  description: 'Professional plumber in Woodland, WA. Same-day plumbing, drain cleaning, water heater repair. Licensed, insured, local experts. Call (360) 883-2506 today!',
  keywords: 'Woodland WA plumber, plumber Woodland Washington, same day plumbing Woodland, drain cleaning Woodland WA, water heater repair Woodland'
};

export default function WoodlandPlumberPage() {
  const data = getServiceArea('woodland-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}


