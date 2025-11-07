import { useEffect, useState } from 'react';
import { Code2, Terminal, Cpu, Database, Cloud, GitBranch, Braces, Binary, Folder, CloudCog, Shield, Bug, Wrench, Server, Hammer, Activity, Key, Eye } from 'lucide-react';

interface FloatingElement {
  id: number;
  Icon: any;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const FloatingTechElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const icons = [Code2, Terminal, Cpu, Database, Cloud, GitBranch, Braces, Binary, Folder, CloudCog,Shield, Bug, Wrench,Server, Hammer, Activity, Key, Eye];

  useEffect(() => {
    const generatedElements: FloatingElement[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 24 + 16,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));

    setElements(generatedElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {elements.map((element) => {
        const Element = element.Icon;
        return (
          <div
            key={element.id}
            className="absolute animate-float opacity-20 hover:opacity-40 transition-opacity"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <Element
              size={element.size}
              className="text-primary"
              style={{
                transform: `rotate(${element.rotation}deg)`,
                filter: 'drop-shadow(0 0 12px hsl(var(--primary) / 0.5))',
              }}
            />
          </div>
        );
      })}
      
      {/* Code snippets floating */}
      <div className="absolute top-20 left-10 opacity-15 text-primary font-mono text-sm animate-float" style={{ animationDuration: '12s' }}>
        {'<div className="code">'}
      </div>
      <div className="absolute bottom-32 right-20 opacity-15 text-accent font-mono text-sm animate-float" style={{ animationDuration: '14s', animationDelay: '2s' }}>
        {'function() { }'}
      </div>
      <div className="absolute top-1/2 right-10 opacity-15 text-primary font-mono text-sm animate-float" style={{ animationDuration: '16s', animationDelay: '1s' }}>
        {'const tech = "awesome";'}
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-15 text-accent font-mono text-sm animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }}>
        {'npm install innovation'}
      </div>
    </div>
  );
};

export default FloatingTechElements;
