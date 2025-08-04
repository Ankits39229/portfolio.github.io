"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const CyberscapeScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = dimensions.width
      canvas.height = dimensions.height
    }

    resizeCanvas()

    let time = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = (e.clientX - rect.left) / canvas.width
      mouseY = (e.clientY - rect.top) / canvas.height
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      time += 0.01

      // Clear canvas with dark background
      ctx.fillStyle = "rgba(5, 0, 15, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = `rgba(32, 128, 255, ${0.3 + Math.sin(time) * 0.1})`
      ctx.lineWidth = 1

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw glitch lines
      for (let i = 0; i < 10; i++) {
        const y = Math.random() * canvas.height
        const glitchIntensity = Math.sin(time * 10 + i) * 0.5 + 0.5

        if (glitchIntensity > 0.7) {
          ctx.fillStyle = `rgba(255, 0, 100, ${glitchIntensity * 0.5})`
          ctx.fillRect(0, y, canvas.width, 2)
        }
      }

      // Mouse interaction effect
      const mouseRadius = 150
      const gradient = ctx.createRadialGradient(
        mouseX * canvas.width,
        mouseY * canvas.height,
        0,
        mouseX * canvas.width,
        mouseY * canvas.height,
        mouseRadius,
      )
      gradient.addColorStop(0, "rgba(128, 200, 255, 0.3)")
      gradient.addColorStop(1, "rgba(128, 200, 255, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Scan lines
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillStyle = `rgba(0, 255, 255, ${0.05 + Math.sin(time * 2 + y * 0.01) * 0.02})`
        ctx.fillRect(0, y, canvas.width, 1)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Additional animated elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-20 bg-cyan-400 opacity-60"
          animate={{
            x: [0, dimensions.width],
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "linear",
          }}
          style={{
            left: -10,
            top: Math.random() * 100 + "%",
          }}
        />
      ))}
    </div>
  )
}

export default CyberscapeScene
