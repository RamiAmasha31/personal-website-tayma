import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChalkboardTeacher, FaServer } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "BMC Software",
      period: "Nov 2025 - Present",
      description:
        "Building and maintaining CI/CD pipelines, managing cloud infrastructure and Kubernetes clusters, automating build and release workflows, monitoring system performance, and collaborating with development teams to streamline software delivery and ensure high availability across production environments.",
      icon: <FaServer />,
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Teaching Assistant",
      company: "University of Haifa",
      period: "2020 - 2024",
      description:
        "Conducted weekly lessons to train students in fundamental concepts and practical exercises in C programming language.",
      icon: <FaChalkboardTeacher />,
      color: "from-teal-400 to-emerald-500",
    },
  ];

  return (
    <div
      id="experience"
      className="relative py-28 px-6 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="floating-orb w-72 h-72 bg-amber-500 -right-20 top-20" />
      <div className="floating-orb w-56 h-56 bg-teal-500 -left-10 bottom-10" />

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
            💼 My Journey
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4 font-heading">
            Experience
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="relative">
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-500 to-teal-400"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-center mb-16"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.3, duration: 0.8 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} -translate-x-1/2 z-10`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.3, type: "spring" }}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-30`} />
                </motion.div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-16 md:w-1/2" : "md:ml-auto md:pl-16 md:w-1/2"}`}>
                  <motion.div
                    className="glass-card p-8 group cursor-default"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${exp.color} text-dark-900 text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {exp.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                      {exp.title}
                    </h3>
                    <p className="text-amber-400 font-semibold text-base mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-base mb-4">{exp.period}</p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
