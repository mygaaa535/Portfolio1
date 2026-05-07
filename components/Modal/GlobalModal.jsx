"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function GlobalModal({ isOpen, onClose, data, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col glass-card rounded-3xl z-10 overflow-hidden"
          >
            <div className="absolute top-6 right-6 z-20">
              <button
                onClick={onClose}
                className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md hover:bg-white/10 text-white transition-colors border border-white/10 text-2xl font-light"
              >
                ×
              </button>
            </div>

            <div className="w-full overflow-y-auto custom-scrollbar">
              <div className="flex flex-col md:flex-row min-h-full">
                <div className="w-full md:w-1/3 h-64 md:h-auto md:sticky md:top-0 md:self-start relative flex-shrink-0">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r" />
                  <div className="absolute bottom-8 left-8">
                    <motion.h2
                      layoutId={`title-${data.id}`}
                      className="text-3xl md:text-4xl font-bold text-white"
                    >
                      {data.title}
                    </motion.h2>
                  </div>
                </div>

                <div className="flex-1 p-8 md:p-12 text-white">
                  <div className="max-w-2xl">{children}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
