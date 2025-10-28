import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AnimatedBackground() {
  // Generate random particle positions once
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-black">
      {/* Subtle moving gradient lights */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(88,28,135,0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.1),transparent_60%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Slow floating dark orbs */}
      <motion.div
        className="absolute w-[150%] h-[150%] left-[-25%] top-[-25%] bg-[radial-gradient(circle_at_50%_50%,rgba(88,28,135,0.25),transparent_70%)] blur-[150px] opacity-40"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-[180%] h-[180%] left-[-40%] top-[-40%] bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_70%)] blur-[200px] opacity-30"
        animate={{
          scale: [1.05, 1, 1.05],
          rotate: [360, 0],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ✨ Floating particles (cinematic shimmer) */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.y}%`,
            left: `${p.x}%`,
            opacity: 0.2 + Math.random() * 0.3,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
