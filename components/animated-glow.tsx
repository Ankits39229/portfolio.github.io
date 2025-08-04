"use client"

import { motion } from "framer-motion"

export function AnimatedGlow() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #6a0dad 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ left: "10%", top: "20%" }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-8"
        style={{
          background: "radial-gradient(circle, #0000ff 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ right: "10%", bottom: "20%" }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #4a0e4e 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
        />
      ))}

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1="0"
            y1={`${20 + i * 20}%`}
            x2="100%"
            y2={`${20 + i * 20}%`}
            stroke="url(#gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6a0dad" stopOpacity="0" />
            <stop offset="50%" stopColor="#6a0dad" stopOpacity="1" />
            <stop offset="100%" stopColor="#6a0dad" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
