import { Coupon } from './coupon';
import type { TimeSlot, ServicePricing, BookingFormValues } from './booking';

export type { Coupon, TimeSlot, ServicePricing, BookingFormValues };

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string | React.ReactElement;
  children?: NavItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href?: string;
  icon?: string | React.ReactElement;
  image?: string;
  slug: string;
  metaData: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface ContactInfo {
  address: string;
  city: string;
  state: string;
  zipCode?: string;
  phone: string;
  phoneLink?: string;
  email: string;
  hours: {
    days: string;
    hours: string;
  }[];
  license?: string;
  founded?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    yelp?: string;
  };
}
