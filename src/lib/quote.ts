export interface QuickQuotePayload {
  name: string;
  phone: string;
  service: string;
}

export async function submitQuickQuote({ name, phone, service }: QuickQuotePayload) {
  const payload = {
    name,
    email: 'lead@placeholder.local',
    phone,
    services: [service || 'unspecified'],
    description: `Quick lead from hero for ${service}`,
  };
  const res = await fetch('/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Quote request failed');
  return res.json().catch(() => ({}));
}
