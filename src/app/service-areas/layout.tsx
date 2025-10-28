import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas | H2O Plumbing | Southwest Washington',
  description: 'Professional plumbing services throughout Southwest Washington including Vancouver, Battle Ground, Camas, Washougal, Ridgefield, La Center, Woodland, and Longview.',
  keywords: 'plumber Vancouver WA, plumber Battle Ground, plumber Camas, plumber Washougal, Southwest Washington plumber, Clark County plumber, Cowlitz County plumber',
}

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


