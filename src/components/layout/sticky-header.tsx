'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Menu, Phone, Mail, MapPin, Clock, Shield, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contactInfo } from '@/config/site'
import { cn } from '@/lib/utils'
import { Logo } from '../ui/logo'
import { BUSINESS_DATA } from '@/lib/business-data'

export function StickyHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  // Store refs to dropdown trigger buttons for returning focus when closing via Escape
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  // Store refs to menu item anchors for each dropdown to enable roving focus with arrow keys
  const menuItemRefs = useRef<Record<string, HTMLAnchorElement[]>>({})
  const headerRef = useRef<HTMLElement>(null)
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const [topBarHeight, setTopBarHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        setScrolled(window.scrollY > headerRef.current.offsetTop);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const topBar = document.getElementById('top-info-bar');
    if (topBar) {
      setTopBarHeight(topBar.offsetHeight);
    }
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [scrolled]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't close dropdowns if mobile menu is open - let mobile menu handle its own clicks
      if (menuOpen) return;
      
      // Check if click is outside all dropdowns
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => !ref || !ref.contains(e.target as Node)
      );
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (openDropdown) {
          // Return focus to the trigger that opened the menu
            triggerRefs.current[openDropdown]?.focus()
        }
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey as any);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey as any);
    };
  }, [openDropdown, menuOpen]);

  // Focus first item when a dropdown opens
  useEffect(() => {
    if (openDropdown) {
      const first = menuItemRefs.current[openDropdown]?.[0]
      if (first) {
        // Delay to ensure elements are rendered
        setTimeout(() => first.focus(), 0)
      }
    }
  }, [openDropdown])

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, label: string) => {
    if (['Enter', ' '].includes(e.key)) {
      e.preventDefault()
      setOpenDropdown(prev => prev === label ? null : label)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpenDropdown(label)
    } else if (e.key === 'Escape') {
      setOpenDropdown(null)
    }
  }

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, label: string) => {
    if (!openDropdown) return
    const items = menuItemRefs.current[label] || []
    if (!items.length) return
    const currentIndex = items.findIndex(el => el === document.activeElement)
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIndex = (currentIndex + 1) % items.length
      items[nextIndex].focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prevIndex = (currentIndex - 1 + items.length) % items.length
      items[prevIndex].focus()
    } else if (e.key === 'Home') {
      e.preventDefault(); items[0].focus()
    } else if (e.key === 'End') {
      e.preventDefault(); items[items.length - 1].focus()
    } else if (e.key === 'Escape') {
      e.preventDefault(); setOpenDropdown(null); triggerRefs.current[label]?.focus()
    } else if (e.key === 'Tab') {
      // Close on tab to allow normal navigation sequence
      setOpenDropdown(null)
    }
  }

  const navItems = [
    { href: '/', label: 'Home' },
    {
      label: 'Services',
      children: [
        { href: '/services', label: 'All Services' },
        { href: '/services/emergency-plumbing', label: 'Same-Day Service' },
        { href: '/services/drain-cleaning', label: 'Drain Cleaning' },
        { href: '/services/water-heater-repair', label: 'Water Heater Service' },
        { href: '/services/repipe', label: 'Repipe Services' },
        { href: '/services/camera-scope-inspections', label: 'Camera Inspection' },
        { href: '/services/fixture-installation', label: 'Fixture Installation' },
        { href: '/services/sewer-line-repair', label: 'Sewer Line Repair' },
        { href: '/residential', label: 'Residential Services' },
        { href: '/commercial', label: 'Commercial Plumbing' },
        { href: '/new-construction', label: 'New Construction' },
        { href: '/tenant-improvements', label: 'Tenant Improvements' },
      ],
    },
    {
      label: 'Service Areas',
      children: [
        { href: '/service-areas/vancouver-wa-plumber', label: 'Vancouver' },
        { href: '/service-areas/battle-ground-plumber', label: 'Battle Ground' },
        { href: '/service-areas/camas-plumber', label: 'Camas' },
        { href: '/service-areas/washougal-plumber', label: 'Washougal' },
        { href: '/service-areas/ridgefield-plumber', label: 'Ridgefield' },
        { href: '/service-areas/la-center-plumber', label: 'La Center' },
        { href: '/service-areas/woodland-plumber', label: 'Woodland' },
        { href: '/service-areas/longview-plumber', label: 'Longview' },
      ],
    },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/coupons', label: 'Coupons' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out',
          scrolled ? 'shadow-lg' : ''
        )}
        style={{ top: `${topBarHeight}px` }}
      >
        <div
          className={cn(
            'bg-white transition-all duration-300 ease-in-out',
            scrolled ? 'py-2' : 'py-3'
          )}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center flex-shrink-0">
                <Logo />
              </div>
              <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-1 justify-center" aria-label="Main navigation">
              {navItems.map((item) => (
                item.children ? (
                  <div key={item.label} className="relative" ref={(el) => { dropdownRefs.current[item.label] = el }}>
                    <button
                      ref={(el) => { triggerRefs.current[item.label] = el }}
                      id={`trigger-${item.label}`}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      aria-controls={`menu-${item.label}`}
                      onKeyDown={(e) => handleTriggerKeyDown(e, item.label)}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex items-center text-sm lg:text-base font-medium text-gray-700 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-2 py-1 whitespace-nowrap"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        id={`menu-${item.label}`}
                        role="menu"
                        aria-labelledby={`trigger-${item.label}`}
                        className="absolute top-full mt-2 w-56 bg-white shadow-lg rounded-md py-2 ring-1 ring-black/5 focus:outline-none"
                        onKeyDown={(e) => handleMenuKeyDown(e, item.label)}
                      >
                        {item.children.map((child, idx) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            role="menuitem"
                            ref={(el) => {
                              if (!menuItemRefs.current[item.label]) menuItemRefs.current[item.label] = []
                              if (el) menuItemRefs.current[item.label][idx] = el
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.label} href={item.href || '#'} className="text-sm lg:text-base font-medium text-gray-700 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-2 py-1 whitespace-nowrap">
                    {item.label}
                  </Link>
                )
              ))}
              </nav>
              <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
                <a 
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className={cn(
                    "hidden md:flex items-center gap-1.5 lg:gap-2 text-slate-700 hover:text-brand-red transition-colors font-semibold rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 whitespace-nowrap",
                    scrolled ? "text-xs lg:text-sm" : "text-sm"
                  )}
                >
                  <Phone className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-brand-red flex-shrink-0" />
                  <span className="hidden xl:inline">{BUSINESS_DATA.phone}</span>
                  <span className="xl:hidden">Call</span>
                </a>
                <Link 
                  href="/booking" 
                  className={cn(
                    "inline-flex items-center justify-center bg-brand-red text-white rounded-lg font-semibold hover:bg-brand-red-dark transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap",
                    scrolled ? "px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm" : "px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 text-xs sm:text-sm"
                  )}
                >
                  <span className="hidden sm:inline">Book</span>
                  <span className="sm:hidden">Book</span>
                </Link>
                <button
                  className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={menuOpen}
                >
                  <Menu className="h-6 w-6 text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div className="bg-white w-full h-full overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <Logo />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-200 last:border-0">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-4 text-left font-medium text-gray-900"
                      >
                        {item.label}
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.label ? "rotate-180" : ""
                        )} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pb-2">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block py-2 pl-4 text-gray-600 hover:text-primary"
                              onClick={(e) => {
                                console.log('Dropdown link clicked:', child.href);
                                // Let the default navigation happen
                                setTimeout(() => {
                                  setMenuOpen(false);
                                  setOpenDropdown(null);
                                }, 100);
                              }}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="block py-4 text-gray-900 hover:text-primary font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="flex items-center justify-center gap-3 py-4 px-4 bg-success-50 border border-success-200 rounded-xl text-success-700 font-bold text-lg hover:bg-success-100 transition-colors shadow-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call {BUSINESS_DATA.phone}</span>
                </a>
                <Link
                  href="/booking"
                  className="flex items-center justify-center gap-2 py-4 px-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Service Online
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from being hidden behind the fixed header */}
      <div style={{ paddingTop: `${topBarHeight + headerHeight}px` }} />
    </>
  );
}
