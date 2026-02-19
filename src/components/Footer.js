import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/TaymaaIbrahem",
      label: "GitHub",
      color: "hover:text-amber-400 hover:shadow-amber-500/20",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/tayma-ibrahem-a6a453237/",
      label: "LinkedIn",
      color: "hover:text-teal-400 hover:shadow-teal-500/20",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:taymaibrahem@gmail.com",
      label: "Email",
      color: "hover:text-orange-400 hover:shadow-orange-500/20",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Background decoration */}
      <div className="floating-orb w-64 h-64 bg-amber-500 -left-20 -bottom-20 opacity-10" />
      <div className="floating-orb w-48 h-48 bg-teal-500 -right-10 -bottom-10 opacity-10" />

      <div className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          {/* Brand */}
          <motion.h3
            className="text-4xl font-bold text-shimmer mb-5 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tayma Ibrahem
          </motion.h3>

          <motion.p
            className="text-gray-400 text-lg max-w-lg mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            DevOps Engineer & Information Systems Expert specializing in AI.
            Always eager to learn and create innovative solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-5 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-xl glass-card flex items-center justify-center text-gray-400 text-2xl transition-all duration-300 ${link.color} hover:shadow-lg hover:-translate-y-1`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.a
            href="mailto:taymaibrahem@gmail.com"
            className="inline-flex items-center gap-2 btn-gradient px-10 py-4 rounded-full text-lg font-semibold mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <FaEnvelope />
            <span className="relative z-10">Get In Touch</span>
          </motion.a>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Copyright */}
          <motion.p
            className="text-gray-500 text-base flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            &copy; {new Date().getFullYear()} Tayma Ibrahem. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart className="text-orange-500 inline" />
            </motion.span>{" "}
            All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
