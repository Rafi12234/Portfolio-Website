import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCode, FaLightbulb, FaCoffee } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "CSE Student",
      description: "Computer Science & Engineering student passionate about technology and innovation"
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Developer",
      description: "Building end-to-end solutions with modern web and mobile technologies"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description: "Love tackling complex challenges and creating elegant solutions"
    },
    {
      icon: <FaCoffee />,
      title: "Coffee-Powered",
      description: "Turning caffeine into code, one cup at a time ☕"
    }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-bg-effect"></div>
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about my journey and what drives me
          </p>
        </motion.div>

        <div className="about-content">
          <div className="about-top-row">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-card glass-card">
                <h3 className="gradient-text">Hello World! 👨‍💻</h3>
                <p>
                  I'm <strong>Shajedul Kabir Rafi</strong>, a passionate Computer Science student from 
                  Dhaka, Bangladesh. I specialize in building full-stack web applications and mobile apps 
                  that make a difference.
                </p>
                <p>
                  My journey in tech started with a curiosity about how things work, and it has evolved 
                  into a passion for creating innovative solutions. I believe in writing clean, efficient 
                  code and building products that users love.
                </p>
                <p>
                  Currently focusing on mastering <strong>React</strong>, <strong>Node.js</strong>, 
                  <strong> Flutter</strong>, and exploring the fascinating world of <strong>AI/ML</strong>. 
                  I'm always eager to learn new technologies and take on challenging projects.
                </p>
                <p className="motto">
                  <span className="quote-icon">"</span>
                  Building solutions that matter, one line of code at a time.
                  <span className="quote-icon">"</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="education-text"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="education-section glass-card">
                <h3 className="gradient-text">🎓 Education Journey</h3>
                <div className="education-timeline">
                  <div className="education-item">
                    <div className="edu-year">2022 - Present</div>
                    <div className="edu-details">
                      <h4>B.Sc. in Computer Science & Engineering</h4>
                      <p className="institution">Ahsanullah University of Science and Technology (AUST)</p>
                      <p className="location">📍 Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  <div className="education-item">
                    <div className="edu-year">2022</div>
                    <div className="edu-details">
                      <h4>Higher Secondary Certificate (HSC)</h4>
                      <p className="institution">Notre Dame College</p>
                      <p className="location">📍 Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  <div className="education-item">
                    <div className="edu-year">2020</div>
                    <div className="edu-details">
                      <h4>Secondary School Certificate (SSC)</h4>
                      <p className="institution">Udayan Uchcha Madhyamik Bidyalaya</p>
                      <p className="location">📍 Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="fun-facts"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="fun-fact-card glass-card">
            <h4>🎯 Current Focus</h4>
            <ul>
              <li>📚 Learning Next.js for server-side rendering</li>
              <li>🗄️ Integrating MongoDB in full-stack projects</li>
              <li>🧪 Writing unit tests & implementing CI/CD</li>
              <li>🚀 Deploying production-ready applications</li>
            </ul>
          </div>

          <div className="fun-fact-card glass-card">
            <h4>✨ Upcoming Goals</h4>
            <ul>
              <li>📱 Launch apps on Google Play Store</li>
              <li>🤝 Contribute to open-source projects</li>
              <li>📝 Write technical blogs & tutorials</li>
              <li>🌐 Build amazing web experiences</li>
            </ul>
          </div>

          <div className="fun-fact-card glass-card">
            <h4>🏆 Achievements & Interests</h4>
            <ul>
              <li>🤖 Active member of AUST Robotics Club</li>
              <li>💻 Built multiple full-stack applications</li>
              <li>🎨 Passionate about UI/UX design</li>
              <li>☕ Coffee enthusiast & late-night coder</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
