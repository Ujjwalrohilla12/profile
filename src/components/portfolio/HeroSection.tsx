import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: -15,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const buttonVariants = {
  idle: { scale: 1, rotateY: 0 },
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: { scale: 0.95 },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring",
      stiffness: 100,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: { duration: 0.2 },
  },
};

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, hsl(var(--primary)) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <motion.div variants={itemVariants}>
          <motion.p
            className="heading-section mb-6"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 8px hsl(var(--primary))",
            }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="heading-xl text-balance max-w-3xl"
          whileHover={{
            scale: 1.02,
            rotateX: 2,
            textShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
          style={{ perspective: "1000px" }}
        >
          Hi, I'm{" "}
          <motion.span
            className="text-primary font-black"
            animate={{
              backgroundImage: [
                "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))",
                "linear-gradient(45deg, hsl(var(--accent)), hsl(var(--primary)))",
                "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))",
              ],
              opacity: [1, 1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
              minWidth: "max-content",
            }}
          >
            Ujjwal Rohilla
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          whileHover={{
            scale: 1.01,
            filter: "brightness(1.1)",
          }}
        >
          I build intelligent, scalable, and user-focused web applications with the MERN stack and AI/ML.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#projects"
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              View Projects
            </motion.span>
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.a>

          <motion.a
            href="#contact"
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all duration-300 hover:shadow-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com/Ujjwalrohilla12", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-rohilla-70a916256/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:rohillaujjwal39@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              custom={i}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-secondary/50"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
