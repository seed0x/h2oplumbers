import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | H2O Plumbing',
  description: 'Terms and conditions for H2O Plumbing services. View our service terms, warranties, disclaimers, and conditions of use.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Terms & Conditions</h1>
      <p className="text-gray-700 mb-4">Standard service terms, warranties, disclaimers, and usage conditions will be published here.</p>
    </div>
  );
}


