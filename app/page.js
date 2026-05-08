"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ThreeDCarousel from "@/components/Carousel/3DCarousel";
import BackgroundEffects from "@/components/BackgroundEffects";
import GlobalModal from "@/components/Modal/GlobalModal";
import { portfolioData } from "@/data/portfolio";
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  ExperienceSection,
  EducationSection,
  GallerySection,
  GoalsSection,
  ResumeSection,
} from "@/components/Sections";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCard = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const renderSection = () => {
    if (!selectedCard) return null;

    const data = selectedCard.content;

    switch (selectedCard.id.split("_")[0]) {
      case "about":
        return <AboutSection data={data} />;
      case "skills":
        return <SkillsSection data={data} />;
      case "projects":
        return <ProjectsSection data={data} />;
      case "experience":
        return <ExperienceSection data={data} />;
      case "education":
        return <EducationSection data={data} />;
      case "gallery":
        return <GallerySection data={data} />;
      case "goals":
        return <GoalsSection data={data} />;
      case "resume":
        return <ResumeSection data={data} />;
      case "contact":
      case "socials":
        return <ContactSection data={data} />;
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundEffects />
      <nav className="fixed top-0 left-0 w-full py-8 px-12 z-50 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-white"
        >
          PORTFOLIO<span className="text-accent">.</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400"
        >
          <span className="hover:text-white cursor-pointer transition-colors">
            Myagmardorj
          </span>
        </motion.div>
      </nav>

      <ThreeDCarousel items={portfolioData} onOpenCard={handleOpenCard} />

      <GlobalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedCard}
      >
        {renderSection()}
      </GlobalModal>
    </main>
  );
}
