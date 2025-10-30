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
    formType: 'general',
    subject: `Quick Quote Request - ${service}`,
    message: `Quick lead from hero form for ${service}`,
    website: '', // Honeypot field
  };
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Quote request failed');
  return res.json().catch(() => ({}));
}


