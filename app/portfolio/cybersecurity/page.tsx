"use client"

import { motion } from "framer-motion"
import { TransitionLink } from "@/components/transition-link"
import { ArrowLeft, Github, ExternalLink, Clock, Star, Shield } from "lucide-react"
import { getCategoryProjects } from "@/lib/projects-data"
import Image from "next/image"

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 text-green-400 border-green-400/30"
    case "In Progress":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
    case "Planning":
      return "bg-blue-500/20 text-blue-400 border-blue-400/30"
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-400/30"
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-500/20 text-green-400"
    case "Intermediate":
      return "bg-yellow-500/20 text-yellow-400"
    case "Advanced":
      return "bg-red-500/20 text-red-400"
    default:
      return "bg-gray-500/20 text-gray-400"
  }
}

export default function CybersecurityPage() {
  const projects = getCategoryProjects("cybersecurity")

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <TransitionLink
            href="/#portfolio"
            className="group text-neutral-400 hover:text-white font-semibold flex items-center gap-2 mb-8"
          >
            <ArrowLeft className="transition-transform group-hover:-translate-x-1" size={20} />
            Back to Portfolio
          </TransitionLink>

          <div className="flex items-center gap-4 mb-6">
            <Shield className="text-red-400" size={48} />
            <h1 className="text-5xl md:text-7xl font-bold">Application Development</h1>
          </div>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Security tools, Utility applications, and vulnerability assessment projects focused on protecting digital assets.
          </p>
        </motion.div>

        {/* Project Highlights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Featured Application Development Projects
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Advanced security tools, utility applications.
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-900/20 to-orange-900/10 backdrop-blur-lg rounded-3xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Project Info */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-red-400/60">0{index + 1}</span>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-transparent"></div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 mb-6 leading-relaxed text-lg">
                      {project.longDescription || project.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold mb-4 text-red-400 flex items-center gap-2">
                          <Shield size={18} />
                          Security Features
                        </h4>
                        <ul className="text-neutral-300 space-y-3">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                              <span className="group-hover/item:text-white transition-colors duration-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-4 text-red-400 flex items-center gap-2">
                          <Clock size={18} />
                          Security Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span 
                              key={tech} 
                              className="px-3 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-300 rounded-xl text-sm font-medium border border-red-500/30 hover:border-red-400/50 hover:from-red-500/30 hover:to-orange-500/30 transition-all duration-300 cursor-default"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-sm text-neutral-400">
                          <span className="inline-flex items-center gap-2">
                            <Clock size={14} />
                            {project.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative h-80 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full backdrop-blur-sm border border-red-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Shield className="text-red-400" size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Focus Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20"
        >
          <div className="text-center">
            <Shield className="mx-auto text-red-400 mb-4" size={48} />
            <h2 className="text-3xl font-bold mb-4">Application Development</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              All application development projects are developed for educational purposes and ethical security research. These
              tools are designed to help organizations identify and fix their systems.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
            <div className="text-3xl font-bold text-red-400 mb-2">{projects.length}</div>
            <div className="text-neutral-300">Security Projects</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {projects.filter((p) => p.status === "Completed").length}
            </div>
            <div className="text-neutral-300">Tools Completed</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {projects.filter((p) => p.difficulty === "Advanced").length}
            </div>
            <div className="text-neutral-300">Advanced Projects</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
