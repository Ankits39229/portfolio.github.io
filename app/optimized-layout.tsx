import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GsapProvider } from "@/components/gsap-provider"
import { TransitionProvider } from "@/components/transition-provider"
import { OptimizedAnimatedGlow } from "@/components/optimized-animated-glow"
import { MobileHeader } from "@/components/mobile-header"
import { Suspense } from "react"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  preload: true
})

export const metadata: Metadata = {
  title: "Ankit Kumar",
  description: "Portfolio of Ankit Kumar - Web and Application Developer & Cybersecurity Enthusiast",
}

export default function OptimizedRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/placeholder.svg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-[#0a0a0a] text-white relative">
        {/* Optimized animated background */}
        <div className="fixed inset-0 z-0">
          <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />}>
            <OptimizedAnimatedGlow />
          </Suspense>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <GsapProvider>
            <TransitionProvider>
              <Header />
              <MobileHeader />
              <main className="relative z-10">{children}</main>
              <Footer />
            </TransitionProvider>
          </GsapProvider>
        </Suspense>
      </body>
    </html>
  )
}
