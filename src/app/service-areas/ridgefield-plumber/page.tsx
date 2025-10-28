import { Metadata } from 'next';
import { getServiceArea } from '@/config/service-areas';
import { ServiceAreaPage } from '@/components/service-areas/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Ridgefield WA Plumber | Local Plumbing Services | All County Plumbing',
  description: 'Professional plumber in Ridgefield, WA. Emergency plumbing, drain cleaning, water heater repair. Licensed, insured, local experts. Call (360) 883-2506 today!',
  keywords: 'Ridgefield WA plumber, plumber Ridgefield Washington, emergency plumbing Ridgefield, drain cleaning Ridgefield WA, water heater repair Ridgefield'
};

export default function RidgefieldPlumberPage() {
  const data = getServiceArea('ridgefield-plumber');
  if (!data) return null;
  return <ServiceAreaPage data={data} />;
}
