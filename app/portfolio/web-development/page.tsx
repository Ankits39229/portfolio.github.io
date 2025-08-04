"use client"

import { motion } from "framer-motion"
import { TransitionLink } from "@/components/transition-link"
import { ArrowLeft, Github, ExternalLink, Clock, Star } from "lucide-react"
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

export default function WebDevelopmentPage() {
  const projects = getCategoryProjects("web-development")

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

          <h1 className="text-5xl md:text-7xl font-bold mb-6">Web Development</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Full-stack web applications, modern frontend experiences, and innovative digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}
                  >
                    {project.difficulty}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-neutral-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {project.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {project.features.length} Features
                  </span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm text-neutral-300">Key Features:</h4>
                  <ul className="text-sm text-neutral-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-blue-400 text-xs">+{project.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <TransitionLink href={`/portfolio/web-development/${project.id}`}>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      View Details
                    </button>
                  </TransitionLink>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">{projects.length}</div>
            <div className="text-neutral-300">Total Projects</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {projects.filter((p) => p.status === "Completed").length}
            </div>
            <div className="text-neutral-300">Completed</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {projects.filter((p) => p.status === "In Progress").length}
            </div>
            <div className="text-neutral-300">In Progress</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
