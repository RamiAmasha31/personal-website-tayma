import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBook, FaUniversity } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCode,
  faLaptopCode,
  faBrain,
  faServer,
  faCogs,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    { icon: faLaptopCode, title: "OOP (Java)", grade: "95", color: "from-sky-400 to-blue-500" },
    { icon: faDatabase, title: "Database Systems", grade: "100", color: "from-emerald-400 to-green-500" },
    { icon: faCode, title: "Intro to CS (C)", grade: "89", color: "from-orange-400 to-red-500" },
    { icon: faCogs, title: "Data Structures", grade: "85", color: "from-amber-400 to-yellow-500" },
    { icon: faServer, title: "Software Engineering", grade: "89", color: "from-violet-400 to-purple-500" },
    { icon: faCogs, title: "Hardware & OS", grade: "84", color: "from-slate-400 to-gray-500" },
    { icon: faDatabase, title: "Big Data", grade: "97", color: "from-blue-400 to-indigo-500" },
    { icon: faBrain, title: "Intro to AI", grade: "97", color: "from-rose-400 to-pink-500" },
    { icon: faBrain, title: "Machine Learning", grade: "98", color: "from-teal-400 to-cyan-500" },
    { icon: faNetworkWired, title: "Data Communication", grade: "81", color: "from-orange-400 to-amber-500" },
  ];

  return (
    <div
      id="education"
      className="relative py-28 px-6 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="floating-orb w-80 h-80 bg-teal-500 -left-20 top-40" />
      <div className="floating-orb w-64 h-64 bg-amber-500 right-0 bottom-20" />

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
            🎓 Academic Background
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4 font-heading">
            Education
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Education Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {/* B.Sc. */}
          <motion.div
            className="glass-card p-8 w-full max-w-lg group"
            initial={{ opacity: 0, y: 40, rotateY: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-dark-900 text-3xl group-hover:scale-110 transition-transform duration-300">
                <FaUniversity />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 font-heading">
                  B.Sc. Information Systems
                </h3>
                <p className="text-amber-400 text-base font-semibold">
                  Specializing in AI
                </p>
                <p className="text-gray-400 text-base mt-1">
                  University of Haifa • 2021 - 2024
                </p>
                <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <span className="text-3xl font-bold gradient-text">89.60</span>
                  <span className="text-gray-400 text-base">GPA</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bagrut */}
          <motion.div
            className="glass-card p-8 w-full max-w-lg group"
            initial={{ opacity: 0, y: 40, rotateY: 15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center text-dark-900 text-3xl group-hover:scale-110 transition-transform duration-300">
                <FaBook />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 font-heading">
                  Bagrut Diploma
                </h3>
                <p className="text-teal-400 text-base font-semibold">
                  Massada High School
                </p>
                <p className="text-gray-400 text-base mt-1">2017 - 2020</p>
                <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20">
                  <span className="text-3xl font-bold gradient-text-alt">113.5</span>
                  <span className="text-gray-400 text-base">Grade</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Courses */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-white font-heading">
            Key <span className="gradient-text">Courses</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                className="glass-card p-5 flex items-center gap-4 group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <FontAwesomeIcon icon={course.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white text-base truncate">
                    {course.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${course.grade}%` } : {}}
                        transition={{
                          delay: 0.8 + index * 0.1,
                          duration: 1.2,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    <span className="text-base font-bold text-amber-400 min-w-[32px]">
                      {course.grade}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
