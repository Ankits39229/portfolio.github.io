"use client"

import { motion } from "framer-motion"
import { TransitionLink } from "@/components/transition-link"
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
    experience: "1.5+ years",
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
    experience: "1+ year",
    projects: 4,
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
  {
    name: "MySQL",
    category: "Database",
    icon: "🐬",
    experience: "1.5+ years",
    projects: 5,
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
    experience: "1+ year",
    projects: 3,
    status: "Intermediate",
  },
]

const ides = [
  { name: "VS Code", icon: "💻", description: "Primary code editor with extensions", proficiency: "Expert" },
  { name: "IntelliJ IDEA", icon: "🧠", description: "Java development environment", proficiency: "Advanced" },
  { name: "PyCharm", icon: "🐍", description: "Python development IDE", proficiency: "Advanced" },
  { name: "Eclipse", icon: "🌙", description: "Java enterprise development", proficiency: "Intermediate" },
  { name: "Android Studio", icon: "📱", description: "Android app development", proficiency: "Intermediate" },
  { name: "Sublime Text", icon: "✨", description: "Lightweight text editor", proficiency: "Advanced" },
  { name: "Vim/Neovim", icon: "⚡", description: "Terminal-based editor", proficiency: "Intermediate" },
  { name: "Code::Blocks", icon: "🔷", description: "C/C++ development", proficiency: "Intermediate" },
]

const securityTools = [
  { name: "Nmap", icon: "🔍", description: "Network discovery and security auditing", category: "Network Scanning" },
  { name: "Burp Suite", icon: "🕷️", description: "Web application security testing", category: "Web Security" },
  { name: "Aircrack-ng", icon: "📡", description: "WiFi network security assessment", category: "Wireless Security" },
  { name: "Metasploit", icon: "💥", description: "Penetration testing framework", category: "Exploitation" },
  { name: "Wireshark", icon: "🦈", description: "Network protocol analyzer", category: "Network Analysis" },
  { name: "OWASP ZAP", icon: "⚡", description: "Web application security scanner", category: "Web Security" },
  {
    name: "Sqlmap",
    icon: "💉",
    description: "SQL injection detection and exploitation",
    category: "Database Security",
  },
  { name: "John the Ripper", icon: "🔓", description: "Password cracking tool", category: "Password Security" },
  { name: "Hydra", icon: "🐙", description: "Network login cracker", category: "Brute Force" },
  { name: "Nikto", icon: "🔎", description: "Web server scanner", category: "Web Security" },
  { name: "Gobuster", icon: "🎯", description: "Directory/file brute-forcer", category: "Web Enumeration" },
  { name: "Hashcat", icon: "⚡", description: "Advanced password recovery", category: "Password Security" },
]

