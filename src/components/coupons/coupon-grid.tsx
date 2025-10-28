"use client";
import React from 'react';

interface Coupon {
  id: string
  title: string
  subtitle: string
  details: string[]
  expires: string
  highlight?: boolean
}

interface Props { coupons: Coupon[] }

export default function CouponGrid({ coupons }: Props) {
  function handlePrint(coupon: Coupon) {
    const win = window.open('', 'PRINT', 'height=600,width=500')
    if (!win) return
    win.document.write(`<html><head><title>${coupon.title} - Coupon</title><style>body{font-family:system-ui,sans-serif;padding:24px;} .coupon{border:2px dashed #C41E3A;padding:24px;border-radius:12px;max-width:420px;margin:0 auto;} h1{margin:0 0 8px;font-size:40px;color:#C41E3A;} h2{margin:0 0 16px;font-size:20px;color:#333;} ul{margin:0 0 16px;padding-left:18px;} li{margin-bottom:4px;} .exp{font-size:12px;color:#555;} button{display:none;}</style></head><body><div class='coupon'><h1>${coupon.title}</h1><h2>${coupon.subtitle}</h2><ul>${coupon.details.map(d => `<li>${d}</li>`).join('')}</ul><p class='exp'>Expires: ${coupon.expires}</p><p class='exp'>Presented at time of service. Not redeemable for cash.</p></div></body></html>`)
    win.document.close();
    win.focus();
    win.print();
    win.close();
  }

  return (
    <div className="coupons-grid grid grid-cols-1 md:grid-cols-3 gap-10">
      {coupons.map(c => (
        <div key={c.id} className={`coupon-card relative flex flex-col rounded-2xl border-2 ${c.highlight ? 'border-primary-500' : 'border-gray-300'} bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden`}>              
          <div className="coupon-header px-6 pt-8 pb-6 border-b bg-gradient-to-br from-gray-50 to-white">
            <h2 className={`text-5xl font-extrabold tracking-tight ${c.highlight ? 'text-primary-500' : 'text-gray-900'}`}>{c.title}</h2>
            <p className="text-lg font-medium text-gray-700 mt-2">{c.subtitle}</p>
          </div>
          <div className="coupon-details px-6 py-6 flex-1">
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              {c.details.map(d => <li key={d}>• {d}</li>)}
            </ul>
            <p className="text-xs text-gray-500">Expires: {c.expires}</p>
            <p className="text-[11px] text-gray-400 mt-1">Must be presented at time of service. Not valid for past work. No cash value.</p>
          </div>
          <div className="px-6 pb-6">
            <button onClick={() => handlePrint(c)} aria-label={`Print coupon ${c.title}`} className="print-coupon w-full rounded-md bg-primary-500 hover:bg-primary-700 text-white font-semibold py-3 text-sm tracking-wide transition-colors">Print Coupon</button>
          </div>
        </div>
      ))}
    </div>
  )
}



