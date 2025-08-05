"use client"

import { TransitionLink } from "@/components/transition-link"
import { OptimizedMotion } from "@/components/optimized-motion" 
import { LazySection, SkillCardSkeleton } from "@/components/lazy-section"
import { useDevicePerformance } from "@/hooks/use-device-performance"
import { useMemo, memo } from "react"
import {
  User,
  GraduationCap,
  Code,
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
  Award,
} from "lucide-react"

// Static data outside component to prevent recreation
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
    name: "React.js/Next.js",
    category: "Frontend",
    icon: "⚛️",
    experience: "1+ years",
    projects: 7,
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
    name: "MongoDB",
    category: "Database",
    icon: "🍃",
    experience: "1+ year",
    projects: 6,
    status: "Advanced",
  },
]

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "University of Engineering and Management Jaipur",
    year: "2022 - 2026",
    status: "Final Year",
  },
]

const certifications = [
  { name: "Full Stack Web Development", provider: "freeCodeCamp", year: "2024" },
  { name: "JavaScript Algorithms and Data Structures", provider: "freeCodeCamp", year: "2023" },
  { name: "AWS Cloud Practitioner", provider: "Amazon Web Services", year: "2024" },
  { name: "React Developer", provider: "Meta", year: "2023" },
  { name: "Ethical Hacking Essentials", provider: "EC-Council", year: "2024" },
]

// Memoized components for better performance
const TechnicalExpertise = memo(() => {
  const { isLowSpec } = useDevicePerformance()

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
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
        <Code className="text-blue-400" />
        Technical Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalSkills.map((skill, index) => (
          <OptimizedMotion
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: isLowSpec ? 0 : index * 0.05, duration: isLowSpec ? 0.1 : 0.5 }}
            viewport={{ once: true }}
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
          </OptimizedMotion>
        ))}
      </div>
    </section>
  )
})

TechnicalExpertise.displayName = 'TechnicalExpertise'

export default function PortfolioPage() {
  const { isLowSpec, reducedMotion } = useDevicePerformance()

  // Simplified animations for low-spec devices
  const getOptimizedAnimation = useMemo(() => {
    if (isLowSpec || reducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.1 }
      }
    }
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    }
  }, [isLowSpec, reducedMotion])

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <OptimizedMotion
          {...getOptimizedAnimation}
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

        {/* About Section */}
        <LazySection fallback={<div className="h-64 bg-white/5 rounded-lg animate-pulse mb-20" />}>
          <OptimizedMotion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: isLowSpec ? 0.1 : 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
              <User className="text-blue-400" />
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  I'm a passionate Computer Science student in my final year, with a strong interest in both software
                  development and cybersecurity. My journey combines full-stack development skills with ethical hacking
                  and penetration testing knowledge.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  From building modern web applications to conducting security assessments, I enjoy the dual perspective
                  of creating secure systems and understanding potential vulnerabilities.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  I'm actively seeking internship opportunities in software development or cybersecurity roles
                  where I can contribute to meaningful projects while learning from experienced professionals.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="text-green-400" />
                    Education
                  </h3>
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-blue-400">{edu.field}</p>
                      <p className="text-neutral-300">{edu.institution}</p>
                      <div className="flex justify-between text-sm text-neutral-400">
                        <span>{edu.year}</span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        {edu.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Award className="text-yellow-400" />
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{cert.name}</p>
                          <p className="text-sm text-neutral-400">{cert.provider}</p>
                        </div>
                        <span className="text-sm text-neutral-400">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </OptimizedMotion>
        </LazySection>

        {/* Technical Expertise Section */}
        <LazySection 
          fallback={
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => <SkillCardSkeleton key={i} />)}
              </div>
            </div>
          }
        >
          <TechnicalExpertise />
        </LazySection>

        {/* Contact CTA */}
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
