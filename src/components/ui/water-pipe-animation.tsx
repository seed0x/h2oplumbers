'use client'

import React from 'react'

interface WaterPipeAnimationProps {
  variant?: 'hero' | 'services' | 'testimonials' | 'footer'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export function WaterPipeAnimation({ variant = 'hero', position = 'top-right' }: WaterPipeAnimationProps) {
  // Badge-style pipe component with water leaving the pipe
  const pipeConfigs = {
    'top-right': {
      // Pipe at top right, water drips DOWN out of the pipe opening
      image: '/images/Untitled-10-e1744011491161 (1).png',
      containerClass: 'top-4 right-4 md:top-8 md:right-8',
      pipeClass: 'w-24 h-12 md:w-28 md:h-14',
      rotation: 'rotate-90',
      // Water exits from pipe opening and falls down
      droplets: [
        { startPosition: 'bottom-0 left-1/2 -translate-x-1/2', animation: 'animate-[drip_3s_ease-in_infinite]', delay: '0s', size: 'w-2 h-2' },
        { startPosition: 'bottom-0 left-1/2 -translate-x-1/2', animation: 'animate-[drip_3s_ease-in_infinite]', delay: '1s', size: 'w-2.5 h-2.5' },
        { startPosition: 'bottom-0 left-1/2 -translate-x-1/2', animation: 'animate-[drip_3s_ease-in_infinite]', delay: '2s', size: 'w-2 h-2' },
      ]
    },
    'top-left': {
      // Pipe at top left, water drips DOWN
      image: '/images/Untitled-10-e1744011491161 (1).png',
      containerClass: 'top-4 left-4 md:top-8 md:left-8',
      pipeClass: 'w-24 h-12 md:w-28 md:h-14',
      rotation: 'rotate-90',
      droplets: [
        { startPosition: 'bottom-0 left-1/2 -translate-x-1/2', animation: 'animate-[drip_3s_ease-in_infinite]', delay: '0.5s', size: 'w-2 h-2' },
        { startPosition: 'bottom-0 left-1/2 -translate-x-1/2', animation: 'animate-[drip_3s_ease-in_infinite]', delay: '2s', size: 'w-2.5 h-2.5' },
      ]
    },
    'bottom-right': {
      // Horizontal pipe at bottom right, water flows OUT to the right
      image: '/images/Untitled-9-e1744011097834 (1).png',
      containerClass: 'bottom-4 right-4 md:bottom-8 md:right-8',
      pipeClass: 'w-28 h-14 md:w-32 md:h-16',
      rotation: 'rotate-0',
      droplets: [
        { startPosition: 'top-1/2 -translate-y-1/2 right-0', animation: 'animate-[flow-out-right_2.5s_linear_infinite]', delay: '0s', size: 'w-2 h-2' },
        { startPosition: 'top-1/2 -translate-y-1/2 right-0', animation: 'animate-[flow-out-right_2.5s_linear_infinite]', delay: '1s', size: 'w-2.5 h-2.5' },
      ]
    },
    'bottom-left': {
      // Horizontal pipe at bottom left, water flows OUT to the left
      image: '/images/Untitled-9-e1744011097834 (1).png',
      containerClass: 'bottom-4 left-4 md:bottom-8 md:left-8',
      pipeClass: 'w-28 h-14 md:w-32 md:h-16',
      rotation: 'rotate-180',
      droplets: [
        { startPosition: 'top-1/2 -translate-y-1/2 left-0', animation: 'animate-[flow-out-left_2.5s_linear_infinite]', delay: '0.3s', size: 'w-2 h-2' },
        { startPosition: 'top-1/2 -translate-y-1/2 left-0', animation: 'animate-[flow-out-left_2.5s_linear_infinite]', delay: '1.5s', size: 'w-2.5 h-2.5' },
      ]
    }
  }

  const config = pipeConfigs[position]

  return (
    <div className={`absolute ${config.containerClass} pointer-events-none z-10`}>
      {/* Pipe badge with shadow */}
      <div className={`relative ${config.pipeClass} transform ${config.rotation} opacity-30 drop-shadow-lg`}>
        <img 
          src={config.image} 
          alt="" 
          className="w-full h-full object-contain filter brightness-105" 
        />
        
        {/* Water droplets exiting the pipe */}
        {config.droplets.map((droplet, index) => (
          <div 
            key={index}
            className={`absolute ${droplet.startPosition} ${droplet.animation}`}
            style={{ animationDelay: droplet.delay }}
          >
            <div className={`${droplet.size} bg-gradient-to-br from-brand-cyan to-brand-turquoise rounded-full shadow-md opacity-80`} />
          </div>
        ))}
      </div>
    </div>
  )
}
