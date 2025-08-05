"use client"

import { Suspense, lazy, ReactNode } from 'react'
import { useDevicePerformance } from '@/hooks/use-device-performance'

interface LazyComponentProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
}

export function LazySection({ children, fallback, threshold = 0.1 }: LazyComponentProps) {
  const { isLowSpec } = useDevicePerformance()

  if (isLowSpec) {
    return (
      <Suspense fallback={fallback || <div className="h-32 bg-white/5 rounded-lg animate-pulse" />}>
        {children}
      </Suspense>
    )
  }

  return <>{children}</>
}

// Skeleton components for loading states
export function SkillCardSkeleton() {
  return (
    <div className="bg-white/5 rounded-xl p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="w-8 h-8 bg-white/10 rounded"></div>
        <div className="w-16 h-4 bg-white/10 rounded"></div>
      </div>
      <div className="w-3/4 h-5 bg-white/10 rounded mb-2"></div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="w-20 h-3 bg-white/10 rounded"></div>
          <div className="w-16 h-3 bg-white/10 rounded"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-16 h-3 bg-white/10 rounded"></div>
          <div className="w-8 h-3 bg-white/10 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white/5 rounded-lg p-6 animate-pulse">
      <div className="w-full h-40 bg-white/10 rounded mb-4"></div>
      <div className="w-3/4 h-6 bg-white/10 rounded mb-2"></div>
      <div className="w-full h-4 bg-white/10 rounded mb-4"></div>
      <div className="flex gap-2 mb-4">
        <div className="w-16 h-6 bg-white/10 rounded"></div>
        <div className="w-20 h-6 bg-white/10 rounded"></div>
        <div className="w-14 h-6 bg-white/10 rounded"></div>
      </div>
    </div>
  )
}
