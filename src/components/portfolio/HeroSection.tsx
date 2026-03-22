import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="heading-section mb-6">Full Stack Developer</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="heading-xl text-balance max-w-3xl"
        >
          Hi, I'm{" "}
          <span className="text-primary">Ujjwal Rohilla</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
        >
          I build intelligent, scalable, and user-focused web applications with the MERN stack and AI/ML.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm active:scale-[0.97] transition-transform duration-150"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary active:scale-[0.97] transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com/Ujjwalrohilla12", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-rohilla-70a916256/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:ujjwalrohilla.dev@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 active:scale-95"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
