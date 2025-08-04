"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SwipeableGalleryProps {
  images: string[]
  title: string
}

export function SwipeableGallery({ images, title }: SwipeableGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const threshold = 50

    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (info.offset.x < -threshold && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Touch-friendly navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image Container */}
      <div ref={constraintsRef} className="relative h-64 md:h-96 overflow-hidden rounded-xl bg-black/20">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={constraintsRef}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          onTouchStart={handleTouchStart}
          style={{ opacity }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="min-w-full h-full relative"
              whileHover={{ scale: isDragging ? 1 : 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {isDragging && <div className="absolute inset-0 bg-black/20 pointer-events-none" />}
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows - Hidden on mobile, shown on hover on desktop */}
        <div className="hidden md:block">
          <motion.button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            onClick={goToNext}
            disabled={currentIndex === images.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
          Swipe to navigate
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/30"}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="text-center mt-2 text-sm text-neutral-400">
        {currentIndex + 1} of {images.length}
      </div>
    </div>
  )
}
