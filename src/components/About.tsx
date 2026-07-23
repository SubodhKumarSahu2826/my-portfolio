import { Code2, Award, BrainCircuit } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';

const About = () => {
  const highlights = [
    {
      icon: BrainCircuit,
      title: 'AI/ML Engineer',
      description: 'Building intelligent AI applications, LLMs, RAG systems & ML solutions',
    },
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Developing scalable web applications and AI-powered platforms',
    },
    {
      icon: Award,
      title: 'AI Innovator',
      description: 'Transforming cutting-edge AI research into real-world products',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-fade-in order-2 md:order-1">
            <div className="flex items-start gap-4">
              <div className="relative w-24 h-auto flex-shrink-0 rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg">
                <img
                  src={profileImage}
                  alt="Subodh Kumar Sahu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I'm a <span className="text-primary font-semibold">Computer Engineering Graduate</span> passionate about building production-ready AI/ML systems, intelligent applications, and scalable software solutions that solve real-world problems.
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              As an <span className="text-accent font-semibold">AI/ML Engineer and Full-Stack Developer</span>, I specialize in developing end-to-end AI applications by combining Machine Learning, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, and modern web technologies to build intelligent, scalable, and production-ready products.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I enjoy transforming complex ideas into practical solutions by designing robust backend systems, intuitive user interfaces, and high-performance AI workflows. I continuously explore emerging AI technologies to build reliable, impactful, and user-centric applications that bridge cutting-edge research with real-world deployment.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in-up order-1 md:order-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;