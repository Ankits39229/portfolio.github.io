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
      duration: "1 month",
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      longDescription:
        "A modern task management application designed for team collaboration. Built with React and Node.js, this application provides real-time updates, drag-and-drop functionality, and comprehensive project tracking.",
      technologies: ["React", "Express.js", "Socket.io", "PostgreSQL", "Material-UI"],
      features: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop task organization",
        "Team member management and role-based access",
        "Project timeline tracking with Gantt charts",
        "File attachments with secure upload",
        "Push notification system",
        "Mobile responsive design",
        "Advanced filtering and search",
      ],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "web-development",
      difficulty: "Intermediate",
      duration: "2 months",
    },
    {
      id: "blog-cms",
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support",
      longDescription:
        "A modern content management system specifically designed for bloggers and content creators. This CMS features a powerful markdown editor with live preview, SEO optimization tools, and a clean, intuitive interface.",
      technologies: ["Next.js", "Prisma", "MySQL", "NextAuth.js", "MDX", "Tailwind CSS"],
      features: [
        "Rich markdown editor with live preview",
        "SEO optimization tools and meta tag management",
        "User authentication with multiple providers",
        "Comment system with moderation",
        "Tag and category management",
        "Analytics dashboard with visitor insights",
        "Dark/light theme toggle",
        "Image optimization and lazy loading",
      ],
      githubUrl: "https://github.com/username/blog-cms",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "In Progress",
      category: "web-development",
      difficulty: "Intermediate",
      duration: "1.5 months",
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts",
      longDescription:
        "A comprehensive weather dashboard that provides detailed weather information, forecasts, and interactive maps. This application demonstrates API integration, data visualization, and responsive design principles.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet", "CSS3"],
      features: [
        "Current weather conditions with detailed metrics",
        "7-day weather forecast with hourly breakdown",
        "Interactive weather maps with multiple layers",
        "Location-based weather using geolocation",
        "Weather alerts and severe weather notifications",
        "Historical weather data and trends",
        "Customizable dashboard with widget system",
        "Multiple unit systems (metric/imperial)",
      ],
      githubUrl: "https://github.com/username/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "web-development",
      difficulty: "Beginner",
      duration: "3 weeks",
    },
  ],
  cybersecurity: [
    {
      id: "vulnerability-scanner",
      title: "Web Vulnerability Scanner",
      description: "Automated tool for detecting common web application vulnerabilities",
      longDescription:
        "A comprehensive web vulnerability scanner designed to identify security flaws in web applications. This tool automates the detection of common vulnerabilities including SQL injection, XSS, CSRF, and other OWASP Top 10 issues.",
      technologies: ["Python", "Requests", "BeautifulSoup", "SQLAlchemy", "Flask", "Threading"],
      features: [
        "SQL injection detection with multiple techniques",
        "Cross-site scripting (XSS) vulnerability scanning",
        "Directory traversal and path manipulation testing",
        "SSL/TLS configuration analysis and certificate validation",
        "Automated report generation with severity ratings",
        "Custom payload support for advanced testing",
        "Multi-threaded scanning for improved performance",
        "Web crawling for comprehensive site mapping",
      ],
      githubUrl: "https://github.com/username/vuln-scanner",
      imageUrl: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      category: "cybersecurity",
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
      category: "cybersecurity",
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
      category: "cybersecurity",
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
