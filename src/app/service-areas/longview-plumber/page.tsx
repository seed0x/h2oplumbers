import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Longview WA Plumber | Local Plumbing Services | H2O Plumbing',
  description: 'Professional plumber in Longview, WA. Same-day plumbing, drain cleaning, water heater repair. Licensed, insured, local experts. Call (360) 883-2506 today!',
  keywords: 'Longview WA plumber, plumber Longview Washington, same day plumbing Longview, drain cleaning Longview WA, water heater repair Longview'
};

export default function LongviewPlumberPage() {
  const data = getServiceArea('longview-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}


