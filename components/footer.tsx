"use client"

import { TransitionLink } from "./transition-link"

export function Footer() {
  return (
    <footer className="relative text-white py-20 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-lg text-neutral-300 mb-8">Let's create something amazing together.</p>
        <TransitionLink href="/contact">
          <button className="bg-white text-black font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105">
            Get in Touch
          </button>
        </TransitionLink>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400">
            &copy; {new Date().getFullYear()} Innovate. Create. Inspire. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <TransitionLink href="#" className="text-neutral-400 hover:text-white">
              Twitter
            </TransitionLink>
            <TransitionLink href="#" className="text-neutral-400 hover:text-white">
              Instagram
            </TransitionLink>
            <TransitionLink href="#" className="text-neutral-400 hover:text-white">
              LinkedIn
            </TransitionLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
