import { Twilio } from 'twilio'

// Optional Twilio client for SMS functionality
const client = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN 
  ? new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    )
  : null

interface SMSMessage {
  to: string
  message: string
}

export async function sendSMSNotification({ to, message }: SMSMessage) {
  if (!client || !process.env.TWILIO_PHONE_NUMBER) {
    console.log('SMS service not configured, skipping SMS notification:', { to, message })
    return { success: false, reason: 'SMS service not configured' }
  }

  try {
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    })
    
    return { success: true, sid: result.sid }
  } catch (error) {
    console.error('SMS sending error:', error)
    return { success: false, error: String(error) }
  }
}

export async function sendBookingReminder(data: {
  customerPhone: string
  customerName: string
  appointmentDate: Date
  serviceName: string
}) {
  const { customerPhone, customerName, appointmentDate, serviceName } = data
  
  const message = `Hi ${customerName}! This is a reminder for your ${serviceName} appointment tomorrow at ${appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}. All County Plumbing will see you then! Call ${process.env.BUSINESS_PHONE} if you need to reschedule.`
  
  return sendSMSNotification({
    to: customerPhone,
    message,
  })
}

export async function sendEmergencyDispatch(data: {
  technicianPhone: string
  customerName: string
  address: string
  issue: string
}) {
  const { technicianPhone, customerName, address, issue } = data
  
  const message = `EMERGENCY DISPATCH: ${customerName} at ${address}. Issue: ${issue}. Please respond ASAP. Call customer or dispatch for details.`
  
  return sendSMSNotification({
    to: technicianPhone,
    message,
  })
}
