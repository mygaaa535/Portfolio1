import { Target } from "lucide-react";

export const portfolioData = [
  {
    id: "about",
    title: "About Me",
    description:
      "Aspiring full-stack developer passionate about modern web experiences.",
    image: "/zurag1.jpeg",
    content: {
      introduction: "Hello, I'm Myagmardorj Baatar.",
      bio: "I am a junior developer from Mongolia currently learning React, Next.js, and modern frontend technologies. I enjoy creating clean, interactive, and user-friendly web applications while continuously improving my programming and design skills.",
      goals:
        "My goal is to become a professional full-stack developer, work internationally, and build digital products that solve real-world problems.",
    },
  },

  {
    id: "skills",
    title: "Skills",
    description: "Technologies and tools I am learning and using.",
    image: "/zurag2.jpeg",
    content: {
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Firebase", level: 65 },
      ],
    },
  },

  {
    id: "projects",
    title: "Projects",
    description: "Some projects I have worked on.",
    image: "/zurag3.jpeg",
    content: {
      projects: [
        {
          title: "ЭЕШ материалууд",
          description:
            "A platform for students to prepare for entrance exams with PDF materials and practice tests.",
          tech: ["Next.js", "Tailwind CSS", "Firebase"],
          github: "#",
          live: "#",
          image: "/zurag4.jpeg",
        },
        {
          title: "Interactive Portfolio",
          description:
            "A modern 3D animated portfolio website inspired by futuristic UI design.",
          tech: ["React", "Framer Motion", "Tailwind CSS"],
          github: "#",
          live: "#",
          image: "/zurag5.jpeg",
        },
      ],
    },
  },

  {
    id: "experience",
    title: "Experience",
    description: "My work journey and experience.",
    image: "/zurag4.jpeg",
    content: {
      items: [
        {
          role: "Receptionist",
          company: "Baatarvan Resort",
          period: "2024 - 2025",
          desc: "Worked as a receptionist handling customer service, reservations, and daily operations.",
        },
        {
          role: "Server",
          company: "Baatarvan Resort",
          period: "2024",
          desc: "Provided customer service and assisted guests in a fast-paced environment.",
        },
        {
          role: "Kitchen Assistant & Chef",
          company: "Toilogt Tourist Camp",
          period: "2022 - 2023",
          desc: "Prepared meals and assisted kitchen operations during the tourism season.",
        },
      ],
    },
  },

  {
    id: "education",
    title: "Education",
    description: "My educational background.",
    image: "/zurag5.jpeg",
    content: {
      items: [
        {
          degree: "Professional Chef Certificate",
          school: "Khuvsgul Polytechnic College",
          year: "2020 - 2023",
        },
        {
          degree: "Self-learning Web Development",
          school: "Online Courses & Personal Projects",
          year: "2024 - Present",
        },
      ],
    },
  },

  {
    id: "contact",
    title: "Contact",
    description: "Let's connect and build something together.",
    image: "/zurag6.jpeg",
    content: {
      email: "myagmardorj@example.com",
      socials: [
        {
          name: "Github",
          url: "https://github.com/mygaaa535/Portfolio1",

          icon: "Github",
        },
        { name: "LinkedIn", url: "#", icon: "Linkedin" },
        { name: "Instagram", url: "#", icon: "Instagram" },
      ],
    },
  },

  {
    id: "gallery",
    title: "Gallery",
    description: "Moments from my learning and creative journey.",
    image: "/zurag7.jpeg",
    content: {
      images: ["/zurag1.jpeg", "/zurag2.jpeg", "/zurag3.jpeg", "/zurag4.jpeg"],
    },
  },

  {
    id: "goals",
    title: "Goals",
    description: "My future vision and ambitions.",
    image: "/zurag8.jpeg",
    content: {
      vision:
        "I want to study and work abroad, become a skilled software engineer, and create innovative digital experiences for people around the world.",
    },
  },

  {
    id: "resume",
    title: "Resume",
    description: "Download my resume and learn more about my background.",
    image: "/zurag9.jpeg",
    content: {
      downloadUrl: "#",
    },
  },

  {
    id: "socials",
    title: "Social Links",
    description: "Find me on social media.",
    image: "/zurag10.jpeg",
    content: {
      links: [
        {
          name: "Github",
          url: "https://github.com/mygaaa535/Portfolio1",
        },
        { name: "Instagram", url: "#" },
      ],
    },
  },
];
