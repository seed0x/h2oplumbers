import { Metadata } from 'next';
import { DynamicCouponSection } from '@/components/sections/dynamic-coupon-section';

export const metadata: Metadata = {
  title: 'Plumbing Coupons & Special Offers | All County Plumbing',
  description: 'Save on professional plumbing services with our current special offers and coupons. Serving the Vancouver, WA area.',
};

export default function CouponsPage() {
  return (
    <main>
      <DynamicCouponSection />
    </main>
  );
}
