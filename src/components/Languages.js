import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLanguage,
  FaJava,
  FaPython,
  FaCode,
  FaDatabase,
  FaLinux,
  FaServer,
  FaPuzzlePiece,
} from "react-icons/fa";

const LanguagesAndSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const languages = [
    { name: "Arabic", level: 5, proficiency: "Native" },
    { name: "English", level: 5, proficiency: "Fluent" },
    { name: "Hebrew", level: 5, proficiency: "Fluent" },
  ];

  const skills = [
    { icon: <FaJava />, label: "Java", color: "from-amber-400 to-orange-500", level: 90 },
    { icon: <FaCode />, label: "OOP", color: "from-teal-400 to-emerald-500", level: 95 },
    { icon: <FaPython />, label: "Python", color: "from-sky-400 to-blue-500", level: 88 },
    { icon: <FaCode />, label: "C", color: "from-slate-400 to-gray-500", level: 85 },
    { icon: <FaCode />, label: "C#", color: "from-emerald-400 to-green-500", level: 80 },
    { icon: <FaDatabase />, label: "MySQL", color: "from-yellow-400 to-amber-500", level: 92 },
    { icon: <FaLinux />, label: "Linux/Ubuntu", color: "from-orange-400 to-red-500", level: 78 },
    { icon: <FaServer />, label: "TCP/UDP Servers", color: "from-blue-400 to-indigo-500", level: 75 },
    { icon: <FaPuzzlePiece />, label: "Design Patterns", color: "from-rose-400 to-pink-500", level: 85 },
  ];

  return (
    <div
      id="languages"
      className="relative py-28 px-6 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="floating-orb w-96 h-96 bg-amber-500 -right-32 top-20" />
      <div className="floating-orb w-72 h-72 bg-teal-500 -left-20 bottom-0" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full text-base font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            🚀 What I Know
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Languages & Skills
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Languages Section */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center text-white">
                  <FaLanguage className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Languages</h3>
              </div>

              <div className="space-y-7">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold text-lg">{lang.name}</span>
                      <span className="text-sm text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full font-medium">
                        {lang.proficiency}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`h-2.5 flex-1 rounded-full ${
                            i < lang.level
                              ? "bg-gradient-to-r from-amber-400 to-orange-500"
                              : "bg-white/5"
                          }`}
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.15 + i * 0.05,
                            duration: 0.4,
                          }}
                          style={{ transformOrigin: "left" }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white">
                  <FaCode className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Technical Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-white font-semibold text-base">
                          {skill.label}
                        </span>
                        <span className="text-sm text-gray-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: "0%" }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 0.6 + index * 0.1,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesAndSkills;
