"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "./Card";

export default function ThreeDCarousel({ items, onOpenCard }) {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const requestRef = useRef();

  const animate = (time) => {
    if (!isPaused) {
      setRotation((prev) => (prev + 0.15) % 360);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-stage"
        style={{
          transform: `rotateY(${-rotation}deg)`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((item, index) => (
          <Card
            key={item.id}
            data={item}
            index={index}
            total={items.length}
            onOpen={onOpenCard}
          />
        ))}
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-[0.2em] uppercase pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Thank you
      </motion.div>
    </div>
  );
}
