import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Software Engineering Final Project",
    description:
      "Developed a video chat platform using React, Node.js, and Stream.io, featuring post-meeting transcription with AssemblyAI.",
    githubLink: "https://github.com/RamiAmasha31/rm-video-call",
    tags: ["React", "Node.js", "Stream.io", "AssemblyAI"],
    color: "from-amber-400 to-orange-500",
    emoji: "🎥",
  },
  {
    title: "Flower Shop System",
    description:
      "A system to manage orders and online shopping, developed using Agile methodology.",
    githubLink: "https://github.com/RamiAmasha31/zli",
    tags: ["Agile", "Full-Stack", "E-Commerce"],
    color: "from-rose-400 to-pink-500",
    emoji: "🌸",
  },
  {
    title: "PCA (Principal Component Analysis)",
    description: "Face detection project using MATLAB with advanced image processing techniques.",
    githubLink: "https://github.com/RamiAmasha31/PCA",
    tags: ["MATLAB", "Image Processing", "PCA"],
    color: "from-teal-400 to-emerald-500",
    emoji: "👁️",
  },
  {
    title: "Facial Emotion Recognition",
    description: "A system that detects and classifies facial emotions using deep learning with Python.",
    githubLink: "https://github.com/RamiAmasha31/Facial-emotion-recognition",
    tags: ["Python", "Deep Learning", "AI"],
    color: "from-sky-400 to-blue-500",
    emoji: "🤖",
  },
  {
    title: "Shannon Sampling Theorem",
    description: "Interactive project demonstrating the Shannon sampling theorem using Python and signal processing.",
    githubLink: "https://github.com/yourusername/shannon-sampling-theorem",
    tags: ["Python", "Signal Processing", "Math"],
    color: "from-violet-400 to-purple-500",
    emoji: "📊",
  },
  {
    title: "Restaurant Website",
    description:
      "An immersive and beautifully designed website for a restaurant, built with React and Tailwind CSS.",
    githubLink: "https://github.com/RamiAmasha31/A21-flavor-Voayge",
    tags: ["React", "Tailwind CSS", "Web Design"],
    color: "from-orange-400 to-red-500",
    emoji: "🍽️",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="floating-orb w-80 h-80 bg-indigo-500 -left-20 top-40" />
      <div className="floating-orb w-64 h-64 bg-amber-500 right-0 bottom-10" />
      <div className="floating-orb w-48 h-48 bg-teal-500 right-1/3 top-10" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full text-base font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            🛠️ My Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4 font-heading">
            Projects
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.12, duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-card p-7 h-full flex flex-col relative overflow-hidden">
                {/* Gradient accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />

                {/* Emoji & Title */}
                <div className="flex items-start gap-3 mb-4">
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.emoji}
                  </motion.span>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300 font-heading">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10 hover:border-amber-400/30 hover:text-amber-300 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${project.color} text-dark-900 text-base font-semibold w-fit group/btn relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-lg" />
                  <span className="relative z-10">View on GitHub</span>
                  <FaExternalLinkAlt className="text-xs opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
