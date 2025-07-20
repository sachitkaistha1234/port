import jsPDF from 'jspdf';

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    responsibilities: string[];
    technologies: string[];
  }>;
  education: Array<{
    degree: string;
    period: string;
    status: string;
    highlights: string[];
  }>;
  skills: {
    devops: Array<{ name: string; level: number }>;
    backend: Array<{ name: string; level: number }>;
    tools: Array<{ name: string; level: number }>;
  };
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    features: string[];
  }>;
  certifications: Array<{
    title: string;
    issuer: string;
    year: string;
  }>;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Sachit Kaistha",
    title: "DevOps Engineer & Backend Developer",
    email: "skaistha16@gmail.com",
    phone: "+91 7876434370",
    location: "Chandigarh, India",
    linkedin: "linkedin.com/in/sachit-kaistha-306849190",
    github: "github.com/sachitkaistha"
  },
  summary: "Passionate DevOps Engineer with 2.7+ years of PHP development experience, specializing in automation, CI/CD pipelines, and cloud infrastructure. Proven track record of reducing deployment time by 80% through innovative automation solutions. Expert in bridging development and operations with a strong foundation in backend development and modern DevOps practices.",
  experience: [
    {
      title: "DevOps Engineer",
      company: "Technical Arsenal",
      period: "Present",
      location: "Remote",
      responsibilities: [
        "Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 80%",
        "Managed containerized applications with Docker and Kubernetes for scalable infrastructure",
        "Automated infrastructure deployment and configuration management using modern DevOps tools",
        "Monitored system performance and implemented comprehensive alerting solutions",
        "Collaborated with development teams on deployment strategies and best practices"
      ],
      technologies: ["Docker", "Jenkins", "GitHub Actions", "AWS", "Linux", "Bash", "Nginx", "Kubernetes"]
    },
    {
      title: "PHP Web Developer",
      company: "Previous Role",
      period: "2.7 Years",
      location: "On-site",
      responsibilities: [
        "Developed robust web applications using PHP and Laravel framework with high performance",
        "Designed and optimized MySQL databases for enterprise-level applications",
        "Built RESTful APIs and integrated third-party services for enhanced functionality",
        "Collaborated with cross-functional teams to deliver quality software solutions",
        "Implemented security best practices and code optimization techniques"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS", "Git", "Postman"]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      period: "June 2023 - June 2025",
      status: "Awaiting Result",
      highlights: ["Advanced Programming", "System Design", "Cloud Computing", "DevOps Practices"]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      period: "June 2019 - June 2022",
      status: "Completed",
      highlights: ["Programming Fundamentals", "Database Management", "Web Development", "Software Engineering"]
    }
  ],
  skills: {
    devops: [
      { name: "Docker", level: 90 },
      { name: "AWS", level: 85 },
      { name: "Jenkins", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "Linux", level: 90 }
    ],
    backend: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Python", level: 85 },
      { name: "API Development", level: 88 }
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "GitHub Actions", level: 85 },
      { name: "Nginx", level: 80 },
      { name: "Bash", level: 85 },
      { name: "Postman", level: 90 }
    ]
  },
  projects: [
    {
      title: "DevFlow AI - Multi-Tool Dashboard",
      description: "Ultimate multi-tool dashboard unifying AI, DevOps, and automation into one interactive platform",
      technologies: ["Python", "Streamlit", "Scikit-learn", "Gemini API", "Docker", "Paramiko"],
      features: [
        "Remote Docker management over SSH",
        "AI-powered commute estimation",
        "AI story co-writing with text-to-speech",
        "Universal code generation"
      ]
    },
    {
      title: "Remote Docker Manager",
      description: "Browser-based Docker container management tool with secure SSH connectivity",
      technologies: ["Python", "Streamlit", "Docker", "SSH", "Subprocess"],
      features: [
        "Secure SSH connectivity",
        "Container lifecycle management",
        "Image pulling and running",
        "DockerHub integration"
      ]
    },
    {
      title: "AI Communication Suite",
      description: "Comprehensive communication toolkit with AI-powered messaging capabilities",
      technologies: ["Python", "Twilio API", "Gradio", "WhatsApp API", "Voice API"],
      features: [
        "Multi-channel messaging",
        "AI-powered voice calls",
        "Global SMS delivery",
        "WhatsApp integration"
      ]
    }
  ],
  certifications: [
    {
      title: "PHP Development",
      issuer: "CS Soft Solutions, Chandigarh",
      year: "2022"
    },
    {
      title: "Linux World Informatics Internship",
      issuer: "Linux World Informatics",
      year: "2025"
    }
  ]
};

