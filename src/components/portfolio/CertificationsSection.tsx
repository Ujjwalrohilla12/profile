import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Award, ExternalLink } from "lucide-react";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  category: "ai" | "web" | "other";
  url?: string;
}

const certificates: Certificate[] = [
  { name: "IBM SkillsBuild – AI Fundamentals", issuer: "IBM", date: "2025", category: "ai", url: "https://www.linkedin.com/in/ujjwal-rohilla-70a916256/" },
  { name: "Machine Learning Specialization", issuer: "IBM CSRBOX", date: "2025", category: "ai" },
  { name: "AI & ML Virtual Internship", issuer: "Mirai School of Technology", date: "2025", category: "ai" },
  { name: "Python for Data Science", issuer: "CipherByte Technologies", date: "2024", category: "ai" },
  { name: "Full Stack Web Development Bootcamp", issuer: "Online Platform", date: "2024", category: "web" },
  { name: "React.js Advanced Concepts", issuer: "Online Platform", date: "2024", category: "web" },
  { name: "Node.js Backend Development", issuer: "Online Platform", date: "2024", category: "web" },
  { name: "Data Structures & Algorithms", issuer: "Online Platform", date: "2024", category: "other" },
  { name: "Git & GitHub Mastery", issuer: "Online Platform", date: "2024", category: "other" },
];

const filters = [
  { key: "all" as const, label: "All" },
  { key: "ai" as const, label: "AI / ML" },
  { key: "web" as const, label: "Web Dev" },
  { key: "other" as const, label: "Others" },
];

export const CertificationsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "ai" | "web" | "other">("all");

  const filtered = activeFilter === "all" ? certificates : certificates.filter((c) => c.category === activeFilter);

  return (
    <section id="certifications" className="section-padding section-spacing">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="heading-section">Certifications</p>
          <h2 className="heading-lg text-foreground">Credentials & learning</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 active:scale-[0.97] ${
                  activeFilter === f.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={0.06 * i}>
              <div className="card-surface p-5 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-primary/10">
                    <Award size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground text-sm leading-snug">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer} · {cert.date}</p>
                  </div>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-3 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                  >
                    View Credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
