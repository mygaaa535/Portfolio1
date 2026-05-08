"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

export default function ThreeDCarousel({ items, onOpenCard }) {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef();

  const animate = () => {
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
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/400 text-sm tracking-[0.2em] uppercase pointer-events-none">
        Thank you
      </motion.div>
    </div>
  );
}
