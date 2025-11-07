import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import XIcon from '@/components/ui/x-icon';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Web Developer', 'DevOps Engineer', 'ML Enthusiast', 'Open Source Contributor'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const emojis = ['💻', '⚡', '🔧', '🚀', '🖥️', '⌨️', '🔌', '🧠'];
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % emojis.length);
    }, 2000);

    return () => clearInterval(emojiInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 py-24 md:py-20">
      <div className="container mx-auto text-center animate-fade-in-up max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          Hi, I'm <span className="text-gradient">Subodh Kumar Sahu</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
          a Passionate <span className="text-primary">Computer Engineer</span>{' '}
          <span className="inline-block transition-all duration-300 hover:scale-125">
            {emojis[emojiIndex]}
          </span>
        </h2>
        
        <div className="h-12 md:h-16 mb-6 md:mb-8 flex items-center justify-center">
          <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
            {typedText}
            <span className="animate-blink border-r-2 border-primary ml-1"></span>
          </span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
          Building efficient systems and smart solutions in Web Development, Machine Learning, and DevOps.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow transition-all w-full sm:w-auto"
            onClick={() => window.open('/SKS Resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 border-glow w-full sm:w-auto"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>

        <div className="flex gap-4 md:gap-6 justify-center flex-wrap px-4">
          <a
            href="https://github.com/SubodhKumarSahu2826"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-glow transition-all hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/subodhkumarsahu98/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-glow transition-all hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/Sahu_Subodh26"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-glow transition-all hover:scale-110"
          >
            <XIcon className="h-6 w-6" />
          </a>
          <a
            href="mailto:subodhkumarsahu.dev@gmail.com"
            className="p-3 rounded-full border border-border hover:border-glow transition-all hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
