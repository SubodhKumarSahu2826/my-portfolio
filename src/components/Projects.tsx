import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Job Application Portal Redesign',
      description:
        'Streamlined job applications with dynamic filtering and resume analytics for enhanced user experience.',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-primary to-purple-600',
      thumbnail: '💼',
    },
    {
      title: 'Web3 Crowdfunding Application',
      description:
        'Decentralized platform ensuring transparent and secure fund management using blockchain technology.',
      tech: ['React', 'Solidity', 'Web3.js'],
      gradient: 'from-accent to-primary',
      thumbnail: '⛓️',
    },
    {
      title: 'Chatbot Ticket Booking for Museums',
      description:
        'AI-based multilingual assistant providing smart visitor experience with natural language processing.',
      tech: ['Python', 'TensorFlow', 'React'],
      gradient: 'from-purple-600 to-accent',
      thumbnail: '🤖',
    },
    {
      title: 'AI-Based Adaptive Cyber Honeypot',
      description:
        'Dynamic threat detection system through AI-driven deception networks for enhanced cybersecurity.',
      tech: ['Python', 'ML', 'Docker'],
      gradient: 'from-primary to-accent',
      thumbnail: '🔒',
    },
    {
      title: 'E-Commerce Analytics Dashboard',
      description:
        'Real-time analytics platform with interactive visualizations for tracking sales, inventory, and customer insights.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      gradient: 'from-accent to-purple-600',
      thumbnail: '📊',
    },
    {
      title: 'Social Media Management Tool',
      description:
        'Centralized platform for scheduling posts, analyzing engagement metrics, and managing multiple social accounts.',
      tech: ['Next.js', 'PostgreSQL', 'Redis'],
      gradient: 'from-purple-600 to-primary',
      thumbnail: '📱',
    },
    {
      title: 'Healthcare Management System',
      description:
        'Comprehensive patient management platform with appointment scheduling, medical records, and telemedicine integration.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      gradient: 'from-primary to-accent',
      thumbnail: '🏥',
    },
    {
      title: 'AI-Powered Content Generator',
      description:
        'Advanced content creation tool leveraging machine learning for automated blog posts, social media content, and marketing copy.',
      tech: ['Python', 'GPT-4', 'FastAPI'],
      gradient: 'from-accent to-purple-600',
      thumbnail: '✍️',
    },
    {
      title: 'Smart Home IoT Dashboard',
      description:
        'Unified control panel for managing smart home devices with real-time monitoring, automation rules, and energy tracking.',
      tech: ['React', 'MQTT', 'IoT'],
      gradient: 'from-purple-600 to-primary',
      thumbnail: '🏠',
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
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {project.thumbnail}
                </span>
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

                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto text-xs md:text-sm"
                  >
                    <ExternalLink className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-glow w-full sm:w-auto text-xs md:text-sm"
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
