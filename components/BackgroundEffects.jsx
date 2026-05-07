"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    return [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 3 + 2,
    }));
  }, [mounted]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
      <div
        className="ambient-light top-[-10%] left-[-10%]"
        style={{ "--accent": "#00f2ff" }}
      />
      <div
        className="ambient-light bottom-[-10%] right-[-10%]"
        style={{ "--accent": "#7000ff", animationDelay: "-5s" }}
      />

      <div className="absolute inset-0">
        {mounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: particle.x,
                top: particle.y,
              }}
              initial={{
                scale: particle.scale,
                opacity: 0.1,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
