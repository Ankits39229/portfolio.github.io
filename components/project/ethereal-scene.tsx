"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

const EtherealMaterial = shaderMaterial(
  { uTime: 0, uMouse: new THREE.Vector2() },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    // 2D Random
    float random (vec2 st) {
        return fract(sin(dot(st.xy,
                             vec2(12.9898,78.233)))*
            43758.5453123);
    }

    // 2D Noise based on Morgan McGuire @morgan3d
    // https://www.shadertoy.com/view/4dS3Wd
    float noise (vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        vec2 u = f*f*(3.0-2.0*f);
        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b)* u.y * u.x;
    }

    #define OCTAVES 6
    float fbm (vec2 st) {
        float value = 0.0;
        float amplitude = .5;
        float frequency = 0.;
        for (int i = 0; i < OCTAVES; i++) {
            value += amplitude * noise(st);
            st *= 2.;
            amplitude *= .5;
        }
        return value;
    }

    void main() {
        vec2 st = vUv;
        st.x *= 1.6; // aspect ratio
        vec3 color = vec3(0.0);

        vec2 q = vec2(0.);
        q.x = fbm( st + 0.00*uTime);
        q.y = fbm( st + vec2(1.0));

        vec2 r = vec2(0.);
        r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime );
        r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*uTime);

        float f = fbm(st+r);

        color = mix(vec3(0.101961,0.619608,0.666667),
                    vec3(0.666667,0.666667,0.498039),
                    clamp((f*f)*4.0,0.0,1.0));

        color = mix(color,
                    vec3(0,0,0.164706),
                    clamp(length(q),0.0,1.0));

        color = mix(color,
                    vec3(0.666667,1,1),
                    clamp(length(r.x),0.0,1.0));
        
        // Mouse interaction
        float mouseDist = distance(uMouse, vUv);
        vec2 mouseVec = uMouse - vUv;
        float mouseEffect = smoothstep(0.3, 0.0, mouseDist);
        r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime + mouseVec * mouseEffect * 2.0);
        f = fbm(st+r);

        gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color,1.);
    }
  `,
)

extend({ EtherealMaterial })

const Scene = () => {
  const materialRef = useRef<any>()

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uTime += delta * 0.3
      materialRef.current.uMouse.lerp(state.mouse, 0.05)
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* @ts-ignore */}
      <etherealMaterial ref={materialRef} />
    </mesh>
  )
}

const EtherealScene = () => {
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
    let mouseX = 0.5
    let mouseY = 0.5

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = (e.clientX - rect.left) / canvas.width
      mouseY = (e.clientY - rect.top) / canvas.height
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Noise function
    const noise = (x: number, y: number) => {
      return Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.5) * 0.5 + 0.5
    }

    const animate = () => {
      time += 0.02

      // Create flowing background
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let x = 0; x < canvas.width; x += 2) {
        for (let y = 0; y < canvas.height; y += 2) {
          const index = (y * canvas.width + x) * 4

          // Create flowing noise pattern
          const n1 = noise(x + time * 50, y)
          const n2 = noise(x, y + time * 30)
          const n3 = noise(x + mouseX * 100, y + mouseY * 100)

          const intensity = (n1 + n2 + n3) / 3

          // Color based on position and noise
          const r = Math.floor(intensity * 100 + Math.sin(time + x * 0.01) * 50)
          const g = Math.floor(intensity * 150 + Math.cos(time + y * 0.01) * 80)
          const b = Math.floor(intensity * 200 + Math.sin(time * 2) * 100)

          data[index] = r
          data[index + 1] = g
          data[index + 2] = b
          data[index + 3] = 255
        }
      }

      ctx.putImageData(imageData, 0, 0)

      // Add flowing threads
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 2

      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.01 + time + i) * 100 +
            Math.sin(x * 0.005 + time * 0.5 + i) * 50 +
            (mouseY - 0.5) * 200

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
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
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Scene />
      </Canvas>
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Floating particles for extra depth */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-70"
          animate={{
            x: [0, dimensions.width],
            y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 4,
            ease: "easeInOut",
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

export default EtherealScene
