import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://allcountyplumbing.com${item.href}` })
    }))
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                href="/" 
                className="text-gray-600 hover:text-primary flex items-center"
                aria-label="Home"
              >
                <Home className="w-4 h-4" />
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                {item.href && index < items.length - 1 ? (
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
