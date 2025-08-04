"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingProgressProps {
  isLoading: boolean
  progress?: number
  message?: string
}

export function LoadingProgress({ isLoading, progress = 0, message = "Loading..." }: LoadingProgressProps) {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setDisplayProgress((prev) => {
          if (prev >= progress) return prev
          return Math.min(prev + 2, progress)
        })
      }, 50)

      return () => clearInterval(timer)
    }
  }, [isLoading, progress])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-16 h-16 mx-auto mb-6 border-4 border-white/20 border-t-white rounded-full"
        />

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${displayProgress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-lg font-medium mb-2"
        >
          {message}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-sm"
        >
          {displayProgress}%
        </motion.p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white/50 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
