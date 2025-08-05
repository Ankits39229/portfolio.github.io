"use client"

import { motion, MotionProps } from 'framer-motion'
import { useDevicePerformance } from '@/hooks/use-device-performance'
import { ReactNode } from 'react'

interface OptimizedMotionProps extends MotionProps {
  children: ReactNode
  fallback?: ReactNode
  enableOnLowSpec?: boolean
  className?: string
}

export function OptimizedMotion({ 
  children, 
  fallback, 
  enableOnLowSpec = false,
  ...motionProps 
}: OptimizedMotionProps) {
  const { isLowSpec, reducedMotion } = useDevicePerformance()

  // If device is low spec and motion is not explicitly enabled, return static content
  if ((isLowSpec || reducedMotion) && !enableOnLowSpec) {
    return <div {...(motionProps as any)}>{fallback || children}</div>
  }

  // Simplify animations for low-spec devices
  if (isLowSpec && enableOnLowSpec) {
    const simplifiedProps = {
      ...motionProps,
      transition: { 
        duration: 0.2, 
        ease: "easeOut" as const
      },
      // Remove complex animations
      whileHover: undefined,
      whileTap: undefined,
    }
    return <motion.div {...simplifiedProps}>{children}</motion.div>
  }

  return <motion.div {...motionProps}>{children}</motion.div>
}

// Specific optimized components
export function OptimizedMotionSection(props: OptimizedMotionProps) {
  return <OptimizedMotion {...props} />
}

export function OptimizedMotionCard(props: OptimizedMotionProps) {
  const { isLowSpec } = useDevicePerformance()
  
  if (isLowSpec) {
    return (
      <OptimizedMotion 
        {...props}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      />
    )
  }
  
  return <OptimizedMotion {...props} />
}
