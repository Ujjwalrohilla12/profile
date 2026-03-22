import { ScrollReveal } from "./ScrollReveal";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-spacing">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="heading-section">About</p>
          <h2 className="heading-lg text-foreground">A bit about me</h2>
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a Full Stack Developer with deep expertise in the MERN stack and a growing
                passion for AI/ML. I enjoy building products that solve real problems — from
                intelligent tour planners to AI-powered resume builders.
              </p>
              <p>
                With internship experience at IBM CSRBOX, Mirai School of Technology, and
                CipherByte Technologies, I've worked on projects spanning machine learning,
                computer vision, and full-stack web development.
              </p>
              <p>
                I'm driven by curiosity, a problem-solving mindset, and the belief that
                well-crafted software can genuinely improve people's lives.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Internships" },
                { value: "8+", label: "Projects Built" },
                { value: "MERN", label: "Core Stack" },
                { value: "AI/ML", label: "Exploring" },
              ].map((stat) => (
                <div key={stat.label} className="card-surface p-6 text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
