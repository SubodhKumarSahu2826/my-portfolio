import { Code2, Braces, Server, Cloud, Database, GitBranch, Box, Cpu, Brain, FileCode, Terminal, Zap, Infinity } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
  {
    category: 'AI & Machine Learning',
    color: 'from-orange-500 via-red-500 to-pink-500',
    bgPattern: '🤖',
    skills: [
      { name: 'PyTorch', icon: Brain, level: 90 },
      { name: 'Scikit-learn', icon: Cpu, level: 88 },
      { name: 'LangChain', icon: Brain, level: 90 },
      { name: 'LLMs', icon: Cpu, level: 88 },
    ]
  },
  {
    category: 'Backend Development',
    color: 'from-cyan-500 via-teal-500 to-green-500',
    bgPattern: '⚙️',
    skills: [
      { name: 'FastAPI', icon: Server, level: 90 },
      { name: 'Node.js', icon: Server, level: 88 },
      { name: 'Express.js', icon: Terminal, level: 88 },
      { name: 'REST APIs', icon: Zap, level: 90 },
    ]
  },
  {
    category: 'Frontend Development',
    color: 'from-blue-500 via-indigo-500 to-purple-500',
    bgPattern: '💻',
    skills: [
      { name: 'React', icon: Braces, level: 90 },
      { name: 'TypeScript', icon: Terminal, level: 85 },
      { name: 'Tailwind CSS', icon: Braces, level: 90 },
      { name: 'Vite', icon: Zap, level: 85 },
    ]
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-sky-500 via-blue-500 to-indigo-500',
    bgPattern: '☁️',
    skills: [
      { name: 'Docker', icon: Box, level: 88 },
      { name: 'AWS EC2', icon: Cloud, level: 85 },
      { name: 'Nginx', icon: Server, level: 82 },
      { name: 'Git', icon: GitBranch, level: 92 },
      { name: 'GitHub Actions', icon: Infinity, level: 80 },
    ]
  },
  {
    category: 'Databases',
    color: 'from-emerald-500 via-green-500 to-lime-500',
    bgPattern: '💾',
    skills: [
      { name: 'PostgreSQL', icon: Database, level: 88 },
      { name: 'MongoDB', icon: Database, level: 90 },
      { name: 'MySQL', icon: Database, level: 88 },
      { name: 'Qdrant', icon: Database, level: 85 },
    ]
  },
  {
    category: 'Programming Languages',
    color: 'from-violet-500 via-fuchsia-500 to-pink-500',
    bgPattern: '🔤',
    skills: [
      { name: 'Python', icon: FileCode, level: 90 },
      { name: 'C++', icon: Code2, level: 87 },
      { name: 'JavaScript', icon: Braces, level: 80 },
      { name: 'TypeScript', icon: Terminal, level: 75 },
      
    ]
  },
];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Tech Stack
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive arsenal of cutting-edge technologies across full-stack development, cloud infrastructure, and AI/ML
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.category}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              {/* Glowing background */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <div className="relative bg-card border border-border group-hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
                {/* Category header with emoji */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-bold shadow-lg`}>
                    {category.category}
                  </span>
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {category.bgPattern}
                  </span>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-lg opacity-20 blur-sm`} />
                              <div className={`relative p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                                <Icon className="h-4 w-4 text-primary group-hover/skill:scale-110 transition-transform" />
                              </div>
                            </div>
                            <span className="font-semibold text-sm group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Animated progress bar */}
                        <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg shimmer`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(catIdx * 3 + skillIdx) * 0.15}s`
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats footer */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">17+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">5</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">85%</div>
            <div className="text-sm text-muted-foreground">Avg Proficiency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">∞</div>
            <div className="text-sm text-muted-foreground">Learning Spirit</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
