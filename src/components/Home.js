import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "DevOps Engineer & AI Enthusiast";
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Memoize particle positions so they don't change on re-renders
  const particlePositions = useMemo(
    () =>
      [...Array(20)].map((_, i) => ({
        bg: i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#f97316" : "#34d399",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 3,
      })),
    []
  );

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && textIndex < fullText.length) {
          setDisplayText(fullText.slice(0, textIndex + 1));
          setTextIndex(textIndex + 1);
        } else if (!isDeleting && textIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && textIndex > 0) {
          setDisplayText(fullText.slice(0, textIndex - 1));
          setTextIndex(textIndex - 1);
        } else if (isDeleting && textIndex === 0) {
          setIsDeleting(false);
        }
      },
      isDeleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting]);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="floating-orb w-96 h-96 bg-amber-500 -top-20 -left-20 animate-blob" />
      <div className="floating-orb w-80 h-80 bg-orange-500 top-40 right-10 animate-blob" style={{ animationDelay: "2s" }} />
      <div className="floating-orb w-72 h-72 bg-teal-500 bottom-10 left-1/3 animate-blob" style={{ animationDelay: "4s" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {particlePositions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: p.bg,
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-12 relative z-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full text-base font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
              ✨ Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Tayma</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span className="gradient-text-alt">{displayText}</span>
            <span className="animate-pulse text-amber-400 ml-0.5">|</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Passionate about leveraging technology, DevOps practices, and
            artificial intelligence to build and deploy innovative solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="btn-gradient px-10 py-4 rounded-full text-lg font-semibold text-center relative z-10"
            >
              <span className="relative z-10">View My Work</span>
            </a>
            <a
              href="#experience"
              className="px-10 py-4 rounded-full text-lg font-semibold text-white border border-white/20 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 80, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-teal-500/30 rounded-full blur-3xl scale-110" />
            
            {/* Rotating border */}
            <motion.div
              className="absolute -inset-3 rounded-full opacity-60"
              style={{
                background: "conic-gradient(from 0deg, #fbbf24, #f97316, #34d399, #fbbf24)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Image container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-dark-900">
              <img
                src="/tayma.png"
                alt="Tayma Ibrahim"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-8 glass-card px-4 py-2.5 text-base font-medium"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎓 B.Sc. in IS
            </motion.div>
            <motion.div
              className="absolute -left-4 bottom-12 glass-card px-4 py-2.5 text-base font-medium"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              ⚙️ DevOps Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-7 h-11 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-amber-400"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
