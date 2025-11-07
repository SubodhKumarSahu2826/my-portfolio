import { Award, FileCheck, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: 'BARC Internship',
      description: 'Developed Software for Kinova bionic arm using Kortex API in C++ and Python',
      year: '2024',
    },
    {
      icon: Award,
      title: 'Google Cloud Certified',
      description: 'Associate Cloud Engineer',
      year: '2024',
    },
    {
      icon: FileCheck,
      title: 'DevOps Fundamentals',
      description: 'Linux Foundation',
      year: '2023',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Achievements & Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-card p-8 rounded-lg border border-border hover:border-glow transition-all duration-300 text-center group animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground mb-3">{achievement.description}</p>
              <span className="inline-block px-4 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20">
                {achievement.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
