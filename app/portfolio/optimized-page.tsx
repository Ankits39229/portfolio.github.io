"use client"

import { motion } from "framer-motion"
import { TransitionLink } from "@/components/transition-link"
import { OptimizedMotion, OptimizedMotionCard } from "@/components/optimized-motion"
import { LazySection, SkillCardSkeleton } from "@/components/lazy-section"
import { useDevicePerformance } from "@/hooks/use-device-performance"
import { Suspense, useMemo, memo } from "react"
import {
  User,
  GraduationCap,
  Code,
  Brain,
  Cpu,
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  Star,
  Zap,
  Target,
  Flame,
  Monitor,
  Shield,
  Users,
} from "lucide-react"

// Memoized skill card component
const SkillCard = memo(({ skill, index, getStatusIcon, getStatusColor }: any) => {
  const { isLowSpec } = useDevicePerformance()
  
  if (isLowSpec) {
    return (
      <div className={`bg-gradient-to-br ${getStatusColor(skill.status)} backdrop-blur-sm rounded-xl p-6 border transition-all duration-300`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{skill.icon}</span>
          <div className="flex items-center gap-1">
            {getStatusIcon(skill.status)}
            <span className="text-xs font-medium opacity-80">{skill.status}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-neutral-400">Experience:</span>
            <span className="font-medium">{skill.experience}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-400">Projects:</span>
            <span className="font-medium">{skill.projects}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <OptimizedMotionCard
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { type: "spring", stiffness: 300 },
      }}
      className={`bg-gradient-to-br ${getStatusColor(skill.status)} backdrop-blur-sm rounded-xl p-6 border hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group cursor-pointer`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl group-hover:scale-110 transition-transform">{skill.icon}</span>
        <div className="flex items-center gap-1">
          {getStatusIcon(skill.status)}
          <span className="text-xs font-medium opacity-80">{skill.status}</span>
        </div>
      </div>

      <h3 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">{skill.name}</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-neutral-400">Experience:</span>
          <span className="font-medium">{skill.experience}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-neutral-400">Projects:</span>
          <span className="font-medium">{skill.projects}</span>
        </div>
      </div>

      <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-white/50 to-white/80 rounded-full"
          initial={{ width: "0%" }}
          whileInView={{
            width: skill.status === "Expert" ? "100%" : skill.status === "Advanced" ? "80%" : "60%",
          }}
          transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {!isLowSpec && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </OptimizedMotionCard>
  )
})

SkillCard.displayName = 'SkillCard'

// Lazy loaded sections
const TechnicalSkillsSection = memo(() => {
  const { isLowSpec } = useDevicePerformance()
  
  const technicalSkills = [
    {
      name: "JavaScript/TypeScript",
      category: "Programming",
      icon: "🟨",
      experience: "2+ years",
      projects: 8,
      status: "Expert",
    },
    {
      name: "Python",
      category: "Programming",
      icon: "🐍",
      experience: "1.5+ years",
      projects: 6,
      status: "Advanced",
    },
    {
      name: "Java",
      category: "Programming",
      icon: "☕",
      experience: "2+ years",
      projects: 5,
      status: "Advanced",
    },
    {
      name: "C/C++",
      category: "Programming",
      icon: "⚡",
      experience: "1+ year",
      projects: 4,
      status: "Intermediate",
    },
    {
      name: "React.js/Next.js",
      category: "Frontend",
      icon: "⚛️",
      experience: "1+ years",
      projects: 7,
      status: "Expert",
    },
    {
      name: "HTML/CSS",
      category: "Frontend",
      icon: "🎨",
      experience: "2+ years",
      projects: 10,
      status: "Expert",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "🟢",
      experience: "1+ year",
      projects: 5,
      status: "Advanced",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: "🚀",
      experience: "0.5+ years",
      projects: 3,
      status: "Intermediate",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: "🍃",
      experience: "1+ year",
      projects: 6,
      status: "Advanced",
    },
    {
      name: "MySQL",
      category: "Database",
      icon: "🐬",
      experience: "1+ year",
      projects: 6,
      status: "Advanced",
    },
    {
      name: "Git/GitHub",
      category: "Tools",
      icon: "🔧",
      experience: "2+ years",
      projects: 15,
      status: "Expert",
    },
    {
      name: "Linux",
      category: "Tools",
      icon: "🐧",
      experience: "3+ year",
      projects: 3,
      status: "Intermediate",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Expert":
        return <Star className="text-yellow-400" size={16} />
      case "Advanced":
        return <Zap className="text-blue-400" size={16} />
      case "Intermediate":
        return <Target className="text-green-400" size={16} />
      default:
        return <Flame className="text-orange-400" size={16} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Expert":
        return "from-yellow-500/20 to-yellow-600/20 border-yellow-400/30"
      case "Advanced":
        return "from-blue-500/20 to-blue-600/20 border-blue-400/30"
      case "Intermediate":
        return "from-green-500/20 to-green-600/20 border-green-400/30"
      default:
        return "from-orange-500/20 to-orange-600/20 border-orange-400/30"
    }
  }

  return (
    <OptimizedMotion
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: isLowSpec ? 0.1 : 0.8 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
        <Code className="text-blue-400" />
        Technical Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {technicalSkills.map((skill, index) => (
          <SkillCard 
            key={skill.name}
            skill={skill}
            index={index}
            getStatusIcon={getStatusIcon}
            getStatusColor={getStatusColor}
          />
        ))}
      </div>
    </OptimizedMotion>
  )
})

TechnicalSkillsSection.displayName = 'TechnicalSkillsSection'

export default function OptimizedPortfolioPage() {
  const { isLowSpec, reducedMotion } = useDevicePerformance()
  
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section - Always visible */}
        <OptimizedMotion
          initial={{ opacity: 0, y: isLowSpec ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isLowSpec ? 0.1 : 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Ankit Kumar</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            B.Tech Computer Science Student | Web Developer | Cybersecurity Enthusiast | App Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400 mb-8">
            <span className="flex items-center gap-2">
              <GraduationCap size={16} />
              Final Year Student
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              India
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Available for Internships
            </span>
          </div>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform">
              <Download size={20} />
              Download Resume
            </button>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </OptimizedMotion>

        {/* Technical Skills Section - Lazy loaded */}
        <LazySection 
          fallback={
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(12)].map((_, i) => <SkillCardSkeleton key={i} />)}
              </div>
            </div>
          }
        >
          <TechnicalSkillsSection />
        </LazySection>

        {/* Contact CTA - Always visible */}
        <OptimizedMotion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isLowSpec ? 0.1 : 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start My Career Journey</h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities in software development or cybersecurity roles
            where I can contribute to innovative projects while learning from experienced professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink href="/contact">
              <button className="bg-white text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform">
                Get In Touch
              </button>
            </TransitionLink>
            <button className="flex items-center gap-2 bg-white/10 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 transition-colors">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="mailto:ankits39229@gmail.com"
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
              ankits39229@gmail.com
            </a>
            <a
              href="tel:+917479584773"
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <Phone size={20} />
              +91 7479584773
            </a>
          </div>
        </OptimizedMotion>
      </div>
    </div>
  )
}
