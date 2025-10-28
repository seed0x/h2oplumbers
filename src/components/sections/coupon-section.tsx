import { MasterButton } from "@/components/ui/master-button";
import { Ticket, Tag } from "lucide-react";
import Link from "next/link";

export const CouponSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border-2 border-brand-red/30">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url('/images/hero-background-pattern.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          
          <div className="flex-shrink-0 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white mb-4" aria-label="Special offers">
              <Tag className="h-4 w-4" />
              Special Offers
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-white mb-2">Save on Quality Plumbing Services</h2>
            <p className="text-base md:text-lg text-slate-300">
              Check out our <strong className="text-brand-red">current promotions and discounts</strong> for Clark County homeowners.
            </p>
          </div>
          <div className="text-center flex-shrink-0 relative z-10">
            <Link href="/coupons">
              <MasterButton 
                size="xl"
                variant="outline"
                className="bg-brand-red text-white border-brand-red hover:bg-brand-red-dark shadow-lg transform hover:-translate-y-1"
              >
                View All Coupons
              </MasterButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
