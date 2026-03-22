import { ScrollReveal } from "./ScrollReveal";

const skillCategories = [
  { title: "Languages", skills: ["C++", "JavaScript", "TypeScript", "Java"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express.js"] },
  { title: "Databases", skills: ["MongoDB", "MySQL", "Convex"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman"] },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="heading-section">Skills</p>
          <h2 className="heading-lg text-foreground">Technologies I work with</h2>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={0.08 * i}>
              <div className="card-surface p-6 h-full">
                <h3 className="text-sm font-mono font-medium text-primary mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
