import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactFormEmail } from '@/lib/email';
import { validateHoneypot } from '@/lib/security';
import { prisma } from '@/lib/prisma';

// Base schema for all form types
const baseContactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(5, "Email address is too short")
    .max(100, "Email address is too long"),
  phone: z.string()
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number is too long")
    .regex(/^[\+]?[1-9]?[\d\s\-\(\)\.]{7,20}$/, "Please enter a valid phone number"),
  formType: z.enum(['service', 'emergency', 'construction', 'general']).default('general'),
  website: z.string().optional() // Honeypot field
});

// Form type specific schemas
const serviceFormSchema = baseContactSchema.extend({
  address: z.string().min(5, "Address is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  description: z.string().min(10, "Please describe the issue").max(2000),
  preferredTime: z.string().optional(),
  urgency: z.enum(['LOW', 'NORMAL', 'HIGH']).default('NORMAL'),
});

const emergencyFormSchema = baseContactSchema.extend({
  address: z.string().min(5, "Address is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  description: z.string().min(10, "Please describe the emergency").max(2000),
  severity: z.enum(['LOW', 'MODERATE', 'HIGH', 'CRITICAL']).default('HIGH'),
});

const constructionFormSchema = baseContactSchema.extend({
  projectAddress: z.string().min(5, "Project address is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  builderName: z.string().optional(),
  builderContact: z.string().optional(),
  projectType: z.string().min(2, "Project type is required"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  description: z.string().min(10, "Please describe the project").max(2000),
});

const generalFormSchema = baseContactSchema.extend({
  subject: z.string().min(5, "Subject is required").optional(),
  message: z.string().min(10, "Message must be at least 10 characters long").max(2000),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    
    // Honeypot validation (anti-spam)
    if (!validateHoneypot(json)) {
      return NextResponse.json(
        { message: 'Invalid submission detected.' }, 
        { status: 429 }
      );
    }

    const { formType: inputFormType = 'general' } = json;

    // Validate based on form type
    let validationResult;
    switch (inputFormType) {
      case 'service':
        validationResult = serviceFormSchema.safeParse(json);
        break;
      case 'emergency':
        validationResult = emergencyFormSchema.safeParse(json);
        break;
      case 'construction':
        validationResult = constructionFormSchema.safeParse(json);
        break;
      case 'general':
      default:
        validationResult = generalFormSchema.safeParse(json);
        break;
    }
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          message: 'Please correct the errors in your form submission.',
          issues: validationResult.error.issues.map(issue => ({
            path: issue.path,
            message: issue.message,
            code: issue.code
          }))
        }, 
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;
    const { name, email, phone, formType, ...formData } = validatedData;

    // Rate limiting (in-memory) - basic protection
    // @ts-ignore
    global.__contactHits = global.__contactHits || [];
    // @ts-ignore
    const hits: Array<{ t: number; ip: string }> = global.__contactHits;
    const now = Date.now();
    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
    
    // Clean up old entries (older than 5 minutes)
    while (hits.length && now - hits[0].t > 5 * 60 * 1000) hits.shift();
    
    // Check rate limit (max 5 submissions per IP in 5 minutes)
    const recentFromIp = hits.filter(h => h.ip === ip).length;
    if (recentFromIp > 5) {
      return NextResponse.json({ 
        message: 'Too many submissions. Please wait a few minutes before trying again.' 
      }, { status: 429 });
    }
    
    hits.push({ t: now, ip });

    // Ensure database connection
    await prisma.$connect();
    
    // Save to database and get the result
    const result = await saveFormSubmission(validatedData, req);

    // Send email notification
    try {
      await sendFormNotification(formType, validatedData, result.leadId);
    } catch (emailError) {
      console.error('Contact form email error:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { 
        message: getSuccessMessage(formType),
        success: true,
        id: result.leadId
      }, 
      { status: 200 }
    );

  } catch (err: any) {
    console.error('Contact form submission error:', err);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { 
        message: 'We apologize, but there was an error processing your request. Please try again or call us directly at (360) 883-2506.',
        error: 'internal_server_error'
      }, 
      { status: 500 }
    );
  }
}

// Helper function to save form submission to database
async function saveFormSubmission(data: any, req: Request) {
  const { name, email, phone, formType, ...formData } = data;
  
  // Get request metadata
  const userAgent = req.headers.get('user-agent') || '';
  const referer = req.headers.get('referer') || '';
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';

  // Create or find customer
  const customer = await prisma.customer.upsert({
    where: { email },
    update: {
      firstName: name.split(' ')[0],
      lastName: name.split(' ').slice(1).join(' ') || '',
      phone,
      updatedAt: new Date(),
    },
    create: {
      firstName: name.split(' ')[0],
      lastName: name.split(' ').slice(1).join(' ') || '',
      email,
      phone,
      zipCode: formData.zipCode || null,
      source: getSource(referer),
    },
  });

  // Create lead based on form type
  let leadData: any = {
    customerId: customer.id,
    name,
    email,
    phone,
    status: 'NEW',
    source: getSource(referer),
    metadata: {
      formType,
      userAgent,
      referer,
      ipAddress: ip,
      submittedAt: new Date().toISOString(),
      ...formData
    },
  };

  switch (formType) {
    case 'service':
      leadData = {
        ...leadData,
        description: `Service Request: ${formData.description}`,
        urgency: formData.urgency || 'NORMAL',
        zipCode: formData.zipCode,
        address: formData.address,
        preferredTime: formData.preferredTime,
      };
      break;

    case 'emergency':
      leadData = {
        ...leadData,
        description: `EMERGENCY: ${formData.description}`,
        urgency: 'URGENT',
        zipCode: formData.zipCode,
        address: formData.address,
      };

      // Also create emergency queue entry
      await prisma.emergencyQueue.create({
        data: {
          customerId: customer.id,
          name,
          phone,
          email,
          address: formData.address,
          city: 'Vancouver', // Default, could be parsed from address
          zipCode: formData.zipCode,
          description: formData.description,
          severity: formData.severity || 'HIGH',
          status: 'PENDING',
        },
      });
      break;

    case 'construction':
      const budgetAmount = formData.budget
        ? parseFloat(formData.budget.replace(/[^0-9.]/g, ''))
        : null;

      leadData = {
        ...leadData,
        description: `Construction Project: ${formData.description}`,
        urgency: 'NORMAL',
        zipCode: formData.zipCode,
        address: formData.projectAddress,
        budget: budgetAmount,
      };
      break;

    case 'general':
    default:
      leadData = {
        ...leadData,
        description: formData.subject ? `${formData.subject}: ${formData.message}` : formData.message,
        urgency: 'LOW',
      };
      break;
  }

  const lead = await prisma.lead.create({
    data: leadData,
  });

  return { leadId: lead.id, customerId: customer.id };
}

// Helper function to determine traffic source
function getSource(referer: string): string {
  if (!referer) return 'direct';
  
  try {
    const url = new URL(referer);
    const hostname = url.hostname.toLowerCase();
    
    if (hostname.includes('google')) return 'google';
    if (hostname.includes('facebook')) return 'facebook';
    if (hostname.includes('yelp')) return 'yelp';
    if (hostname.includes('nextdoor')) return 'nextdoor';
    
    return 'website';
  } catch {
    return 'unknown';
  }
}

// Helper function to get success message based on form type
function getSuccessMessage(formType: string): string {
  switch (formType) {
    case 'emergency':
      return 'Emergency request received! We will contact you immediately. If this is a life-threatening situation, please call 911.';
    case 'service':
      return 'Service request received! We will contact you within 2 hours during business hours to schedule your appointment.';
    case 'construction':
      return 'Construction inquiry received! Our project manager will review your request and contact you within 24 hours.';
    case 'general':
    default:
      return 'Thank you for your message! We have received your request and will get back to you within 2 hours during business hours.';
  }
}

// Helper function to send form notifications
async function sendFormNotification(formType: string, data: any, leadId: string) {
  const { name, email, phone, ...formData } = data;
  
  // Extract message based on form type
  let message = '';
  if (formType === 'general') {
    message = formData.message || '';
  } else if (formType === 'emergency' || formType === 'service') {
    message = formData.description || '';
  } else if (formType === 'construction') {
    message = `Project: ${formData.projectType || 'N/A'}\n${formData.description || ''}`;
  }
  
  const emailResult = await sendContactFormEmail({
    name,
    email,
    phone,
    message,
    formType,
    leadId
  });

  if (!emailResult.sent) {
    console.error('Email sending failed:', emailResult.reason);
  }
}



