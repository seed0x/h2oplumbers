import nodemailer from 'nodemailer'

export interface SendEmailOptions {
  to: string | string[]
  subject: string
  text?: string
  html?: string
  from?: string
}

let transporter: nodemailer.Transporter | null = null

function ensureTransporter() {
  if (transporter) return transporter
  const host = process.env.SMTP_HOST || process.env.EMAIL_SERVER_HOST
  const portStr = process.env.SMTP_PORT || process.env.EMAIL_SERVER_PORT
  if (!host || !portStr) {
    console.warn('Email disabled: missing SMTP host/port')
    return null
  }
  transporter = nodemailer.createTransport({
    host,
    port: parseInt(portStr, 10) || 587,
    secure: (parseInt(portStr || '0', 10) === 465),
    auth: (process.env.SMTP_USER && process.env.SMTP_PASS) ? {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    } : (process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD) ? {
      user: process.env.EMAIL_SERVER_USER!,
      pass: process.env.EMAIL_SERVER_PASSWORD!,
    } : undefined,
  })
  return transporter
}

export async function sendEmail(opts: SendEmailOptions) {
  const tx = ensureTransporter()
  if (!tx) return { sent: false, reason: 'not-configured' }
  try {
    const info = await tx.sendMail({
      from: opts.from || process.env.FROM_EMAIL || process.env.EMAIL_FROM || 'no-reply@localhost',
      to: opts.to,
      subject: opts.subject,
      text: opts.text || opts.html?.replace(/<[^>]+>/g, '') || '',
      html: opts.html,
    })
    return { sent: true, id: info.messageId }
  } catch (e) {
    console.error('Email send error:', e)
    return { sent: false, reason: 'error' }
  }
}

interface BookingConfirmationData {
  customerEmail: string
  customerName: string
  appointment: {
    id: string
    scheduledAt: Date
    address: string
    service: {
      name: string
      description: string
    }
  }
}

export async function sendBookingConfirmation(data: BookingConfirmationData) {
  const { customerEmail, customerName, appointment } = data
  await sendEmail({
    to: customerEmail,
    subject: 'Appointment Confirmation - H2O Plumbing',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Appointment Confirmed</h2>
        
        <p>Dear ${customerName},</p>
        
        <p>Your plumbing appointment has been confirmed. Here are the details:</p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Appointment Details</h3>
          <p><strong>Service:</strong> ${appointment.service.name}</p>
          <p><strong>Date & Time:</strong> ${appointment.scheduledAt.toLocaleDateString()} at ${appointment.scheduledAt.toLocaleTimeString()}</p>
          <p><strong>Address:</strong> ${appointment.address}</p>
          <p><strong>Appointment ID:</strong> ${appointment.id}</p>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin-top: 0; color: #92400e;">Important Information</h4>
          <ul style="margin-bottom: 0;">
            <li>Our technician will arrive during the scheduled time window</li>
            <li>Please ensure someone 18+ is available to provide access</li>
            <li>We'll call 15-30 minutes before arrival</li>
            <li>Payment is due upon completion of service</li>
          </ul>
        </div>
        
        <p>If you need to reschedule or have questions, please call us at <strong>${process.env.BUSINESS_PHONE}</strong>.</p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        
        <p style="color: #6b7280; font-size: 14px;">
          H2O Plumbing<br>
          ${process.env.BUSINESS_EMAIL}<br>
          ${process.env.BUSINESS_PHONE}
        </p>
      </div>
    `,
  })
}

export async function sendQuoteEmail(data: {
  customerEmail: string
  customerName: string
  quote: {
    items: Array<{ service: string; price: number }>
    total: number
    validUntil: Date
  }
}) {
  const { customerEmail, customerName, quote } = data

  const itemsHtml = quote.items.map(item => 
    `<tr>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${item.service}</td>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: right;">$${item.price.toFixed(2)}</td>
    </tr>`
  ).join('')

  await sendEmail({
    to: customerEmail,
    subject: 'Your Plumbing Quote - H2O Plumbing',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Your Plumbing Quote</h2>
        
        <p>Dear ${customerName},</p>
        
        <p>Thank you for your interest in our plumbing services. Here's your personalized quote:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background: #f9fafb;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">Service</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #e5e7eb;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
            <tr style="background: #f3f4f6; font-weight: bold;">
              <td style="padding: 12px; border-top: 2px solid #e5e7eb;">Total</td>
              <td style="padding: 12px; border-top: 2px solid #e5e7eb; text-align: right;">$${quote.total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        
        <p><strong>Quote valid until:</strong> ${quote.validUntil.toLocaleDateString()}</p>
        
        <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Ready to schedule?</strong> Call us at ${process.env.BUSINESS_PHONE} or book online.</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        
        <p style="color: #6b7280; font-size: 14px;">
          H2O Plumbing<br>
          ${process.env.BUSINESS_EMAIL}<br>
          ${process.env.BUSINESS_PHONE}
        </p>
      </div>
    `,
  })
}


