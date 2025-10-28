/**
 * Fixture Pricing Configuration
 * 
 * Centralized pricing for all plumbing fixtures.
 * Update prices here to reflect changes across all pages.
 */

export interface FixtureItem {
  name: string;
  price: string;
  description: string;
}

export interface FixtureCategory {
  category: string;
  items: FixtureItem[];
}

/**
 * All fixture pricing
 * Update these prices to change pricing across the entire site
 */
export const fixturePricing: FixtureCategory[] = [
  {
    category: 'Kitchen Fixtures',
    items: [
      { 
        name: 'InstaHot Installation', 
        price: 'Starting at $350', 
        description: 'Professional instant hot water dispenser installation with proper water line connections' 
      },
      { 
        name: 'Kitchen Faucets', 
        price: 'Starting at $120', 
        description: 'Single handle, pull-down, pull-out, and commercial-style kitchen faucets' 
      },
      { 
        name: 'Garbage Disposals', 
        price: 'Starting at $200', 
        description: '1/2 HP to 1 HP disposal installation with proper mounting and connections' 
      },
      { 
        name: 'Water Filters', 
        price: 'Starting at $150', 
        description: 'Under-sink filters, whole-house systems, and reverse osmosis installations' 
      }
    ]
  },
  {
    category: 'Bathroom Fixtures',
    items: [
      { 
        name: 'Toilets', 
        price: 'Starting at $250', 
        description: 'Standard, comfort height, dual-flush, and smart toilet installations' 
      },
      { 
        name: 'Bathroom Sinks', 
        price: 'Starting at $160', 
        description: 'Pedestal, vessel, undermount, and vanity top sinks' 
      },
      { 
        name: 'Bathroom Faucets', 
        price: 'Starting at $100', 
        description: 'Single handle, widespread, and waterfall bathroom faucets' 
      },
      { 
        name: 'Shower Heads', 
        price: 'Starting at $80', 
        description: 'Rain heads, handheld, multi-function, and luxury shower systems' 
      }
    ]
  },
  {
    category: 'Bathing Fixtures',
    items: [
      { 
        name: 'Bathtubs', 
        price: 'Starting at $800', 
        description: 'Alcove, freestanding, corner, and whirlpool tub installations' 
      },
      { 
        name: 'Shower Systems', 
        price: 'Starting at $600', 
        description: 'Complete shower enclosures, tile surrounds, and glass door systems' 
      },
      { 
        name: 'Tub/Shower Combos', 
        price: 'Starting at $700', 
        description: 'One-piece and multi-piece tub and shower combinations' 
      },
      { 
        name: 'Steam Showers', 
        price: 'Starting at $2,500', 
        description: 'Luxury steam shower systems with digital controls' 
      }
    ]
  }
];

/**
 * Helper functions
 */
export const getFixturesByCategory = (category: string): FixtureItem[] => {
  const fixtureCategory = fixturePricing.find(cat => cat.category === category);
  return fixtureCategory?.items || [];
};

export const getFixtureByName = (name: string): FixtureItem | undefined => {
  for (const category of fixturePricing) {
    const fixture = category.items.find(item => item.name === name);
    if (fixture) return fixture;
  }
  return undefined;
};

export const getAllFixtures = (): FixtureCategory[] => {
  return fixturePricing;
};


