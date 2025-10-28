import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | All County Plumbing',
  description: 'All County Plumbing privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or use our services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">This page will outline how we collect, use, and protect user information. Detailed policy content forthcoming.</p>
    </div>
  );
}
