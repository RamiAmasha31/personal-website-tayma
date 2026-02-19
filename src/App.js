import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import LanguagesAndSkills from "./components/Languages";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-dark-900 min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full animated-gradient-bg opacity-50" />
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Home />
          <Experience />
          <Education />
          <LanguagesAndSkills />
          <Projects />
        </motion.main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
