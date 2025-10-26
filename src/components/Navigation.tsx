import { useState, useEffect } from 'react';
import sksLogo from '@/assets/sks-logo.png';
import ThemeToggle from './ThemeToggle';
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const navLinks = [{
    name: 'Home',
    id: 'hero'
  }, {
    name: 'About',
    id: 'about'
  }, {
    name: 'Projects',
    id: 'projects'
  }, {
    name: 'Achievements',
    id: 'achievements'
  }, {
    name: 'Contact',
    id: 'contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/30 backdrop-blur-sm border-b border-border/30' : 'bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
              
            </div>
            <span className="text-2xl font-bold text-gradient group-hover:tracking-wider transition-all duration-300">SKS</span>
          </button>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2">
              {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="relative px-5 py-2.5 text-sm font-semibold text-foreground/70 hover:text-primary transition-all duration-300 group overflow-hidden rounded-lg">
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </button>)}
            </div>
            <div className="h-6 w-px bg-border" />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button className="p-2.5 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300" onClick={() => {
            const menu = document.getElementById('mobile-menu');
            menu?.classList.toggle('hidden');
          }}>
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden pb-4 pt-2">
          <div className="space-y-2">
            {navLinks.map(link => <button key={link.id} onClick={() => {
            scrollToSection(link.id);
            document.getElementById('mobile-menu')?.classList.add('hidden');
          }} className="block w-full text-left px-5 py-3 text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                {link.name}
              </button>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;