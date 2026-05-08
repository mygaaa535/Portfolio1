"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AboutSection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-8"
  >
    <div className="space-y-4">
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 text-accent"
      >
        <span className="font-mono text-sm uppercase tracking-widest">
          Introduction
        </span>
      </motion.div>
      <motion.h3
        variants={itemVariants}
        className="text-3xl font-bold text-white"
      >
        {data.introduction}
      </motion.h3>
      <motion.p
        variants={itemVariants}
        className="text-gray-300 text-lg leading-relaxed"
      >
        {data.bio}
      </motion.p>
    </div>

    <motion.div
      variants={itemVariants}
      className="pt-8 border-t border-white/10"
    >
      <div className="flex items-center gap-3 text-gray-500 mb-4">
        <h4 className="text-sm uppercase tracking-widest">Core Vision</h4>
      </div>
      <p className="text-2xl font-light italic text-white/90 leading-snug">
        "{data.goals}"
      </p>
    </motion.div>
  </motion.div>
);

export const SkillsSection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
  >
    {data.skills.map((skill, i) => (
      <motion.div
        key={skill.name}
        variants={itemVariants}
        className="space-y-3"
      >
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{skill.name}</span>
          </div>
          <span className="text-accent font-mono text-xs">{skill.level}%</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
            className="h-full bg-accent shadow-[0_0_10px_rgba(0,242,255,0.5)]"
          />
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export const ProjectsSection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-10"
  >
    {data.projects.map((project, i) => (
      <motion.div
        key={project.title}
        variants={itemVariants}
        className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-colors"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 aspect-video lg:aspect-auto relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform translate-y-6 duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          </div>
          <div className="lg:w-3/5 p-6 lg:p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-6 pt-4">
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Code
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export const ExperienceSection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-8"
  >
    {data.items.map((item, i) => (
      <motion.div
        key={i}
        variants={itemVariants}
        className="relative pl-8 border-l border-white/10 pb-8 last:pb-0"
      >
        <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
        <div className="space-y-2">
          <span className="text-accent font-mono text-xs uppercase tracking-widest">
            {item.period}
          </span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {item.role}
          </h3>
          <p className="text-gray-400 font-medium">{item.company}</p>
          <p className="text-gray-500 text-sm leading-relaxed mt-2">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export const EducationSection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-1 gap-6"
  >
    {data.items.map((item, i) => (
      <motion.div
        key={i}
        variants={itemVariants}
        className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3"
      >
        <div className="flex justify-between items-start">
          <div className="p-3 bg-accent/10 rounded-xl text-accent"></div>
          <span className="text-gray-500 font-mono text-xs">{item.year}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{item.degree}</h3>
        <p className="text-gray-400">{item.school}</p>
      </motion.div>
    ))}
  </motion.div>
);

export const GallerySection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-2 gap-4"
  >
    {data.images.map((img, i) => (
      <motion.div
        key={i}
        variants={itemVariants}
        className="aspect-square rounded-2xl overflow-hidden group border border-white/10"
      >
        <img
          src={img}
          alt={`Gallery ${i}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </motion.div>
    ))}
  </motion.div>
);

export const GoalsSection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-6 text-center py-8"
  >
    <motion.div
      variants={itemVariants}
      className="inline-flex p-4 bg-accent/10 rounded-full text-accent mb-4"
    ></motion.div>
    <motion.h3
      variants={itemVariants}
      className="text-3xl font-bold text-white"
    >
      Future Vision
    </motion.h3>
    <motion.p
      variants={itemVariants}
      className="text-xl text-gray-400 italic leading-relaxed max-w-lg mx-auto"
    >
      "{data.vision}"
    </motion.p>
  </motion.div>
);

export const ResumeSection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center py-12 space-y-8"
  >
    <motion.div
      variants={itemVariants}
      className="w-24 h-32 bg-white/5 border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center text-white/20"
    ></motion.div>
    <div className="text-center space-y-2">
      <motion.h3
        variants={itemVariants}
        className="text-2xl font-bold text-white"
      >
        Curriculum Vitae
      </motion.h3>
      <motion.p variants={itemVariants} className="text-gray-400">
        Ready to contribute to your next big project.
      </motion.p>
    </div>
    <motion.a
      variants={itemVariants}
      href={data.downloadUrl}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 bg-accent text-black font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all"
    >
      Download Resume
    </motion.a>
  </motion.div>
);

export const ContactSection = ({ data }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-10"
  >
    <div className="grid grid-cols-1 gap-6">
      <motion.div variants={itemVariants} className="space-y-2">
        <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] ml-1">
          Full Name
        </label>
        <input
          type="text"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-accent focus:bg-white/10 outline-none transition-all"
          placeholder="Enter your name"
        />
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-2">
        <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] ml-1">
          Email Address
        </label>
        <input
          type="email"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-accent focus:bg-white/10 outline-none transition-all"
          placeholder="your@email.com"
        />
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-2">
        <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] ml-1">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-accent focus:bg-white/10 outline-none transition-all resize-none"
          placeholder="Describe your project or inquiry..."
        />
      </motion.div>
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gray-800 text-white font-black uppercase tracking-widest py-5 rounded-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all flex items-center justify-center gap-3"
      >
        Send
      </motion.button>
    </div>

    <div className="pt-8 border-t border-white/10">
      <motion.div variants={itemVariants} className="flex justify-center gap-8">
        {data.socials &&
          data.socials.map((social) => {
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                className="group flex flex-col items-center gap-2 text-gray-500 hover:text-accent transition-colors"
              >
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors"></div>
                <span className="text-[10px] uppercase tracking-widest font-medium">
                  {social.name}
                </span>
              </a>
            );
          })}
      </motion.div>
    </div>
  </motion.div>
);
