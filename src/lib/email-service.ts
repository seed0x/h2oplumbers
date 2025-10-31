// Email notification service for bookings
import nodemailer from 'nodemailer';

interface BookingEmailData {
  bookingId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  city: string;
  description?: string;
  urgency: string;
}

// Create email transporter
function createTransporter() {
  // For development/testing, use a service like Gmail or Outlook
  // For production, use a service like SendGrid, AWS SES, or Mailgun
  
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use App Password for Gmail
      },
    });
  }
  
  // Default SMTP configuration
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

// Send notification to business
export async function sendBusinessNotification(bookingData: BookingEmailData): Promise<boolean> {
  if (!process.env.BUSINESS_EMAIL) {
    console.log('⚠️ No BUSINESS_EMAIL configured - skipping business notification');
    return false;
  }

  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@allcountyplumbing.net',
      to: process.env.BUSINESS_EMAIL,
      subject: `🔧 New Booking Request - ${bookingData.urgency.toUpperCase()} - ${bookingData.bookingId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🔧 New Booking Request</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Booking ID: ${bookingData.bookingId}</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-top: none;">
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <h2 style="color: #dc2626; margin-top: 0;">Customer Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 8px 0;">${bookingData.customerName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${bookingData.customerPhone}">${bookingData.customerPhone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${bookingData.customerEmail}">${bookingData.customerEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Address:</td>
                  <td style="padding: 8px 0;">${bookingData.address}, ${bookingData.city}</td>
                </tr>
              </table>
              
              <h2 style="color: #dc2626; margin-top: 20px;">Service Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px;">Service:</td>
                  <td style="padding: 8px 0;">${bookingData.service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Date:</td>
                  <td style="padding: 8px 0;">${bookingData.preferredDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Time:</td>
                  <td style="padding: 8px 0;">${bookingData.preferredTime}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Urgency:</td>
                  <td style="padding: 8px 0;">
                    <span style="background: ${bookingData.urgency === 'emergency' ? '#dc2626' : bookingData.urgency === 'urgent' ? '#f59e0b' : '#10b981'}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; text-transform: uppercase;">
                      ${bookingData.urgency}
                    </span>
                  </td>
                </tr>
              </table>
              
              ${bookingData.description ? `
                <h2 style="color: #dc2626; margin-top: 20px;">Additional Details</h2>
                <p style="background: #f8fafc; padding: 12px; border-radius: 4px; border-left: 4px solid #dc2626;">${bookingData.description}</p>
              ` : ''}
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #64748b; font-size: 14px;">
                  📧 This notification was sent automatically from your website booking system.<br>
                  🕐 Booking received: ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Business notification sent for booking ${bookingData.bookingId}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send business notification:', error);
    return false;
  }
}

// Send confirmation to customer
export async function sendCustomerConfirmation(bookingData: BookingEmailData): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@allcountyplumbing.net',
      to: bookingData.customerEmail,
      subject: `✅ Booking Confirmation - H2O Plumbing - ${bookingData.bookingId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">✅ Booking Confirmation</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">H2O Plumbing</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-top: none;">
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p>Dear ${bookingData.customerName},</p>
              <p>Thank you for choosing H2O Plumbing! We've received your booking request and will contact you within 2 hours to confirm your appointment.</p>
              
              <h2 style="color: #dc2626;">Your Booking Details</h2>
              <table style="width: 100%; border-collapse: collapse; background: #f8fafc; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 12px; font-weight: bold; background: #e2e8f0; width: 140px;">Booking ID:</td>
                  <td style="padding: 12px;">${bookingData.bookingId}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; background: #e2e8f0;">Service:</td>
                  <td style="padding: 12px;">${bookingData.service}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; background: #e2e8f0;">Preferred Date:</td>
                  <td style="padding: 12px;">${bookingData.preferredDate}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; background: #e2e8f0;">Preferred Time:</td>
                  <td style="padding: 12px;">${bookingData.preferredTime}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; background: #e2e8f0;">Address:</td>
                  <td style="padding: 12px;">${bookingData.address}, ${bookingData.city}</td>
                </tr>
              </table>
              
              <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 16px; margin: 20px 0;">
                <p style="margin: 0; font-weight: bold; color: #92400e;">📞 What happens next?</p>
                <p style="margin: 10px 0 0 0; color: #92400e;">We will call you at ${bookingData.customerPhone} within 2 hours to confirm your appointment time and provide any additional details.</p>
              </div>
              
              <div style="margin: 30px 0;">
                <h3 style="color: #dc2626;">Need immediate assistance?</h3>
                <p style="margin: 10px 0;">
                  📞 <strong>Call us:</strong> <a href="tel:+13608832506" style="color: #dc2626;">(360) 883-2506</a><br>
                  📧 <strong>Email:</strong> <a href="mailto:office@h2oplumbingllc.net" style="color: #dc2626;">office@h2oplumbingllc.net</a>
                </p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="color: #64748b; font-size: 14px; margin: 0;">
                  Thank you for choosing H2O Plumbing!<br>
                  <strong>Licensed & Insured</strong> • <strong>Family Owned Since 2004</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Customer confirmation sent to ${bookingData.customerEmail}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send customer confirmation:', error);
    return false;
  }
}


