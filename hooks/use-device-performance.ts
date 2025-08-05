"use client"

import { useEffect, useState } from 'react'

interface DevicePerformance {
  isLowSpec: boolean
  reducedMotion: boolean
  supportsConcurrency: boolean
  memoryLimit: number
}

export function useDevicePerformance(): DevicePerformance {
  const [performance, setPerformance] = useState<DevicePerformance>({
    isLowSpec: false,
    reducedMotion: false,
    supportsConcurrency: true,
    memoryLimit: 4
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Estimate device performance based on available metrics
    const navigator = window.navigator as any
    const hardwareConcurrency = navigator.hardwareConcurrency || 2
    const deviceMemory = navigator.deviceMemory || 4
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    // Simple performance heuristics
    let isLowSpec = false
    
    // Check CPU cores (less than 4 cores = potential low spec)
    if (hardwareConcurrency < 4) isLowSpec = true
    
    // Check memory (less than 4GB = potential low spec)
    if (deviceMemory < 4) isLowSpec = true
    
    // Check network connection
    if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      isLowSpec = true
    }

    // Check user agent for mobile devices
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) isLowSpec = true

    setPerformance({
      isLowSpec,
      reducedMotion: prefersReducedMotion || isLowSpec,
      supportsConcurrency: hardwareConcurrency >= 2,
      memoryLimit: deviceMemory
    })
  }, [])

  return performance
}
