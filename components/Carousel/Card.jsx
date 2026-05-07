"use client";
import { motion } from "framer-motion";

export default function Card({ data, index, total, onOpen }) {
  const rotation = index * (360 / total);

  return (
    <div
      className="carousel-card group"
      style={{
        transform: `rotateY(${rotation}deg) translateZ(500px)`,
      }}
      onClick={() => onOpen(data)}
    >
      <div className="card-inner">
        <div className="relative w-full h-full">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-linear-to-t from-black/90 via-black/20 to-transparent">
            <motion.h3
              className="text-2xl font-bold text-white mb-2"
              layoutId={`title-${data.id}`}
            >
              {data.title}
            </motion.h3>
            <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {data.description}
            </p>
          </div>

          <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="reflection">
        <img src={data.image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
