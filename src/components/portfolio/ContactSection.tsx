import { useState, FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding section-spacing">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="heading-section">Contact</p>
          <h2 className="heading-lg text-foreground">Let's work together</h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm open to internship opportunities, freelance projects, and collaborations.
                Feel free to reach out — I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "rohillaujjwal39@gmail.com", href: "mailto:rohillaujjwal39@gmail.com" },
                  { icon: Phone, label: "+91 9266333385", href: "#" },
                  { icon: Github, label: "github.com/Ujjwalrohilla12", href: "https://github.com/Ujjwalrohilla12" },
                  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/ujjwal-rohilla-70a916256/" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Icon size={18} className="text-primary shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 text-sm bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 text-sm bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 text-sm bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm active:scale-[0.97] transition-all duration-150 disabled:opacity-60"
              >
                {submitted ? "Sent!" : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
