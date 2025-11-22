import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaGithub, FaStar, FaCodeBranch, FaFire, FaChartLine, 
  FaCalendarCheck, FaTrophy 
} from 'react-icons/fa';
import './GitHubStats.css';

const GitHubStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const stats = [
    { 
      icon: <FaCodeBranch />, 
      value: "140+", 
      label: "Contributions",
      description: "This Year",
      color: "#6C3FE4"
    },
    { 
      icon: <FaGithub />, 
      value: "24", 
      label: "Repositories",
      description: "Public Repos",
      color: "#A855F7"
    },
    { 
      icon: <FaStar />, 
      value: "24", 
      label: "Stars Earned",
      description: "Community Love",
      color: "#FF4DA6"
    },
    { 
      icon: <FaFire />, 
      value: "Consistent", 
      label: "Active Streak",
      description: "Regular Commits",
      color: "#FF6B6B"
    }
  ];

  const contributionData = [
    { month: "May", commits: 25, color: "#6C3FE4" },
    { month: "Jun", commits: 15, color: "#7C4FE4" },
    { month: "Jul", commits: 22, color: "#8C5FE4" },
    { month: "Aug", commits: 20, color: "#9C6FE4" },
    { month: "Sep", commits: 18, color: "#A855F7" },
    { month: "Oct", commits: 25, color: "#C084FC" },
    { month: "Nov", commits: 15, color: "#FF4DA6" }
  ];

  const monthlyDetails = {
    all: contributionData,
    may: [
      { day: 'Week 1', commits: 4 },
      { day: 'Week 2', commits: 8 },
      { day: 'Week 3', commits: 6 },
      { day: 'Week 4', commits: 7 }
    ],
    jun: [
      { day: 'Week 1', commits: 3 },
      { day: 'Week 2', commits: 5 },
      { day: 'Week 3', commits: 4 },
      { day: 'Week 4', commits: 3 }
    ],
    jul: [
      { day: 'Week 1', commits: 6 },
      { day: 'Week 2', commits: 7 },
      { day: 'Week 3', commits: 5 },
      { day: 'Week 4', commits: 4 }
    ],
    aug: [
      { day: 'Week 1', commits: 5 },
      { day: 'Week 2', commits: 6 },
      { day: 'Week 3', commits: 5 },
      { day: 'Week 4', commits: 4 }
    ],
    sep: [
      { day: 'Week 1', commits: 4 },
      { day: 'Week 2', commits: 5 },
      { day: 'Week 3', commits: 5 },
      { day: 'Week 4', commits: 4 }
    ],
    oct: [
      { day: 'Week 1', commits: 7 },
      { day: 'Week 2', commits: 8 },
      { day: 'Week 3', commits: 6 },
      { day: 'Week 4', commits: 4 }
    ],
    nov: [
      { day: 'Week 1', commits: 5 },
      { day: 'Week 2', commits: 4 },
      { day: 'Week 3', commits: 3 },
      { day: 'Week 4', commits: 3 }
    ]
  };

  const monthOptions = [
    { value: 'all', label: 'All Months (Overview)' },
    { value: 'may', label: 'May 2025' },
    { value: 'jun', label: 'June 2025' },
    { value: 'jul', label: 'July 2025' },
    { value: 'aug', label: 'August 2025' },
    { value: 'sep', label: 'September 2025' },
    { value: 'oct', label: 'October 2025' },
    { value: 'nov', label: 'November 2025' }
  ];

  const currentData = selectedMonth === 'all' ? contributionData : monthlyDetails[selectedMonth];
  const maxCommits = Math.max(...currentData.map(d => d.commits));

  const achievements = [
    { icon: <FaTrophy />, title: "Pull Shark", description: "Merged Pull Requests", badge: "🦈" },
    { icon: <FaChartLine />, title: "Active Contributor", description: "140+ contributions", badge: "📈" },
    { icon: <FaCalendarCheck />, title: "Consistent Coder", description: "Regular commits", badge: "✅" }
  ];

  const recentActivity = [
    { date: "Nov 22", action: "Created", repo: "Portfolio-Website", commits: 1 },
    { date: "Nov 19", action: "Pull Request", repo: "Robomania-2.0", commits: 1 },
    { date: "Nov 17", action: "Created", repo: "Robomania-2.0", commits: 4 },
    { date: "Nov 14", action: "Created", repo: "IIUC_25_Version2.0", commits: 3 },
    { date: "Nov 6", action: "Created", repo: "Code-the-Burj-Khalifa", commits: 4 }
  ];

  const featuredProjects = [
    { name: "AUST Robotics Club App", language: "Dart", stars: 1, description: "Mobile app for club management" },
    { name: "Pregnancy Companion", language: "JavaScript", stars: 2, description: "Full-stack web app with Firebase" },
    { name: "StratifyAI", language: "JavaScript", stars: 2, description: "AI-driven features integration" },
    { name: "Student Management", language: "Dart", stars: 1, description: "Admin panel & mobile app" }
  ];

  return (
    <section id="stats" className="github-stats" ref={ref}>
      <div className="section-bg-effect"></div>
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            GitHub <span className="gradient-text">Analytics</span>
          </h2>
          <p className="section-subtitle">
            Track my coding journey and contribution consistency
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3 className="stat-value gradient-text">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
                <span className="stat-description">{stat.description}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          className="contribution-section glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="contribution-header">
            <h3><FaChartLine /> Contribution Consistency</h3>
            <div className="contribution-controls">
              <span className="consistency-badge">
                <FaFire /> Active Developer
              </span>
              <select 
                className="month-selector"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {monthOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {selectedMonth === 'all' ? (
            // Bar Chart for All Months Overview
            <>
              <div className="contribution-graph">
                {currentData.map((data, index) => (
                  <motion.div
                    key={index}
                    className="contribution-bar"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${(data.commits / maxCommits) * 100}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="bar-tooltip">
                      <span className="tooltip-month">{data.month}</span>
                      <span className="tooltip-commits">{data.commits} commits</span>
                    </div>
                    <div 
                      className="bar-fill" 
                      style={{ background: data.color }}
                    />
                  </motion.div>
                ))}
              </div>
              
              <div className="graph-labels">
                {currentData.map((data, index) => (
                  <span key={index} className="month-label">{data.month}</span>
                ))}
              </div>
            </>
          ) : (
            // Line Graph for Individual Month
            <div className="line-graph-container">
              <svg className="line-graph" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                <g className="grid-lines">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <line
                      key={i}
                      x1="50"
                      y1={30 + (i * 30)}
                      x2="750"
                      y2={30 + (i * 30)}
                      stroke="rgba(168, 85, 247, 0.1)"
                      strokeWidth="1"
                    />
                  ))}
                  <text x="20" y="35" fill="var(--text-secondary)" fontSize="12">{maxCommits}</text>
                  <text x="20" y="155" fill="var(--text-secondary)" fontSize="12">{Math.floor(maxCommits/2)}</text>
                  <text x="20" y="275" fill="var(--text-secondary)" fontSize="12">0</text>
                </g>

                {/* Line path */}
                <motion.path
                  d={currentData.map((point, i) => {
                    const x = 100 + (i * (600 / (currentData.length - 1)));
                    const y = 270 - ((point.commits / maxCommits) * 240);
                    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Gradient for line */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6C3FE4" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#FF4DA6" />
                  </linearGradient>
                </defs>

                {/* Data points */}
                {currentData.map((point, i) => {
                  const x = 100 + (i * (600 / (currentData.length - 1)));
                  const y = 270 - ((point.commits / maxCommits) * 240);
                  return (
                    <motion.g key={i}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="6"
                        fill="#A855F7"
                        stroke="white"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.5 }}
                        className="data-point"
                      />
                      <text
                        x={x}
                        y="295"
                        textAnchor="middle"
                        fill="var(--text-secondary)"
                        fontSize="12"
                        fontWeight="600"
                      >
                        {point.day || point.month}
                      </text>
                    </motion.g>
                  );
                })}
              </svg>
              
              <div className="graph-info">
                <p>Total commits in {monthOptions.find(m => m.value === selectedMonth)?.label}: 
                  <strong> {currentData.reduce((sum, d) => sum + d.commits, 0)} commits</strong>
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Tabs */}
        <div className="stats-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            Recent Activity
          </button>
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Featured Projects
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          className="tab-content"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card glass-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="achievement-badge">{achievement.badge}</div>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="activity-list glass-card">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  className="activity-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="activity-date">{activity.date}</div>
                  <div className="activity-details">
                    <span className="activity-action">{activity.action}</span>
                    <span className="activity-repo">{activity.repo}</span>
                  </div>
                  <div className="activity-commits">{activity.commits} commit{activity.commits > 1 ? 's' : ''}</div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="project-header">
                    <h4>{project.name}</h4>
                    <div className="project-stars">
                      <FaStar /> {project.stars}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-footer">
                    <span className="project-language">
                      <span className="language-dot"></span>
                      {project.language}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          className="github-link-section"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a 
            href="https://github.com/Rafi12234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> Visit My GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
