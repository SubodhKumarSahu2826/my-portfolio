import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import XIcon from '@/components/ui/x-icon';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/SubodhKumarSahu2826"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/subodhkumarsahu98/m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/Sahu_Subodh26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <XIcon className="h-6 w-6" />
            </a>
            <a
              href="mailto:subodh@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <p className="text-muted-foreground text-center flex items-center gap-2">
            © 2025 Subodh Kumar Sahu | Designed & Developed with{' '}
            <Heart className="h-4 w-4 text-accent fill-accent inline" /> using React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
