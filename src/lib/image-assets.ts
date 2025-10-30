// Centralized image asset configuration for easy management
// Following business-data.ts pattern for consistency

export const IMAGE_ASSETS = {
  // Company logos - match existing logo.tsx structure
  logos: {
    main: '/images/logos/acp-logo.png',
    white: '/images/logos/acp-logo-white.png',
    monochrome: '/images/logos/acp-logo.png',
    icon: '/images/logos/acp-logo.png',
    animated: '/images/logos/acp-logo.png'
  },

  // Fleet and vehicles - use available images
  fleet: {
    mainVan: '/images/vbg.jpg',
    truck: '/images/vbg.jpg',
    // Fallback options for easy swapping
    serviceTruck: '/images/fleet/jim-utton-journeyman-plumber.jpg' // if moved to fleet folder
  },

  // Team photos - match existing file structure
  team: {
    // Using root images directory where files currently exist
    josh: '/images/josh-veach.jpg',
    ron: '/images/ron-veach.jpg',
    // Alternative paths if moved to team directory
    teamPhoto: '/images/team/Allcountyteam.jpg',
    fieldSupport: '/images/team/team-field-support.jpg',
    familyTeam: '/images/family/family-Allcountyteam.webp'
  },

  // Family/about photos
  family: {
    veachFamily: '/images/family/veach-family.jpg',
    familyTeam: '/images/family/family-Allcountyteam.webp',
    familyTechnicians: '/images/family/family-technicans.jpg',
    boys: '/images/family/family-technicans.jpg'
  },

  // Job/work examples
  jobs: {
    waterHeaterVancouver: '/images/jobs/job-water-heater-vancouver-09-2024.jpg',
    newConstructionRidgefield: '/images/jobs/job-newconstruction-ridgefield-4-23.jpg',
    codeeWork: '/images/work/all_county_plumbing_codee.jpg'
  },

  // Service icons - SVG icons for services
  services: {
    drainCleaning: '/images/service-drain-cleaning-icon.svg',
    emergency: '/images/service-emergency-icon.svg',
    inspection: '/images/service-inspection-icon.svg',
    installation: '/images/service-installation-icon.svg',
    repair: '/images/service-repair-icon.svg',
    waterHeater: '/images/service-water-heater-icon.svg'
  },

  // Background and decorative images
  backgrounds: {
    heroPattern: '/images/hero-background-pattern.svg'
  },

  // Social media and branding
  social: {
    facebook: '/facebook-logo.svg',
    google: '/google-logo.svg'
  },

  // Fallback images for error states
  fallbacks: {
    placeholder: '/images/family/veach-family.jpg',
    teamPlaceholder: '/images/team/Allcountyteam.jpg',
    servicePlaceholder: '/images/work/all_county_plumbing_codee.jpg'
  }
};

// Helper functions for easy image management
export const getImage = {
  logo: (variant: keyof typeof IMAGE_ASSETS.logos = 'main') => IMAGE_ASSETS.logos[variant],
  team: (member: keyof typeof IMAGE_ASSETS.team) => IMAGE_ASSETS.team[member],
  fleet: (vehicle: keyof typeof IMAGE_ASSETS.fleet = 'mainVan') => IMAGE_ASSETS.fleet[vehicle],
  service: (type: keyof typeof IMAGE_ASSETS.services) => IMAGE_ASSETS.services[type],
  job: (project: keyof typeof IMAGE_ASSETS.jobs) => IMAGE_ASSETS.jobs[project],
  family: (photo: keyof typeof IMAGE_ASSETS.family) => IMAGE_ASSETS.family[photo]
};

// Image optimization settings - Next.js Image component defaults
export const IMAGE_SETTINGS = {
  quality: 85,
  formats: ['webp', 'avif'],
  sizes: {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
    team: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',
    service: '(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px',
    thumbnail: '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px'
  },
  priority: {
    hero: true,
    logo: true,
    aboveFold: true,
    lazy: false
  }
};

// Alt text templates for accessibility
export const ALT_TEXTS = {
  logo: 'H2O Plumbing LLC - Professional Plumbing Services',
  fleet: {
    van: 'H2O Plumbing service van ready for residential and commercial plumbing calls',
    truck: 'H2O Plumbing work truck equipped for major plumbing projects'
  },
  team: {
    josh: 'Josh Veach - Licensed Plumber at H2O Plumbing',
    ron: 'Ron Veach - Owner and Master Plumber at H2O Plumbing',
    family: 'The Veach family team at H2O Plumbing LLC'
  },
  services: {
    drainCleaning: 'Drain cleaning service icon',
    emergency: 'Emergency plumbing service icon',
    waterHeater: 'Water heater repair service icon',
    installation: 'Plumbing installation service icon'
  }
};


