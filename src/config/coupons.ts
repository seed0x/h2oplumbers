import { Coupon } from '@/types';

export const coupons: Coupon[] = [
  {
    title: '$50 Off Drain Cleaning',
    description: 'Clear any clogged drain and get your pipes flowing smoothly again.',
    code: 'DRAIN50',
    expiryDate: '2025-12-31',
    active: true,
  },
  {
    title: '10% Off Water Heater Repair',
    description: 'Get 10% off on any water heater repair service. Not valid for new installations.',
    code: 'WHTR10',
    expiryDate: '2025-11-30',
    active: true,
  },
  {
    title: '$100 Off Sewer Line Repair',
    description: 'Save big on major sewer line repairs. Free camera inspection included.',
    code: 'SEWER100',
    expiryDate: '2025-12-31',
    active: true,
  },
  {
    title: 'Free Service Call with Repair',
    description: 'The service call fee is waived with any completed repair.',
    code: 'FREECALL',
    expiryDate: '2025-10-31',
    active: false, // This coupon is inactive
  },
];
