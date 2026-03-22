import { useState, useEffect } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github, Star, ChevronDown } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  topics: string[];
}

const PINNED = ["Tour_Planner", "DICE_ROLL"];

const languageColors: Record<string, string> = {
  TypeScript: "hsl(210, 60%, 55%)",
  JavaScript: "hsl(50, 75%, 55%)",
  Python: "hsl(210, 55%, 50%)",
  HTML: "hsl(12, 75%, 55%)",
  CSS: "hsl(264, 50%, 55%)",
  Java: "hsl(20, 65%, 50%)",
};

const fallbackProjects: Repo[] = [
  { id: 1, name: "Tour_Planner", description: "AI-powered tour planner that creates personalized travel itineraries using intelligent algorithms.", html_url: "https://github.com/Ujjwalrohilla12/Tour_Planner", homepage: null, language: "TypeScript", stargazers_count: 0, fork: false, topics: [] },
  { id: 2, name: "DICE_ROLL", description: "Interactive dice roll simulator with rolling history and clean Unicode dice UI.", html_url: "https://github.com/Ujjwalrohilla12/DICE_ROLL", homepage: null, language: "HTML", stargazers_count: 0, fork: false, topics: [] },
  { id: 3, name: "BASIC_CALCULATOR", description: "A clean, functional calculator built with HTML, CSS and JavaScript.", html_url: "https://github.com/Ujjwalrohilla12/BASIC_CALCULATOR", homepage: null, language: "HTML", stargazers_count: 0, fork: false, topics: [] },
  { id: 4, name: "Codsoft", description: "Collection of web development projects from CodSoft internship.", html_url: "https://github.com/Ujjwalrohilla12/Codsoft", homepage: null, language: "CSS", stargazers_count: 0, fork: false, topics: [] },
  { id: 5, name: "assignment", description: "Python-based assignments covering automation and data processing.", html_url: "https://github.com/Ujjwalrohilla12/assignment", homepage: null, language: "Python", stargazers_count: 0, fork: false, topics: [] },
  { id: 6, name: "profile", description: "Personal portfolio website showcasing projects and skills.", html_url: "https://github.com/Ujjwalrohilla12/profile", homepage: null, language: "CSS", stargazers_count: 0, fork: false, topics: [] },
];

export const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repo[]>(fallbackProjects);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Ujjwalrohilla12/repos?sort=updated&per_page=30")
      .then((res) => res.json())
      .then((data: Repo[]) => {
        if (Array.isArray(data)) {
          const filtered = data.filter(
            (r) => !r.fork && r.name !== "Ujjwalrohilla12" && r.name !== "Graphics"
          );
          if (filtered.length > 0) setRepos(filtered);
        }
      })
      .catch(() => {});
  }, []);

  const pinned = repos.filter((r) => PINNED.includes(r.name));
  const rest = repos.filter((r) => !PINNED.includes(r.name));
  const visible = showAll ? rest : rest.slice(0, 4);

  return (
    <section id="projects" className="section-padding py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="heading-section">Projects</p>
          <h2 className="heading-lg text-foreground">Things I've built</h2>
        </ScrollReveal>

        {/* Pinned */}
        {pinned.length > 0 && (
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {pinned.map((repo, i) => (
              <ScrollReveal key={repo.id} delay={0.08 * i}>
                <ProjectCard repo={repo} featured />
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Rest */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((repo, i) => (
            <ScrollReveal key={repo.id} delay={0.06 * i}>
              <ProjectCard repo={repo} />
            </ScrollReveal>
          ))}
        </div>

        {rest.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-secondary transition-all duration-200 active:scale-[0.97]"
            >
              {showAll ? "Show Less" : `Show All (${rest.length})`}
              <ChevronDown size={16} className={`transition-transform duration-200 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ repo, featured }: { repo: Repo; featured?: boolean }) => {
  const desc = repo.description || `A ${repo.language || "code"} project by Ujjwal Rohilla.`;
  return (
    <div className={`card-surface p-6 h-full flex flex-col ${featured ? "border-primary/20" : ""}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={`font-semibold text-foreground ${featured ? "text-lg" : "text-base"}`}>
          {repo.name.replace(/_/g, " ")}
        </h3>
        {featured && (
          <span className="shrink-0 text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{desc}</p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          {repo.language && (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: languageColors[repo.language] || "hsl(215, 15%, 50%)" }}
              />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star size={12} />
              {repo.stargazers_count}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors active:scale-95"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors active:scale-95"
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
