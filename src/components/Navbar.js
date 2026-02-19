import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "languages", label: "Skills" },
    { to: "projects", label: "Projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "navbar-glass shadow-lg shadow-amber-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold text-shimmer tracking-wide font-heading"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tayma Ibrahem
        </motion.a>

        {/* Hamburger Icon for Mobile View */}
        <motion.button
          className="lg:hidden text-white relative z-50"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={800}
                spy={true}
                activeClass="!text-amber-400"
                className="relative px-5 py-2 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 group text-base font-medium tracking-wide uppercase font-heading"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Menu for Mobile View */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-dark-900/95 backdrop-blur-xl flex flex-col items-center justify-center z-40"
          >
            {/* Decorative orbs */}
            <div className="floating-orb w-64 h-64 bg-amber-500 top-10 left-10 animate-blob" />
            <div className="floating-orb w-48 h-48 bg-teal-500 bottom-20 right-10 animate-blob" style={{ animationDelay: "2s" }} />

            <ul className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    onClick={toggleMenu}
                    className="text-4xl font-bold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:bg-clip-text cursor-pointer transition-all duration-300 font-heading"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
