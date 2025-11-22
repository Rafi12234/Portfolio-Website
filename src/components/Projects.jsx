import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "AUST Robotics Club Mobile App",
      description: "A comprehensive mobile application for managing club activities, events, and member engagement at AUST Robotics Club. Features real-time notifications, event scheduling, and activity tracking.",
      image: "🤖",
      technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
      category: "mobile",
      github: "https://github.com/Rafi12234/AUST-Robotics-Club-Mobile-Application",
      stars: 1,
      highlights: ["Event Management", "Push Notifications", "Member Portal"]
    },
    {
      title: "Pregnancy Companion Web App",
      description: "A full-featured web application providing guidance, tracking, and community support for expecting mothers. Built with React and Firebase for real-time updates.",
      image: "🤰",
      technologies: ["React", "Firebase", "JavaScript", "Firestore"],
      category: "web",
      github: "https://github.com/Rafi12234/Pregnancy-Companion-Web-App-with-Firebase",
      stars: 2,
      highlights: ["Real-time Updates", "Cloud Storage", "User Authentication"]
    },
    {
      title: "StratifyAI",
      description: "Exploring AI-driven features and intelligent user experiences through modern web technologies. Focus on AI feature integration and smart recommendations.",
      image: "🧠",
      technologies: ["JavaScript", "AI/ML", "React", "API Integration"],
      category: "web",
      github: "https://github.com/Rafi12234/StratifyAI",
      stars: 2,
      highlights: ["AI Integration", "Smart UI", "Predictive Features"]
    },
    {
      title: "Student Management System",
      description: "Complete student management solution with dedicated mobile app and admin panel for AUSTians. Features CRUD operations, analytics, and secure authentication.",
      image: "🎓",
      technologies: ["Flutter", "Dart", "Admin Panel", "Database"],
      category: "mobile",
      github: "https://github.com/Rafi12234/Student-Management-System-for-AUSTians",
      stars: 1,
      highlights: ["Cross-platform", "Admin Dashboard", "Data Analytics"]
    },
    {
      title: "Robomania 2.0",
      description: "Event management platform for robotics competitions and tech events. Built with modern JavaScript frameworks for seamless user experience.",
      image: "🚀",
      technologies: ["JavaScript", "React", "Web Development"],
      category: "web",
      github: "https://github.com/Rafi12234/Robomania-2.0",
      highlights: ["Event Registration", "Live Updates", "Team Management"]
    },
    {
      title: "Code the Burj Khalifa",
      description: "Creative coding project using C++ to generate artistic representations and simulations. Demonstrates advanced programming concepts.",
      image: "🏗️",
      technologies: ["C++", "Algorithms", "Graphics"],
      category: "other",
      github: "https://github.com/Rafi12234/Code-the-Burj-Khalifa",
      highlights: ["Visual Programming", "Algorithm Design", "Creative Coding"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '📂' },
    { id: 'web', label: 'Web Apps', icon: '🌐' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { id: 'other', label: 'Others', icon: '🔧' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="section-bg-effect"></div>
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my best work and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.stars && (
                    <div className="project-stars">
                      <FaStar /> {project.stars}
                    </div>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          className="view-more-section"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="view-more-text">
            Want to see more? Check out all my projects on GitHub!
          </p>
          <a 
            href="https://github.com/Rafi12234?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
