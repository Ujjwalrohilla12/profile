import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale" | "rotate";
  intensity?: "low" | "medium" | "high";
  parallax?: boolean;
}

const directionMap = {
  up: { y: 40, x: 0, rotateX: 0, scale: 1 },
  left: { x: -40, y: 0, rotateY: 0, scale: 1 },
  right: { x: 40, y: 0, rotateY: 0, scale: 1 },
  scale: { x: 0, y: 0, rotateX: 0, scale: 0.8 },
  rotate: { x: 0, y: 0, rotateX: 15, rotateY: 15, scale: 0.9 },
};

const intensityMap = {
  low: { blur: 2, distance: 20 },
  medium: { blur: 6, distance: 40 },
  high: { blur: 10, distance: 60 },
};

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  intensity = "medium",
  parallax = false
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const intensitySettings = intensityMap[intensity];
  const offset = directionMap[direction];

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, parallax ? -50 : 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, parallax ? 5 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, parallax ? 1.05 : 1]);

  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: `blur(${intensitySettings.blur}px)`,
        ...offset
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1
      }}
      viewport={{
        once: true,
        amount: 0.3,
        margin: "0px 0px -100px 0px"
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      style={{
        y: parallax ? springY : 0,
        rotateX: parallax ? springRotateX : 0,
        scale: parallax ? springScale : 1,
        transformStyle: "preserve-3d",
      }}
      className={className}
      whileHover={{
        scale: 1.02,
        rotateX: parallax ? 2 : 0,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};
