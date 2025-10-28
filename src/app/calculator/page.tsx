import { Metadata } from 'next';
import { Suspense } from 'react'
import { LazyCostCalculator, ComponentSkeleton } from '../../components/performance/dynamic-components'

export const metadata: Metadata = {
  title: 'Plumbing Cost Calculator | All County Plumbing',
  description: 'Get an instant estimate for your plumbing project. Our cost calculator helps you budget for repairs, installations, and maintenance services.',
};

export default function CalculatorPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Plumbing Cost Calculator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get an instant estimate for your plumbing project. Select your service type, 
          job complexity, and additional options to see a detailed cost breakdown.
        </p>
      </div>
      
      <Suspense fallback={<ComponentSkeleton className="h-80" />}>
        <LazyCostCalculator />
      </Suspense>
      
      <div className="mt-12 text-center">
        <div className="bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="font-semibold text-lg mb-2">About Our Estimates</h3>
          <p className="text-gray-600 mb-4">
            Our calculator provides accurate estimates based on current market rates and our experience. 
            Final pricing may vary based on actual job conditions and site assessment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="font-semibold text-primary">Licensed & Insured</div>
              <div className="text-sm text-gray-600">Fully licensed plumbers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-primary">Quality Materials</div>
              <div className="text-sm text-gray-600">Premium parts & fixtures</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-primary">1-Year Warranty</div>
              <div className="text-sm text-gray-600">Guaranteed workmanship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
