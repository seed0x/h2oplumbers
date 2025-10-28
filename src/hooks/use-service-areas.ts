'use client';

import { useState, useEffect } from 'react';

export interface ServiceArea {
  city: string;
  state: string;
  county: string | null;
  zipCodes: Array<{
    zipCode: string;
    travelTime: number | null;
    surcharge: number | null;
    emergencyFee: number | null;
  }>;
}

export interface ServiceAreasResponse {
  serviceAreas: ServiceArea[];
  totalZipCodes: number;
}

export function useServiceAreas() {
  const [serviceAreas, setServiceAreas] = useState<ServiceArea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceAreas = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/service-areas');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch service areas: ${response.status}`);
        }
        
        const data: ServiceAreasResponse = await response.json();
        setServiceAreas(data.serviceAreas || []);
        
      } catch (err) {
        console.error('Error fetching service areas:', err);
        // Don't set error if we have fallback data - fail silently
        // setError(err instanceof Error ? err.message : 'Failed to load service areas');
        
        // Fallback to static data if API fails
        setServiceAreas(getFallbackServiceAreas());
        
      } finally {
        setLoading(false);
      }
    };

    fetchServiceAreas();
  }, []);

  // Extract secondary cities from all ZIP codes (smaller communities)
  const secondaryCities = getSecondaryCities(serviceAreas);

  return { serviceAreas, secondaryCities, loading, error };
}

// Extract smaller communities from service areas
function getSecondaryCities(serviceAreas: ServiceArea[]): string[] {
  // These are smaller communities often served within larger ZIP code areas
  const knownSecondaryCities = [
    'Yacolt', 'Amboy', 'Brush Prairie', 'Hockinson', 'Kalama',
    'Castle Rock', 'Kelso', 'Cathlamet', 'Toutle', 'Ariel',
    'Mount Vista', 'Dollar Corner', 'Salmon Creek', 'Hazel Dell', 'Orchards'
  ];

  // If we have dynamic data, we could extract from ZIP codes or additional fields
  // For now, return the known list but this could be enhanced with database data
  return knownSecondaryCities;
}

// Fallback service areas data (from current hardcoded content)
function getFallbackServiceAreas(): ServiceArea[] {
  return [
    {
      city: 'Vancouver',
      state: 'WA',
      county: 'Clark County',
      zipCodes: [
        { zipCode: '98661', travelTime: 30, surcharge: null, emergencyFee: null },
        { zipCode: '98662', travelTime: 35, surcharge: null, emergencyFee: null },
        { zipCode: '98663', travelTime: 35, surcharge: null, emergencyFee: null },
        { zipCode: '98664', travelTime: 40, surcharge: null, emergencyFee: null },
        { zipCode: '98665', travelTime: 45, surcharge: null, emergencyFee: null },
      ]
    },
    {
      city: 'Battle Ground',
      state: 'WA',
      county: 'Clark County',
      zipCodes: [
        { zipCode: '98604', travelTime: 15, surcharge: null, emergencyFee: null }
      ]
    },
    {
      city: 'Camas',
      state: 'WA',
      county: 'Clark County',
      zipCodes: [
        { zipCode: '98607', travelTime: 25, surcharge: null, emergencyFee: null }
      ]
    },
    {
      city: 'Washougal',
      state: 'WA',
      county: 'Clark County',
      zipCodes: [
        { zipCode: '98671', travelTime: 30, surcharge: null, emergencyFee: null }
      ]
    },
    {
      city: 'Ridgefield',
      state: 'WA',
      county: 'Clark County',
      zipCodes: [
        { zipCode: '98642', travelTime: 25, surcharge: null, emergencyFee: null }
      ]
    },
    {
      city: 'La Center',
      state: 'WA',
      county: 'Clark County',
      zipCodes: [
        { zipCode: '98629', travelTime: 20, surcharge: null, emergencyFee: null }
      ]
    },
    {
      city: 'Woodland',
      state: 'WA',
      county: 'Cowlitz County',
      zipCodes: [
        { zipCode: '98674', travelTime: 35, surcharge: null, emergencyFee: null }
      ]
    },
    {
      city: 'Longview',
      state: 'WA',
      county: 'Cowlitz County',
      zipCodes: [
        { zipCode: '98632', travelTime: 50, surcharge: null, emergencyFee: null }
      ]
    }
  ];
}


