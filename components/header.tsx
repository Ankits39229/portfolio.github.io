"use client"

import { TransitionLink } from "./transition-link"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export function Header() {
  const headerRef = useRef(null)

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 2,
    })
  }, [])

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 p-4 hidden md:block">
      <div className="container mx-auto flex justify-between items-center bg-black/20 backdrop-blur-md p-4 rounded-full">
        <TransitionLink href="/" className="text-white font-bold text-xl">
          ICI
        </TransitionLink>
        <nav className="flex items-center gap-8 text-white">
          <TransitionLink
            href="/#portfolio"
            className="hover:text-neutral-300 transition-colors relative group py-2 px-4 rounded-full hover:bg-white/10"
          >
            Work
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </TransitionLink>
          <TransitionLink
            href="/portfolio"
            className="hover:text-neutral-300 transition-colors relative group py-2 px-4 rounded-full hover:bg-white/10"
          >
            Portfolio
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </TransitionLink>
          <TransitionLink
            href="/contact"
            className="hover:text-neutral-300 transition-colors relative group py-2 px-4 rounded-full hover:bg-white/10"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </TransitionLink>
        </nav>
        <TransitionLink href="/contact">
          <motion.button
            className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-neutral-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </TransitionLink>
      </div>
    </motion.header>
  )
}
