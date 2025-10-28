import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Calendar, Clock, Droplets, Wrench, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tank vs. Tankless Water Heaters | H2O Plumbing',
  description: 'Compare traditional tank and modern tankless water heaters to decide which is best for your home. Learn about the pros and cons of each system.',
};

export default function TankVsTanklessPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-red">Blog</Link>
            <span>/</span>
            <span className="text-brand-red">Water Heater Guide</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium tracking-wide mb-6 ring-1 ring-white/10">
              <Droplets className="w-4 h-4 text-brand-red" />
              <span>Upgrade Guide</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              <span className="text-brand-red">Tank vs. Tankless:</span> Choosing the Right Water Heater
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 22, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <div className="prose lg:prose-xl max-w-none">
              <p>Choosing a new water heater is a significant decision for any homeowner. The two main options on the market today are traditional tank water heaters and modern tankless water heaters. Each has its own set of advantages and disadvantages. This guide will help you understand the key differences so you can make an informed choice for your home and family.</p>

              <h2>Traditional Tank Water Heaters</h2>
              <p>Tank water heaters are the most common type found in homes. They consist of an insulated tank that holds and heats a specific amount of water (typically 40-50 gallons). When you turn on a hot water tap, hot water is drawn from the top of the tank.</p>
              <h3>Pros:</h3>
              <ul>
                <li><strong>Lower Initial Cost:</strong> Tank water heaters are less expensive to purchase and install than tankless models.</li>
                <li><strong>Proven Technology:</strong> They have been around for a long time and are a reliable, well-understood technology.</li>
                <li><strong>Simple to Replace:</strong> If you're replacing an old tank heater, installing a new one is usually straightforward.</li>
              </ul>
              <h3>Cons:</h3>
              <ul>
                <li><strong>Higher Energy Costs:</strong> The system constantly uses energy to keep the water in the tank hot, which can lead to higher utility bills. This is known as standby heat loss.</li>
                <li><strong>Limited Hot Water:</strong> Once the tank is empty, you have to wait for it to refill and heat up again.</li>
                <li><strong>Large Size:</strong> They take up a significant amount of space.</li>
              </ul>

              <h2>Tankless Water Heaters</h2>
              <p>Tankless water heaters, also known as on-demand water heaters, heat water directly without the use of a storage tank. When you turn on a hot water tap, cold water travels through a pipe into the unit, where it is heated by a gas burner or an electric element.</p>
              <h3>Pros:</h3>
              <ul>
                <li><strong>Energy Efficiency:</strong> By heating water only when you need it, tankless heaters can be 24%-34% more energy-efficient than traditional tank heaters.</li>
                <li><strong>Unlimited Hot Water:</strong> You get a continuous supply of hot water, which is great for large families or homes with high hot water demands.</li>
                <li><strong>Longer Lifespan:</strong> Tankless models can last up to 20 years or more, compared to the 10-15 year lifespan of tank heaters.</li>
                <li><strong>Space Savings:</strong> They are small and can be mounted on a wall, freeing up valuable floor space.</li>
              </ul>
              <h3>Cons:</h3>
              <ul>
                <li><strong>Higher Initial Cost:</strong> The purchase price and installation costs are significantly higher than for tank heaters.</li>
                <li><strong>Installation Complexity:</strong> Retrofitting a tankless heater into a home designed for a tank model can require significant plumbing and electrical or gas line upgrades.</li>
                <li><strong>Flow Rate Limitations:</strong> The amount of hot water a tankless heater can produce at any given time is limited. Running multiple hot water appliances simultaneously can be an issue.</li>
              </ul>

              <h2>Which One is Right for You?</h2>
              <p>The best choice depends on your family's needs, your budget, and your long-term goals.</p>
              <ul>
                <li>A <strong>tank water heater</strong> might be the right choice if you have a smaller budget and your hot water needs are moderate.</li>
                <li>A <strong>tankless water heater</strong> is a great investment if you're looking for long-term energy savings, have a high demand for hot water, and can afford the higher upfront cost.</li>
              </ul>

              <p>If you're still unsure, the experts at <Link href="/contact" className="text-brand-red hover:text-brand-red-dark font-semibold">H2O Plumbing</Link> can help. We can assess your home's specific needs and provide a professional recommendation. Contact us today for a consultation!</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url('/images/Work Van Good Image.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/20 text-white mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 uppercase">
                Ready to Upgrade Your Water Heater?
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Let our experts help you choose the perfect water heater for your home. We offer <strong className="text-brand-red">free consultations</strong> and professional installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  Get Free Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-red px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  <Wrench className="w-5 h-5" />
                  Call {BUSINESS_DATA.phone}
                </a>
              </div>
              <p className="text-sm text-slate-400">
                Expert installation • Warranty included • Family-Owned Since {BUSINESS_DATA.established}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