const developmentTools = [
  { name: "Docker", icon: "🐳", description: "Containerization platform", category: "DevOps" },
  { name: "AWS", icon: "☁️", description: "Cloud computing services", category: "Cloud" },
  { name: "Firebase", icon: "🔥", description: "Backend-as-a-Service platform", category: "Backend" },
  { name: "GraphQL", icon: "📊", description: "Query language for APIs", category: "API" },
  { name: "Redis", icon: "🔴", description: "In-memory data structure store", category: "Database" },
  { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework", category: "Frontend" },
  { name: "Socket.io", icon: "🔌", description: "Real-time communication", category: "Backend" },
  { name: "Jest", icon: "🧪", description: "JavaScript testing framework", category: "Testing" },
  { name: "Webpack", icon: "📦", description: "Module bundler", category: "Build Tools" },
  { name: "Figma", icon: "🎯", description: "UI/UX design tool", category: "Design" },
  { name: "Postman", icon: "📮", description: "API development environment", category: "API" },
  { name: "Kubernetes", icon: "⚙️", description: "Container orchestration", category: "DevOps" },
]

const aiTools = [
  { name: "ChatGPT", icon: "🤖", description: "AI assistant for coding and problem-solving", proficiency: "Advanced" },
  { name: "GitHub Copilot", icon: "🚁", description: "AI pair programmer", proficiency: "Intermediate" },
  { name: "Claude", icon: "🧠", description: "AI assistant for complex reasoning", proficiency: "Intermediate" },
  { name: "Cursor AI", icon: "✨", description: "AI-powered code editor", proficiency: "Beginner" },
  { name: "v0 by Vercel", icon: "⚡", description: "AI UI generator", proficiency: "Intermediate" },
  { name: "Midjourney", icon: "🎨", description: "AI image generation", proficiency: "Beginner" },
  { name: "Perplexity", icon: "🔍", description: "AI-powered search and research", proficiency: "Intermediate" },
  { name: "Replit AI", icon: "🔧", description: "AI coding assistant", proficiency: "Beginner" },
]

const hackathons = [
  {
    name: "HackIndia 2024",
    position: "1st Place Winner",
    project: "SecureChat - End-to-End Encrypted Messaging",
    date: "March 2024",
    location: "Mumbai, India",
    participants: "500+",
    prize: "₹1,00,000",
    technologies: ["React Native", "Node.js", "WebRTC", "Cryptography"],
    description: "Built a secure messaging app with end-to-end encryption and self-destructing messages",
    achievement: "winner",
  },
  {
    name: "CodeFest 2024",
    position: "2nd Place",
    project: "AI-Powered Code Reviewer",
    date: "January 2024",
    location: "Bangalore, India",
    participants: "300+",
    prize: "₹50,000",
    technologies: ["Python", "OpenAI API", "Flask", "Docker"],
    description: "Developed an AI tool that automatically reviews code and suggests improvements",
    achievement: "runner-up",
  },
  {
    name: "CyberSec Hackathon 2023",
    position: "3rd Place",
    project: "Network Intrusion Detection System",
    date: "November 2023",
    location: "Delhi, India",
    participants: "200+",
    prize: "₹25,000",
    technologies: ["Python", "Scapy", "Machine Learning", "Pandas"],
    description: "Created an ML-based system to detect and prevent network intrusions in real-time",
    achievement: "third",
  },
  {
    name: "Smart India Hackathon 2023",
    position: "Finalist",
    project: "Rural Healthcare Management System",
    date: "August 2023",
    location: "Chennai, India",
    participants: "1000+",
    prize: "Recognition",
    technologies: ["React", "Node.js", "MongoDB", "Telemedicine APIs"],
    description: "Developed a comprehensive healthcare management system for rural areas",
    achievement: "finalist",
  },
  {
    name: "DevFest Hackathon 2023",
    position: "Winner - Best UI/UX",
    project: "EcoTrack - Carbon Footprint Tracker",
    date: "October 2023",
    location: "Pune, India",
    participants: "400+",
    prize: "₹30,000",
    technologies: ["Next.js", "Tailwind CSS", "Chart.js", "Firebase"],
    description: "Created an intuitive app to track and reduce personal carbon footprint",
    achievement: "special",
  },
]

const getAchievementColor = (achievement: string) => {
  switch (achievement) {
    case "winner":
      return "from-yellow-500/20 to-orange-500/20 border-yellow-400/30"
    case "runner-up":
      return "from-gray-400/20 to-gray-500/20 border-gray-400/30"
    case "third":
      return "from-orange-500/20 to-red-500/20 border-orange-400/30"
    case "finalist":
      return "from-blue-500/20 to-indigo-500/20 border-blue-400/30"
    case "special":
      return "from-purple-500/20 to-pink-500/20 border-purple-400/30"
    default:
      return "from-gray-500/20 to-slate-500/20 border-gray-400/30"
  }
}

const getAchievementIcon = (achievement: string) => {
  switch (achievement) {
    case "winner":
      return "🏆"
    case "runner-up":
      return "🥈"
    case "third":
      return "🥉"
    case "finalist":
      return "🎯"
    case "special":
      return "🌟"
    default:
      return "🏅"
  }
}

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "XYZ Institute of Technology",
    year: "2021 - 2025",
    cgpa: "8.5/10",
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

const getCategoryColor = (category: string) => {
  const colors = {
    "Network Scanning": "from-blue-500/20 to-cyan-500/20 border-blue-400/30",
    "Web Security": "from-red-500/20 to-pink-500/20 border-red-400/30",
    "Wireless Security": "from-purple-500/20 to-violet-500/20 border-purple-400/30",
    Exploitation: "from-orange-500/20 to-red-500/20 border-orange-400/30",
    "Network Analysis": "from-green-500/20 to-emerald-500/20 border-green-400/30",
    "Database Security": "from-indigo-500/20 to-blue-500/20 border-indigo-400/30",
    "Password Security": "from-yellow-500/20 to-orange-500/20 border-yellow-400/30",
    "Brute Force": "from-red-500/20 to-orange-500/20 border-red-400/30",
    "Web Enumeration": "from-teal-500/20 to-cyan-500/20 border-teal-400/30",
    DevOps: "from-blue-500/20 to-indigo-500/20 border-blue-400/30",
    Cloud: "from-sky-500/20 to-blue-500/20 border-sky-400/30",
    Backend: "from-green-500/20 to-teal-500/20 border-green-400/30",
    API: "from-purple-500/20 to-pink-500/20 border-purple-400/30",
    Database: "from-orange-500/20 to-red-500/20 border-orange-400/30",
    Frontend: "from-cyan-500/20 to-blue-500/20 border-cyan-400/30",
    Testing: "from-yellow-500/20 to-green-500/20 border-yellow-400/30",
    "Build Tools": "from-gray-500/20 to-slate-500/20 border-gray-400/30",
    Design: "from-pink-500/20 to-rose-500/20 border-pink-400/30",
  }
  return colors[category as keyof typeof colors] || "from-gray-500/20 to-slate-500/20 border-gray-400/30"
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            B.Tech Computer Science Student | Full Stack Developer | Cybersecurity Enthusiast
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
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <User className="text-blue-400" />
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                I'm a passionate Computer Science student in my final year, with a strong interest in both software
                development and cybersecurity. My journey combines full-stack development skills with ethical hacking
                and penetration testing knowledge.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                From building modern web applications to conducting security assessments, I enjoy the dual perspective
                of creating secure systems and understanding potential vulnerabilities. This unique combination helps me
                develop more robust and secure applications.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                I'm actively seeking internship opportunities in software development, cybersecurity, or DevSecOps roles
                where I can contribute to meaningful projects while learning from experienced professionals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
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
                      <span>CGPA: {edu.cgpa}</span>
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
            </motion.div>
          </div>
        </motion.section>

        {/* Technical Expertise Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code className="text-blue-400" />
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* IDEs & Development Environment Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Monitor className="text-green-400" />
            IDEs & Development Environment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ides.map((ide, index) => (
              <motion.div
                key={ide.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className={`bg-gradient-to-br ${getStatusColor(ide.proficiency)} backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1))",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <motion.span
                      className="text-3xl group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {ide.icon}
                    </motion.span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        ide.proficiency === "Expert"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : ide.proficiency === "Advanced"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {ide.proficiency}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">{ide.name}</h3>
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {ide.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cybersecurity & Penetration Testing Tools */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Shield className="text-red-400" />
            Cybersecurity & Penetration Testing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className={`bg-gradient-to-br ${getCategoryColor(tool.category)} backdrop-blur-sm rounded-lg p-6 border hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(239, 68, 68, 0.1), transparent)",
                    padding: "1px",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-2xl group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {tool.icon}
                      </motion.span>
                      <h3 className="font-bold group-hover:text-white transition-colors">{tool.name}</h3>
                    </div>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Development Tools & Technologies */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Cpu className="text-purple-400" />
            Development Tools & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {developmentTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className={`bg-gradient-to-br ${getCategoryColor(tool.category)} backdrop-blur-sm rounded-lg p-6 border text-center hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-4xl mb-3 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {tool.icon}
                  </motion.div>
                  <h3 className="font-bold mb-2 group-hover:text-white transition-colors">{tool.name}</h3>
                  <span className="inline-block px-2 py-1 bg-white/10 rounded-full text-xs text-neutral-400 mb-2">
                    {tool.category}
                  </span>
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI Tools Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Brain className="text-green-400" />
            AI Tools & Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(34, 197, 94, 0.2), transparent)",
                    padding: "1px",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-2xl group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {tool.icon}
                      </motion.span>
                      <h3 className="font-bold group-hover:text-white transition-colors">{tool.name}</h3>
                    </div>
                    <motion.span
                      className={`px-2 py-1 rounded-full text-xs ${
                        tool.proficiency === "Advanced"
                          ? "bg-green-500/20 text-green-400"
                          : tool.proficiency === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tool.proficiency}
                    </motion.span>
                  </div>
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hackathons & Competitions Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="text-yellow-400" />
            Hackathons & Competitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className={`bg-gradient-to-br ${getAchievementColor(hackathon.achievement)} backdrop-blur-sm rounded-xl p-6 border hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.1), transparent)",
                    padding: "1px",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-3xl group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {getAchievementIcon(hackathon.achievement)}
                      </motion.span>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-white transition-colors">{hackathon.name}</h3>
                        <p className="text-sm text-neutral-400">
                          {hackathon.date} • {hackathon.location}
                        </p>
                      </div>
                    </div>
                    <motion.span
                      className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {hackathon.position}
                    </motion.span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">{hackathon.project}</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">{hackathon.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/10 rounded-full text-xs text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-neutral-400">
                        <Users size={14} className="inline mr-1" />
                        {hackathon.participants} participants
                      </span>
                    </div>
                    <span className="font-bold text-green-400">{hackathon.prize}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hackathon Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">
                {hackathons.filter((h) => h.achievement === "winner" || h.achievement === "special").length}
              </div>
              <div className="text-sm text-neutral-400">Wins</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🥈</div>
              <div className="text-2xl font-bold text-gray-400 mb-1">
                {hackathons.filter((h) => h.achievement === "runner-up").length}
              </div>
              <div className="text-sm text-neutral-400">Runner-ups</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {hackathons.filter((h) => h.achievement === "finalist").length}
              </div>
              <div className="text-sm text-neutral-400">Finalist</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-2xl font-bold text-green-400 mb-1">₹2.05L</div>
              <div className="text-sm text-neutral-400">Total Prize</div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start My Career Journey</h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities in software development, cybersecurity, or DevSecOps roles
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
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
              your.email@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <Phone size={20} />
              +91 12345 67890
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
