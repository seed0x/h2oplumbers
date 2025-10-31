import { Resend } from 'resend';
import { BUSINESS_DATA } from './business-data';

let resend: Resend | null = null;

function getResendClient() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(opts: SendEmailOptions) {
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY not configured');
    return { sent: false, reason: 'not-configured' };
  }

  try {
    const resendClient = getResendClient();
    if (!resendClient) {
      console.error('❌ Failed to initialize Resend client');
      return { sent: false, reason: 'client-init-failed' };
    }

    const from = opts.from || process.env.EMAIL_FROM || 'onboarding@resend.dev';
    
    console.log('📧 Sending email via Resend:', {
      from,
      to: opts.to,
      subject: opts.subject
    });

    const { data, error } = await resendClient.emails.send({
      from: `${process.env.EMAIL_FROM_NAME || 'H2O Plumbers'} <${from}>`,
      to: Array.isArray(opts.to) ? opts.to : [opts.to],
      subject: opts.subject,
      html: opts.html,
    });

    if (error) {
      console.error('❌ Resend email error:', error);
      return { sent: false, reason: 'error', error: error.message };
    }

    console.log('✅ Email sent successfully via Resend! ID:', data?.id);
    return { sent: true, id: data?.id };
  } catch (error: any) {
    console.error('❌ Resend email error:', error);
    return { sent: false, reason: 'error', error: error.message };
  }
}

// Contact form notification email
export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  formType?: string;
  leadId?: string;
}) {
  const { name, email, phone, message, formType = 'general', leadId } = data;

  return sendEmail({
    to: process.env.CONTACT_EMAIL || process.env.NOTIFICATION_EMAIL || 'office@h2oplumbingllc.net',
    subject: `🔔 New ${formType.toUpperCase()} Form Submission - ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🔧 New Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 14px;">${BUSINESS_DATA.name}</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
            <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <h2 style="color: #dc2626; margin-top: 0; font-size: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Customer Information</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; width: 120px; color: #64748b;">Name:</td>
                  <td style="padding: 12px 0; color: #1e293b;">${name}</td>
                </tr>
                <tr style="background: #f8fafc;">
                  <td style="padding: 12px 0; font-weight: bold; color: #64748b;">Phone:</td>
                  <td style="padding: 12px 0;"><a href="tel:${phone}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #64748b;">Email:</td>
                  <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></td>
                </tr>
                ${leadId ? `
                <tr style="background: #f8fafc;">
                  <td style="padding: 12px 0; font-weight: bold; color: #64748b;">Lead ID:</td>
                  <td style="padding: 12px 0; color: #1e293b; font-family: monospace;">${leadId}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <h2 style="color: #dc2626; margin-top: 0; font-size: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Message</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #dc2626;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.8; color: #1e293b;">${message}</p>
              </div>
            </div>

            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin-top: 20px;">
              <h3 style="color: #92400e; margin-top: 0; font-size: 16px; display: flex; align-items: center;">
                ⚡ Quick Actions
              </h3>
              <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #92400e;">
                <li style="margin-bottom: 8px;">Call <a href="tel:${phone}" style="color: #dc2626; font-weight: 600;">${phone}</a> within 15 minutes</li>
                <li style="margin-bottom: 8px;">Send confirmation email to <a href="mailto:${email}" style="color: #dc2626;">${email}</a></li>
                <li>Log interaction in CRM</li>
              </ul>
            </div>
          </div>

          <div style="background: #1e293b; color: white; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
            <p style="margin: 0; font-size: 12px; opacity: 0.8;">
              ${BUSINESS_DATA.name} Contact Form<br>
              Received: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}<br>
              <a href="tel:${BUSINESS_DATA.phoneRaw}" style="color: #60a5fa; text-decoration: none;">${BUSINESS_DATA.phone}</a> • 
              <a href="mailto:${BUSINESS_DATA.email}" style="color: #60a5fa; text-decoration: none;">${BUSINESS_DATA.email}</a>
            </p>
          </div>
        </body>
      </html>
    `,
  });
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
        
        <p>If you need to reschedule or have questions, please call us at <strong>${BUSINESS_DATA.phone}</strong>.</p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        
        <p style="color: #6b7280; font-size: 14px;">
          ${BUSINESS_DATA.name}<br>
          ${BUSINESS_DATA.email}<br>
          ${BUSINESS_DATA.phone}
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


