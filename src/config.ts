export const siteConfig = {
  name: "Manikandan Dhanakodi",
  title: "Undergraduate Python Developer & AI Integration Enthusiast",
  description: "Portfolio website of Manikandan Dhanakodi — Python Developer & AI Integration Enthusiast from Erode, Tamil Nadu, India.",
  accentColor: "#631595",
  social: {
    email: "manikandandhanakodi3@gmail.com",
    linkedin: "https://www.linkedin.com/in/manikandan-d-246972395/",
    // twitter is intentionally removed
    github: "https://github.com/mani6368",
    resume: "https://drive.google.com/file/d/1lF016Dp1yv-DTf1s4qggD8QKCsG7rH81/view?usp=sharing",
    phone: "+91 8838739844",
  },
  aboutMe:
    "Final-year B.E. Electrical and Electronics Engineering student at Excel Engineering College with a strong passion for software development and AI integration. Built real-world projects including an open-source NVDA accessibility add-on for visually impaired users, an AI-powered report generation web app, and a stock inventory module deployed for SAIL Salem Steel Plant. Driven by curiosity and hands-on problem-solving to create impactful and practical tech solutions.",
  skills: [
    "Python",
    "MySQL",
    "Git & GitHub",
    "NVDA",
    "OpenAI API",
    "XAMPP",
    "VS Code",
    "Data Structures & Algorithms",
  ],
  projects: [
    {
      name: "Canteen Stock Inventory Module – SAIL Salem Steel Plant",
      description:
        "A semi-automated canteen stock inventory module developed for SAIL (Salem Steel Plant). Covers inventory tracking, kitchen management, sales operations, coupon/meal transactions, and distribution management with integrated backend logic and database design.",
      link: "", // No live link — internal deployment
      skills: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "AI Vision Assistant (NVDA Add-on)",
      description:
        "An open-source accessibility tool built for visually impaired users that uses computer vision to detect inaccessible on-screen UI elements. Captures screenshots, identifies buttons and options, and enables full keyboard navigation and automated mouse interaction. Built specially for Vision-Aid NGO and submitted to Hackathon for Inclusion 2026.",
      link: "https://hackathon.visionaid.org/",
      skills: ["Python", "NVDA", "wxPython", "OpenAI API", "Computer Vision"],
    },
    {
      name: "Report-Maker AI",
      description:
        "An AI-powered web application that automates the generation of structured, professional reports in real-time. Features a minimalist and responsive UI that takes user input and produces formal, formatted reports instantly.",
      link: "https://report-maker.tech",
      skills: ["HTML", "CSS", "JavaScript", "Generative AI"],
    },
  ],
  experience: [
    {
      company: "SAIL Salem Steel Plant (via Excel Engineering College – Team Project)",
      title: "Backend and Database Developer – Canteen Stock Inventory Module",
      dateRange: "April 2026",
      bullets: [
        "Designed and built the database schema and backend logic for a canteen stock inventory module",
        "Handled data management, API integration, and backend development using PHP and MySQL",
        "Built modules covering inventory, kitchen distribution, meal coupons, procurement, and sales operations",
        "Delivered certified software acknowledged by SAIL Salem Steel Plant",
      ],
    },
    {
      company: "Hackathon for Inclusion 2026 / Vision-Aid NGO",
      title: "Open-Source Developer – AI Vision Assistant",
      dateRange: "February 2026",
      bullets: [
        "Developed an NVDA add-on using Python to assist visually impaired users in navigating inaccessible software",
        "Used OpenAI Vision models and computer vision to detect and interact with on-screen UI elements",
        "Enabled full keyboard navigation and automated mouse interaction for unrecognized software options",
        "Submitted and participated in the Hackathon for Inclusion 2026 virtual hackathon",
      ],
    },
    {
      company: "Personal Project",
      title: "Web Developer – Report-Maker AI",
      dateRange: "February 2026",
      bullets: [
        "Engineered an AI-powered web application for automated professional report generation",
        "Designed a minimalist, responsive front-end interface using HTML, CSS, and JavaScript",
        "Deployed and maintained the live application at report-maker.tech",
      ],
    },
  ],
  education: [
    {
      school: "Excel Engineering College, Komarapalayam (Anna University affiliated)",
      degree: "B.E. in Electrical and Electronics Engineering",
      dateRange: "2023 – 2027",
      achievements: [
        "Current CGPA: 7.5",
        "Completed industry-level project for SAIL Salem Steel Plant",
        "Actively building software projects outside the EEE curriculum",
      ],
    },

    {
      school: "Govt. Higher Secondary School",
      degree: "HSC (Class XII)",
      dateRange: "2022 – 2023",
      achievements: [
        "Scored 69% in Higher Secondary Certificate examination",
      ],
    },
    {
      school: "Govt. High School",
      degree: "SSLC (Class X)",
      dateRange: "2020 – 2021",
      achievements: [
        "Scored 75% in Secondary School Leaving Certificate examination",
      ],
    },
  ],
  certifications: [
    {
      title: "Hackathon for Inclusion 2026 – Participant",
      issuer: "Vision-Aid NGO",
      date: "May 2026",
      icon: "🏆",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      date: "October 2025",
      icon: "🎓",
    },
    {
      title: "Canteen Inventory Module Software Certification",
      issuer: "SAIL Salem Steel Plant",
      date: "October 2025",
      icon: "🏭",
    },
  ],
};
