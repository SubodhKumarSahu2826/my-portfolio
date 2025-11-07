import { Code2, Award, Video } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Developer',
      description: 'Building scalable web applications',
    },
    {
      icon: Video,
      title: 'Video Editor',
      description: 'Part-time creative content production',
    },
    {
      icon: Award,
      title: 'Pragmatic Innovator',
      description: 'Transforming ideas into practical solutions',
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
                  I'm a Final-year Computer Engineering student at{' '}
                  <span className="text-primary font-semibold">Terna Engineering College</span>, driven by a passion for building scalable, secure, and intelligent digital systems that make a real impact.
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              As a <span className="text-accent font-semibold">Web Developer and Creative Technologist</span>, I've worked on designing and developing dynamic websites and digital tools that blend innovation with functionality. Alongside that, my experience as a video editor fuels my creative side — allowing me to merge engineering precision with storytelling and design.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I thrive on solving real-world problems, exploring the intersection of software development, design, and user experience, and transforming ideas into powerful, practical solutions.
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
