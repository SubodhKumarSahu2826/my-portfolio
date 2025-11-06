
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

// ✅ CHANGE #1: Added handler functions for button clicks
const Projects = () => {
  // ✅ CHANGE #1a: Handler for Live Demo button - opens in new tab
  const handleLiveDemo = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // ✅ CHANGE #1b: Handler for GitHub Code button - opens in new tab
  const handleGithub = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // ✅ CHANGE #2: Added liveDemo and github URLs to each project
  const projects = [
    {
      title: 'Job Application Portal Redesign',
      description:
        'Streamlined job applications with dynamic filtering and resume analytics for enhanced user experience.',
      tech: ['React', 'Node.js', 'MongoDB'],
      thumbnail: '/Projects Images/job-application-portal.jpeg',
      // ✅ CHANGE #2a: Added live demo URL (set to null if no live demo available)
      liveDemo: null,
      // ✅ CHANGE #2b: Added GitHub repository URL
      github: 'https://github.com/SubodhKumarSahu2826/Job-Application-Portal.git',
    },
    {
      title: 'Web3 Crowdfunding Application',
      description:
        'Decentralized platform ensuring transparent and secure fund management using blockchain technology.',
      tech: ['React', 'Solidity', 'Web3.js'],
      thumbnail: '/Projects Images/web3-crowdfunding.png',
      liveDemo: null,
      github: 'https://github.com/SubodhKumarSahu2826/Crowdfunding-using-Smart-Contract.git',
    },
    {
      title: 'Beats 3 Head Phone Landing Page',
      description:
        'Responsive product landing page featuring smooth animations, product overview, pricing integration, and optimized user experience across all devices.',
      tech: ['React', 'CSS', 'JavaScript'],
      thumbnail: '/Projects Images/HeadPhone Landing Page.png',
      liveDemo: 'https://beats-headphone-landing-page.vercel.app/',
      github: 'https://github.com/SubodhKumarSahu2826/Beats-Headphone-Landing-Page.git',
    },
    {
      title: 'AI-Based Adaptive Cyber Honeypot',
      description:
        'Dynamic threat detection system through AI-driven deception networks for enhanced cybersecurity.',
      tech: ['Python', 'ML', 'Docker'],
      thumbnail: '/Projects Images/CyberHoney-Pot.png',
      liveDemo: 'null',
      github: 'https://github.com/SubodhKumarSahu2826/AI_Adaptive-cyber_honeypot.git',
    },
    {
      title: 'Kinova Bionic Hand Control System',
      description:
        'Real-time bionic hand control system for Kinova robotic arms with UART communication bridge and Kortex API integration.',
      tech: ['Python', 'Kortex API', 'UART', 'TCP/UDP'],
      thumbnail: '/Projects Images/Kinova Bionic Hand Control System.png',
      // ✅ CHANGE #2c: Set to null because it's a hardware project with no live demo
      liveDemo: null,
      github: 'https://github.com/SubodhKumarSahu2826/kinova-bionic-hand-control.git',
    },
    {
      title: 'Face Recognition Attendance Management System',
      description:
        'Intelligent attendance management system leveraging OpenCV for automated facial recognition, real-time tracking, performance analytics, and detailed attendance reports.',
      tech: ['Python', 'OpenCV', 'Flask', 'Database'],
      thumbnail: '/Projects Images/face recognition attendence management system.png',
      liveDemo: 'https://face-recognition-attendance.herokuapp.com',
      github: 'https://github.com/SubodhKumarSahu2826/Attendance-Management-System.git',
    },
    {
      title: 'Electricity Billing System',
      description:
        'Full-featured billing platform for utilities management including customer administration, consumption tracking, automated invoice generation, and secure payment handling.',
      tech: ['Java', 'SQL', 'GUI'],
      thumbnail: '/Projects Images/electricity billing system.png',
      // ✅ CHANGE #2d: Set to null because it's a desktop application with no web hosting
      liveDemo: null,
      github: 'https://github.com/yourusername/electricity-billing-system',
    },
    {
      title: 'Drug Research Platform',
      description:
        'AI-powered platform for protein structure prediction and drug-binding analysis using NVIDIA machine learning models.',
      tech: ['TypeScript', 'NVIDIA-NIM', 'MongoDB', 'TailwindCSS', 'Next.js'],
      thumbnail: '/Projects Images/Protein-Bind.png',
      liveDemo: 'https://protein-bind.vercel.app',
      github: 'https://github.com/SubodhKumarSahu2826/Drug-Research-Platform.git',
    },
    {
      title: 'TextSavvy - Web Accessibility Extension',
      description:
        'Chrome extension empowering web accessibility with text modification, dyslexia-friendly fonts, text-to-speech, colorblind mode, and real-time page translation for inclusive browsing experience.',
      tech: ['JavaScript', 'Chrome API', 'HTML', 'CSS'],
      thumbnail: '/Projects Images/text-savvy.png',
      // ✅ CHANGE #2e: Link to Chrome Web Store instead of regular deployment
      liveDemo: 'https://chrome.google.com/webstore/detail/textsavvy',
      github: 'git@github.com:SubodhKumarSahu2826/textsavvy-extension.git',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg border border-border hover:border-glow transition-all duration-300 overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ✅ CHANGE #3: Updated Buttons Section - Added onClick handlers and conditional rendering */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  {/* ✅ CHANGE #3a: Live Demo Button - Shows "Live Demo" if available, "No Demo" if null */}
                  <Button
                    onClick={() => handleLiveDemo(project.liveDemo)}
                    disabled={!project.liveDemo}
                    variant="outline"
                    size="sm"
                    className={`w-full sm:w-auto text-xs md:text-sm transition-all ${
                      project.liveDemo
                        ? 'border-primary text-primary hover:bg-primary/10 cursor-pointer'
                        : 'border-gray-500 text-gray-500 cursor-not-allowed opacity-50'
                    }`}
                  >
                    <ExternalLink className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    {project.liveDemo ? 'Live Demo' : 'No Demo'}
                  </Button>

                  {/* ✅ CHANGE #3b: GitHub Code Button - Added onClick handler to open GitHub repo */}
                  <Button
                    onClick={() => handleGithub(project.github)}
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-glow w-full sm:w-auto text-xs md:text-sm cursor-pointer"
                  >
                    <Github className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;