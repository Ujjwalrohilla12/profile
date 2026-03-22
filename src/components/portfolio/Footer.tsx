export const Footer = () => {
  return (
    <footer className="section-padding py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ujjwal Rohilla. Built with care.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/Ujjwalrohilla12" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ujjwal-rohilla-70a916256/" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
