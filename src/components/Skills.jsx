import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaReact, FaNode, FaJs, FaJava, FaPython, FaGitAlt, 
  FaDocker, FaDatabase, FaFigma, FaAndroid 
} from 'react-icons/fa';
import { 
  SiFlutter, SiFirebase, SiMongodb, SiExpress, SiTailwindcss, 
  SiVite, SiPostman, SiMysql, SiDart, SiCplusplus 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", icon: <FaJs />, level: 90 },
        { name: "Java", icon: <FaJava />, level: 85 },
        { name: "Python", icon: <FaPython />, level: 75 },
        { name: "Dart", icon: <SiDart />, level: 80 },
        { name: "C++", icon: <SiCplusplus />, level: 70 }
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "Vite", icon: <SiVite />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 88 },
        { name: "HTML/CSS", icon: "🌐", level: 95 }
      ]
    },
    {
      title: "Mobile",
      icon: "📱",
      skills: [
        { name: "Flutter", icon: <SiFlutter />, level: 85 },
        { name: "Android", icon: <FaAndroid />, level: 80 },
        { name: "Dart", icon: <SiDart />, level: 82 }
      ]
    },
    {
      title: "Backend & Tools",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <FaNode />, level: 85 },
        { name: "Express", icon: <SiExpress />, level: 85 },
        { name: "Firebase", icon: <SiFirebase />, level: 88 },
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "MySQL", icon: <SiMysql />, level: 75 },
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "Docker", icon: <FaDocker />, level: 70 },
        { name: "Postman", icon: <SiPostman />, level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section-bg-effect"></div>
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="learning-card glass-card">
            <h4>🚀 Currently Exploring</h4>
            <div className="learning-tags">
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">GraphQL</span>
              <span className="tag">Redis</span>
              <span className="tag">AWS</span>
              <span className="tag">AI/ML</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
