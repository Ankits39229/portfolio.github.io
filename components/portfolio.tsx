"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import TransitionLink from "./transition-link"

const projectCategories = [
  {
    title: "Web Development",
    description: "Full-stack web applications and modern frontend experiences",
    imgSrc: "/images/project-cyberscape.png",
    href: "/portfolio/web-development",
    projectCount: 8,
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Cybersecurity Projects",
    description: "Security tools, penetration testing, and vulnerability assessments",
    imgSrc: "/images/ethereal-threads.png",
    href: "/portfolio/cybersecurity",
    projectCount: 5,
    technologies: ["Python", "Nmap", "Burp Suite", "Metasploit"],
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems, data analysis, and automation projects",
    imgSrc: "/images/quantum-leap.png",
    href: "/portfolio/ai-ml",
    projectCount: 4,
    technologies: ["Python", "TensorFlow", "OpenAI API", "Pandas"],
  },
]

export function Portfolio() {
  return (
    <div id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Our Creations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-lg text-neutral-400"
        >
          Explore my project categories and discover the work I'm passionate about.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TransitionLink href={category.href}>
              <div className="group relative block w-full h-[500px] overflow-hidden rounded-lg shadow-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.imgSrc || "/placeholder.svg"}
                    fill
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                    {category.projectCount} Projects
                  </div>
                </div>

                <div className="p-6 h-[236px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed">{category.description}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/10 rounded-full text-xs text-neutral-400">
                          {tech}
                        </span>
                      ))}
                      {category.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-neutral-400">
                          +{category.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                      <span>Explore Projects</span>
                      <svg
                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionLink>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
