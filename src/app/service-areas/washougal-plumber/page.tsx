import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Washougal WA Plumber | Local Plumbing Services | H2O Plumbing',
  description: 'Professional plumber in Washougal, WA. Emergency plumbing, drain cleaning, water heater repair. Licensed, insured, local experts. Call (360) 883-2506 today!',
  keywords: 'Washougal WA plumber, plumber Washougal Washington, emergency plumbing Washougal, drain cleaning Washougal WA, water heater repair Washougal'
};

export default function WashougalPlumberPage() {
  const data = getServiceArea('washougal-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}


