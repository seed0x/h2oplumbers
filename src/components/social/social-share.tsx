'use client'

import React, { useState } from 'react'
import { Facebook, Twitter, Linkedin, Link, Share2, Mail, MessageCircle } from 'lucide-react'
import { MasterButton } from '@/components/ui/master-button'

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
  hashtags?: string[]
  via?: string
  showLabels?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'buttons' | 'floating' | 'compact'
  className?: string
}

interface SharePlatform {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  shareUrl: (url: string, title: string, description: string, hashtags?: string[], via?: string) => string
  label: string
}

const sharePlatforms: SharePlatform[] = [
  {
    name: 'facebook',
    icon: Facebook,
    color: '#1877F2',
    label: 'Share on Facebook',
    shareUrl: (url, title, description) => {
      const params = new URLSearchParams({
        u: url,
        quote: `${title} - ${description}`,
      })
      return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`
    },
  },
  {
    name: 'twitter',
    icon: Twitter,
    color: '#1DA1F2',
    label: 'Share on Twitter',
    shareUrl: (url, title, description, hashtags, via) => {
      const params = new URLSearchParams({
        url,
        text: `${title} - ${description}`,
        ...(hashtags && hashtags.length > 0 && { hashtags: hashtags.join(',') }),
        ...(via && { via }),
      })
      return `https://twitter.com/intent/tweet?${params.toString()}`
    },
  },
  {
    name: 'linkedin',
    icon: Linkedin,
    color: '#0A66C2',
    label: 'Share on LinkedIn',
    shareUrl: (url, title, description) => {
      const params = new URLSearchParams({
        url,
        title,
        summary: description,
      })
      return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`
    },
  },
  {
    name: 'email',
    icon: Mail,
    color: '#EA4335',
    label: 'Share via Email',
    shareUrl: (url, title, description) => {
      const params = new URLSearchParams({
        subject: title,
        body: `${description}\n\n${url}`,
      })
      return `mailto:?${params.toString()}`
    },
  },
  {
    name: 'sms',
    icon: MessageCircle,
    color: '#25D366',
    label: 'Share via SMS',
    shareUrl: (url, title) => {
      const params = new URLSearchParams({
        body: `${title} ${url}`,
      })
      return `sms:?${params.toString()}`
    },
  },
]

export function SocialShare({
  url,
  title = 'All County Plumbing - Professional Plumbing Services',
  description = 'Licensed plumbers serving Southwest Washington since 2004. Emergency repairs, drain cleaning, water heaters & more. Available 24/7.',
  hashtags = ['Plumbing', 'WashingtonState', 'EmergencyService'],
  via = 'AllCountyPLBG',
  showLabels = false,
  size = 'md',
  variant = 'buttons',
  className = ''
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Use current page URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  const handlePlatformShare = (platform: SharePlatform) => {
    const url = platform.shareUrl(shareUrl, title, description, hashtags, via)
    window.open(url, '_blank', 'width=600,height=400')
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  if (variant === 'floating') {
    return (
      <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
        <div className="flex flex-col space-y-2">
          <MasterButton
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-secondary-500 hover:bg-secondary-600 text-white shadow-lg"
            size="sm"
          >
            <Share2 className="w-4 h-4" />
          </MasterButton>
          
          {isOpen && (
            <div className="flex flex-col space-y-2 animate-in fade-in slide-in-from-right-2">
              {sharePlatforms.slice(0, 3).map((platform) => {
                const Icon = platform.icon
                return (
                  <MasterButton
                    key={platform.name}
                    onClick={() => handlePlatformShare(platform)}
                    className="rounded-full text-white shadow-lg transition-transform hover:scale-110"
                    style={{ backgroundColor: platform.color }}
                    size="sm"
                    title={platform.label}
                  >
                    <Icon className="w-4 h-4" />
                  </MasterButton>
                )
              })}
              
              <MasterButton
                onClick={handleCopyLink}
                className="rounded-full bg-gray-600 hover:bg-gray-700 text-white shadow-lg transition-transform hover:scale-110"
                size="sm"
                title={copied ? 'Copied!' : 'Copy Link'}
              >
                <Link className="w-4 h-4" />
              </MasterButton>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <span className="text-sm text-gray-600 font-medium">Share:</span>
        <div className="flex space-x-1">
          {sharePlatforms.slice(0, 4).map((platform) => {
            const Icon = platform.icon
            return (
              <MasterButton
                key={platform.name}
                onClick={() => handlePlatformShare(platform)}
                className={`${sizeClasses[size]} rounded-full flex items-center justify-center text-white transition-transform hover:scale-110`}
                style={{ backgroundColor: platform.color }}
                title={platform.label}
              >
                <Icon className={iconSizes[size]} />
              </MasterButton>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900">Share This Page</h3>
      
      {/* Native Share API (mobile) */}
      {typeof window !== 'undefined' && 'share' in navigator && (
        <MasterButton
          onClick={handleNativeShare}
          className="w-full bg-secondary-500 hover:bg-secondary-600 text-white"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </MasterButton>
      )}
      
      {/* Platform Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {sharePlatforms.map((platform) => {
          const Icon = platform.icon
          return (
            <MasterButton
              key={platform.name}
              onClick={() => handlePlatformShare(platform)}
              className="flex flex-col items-center justify-center p-4 h-auto text-white transition-transform hover:scale-105"
              style={{ backgroundColor: platform.color }}
            >
              <Icon className="w-6 h-6 mb-2" />
              {showLabels && (
                <span className="text-xs font-medium">{platform.name}</span>
              )}
            </MasterButton>
          )
        })}
        
        {/* Copy Link Button */}
        <MasterButton
          onClick={handleCopyLink}
          className="flex flex-col items-center justify-center p-4 h-auto bg-gray-600 hover:bg-gray-700 text-white transition-transform hover:scale-105"
        >
          <Link className="w-6 h-6 mb-2" />
          {showLabels && (
            <span className="text-xs font-medium">
              {copied ? 'Copied!' : 'Copy'}
            </span>
          )}
        </MasterButton>
      </div>
      
      {/* URL Display */}
      <div className="bg-gray-100 p-3 rounded-lg">
        <p className="text-sm text-gray-600 mb-1">Page URL:</p>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="flex-1 text-sm bg-white border border-gray-300 rounded px-3 py-1"
          />
          <MasterButton
            onClick={handleCopyLink}
            size="sm"
            variant="outline"
          >
            {copied ? 'Copied!' : 'Copy'}
          </MasterButton>
        </div>
      </div>
    </div>
  )
}

// Quick share buttons for common use cases
export function QuickShareButtons({ className }: { className?: string }) {
  return (
    <SocialShare
      variant="compact"
      size="sm"
      className={className}
      hashtags={['Plumbing', 'WashingtonState', 'HomeServices']}
    />
  )
}

export function FloatingShareButton() {
  return <SocialShare variant="floating" />
}

// Social follow buttons component
interface SocialLink {
  platform: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  followers?: string
}

const socialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/AllCountyPlumbing',
    icon: Facebook,
    color: '#1877F2',
    followers: '500+'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/allcountyplumbing',
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: '#E4405F',
    followers: '300+'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/company/all-county-plumbing',
    icon: Linkedin,
    color: '#0A66C2',
  },
]

export function SocialFollowButtons({ showFollowers = false, className = '' }: { showFollowers?: boolean, className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-medium transition-transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: link.color }}
            >
              <Icon className="w-5 h-5" />
              <span>{link.platform}</span>
              {showFollowers && link.followers && (
                <span className="text-sm opacity-90">({link.followers})</span>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}


