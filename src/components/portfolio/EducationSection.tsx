import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="heading-section">Education</p>
          <h2 className="heading-lg text-foreground">Academic background</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 card-surface p-8 max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">Bachelor of Technology</h3>
                <p className="text-primary text-sm font-medium mt-1">Computer Science & Engineering</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Currently pursuing B.Tech with focus on full-stack development, data structures, algorithms, and AI/ML coursework.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
