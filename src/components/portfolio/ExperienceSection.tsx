import { ScrollReveal } from "./ScrollReveal";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "IBM CSRBOX",
    period: "2025",
    description: "Worked on AI/ML projects leveraging IBM SkillsBuild resources, building models and understanding enterprise-grade AI workflows.",
  },
  {
    role: "AI Intern",
    company: "Mirai School of Technology",
    period: "2025",
    description: "Developed AI-powered applications and gained hands-on experience with machine learning pipelines and model deployment.",
  },
  {
    role: "Python Intern",
    company: "CipherByte Technologies",
    period: "2024",
    description: "Built Python-based projects focusing on automation, data processing, and foundational machine learning concepts.",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding section-spacing">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="heading-section">Experience</p>
          <h2 className="heading-lg text-foreground">Where I've worked</h2>
        </ScrollReveal>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={0.1 * i}>
                <div className="relative pl-12 md:pl-16">
                  {/* Dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                  <div className="card-surface p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
