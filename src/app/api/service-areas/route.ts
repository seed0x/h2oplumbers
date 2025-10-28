import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const serviceAreaCheckSchema = z.object({
  zipCode: z.string().regex(/^\d{5}$/, 'Valid 5-digit ZIP code is required'),
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const zipCode = searchParams.get('zipCode')
    const checkService = searchParams.get('check')

    // Check if specific ZIP code is serviced
    if (checkService === 'true' && zipCode) {
      const validation = serviceAreaCheckSchema.safeParse({ zipCode })
      if (!validation.success) {
        return NextResponse.json(
          { error: 'Invalid ZIP code format' },
          { status: 400 }
        )
      }

      const serviceArea = await prisma.serviceArea.findFirst({
        where: {
          zipCode: zipCode,
          isActive: true,
        },
      })

      const isServiced = !!serviceArea
      
      return NextResponse.json({
        zipCode,
        isServiced,
        serviceArea: isServiced ? {
          city: serviceArea.city,
          state: serviceArea.state,
          county: serviceArea.county,
          travelTime: serviceArea.travelTime,
          surcharge: serviceArea.surcharge ? Number(serviceArea.surcharge) : null,
          emergencyFee: serviceArea.emergencyFee ? Number(serviceArea.emergencyFee) : null,
        } : null,
        message: isServiced 
          ? `We provide service to ${serviceArea.city}, ${serviceArea.state}` 
          : 'Sorry, we do not currently service this area',
      })
    }

    // Get all service areas
    const activeOnly = searchParams.get('active') !== 'false'
    
    const serviceAreas = await prisma.serviceArea.findMany({
      where: activeOnly ? { isActive: true } : {},
      orderBy: [
        { state: 'asc' },
        { city: 'asc' },
        { zipCode: 'asc' },
      ],
    })

    // Group by city for better organization
    type GroupedAreas = Record<string, {
      city: string
      state: string
      county: string | null
      zipCodes: Array<{
        zipCode: string
        travelTime: number | null
        surcharge: number | null
        emergencyFee: number | null
      }>
    }>

    const groupedAreas = serviceAreas.reduce((acc: GroupedAreas, area) => {
      const key = `${area.city}, ${area.state}`
      if (!acc[key]) {
        acc[key] = {
          city: area.city,
          state: area.state,
          county: area.county,
          zipCodes: [],
        }
      }
      acc[key].zipCodes.push({
        zipCode: area.zipCode,
        travelTime: area.travelTime,
        surcharge: area.surcharge ? Number(area.surcharge) : null,
        emergencyFee: area.emergencyFee ? Number(area.emergencyFee) : null,
      })
      return acc
    }, {})

    return NextResponse.json({
      serviceAreas: Object.values(groupedAreas),
      totalZipCodes: serviceAreas.length,
    })

  } catch (error) {
    console.error('Service areas error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // This would be admin-only in a real app
    const body = await request.json()
    
    const serviceAreaSchema = z.object({
      zipCode: z.string().regex(/^\d{5}$/, 'Valid 5-digit ZIP code is required'),
      city: z.string().min(1, 'City is required'),
      state: z.string().length(2, 'State must be 2 characters').default('WA'),
      county: z.string().optional(),
      travelTime: z.number().optional(),
      surcharge: z.number().optional(),
      emergencyFee: z.number().optional(),
      notes: z.string().optional(),
    })

    const data = serviceAreaSchema.parse(body)

    const serviceArea = await prisma.serviceArea.create({
      data: {
        zipCode: data.zipCode,
        city: data.city,
        state: data.state,
        county: data.county,
        travelTime: data.travelTime,
        surcharge: data.surcharge,
        emergencyFee: data.emergencyFee,
        notes: data.notes,
        isActive: true,
      },
    })

    return NextResponse.json({
      success: true,
      serviceArea,
      message: 'Service area added successfully',
    })

  } catch (error) {
    console.error('Create service area error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    // Handle unique constraint violation
    if ((error as any)?.code === 'P2002') {
      return NextResponse.json(
        { error: 'ZIP code already exists in service areas' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


