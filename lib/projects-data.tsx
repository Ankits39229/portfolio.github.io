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
      githubUrl: "https://github.com/ankits39229/frud-help-desk",
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
      githubUrl: "https://github.com/ankits39229/VMS",
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
      githubUrl: "https://github.com/username/Trust-Hub",
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
      technologies: ["Java", "Java Swing", "Python", "Batch", "Machine Learning", "Blockchain"],
      features: [
        "• Automates junk‐file (temp, prefetch) removal",
        "• Unified diagnostics (network, audio, Bluetooth, etc.)",
        "• Network activity monitor for suspicious connections and processes",
        "• CIS Benchmark–driven security audit & compliance reporting",
        "• Blockchain‑powered feature unlocks for advanced security features",
        "• Malware Scanner: Advanced malware detection",
        "• Malware Scanner: – Static model trained for static files/folder scan",
        "• Malware Scanner: – Dynamic behavior-based model trained for background process scan",
      ],
      githubUrl: "https://github.com/username/vuln-scanner",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "application-development",
      difficulty: "Advanced",
      duration: "2 months",
    },
    {
      id: "network-monitor",
      title: "Network Traffic Monitor",
      description: "Real-time network traffic analysis and intrusion detection system",
      longDescription:
        "A sophisticated network monitoring tool that provides real-time traffic analysis, anomaly detection, and intrusion detection capabilities. Built with Python and Scapy, this system captures and analyzes network packets.",
      technologies: ["Python", "Scapy", "Wireshark", "Pandas", "Matplotlib", "SQLite"],
      features: [
        "Real-time packet capture and analysis",
        "Traffic pattern analysis with statistical modeling",
        "Intrusion detection with signature and anomaly-based detection",
        "Protocol analysis for TCP, UDP, HTTP, DNS, and more",
        "Bandwidth monitoring and usage statistics",
        "Suspicious activity detection and alerting",
        "Network topology mapping and visualization",
        "Geolocation tracking for IP addresses",
      ],
      githubUrl: "https://github.com/username/network-monitor",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "In Progress",
      category: "application-development",
      difficulty: "Advanced",
      duration: "3 months",
    },
    {
      id: "password-auditor",
      title: "Password Security Auditor",
      description: "Tool for auditing password strength and detecting weak credentials",
      longDescription:
        "A comprehensive password auditing tool designed to help organizations assess and improve their password security posture. This application analyzes password policies, detects weak passwords, and performs dictionary attacks.",
      technologies: ["Python", "Hashlib", "John the Ripper", "Tkinter", "SQLite", "Requests"],
      features: [
        "Password strength analysis with multiple criteria",
        "Dictionary attack simulation with custom wordlists",
        "Password policy compliance checking",
        "Breach database comparison (HaveIBeenPwned integration)",
        "Custom wordlist generation and management",
        "Hash cracking with multiple algorithms",
        "Detailed reporting and analytics dashboard",
        "GUI interface for easy operation",
      ],
      githubUrl: "https://github.com/username/password-auditor",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "application-development",
      difficulty: "Intermediate",
      duration: "1 month",
    },
  ],
  "ai-ml": [
    {
      id: "chatbot-assistant",
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot with natural language processing capabilities",
      longDescription:
        "An advanced AI chatbot assistant that leverages natural language processing to understand user queries and provide intelligent, context-aware responses. Built with Python and integrated with OpenAI's GPT models.",
      technologies: ["Python", "OpenAI API", "NLTK", "Flask", "SQLite", "spaCy"],
      features: [
        "Natural language understanding with context awareness",
        "Multi-turn conversations with memory retention",
        "Multi-language support (English, Spanish, French, German)",
        "Sentiment analysis for emotional intelligence",
        "Intent recognition and entity extraction",
        "Learning from conversations for continuous improvement",
        "Integration with external APIs and knowledge bases",
        "Voice interaction support with speech-to-text",
      ],
      githubUrl: "https://github.com/username/ai-chatbot",
      liveUrl: "https://chatbot-demo.vercel.app",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "ai-ml",
      difficulty: "Advanced",
      duration: "2.5 months",
    },
    {
      id: "image-classifier",
      title: "Image Classification System",
      description: "Deep learning model for automated image recognition and classification",
      longDescription:
        "A sophisticated image classification system using convolutional neural networks to automatically categorize and tag images with high accuracy. This project demonstrates deep learning expertise, featuring custom CNN architectures and transfer learning.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Flask"],
      features: [
        "Multi-class image classification with 95%+ accuracy",
        "Real-time image processing and prediction",
        "Custom CNN architecture with transfer learning",
        "Batch processing support for large datasets",
        "Confidence scoring and uncertainty quantification",
        "Data augmentation for improved model robustness",
        "Model performance metrics and evaluation tools",
        "Web interface for easy image upload and classification",
      ],
      githubUrl: "https://github.com/username/image-classifier",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "In Progress",
      category: "ai-ml",
      difficulty: "Advanced",
      duration: "3 months",
    },
    {
      id: "data-analyzer",
      title: "Automated Data Analyzer",
      description: "Machine learning tool for automated data analysis and insights",
      longDescription:
        "An intelligent data analysis tool that automatically processes datasets, identifies patterns, generates insights, and creates visualizations without manual intervention. This system uses machine learning algorithms to understand data characteristics.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"],
      features: [
        "Automated data cleaning and preprocessing",
        "Pattern recognition and trend analysis",
        "Statistical analysis with hypothesis testing",
        "Predictive modeling with multiple algorithms",
        "Interactive visualizations and dashboards",
        "Automated report generation with insights",
        "Anomaly detection and outlier identification",
        "Feature importance analysis and selection",
      ],
      githubUrl: "https://github.com/username/data-analyzer",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Planning",
      category: "ai-ml",
      difficulty: "Intermediate",
      duration: "2 months",
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
