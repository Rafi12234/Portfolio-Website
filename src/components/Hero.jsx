import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-effect"></div>
      
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="wave">👋</span> Hey there, I'm
          </motion.div>

          <motion.h1
            className="hero-name gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Shajedul Kabir Rafi
          </motion.h1>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="role-text">Full-Stack Developer</span>
            <span className="role-separator">•</span>
            <span className="role-text">Mobile App Creator</span>
            <span className="role-separator">•</span>
            <span className="role-text">CSE Student</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Tech enthusiast building innovative <span className="highlight">Full-Stack Web</span> and{' '}
            <span className="highlight">Android apps</span>. Turning coffee into code and ideas into reality. 
            Based in <span className="highlight">Dhaka, Bangladesh 🇧🇩</span>
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a
              href="/Shajedul Kabir Rafi CV.pdf"
              download
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download CV
            </motion.a>
            <motion.button
              onClick={scrollToContact}
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-stats-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="stat-item">
              <span className="stat-number gradient-text">140+</span>
              <span className="stat-label">Contributions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">24</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">24</span>
              <span className="stat-label">Stars Earned</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="hero-circle"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="circle-gradient"></div>
          </motion.div>

          <motion.div
            className="floating-icons"
            animate={{ y: [-20, 20, -20] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="tech-icon">⚛️</div>
            <div className="tech-icon">📱</div>
            <div className="tech-icon">💻</div>
            <div className="tech-icon">🚀</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
