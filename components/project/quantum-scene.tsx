"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const QuantumScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      life: number
    }>
  >([])
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

    // Initialize particles
    const particleCount = 300
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      life: number
    }> = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100,
      })
    }

    particlesRef.current = particles

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let time = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      time += 0.02

      // Clear with dark background
      ctx.fillStyle = "rgba(0, 0, 20, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update particle
        particle.life += 1
        particle.x += particle.vx
        particle.y += particle.vy

        // Mouse interaction
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx += dx * force * 0.001
          particle.vy += dy * force * 0.001
        }

        // Add quantum fluctuation
        particle.vx += Math.sin(time + index * 0.1) * 0.01
        particle.vy += Math.cos(time + index * 0.1) * 0.01

        // Boundary conditions
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8

        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle with quantum glow
        const alpha = particle.opacity * (1 - distance / 200)
        ctx.save()
        ctx.globalAlpha = Math.max(0, alpha)
        ctx.fillStyle = `hsl(${200 + Math.sin(time + index) * 60}, 70%, 60%)`
        ctx.shadowColor = `hsl(${200 + Math.sin(time + index) * 60}, 70%, 60%)`
        ctx.shadowBlur = particle.size * 3
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex && otherIndex > index) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 80) {
              ctx.save()
              ctx.globalAlpha = (1 - distance / 80) * 0.2
              ctx.strokeStyle = `hsl(${180 + Math.sin(time) * 40}, 60%, 50%)`
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
              ctx.restore()
            }
          }
        })
      })

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
      {/* Energy waves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-blue-400 rounded-full opacity-20"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default QuantumScene
