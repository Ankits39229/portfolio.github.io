"use client"

import { useDevicePerformance } from "@/hooks/use-device-performance"
import { useEffect, useState } from "react"

export function OptimizedAnimatedGlow() {
  const { isLowSpec, reducedMotion } = useDevicePerformance()
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Disable background animations on low-spec devices after 3 seconds
    if (isLowSpec) {
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isLowSpec])

  // Don't render anything on very low-spec devices or when user prefers reduced motion
  if (reducedMotion || !shouldRender) {
    return <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
  }

  // Simplified version for low-spec devices
  if (isLowSpec) {
    return (
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{ animation: "float 20s ease-in-out infinite" }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ animation: "float 25s ease-in-out infinite reverse" }}
        />
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-20px) scale(1.1); }
          }
        `}</style>
      </div>
    )
  }

  // Full animation for high-performance devices
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-green-500/15 rounded-full blur-2xl animate-bounce" />
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            animation: `float ${5 + i}s ease-in-out infinite ${i * 0.5}s`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}
