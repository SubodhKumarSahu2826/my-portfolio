import { Briefcase, Code, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Zap,
      role: 'Technical Head',
      organization: 'IEEE Committee',
      description: 'Led technical initiatives and organized technical events as Technical Head of IEEE Committee.',
      period: '2023 - 2024',
      color: 'primary',
    },
    {
      icon: Briefcase,
      role: 'Web Developer',
      organization: 'Ecell Committee',
      description: 'Member of Ecell committee as a web developer from 2023-2024, where I developed website for the committee.',
      period: '2023 - 2024',
      color: 'accent',
    },
    {
      icon: Code,
      role: 'Software Development Intern',
      organization: 'BARC (Bhabha Atomic Research Centre)',
      description: 'Developed Software for Kinova bionic Arm using Kortex API in C++ and Python and ROS.',
      period: '2024',
      color: 'primary',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Experience & Leadership
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg border border-border hover:border-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex gap-6">
                <div className={`p-4 rounded-lg bg-${exp.color}/10 h-fit`}>
                  <exp.icon className={`h-8 w-8 text-${exp.color}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  
                  <p className="text-primary font-medium mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
