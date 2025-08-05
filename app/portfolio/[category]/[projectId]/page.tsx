"use client"

import { motion } from "framer-motion"
import { TransitionLink } from "@/components/transition-link"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Clock,
  Star,
  CheckCircle,
  Code,
  Shield,
  Brain,
} from "lucide-react"
import { getProjectBySlug, getCategoryProjects } from "@/lib/projects-data"
import Image from "next/image"
import { notFound } from "next/navigation"

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

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "web-development":
      return <Code className="text-blue-400" size={24} />
    case "application-development":
      return <Shield className="text-red-400" size={24} />
    case "linux-development":
      return <Brain className="text-purple-400" size={24} />
    default:
      return <Star className="text-gray-400" size={24} />
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "web-development":
      return "text-blue-400"
    case "application-development":
      return "text-red-400"
    case "linux-development":
      return "text-purple-400"
    default:
      return "text-gray-400"
  }
}

export default function ProjectDetailPage({
  params,
}: {
  params: { category: string; projectId: string }
}) {
  const project = getProjectBySlug(params.category, params.projectId)
  const categoryProjects = getCategoryProjects(params.category)
  const currentIndex = categoryProjects.findIndex((p) => p.id === params.projectId)
  const nextProject = categoryProjects[currentIndex + 1] || categoryProjects[0]
  const prevProject = categoryProjects[currentIndex - 1] || categoryProjects[categoryProjects.length - 1]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <TransitionLink
            href={`/portfolio/${params.category}`}
            className="group text-neutral-400 hover:text-white font-semibold flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="transition-transform group-hover:-translate-x-1" size={20} />
            Back to {params.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </TransitionLink>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {getCategoryIcon(params.category)}
                <span className={`text-sm font-medium ${getCategoryColor(params.category)}`}>
                  {params.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}`}
                >
                  {project.difficulty}
                </span>
              </div>

              <p className="text-xl text-neutral-300 leading-relaxed mb-8">{project.description}</p>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 font-medium py-3 px-6 rounded-lg transition-colors ${
                      params.category === "web-development"
                        ? "bg-blue-500 hover:bg-blue-600"
                        : params.category === "application-development"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-purple-500 hover:bg-purple-600"
                    } text-white`}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="relative">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
            <Clock className="mx-auto mb-2 text-blue-400" size={24} />
            <div className="text-2xl font-bold mb-1">{project.duration}</div>
            <div className="text-sm text-neutral-400">Duration</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
            <Star className="mx-auto mb-2 text-yellow-400" size={24} />
            <div className="text-2xl font-bold mb-1">{project.features.length}</div>
            <div className="text-sm text-neutral-400">Features</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
            <Code className="mx-auto mb-2 text-purple-400" size={24} />
            <div className="text-2xl font-bold mb-1">{project.technologies.length}</div>
            <div className="text-sm text-neutral-400">Technologies</div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Description</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">{project.longDescription}</p>
              </div>
            </div>
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        params.category === "web-development"
                          ? "bg-blue-500/20 text-blue-400"
                          : params.category === "application-development"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-purple-500/20 text-purple-400"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4"
              >
                <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-neutral-300">{feature.replace(/^•\s*/, '')}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Navigation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <TransitionLink
              href={`/portfolio/${params.category}/${prevProject.id}`}
              className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={prevProject.imageUrl || "/placeholder.svg"}
                    alt={prevProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-neutral-400 mb-1">Previous Project</div>
                  <div className="font-bold group-hover:text-blue-400 transition-colors">{prevProject.title}</div>
                  <div className="text-sm text-neutral-400">{prevProject.description}</div>
                </div>
                <ArrowLeft className="text-neutral-400 group-hover:text-white transition-colors" size={20} />
              </div>
            </TransitionLink>

            <TransitionLink
              href={`/portfolio/${params.category}/${nextProject.id}`}
              className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <ArrowLeft className="text-neutral-400 group-hover:text-white transition-colors rotate-180" size={20} />
                <div className="flex-1 text-right">
                  <div className="text-sm text-neutral-400 mb-1">Next Project</div>
                  <div className="font-bold group-hover:text-blue-400 transition-colors">{nextProject.title}</div>
                  <div className="text-sm text-neutral-400">{nextProject.description}</div>
                </div>
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={nextProject.imageUrl || "/placeholder.svg"}
                    alt={nextProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TransitionLink>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
