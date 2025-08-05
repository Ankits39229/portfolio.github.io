export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl: string
  status: "Completed" | "In Progress" | "Planning"
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
}

export const projectsData: Record<string, Project[]> = {
  "web-development": [
    {
      id: "Frud-Help Desk",
      title: "Fraud Reporting Platform",
      description: "Government-verified platform for reporting fraud with step-by-step assistance",
      longDescription:
        "A comprehensive fraud reporting platform that connects users with official government portals for reporting various types of fraud in India. Built with modern web technologies, this platform provides step-by-step guidance, 24/7 support, and direct portal access to help citizens report fraud efficiently and securely.",
      technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "JavaScript"],
      features: [
        "Government official portal integration",
        "Step-by-step fraud reporting guidance system",
        "Advanced search functionality for fraud types",
        "24/7 customer support with direct portal access",
        "2,847+ cases successfully resolved",
        "Responsive design optimized for all devices",
        "Secure document and evidence upload system",
        "User-friendly interface with clear visual indicators",
      ],
      liveUrl: "https://v0-make-webapp-from-file.vercel.app/",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "web-development",
      difficulty: "Intermediate",
      duration: "1.5 months",
    },
    {
      id: "visitor-management-system",
      title: "Visitor Management System",
      description: "Streamlined visitor check-in and management solution",
      longDescription:
        "A comprehensive visitor management system designed to enhance security and streamline the check-in process for businesses and organizations. This system features real-time visitor tracking, appointment scheduling, and integration with existing security protocols.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Material-UI"],
      features: [
        "Real-time visitor tracking and management",
        "Appointment scheduling and notifications",
        "Customizable visitor check-in forms",
        "Integration with access control systems",
        "Visitor history and analytics dashboard",
        "Advanced filtering and search",
      ],
      liveUrl: "https://visitor-management-system-demo.vercel.app",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "web-development",
      difficulty: "Intermediate",
      duration: "1 month",
    },
    {
      id: "Trust-Hub",
      title: "Trust Hub",
      description: "Find verified electricians, plumbers, carpenters, painters & more",
      longDescription:
        "A modern platform that connects users with verified service professionals in their area. Trust Hub ensures quality and reliability by vetting all service providers.",
      technologies: ["Next.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Service provider verification and vetting",
        "User reviews and ratings system",
        "Real-time booking and scheduling",
        "Service history tracking",
        "Responsive design for mobile and desktop",
        "Admin dashboard for service provider management",
        "User-friendly interface with intuitive navigation",
      ],
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "web-development",
      difficulty: "Intermediate",
      duration: "2 months",
    },
  ],
  "application-development": [
    {
      id: "JavaSwing Application",
      title: "Windows Security Application",
      description: "Advanced Windows Security Application for system protection",
      longDescription:
        "An advanced Windows security application designed to enhance system protection through real-time monitoring, threat detection, and automated response mechanisms. This application utilizes Java Swing for a robust GUI and integrates with system-level APIs for comprehensive security management.",
      technologies: ["Java", "Java Swing", "Python", "Batch", "Machine Learning", "Blockchain", "Tkinter" ],
      features: [
        "Automates junk‐file (temp, prefetch) removal",
        "Unified diagnostics (network, audio, Bluetooth, etc.)",
        "Network activity monitor for suspicious connections and processes",
        "CIS Benchmark–driven security audit & compliance reporting",
        "Blockchain‑powered feature unlocks for advanced security features",
        "Malware Scanner: Static model trained for static files/folder scan",
        "Malware Scanner: Dynamic behavior-based model trained for background process scan",
      ],
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "application-development",
      difficulty: "Advanced",
      duration: "5 months",
    },
    {
      id: "Electron Application",
      title: "Technical Support Application",
      description: "Technical support application for system diagnostics and troubleshooting",
      longDescription:
        "Technician: A sophisticated technical support application built with Electron that provides system diagnostics, troubleshooting tools, and automated repair scripts. This application is designed to assist users in resolving common technical issues on their systems quickly and efficiently.",
      technologies: ["JavaScript", "Electron.js", "Node.js", "Batch", "HTML", "CSS"],
      features: [
        "Admin-Server-Client Architecture",
        "Graphical user interface for easy navigation",
        "Diagnostics and Troubleshooting tools",
        "CIS Benchmark–driven security audit & compliance reporting",
        "Automated repair scripts for common issues",
        "junk‐file (temp, prefetch) removal",
        "Unified diagnostics (network, audio, Bluetooth, etc.)",
        "Pdf report generation for audit results",        
      ],
      liveUrl: "https://technician-phi.vercel.app/",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "In Progress",
      category: "application-development",
      difficulty: "Advanced",
      duration: "4 months",
    },
    {
      id: "Assist",
      title: "Medical Assistance Application",
      description: "Tool for providing medical assistance and information",
      longDescription:
        "A Android-Based comprehensive medical assistance application designed to help users access health information, schedule appointments, and manage their medical records. This application leverages AI and machine learning to provide personalized health recommendations.",
      technologies: ["Python", "Flask", "TensorFlow", "SQLite", "Requests"],
      features: [
        "Appointment scheduling and reminders",
        "Medication management and reminders",
        "Symptom checker and health assessment",
        "Health tips and personalized recommendations",
      ],
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "In Progress",
      category: "application-development",
      difficulty: "Beginner",
      duration: "1 month",
    },
  ],
  "linux-development": [
    {
      id: "Custom Distro",
      title: "Custom Linux Distribution",
      description: "Tailored Linux distribution for specific use cases",
      longDescription:
        "A custom Linux distribution built from the ground up to meet specific user needs and preferences. This project involves selecting the right components, configuring the system, and optimizing performance for the target audience.",
      technologies: ["Linux", "Debian", "Shell Scripting"],
      features: [
        "Custom kernel configuration for performance",
        "Optimized package selection for minimal footprint",
        "User-friendly installer with guided setup",
        "Pre-configured development environment",
        "Security enhancements and hardening",        
      ],
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "In Progress",
      category: "linux-development",
      difficulty: "Advanced",
      duration: "1.5+ months",
    },
    
  ],
}

export const getCategoryProjects = (category: string): Project[] => {
  return projectsData[category] || []
}

export const getAllProjects = (): Project[] => {
  return Object.values(projectsData).flat()
}

export const getProjectById = (id: string): Project | undefined => {
  return getAllProjects().find((project) => project.id === id)
}

export const getProjectBySlug = (category: string, projectId: string): Project | undefined => {
  const categoryProjects = getCategoryProjects(category)
  return categoryProjects.find((project) => project.id === projectId)
}
