'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  animate?: boolean
}

export function Skeleton({ className = '', animate = true }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-gray-200 rounded ${className}`}
      animate={animate ? {
        opacity: [0.5, 1, 0.5],
      } : {}}
      transition={animate ? {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    />
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 animate-pulse">
      <div className="w-16 h-16 bg-gray-200 rounded-full mb-6" />
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/5 mb-6" />
      <div className="space-y-2 mb-6">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-3 w-5/6" />
      </div>
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 animate-pulse">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-5 h-5 mr-1" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="border-t pt-4">
        <Skeleton className="h-5 w-1/2 mb-2" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
  )
}

export function FAQSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 animate-pulse">
      <Skeleton className="h-5 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

export function ServicePageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-12" />
            <span className="text-gray-400">›</span>
            <Skeleton className="h-4 w-16" />
            <span className="text-gray-400">›</span>
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-gray-700" />
            <Skeleton className="h-6 w-full mb-4 bg-gray-700" />
            <Skeleton className="h-6 w-5/6 mx-auto mb-8 bg-gray-700" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-48 bg-gray-700" />
              <Skeleton className="h-12 w-40 bg-gray-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-2/3 mb-6" />
            <div className="space-y-4 mb-8">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            
            <Skeleton className="h-8 w-1/2 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


