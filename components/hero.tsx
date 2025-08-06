"use client"

import { TransitionLink } from "@/components/transition-link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden z-20">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
          Innovate. Create. Inspire.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 text-neutral-300">
          I craft digital experiences that blend creativity with cutting-edge technology.
        </p>
        <TransitionLink href="/#portfolio">
          <button className="flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105">
            Explore My Work <ArrowRight size={20} />
          </button>
        </TransitionLink>
      </div>
    </div>
  )
}
