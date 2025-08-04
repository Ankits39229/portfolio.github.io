"use client"

import { motion } from "framer-motion"
import { TransitionLink } from "@/components/transition-link"
import { ArrowLeft, Github, ExternalLink, Clock, Star, Brain, Sparkles, Zap } from "lucide-react"
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

export default function AiMlPage() {
  const projects = getCategoryProjects("ai-ml")

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
            <Brain className="text-purple-400" size={48} />
            <h1 className="text-5xl md:text-7xl font-bold">AI & Machine Learning</h1>
          </div>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Intelligent systems, machine learning models, and AI-powered applications that solve real-world problems.
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
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Featured AI & Machine Learning Projects
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Cutting-edge artificial intelligence solutions leveraging deep learning, neural networks, and advanced algorithms.
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
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Project Info */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-purple-400/60">0{index + 1}</span>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 mb-6 leading-relaxed text-lg">
                      {project.longDescription || project.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold mb-4 text-purple-400 flex items-center gap-2">
                          <Brain size={18} />
                          AI Features
                        </h4>
                        <ul className="text-neutral-300 space-y-3">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                              <span className="group-hover/item:text-white transition-colors duration-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-4 text-purple-400 flex items-center gap-2">
                          <Sparkles size={18} />
                          ML Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span 
                              key={tech} 
                              className="px-3 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-xl text-sm font-medium border border-purple-500/30 hover:border-purple-400/50 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-default"
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
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                          <Zap size={18} />
                          Try Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40"
                        >
                          <Github size={18} />
                          View Code
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
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full backdrop-blur-sm border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Brain className="text-purple-400" size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Focus Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20"
        >
          <div className="text-center">
            <Brain className="mx-auto text-purple-400 mb-4" size={48} />
            <h2 className="text-3xl font-bold mb-4">Artificial Intelligence & Machine Learning</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Exploring the frontiers of AI and ML to create intelligent solutions that learn, adapt, and solve complex
              problems. From natural language processing to computer vision, these projects showcase the power of
              artificial intelligence.
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
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">{projects.length}</div>
            <div className="text-neutral-300">AI Projects</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {projects.filter((p) => p.status === "Completed").length}
            </div>
            <div className="text-neutral-300">Models Deployed</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {projects.filter((p) => p.difficulty === "Advanced").length}
            </div>
            <div className="text-neutral-300">Advanced ML</div>
          </div>
        </motion.div>

        {/* AI/ML Project Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Artificial Intelligence & Machine Learning Projects
            </h2>
            <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Exploring the frontiers of AI and machine learning through innovative projects that solve real-world problems 
              using cutting-edge algorithms, neural networks, and intelligent systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Capabilities */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-purple-500/30">
                <Brain className="text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Neural Networks</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Deep learning architectures including CNNs, RNNs, and Transformers for complex pattern recognition and prediction tasks.
              </p>
            </div>

            {/* Machine Learning */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-blue-500/30">
                <Sparkles className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Machine Learning</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Advanced ML algorithms including ensemble methods, clustering, classification, and regression for intelligent data analysis.
              </p>
            </div>

            {/* Computer Vision */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-indigo-500/30">
                <Zap className="text-indigo-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-400">Computer Vision</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Image processing, object detection, facial recognition, and automated visual analysis using OpenCV and TensorFlow.
              </p>
            </div>
          </div>

          {/* AI Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-lg font-bold mb-4 text-purple-400 flex items-center gap-2">
                <Brain size={20} />
                AI/ML Technologies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <span className="text-sm text-neutral-300 bg-purple-500/10 px-3 py-1 rounded-md">TensorFlow</span>
                <span className="text-sm text-neutral-300 bg-purple-500/10 px-3 py-1 rounded-md">PyTorch</span>
                <span className="text-sm text-neutral-300 bg-purple-500/10 px-3 py-1 rounded-md">Scikit-learn</span>
                <span className="text-sm text-neutral-300 bg-purple-500/10 px-3 py-1 rounded-md">OpenCV</span>
                <span className="text-sm text-neutral-300 bg-purple-500/10 px-3 py-1 rounded-md">Pandas</span>
                <span className="text-sm text-neutral-300 bg-purple-500/10 px-3 py-1 rounded-md">NumPy</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-bold mb-4 text-blue-400 flex items-center gap-2">
                <Sparkles size={20} />
                Key AI Applications
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-neutral-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Predictive Analytics & Forecasting
                </li>
                <li className="text-sm text-neutral-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Natural Language Processing
                </li>
                <li className="text-sm text-neutral-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Computer Vision & Image Recognition
                </li>
                <li className="text-sm text-neutral-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Automated Decision Systems
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