export const generateResumePDF = (): void => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Helper function to add text with word wrapping
  const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10): number => {
    pdf.setFontSize(fontSize);
    const lines = pdf.splitTextToSize(text, maxWidth);
    pdf.text(lines, x, y);
    return y + (lines.length * (fontSize * 0.35));
  };

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number): number => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      pdf.addPage();
      return margin;
    }
    return yPosition;
  };

  // Header with name and contact info
  pdf.setFillColor(59, 130, 246); // Blue color
  pdf.rect(0, 0, pageWidth, 40, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text(resumeData.personalInfo.name, margin, 20);
  
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'normal');
  pdf.text(resumeData.personalInfo.title, margin, 30);

  // Contact information
  pdf.setFontSize(10);
  const contactY = 35;
  pdf.text(`📧 ${resumeData.personalInfo.email}`, margin, contactY);
  pdf.text(`📱 ${resumeData.personalInfo.phone}`, margin + 70, contactY);
  pdf.text(`📍 ${resumeData.personalInfo.location}`, margin + 140, contactY);

  yPosition = 50;
  pdf.setTextColor(0, 0, 0);

  // Professional Summary
  yPosition = checkNewPage(25);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(59, 130, 246);
  pdf.text('PROFESSIONAL SUMMARY', margin, yPosition);
  yPosition += 8;

  pdf.setTextColor(0, 0, 0);
  pdf.setFont('helvetica', 'normal');
  yPosition = addText(resumeData.summary, margin, yPosition, contentWidth, 11);
  yPosition += 10;

  // Experience
  yPosition = checkNewPage(30);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(59, 130, 246);
  pdf.text('PROFESSIONAL EXPERIENCE', margin, yPosition);
  yPosition += 8;

  resumeData.experience.forEach((exp, index) => {
    yPosition = checkNewPage(40);
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(exp.title, margin, yPosition);
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${exp.company} | ${exp.period} | ${exp.location}`, margin, yPosition + 6);
    yPosition += 12;

    // Responsibilities
    exp.responsibilities.forEach((resp) => {
      yPosition = checkNewPage(8);
      yPosition = addText(`• ${resp}`, margin + 5, yPosition, contentWidth - 5, 10);
      yPosition += 2;
    });

    // Technologies
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    yPosition = addText(`Technologies: ${exp.technologies.join(', ')}`, margin + 5, yPosition + 3, contentWidth - 5, 10);
    yPosition += 8;
  });

  // Skills
  yPosition = checkNewPage(40);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(59, 130, 246);
  pdf.text('TECHNICAL SKILLS', margin, yPosition);
  yPosition += 8;

  const skillCategories = [
    { title: 'DevOps & Cloud', skills: resumeData.skills.devops },
    { title: 'Backend Development', skills: resumeData.skills.backend },
    { title: 'Tools & Technologies', skills: resumeData.skills.tools }
  ];

  skillCategories.forEach((category) => {
    yPosition = checkNewPage(15);
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text(category.title, margin, yPosition);
    yPosition += 6;

    const skillsText = category.skills.map(skill => `${skill.name} (${skill.level}%)`).join(' • ');
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    yPosition = addText(skillsText, margin + 5, yPosition, contentWidth - 5, 10);
    yPosition += 8;
  });

  // Projects
  yPosition = checkNewPage(30);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(59, 130, 246);
  pdf.text('KEY PROJECTS', margin, yPosition);
  yPosition += 8;

  resumeData.projects.slice(0, 3).forEach((project) => {
    yPosition = checkNewPage(25);
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text(project.title, margin, yPosition);
    yPosition += 6;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    yPosition = addText(project.description, margin + 5, yPosition, contentWidth - 5, 10);
    yPosition += 3;

    // Key features
    project.features.slice(0, 2).forEach((feature) => {
      yPosition = checkNewPage(6);
      yPosition = addText(`• ${feature}`, margin + 10, yPosition, contentWidth - 10, 9);
    });

    // Technologies
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    yPosition = addText(`Technologies: ${project.technologies.join(', ')}`, margin + 5, yPosition + 2, contentWidth - 5, 9);
    yPosition += 8;
  });

  // Education
  yPosition = checkNewPage(25);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(59, 130, 246);
  pdf.text('EDUCATION', margin, yPosition);
  yPosition += 8;

  resumeData.education.forEach((edu) => {
    yPosition = checkNewPage(15);
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text(edu.degree, margin, yPosition);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${edu.period} | ${edu.status}`, margin, yPosition + 6);
    yPosition += 12;
  });

  // Certifications
  yPosition = checkNewPage(20);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(59, 130, 246);
  pdf.text('CERTIFICATIONS', margin, yPosition);
  yPosition += 8;

  resumeData.certifications.forEach((cert) => {
    yPosition = checkNewPage(10);
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${cert.title} - ${cert.issuer} (${cert.year})`, margin, yPosition);
    yPosition += 8;
  });

  // Footer
  const footerY = pageHeight - 10;
  pdf.setFontSize(8);
  pdf.setTextColor(100, 100, 100);
  pdf.text('LinkedIn: ' + resumeData.personalInfo.linkedin, margin, footerY);
  pdf.text('GitHub: ' + resumeData.personalInfo.github, margin + 80, footerY);

  // Save the PDF
  pdf.save('Sachit_Kaistha_Resume.pdf');
};