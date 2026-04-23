// src/pages/Home.jsx
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-image-container">
          <div className="profile-placeholder">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="45" r="20" fill="#e94560" />
              <circle cx="50" cy="100" r="35" fill="#e94560" />
              <circle cx="35" cy="40" r="3" fill="white" />
              <circle cx="65" cy="40" r="3" fill="white" />
              <path d="M40 52 Q50 58 60 52" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        <h1 className="name">Alex Johnson</h1>
        <p className="tagline">Computer Science Student | Full Stack Developer</p>
      </div>

      {/* About Me */}
      <div className="card">
        <h2>📖 About Me</h2>
        <p>
          I'm a passionate 3rd-year Computer Science student with a love for building 
          innovative web applications. I enjoy solving complex problems and learning 
          new technologies. When I'm not coding, you can find me reading tech blogs, 
          contributing to open source, or playing chess.
        </p>
      </div>

      {/* Research Interests */}
      <div className="card">
        <h2>🔬 Research Interests</h2>
        <div className="interests-grid">
          <span className="interest-tag">Artificial Intelligence</span>
          <span className="interest-tag">Machine Learning</span>
          <span className="interest-tag">Web3 Technologies</span>
          <span className="interest-tag">Cloud Computing</span>
          <span className="interest-tag">Human-Computer Interaction</span>
          <span className="interest-tag">Data Science</span>
        </div>
      </div>

      {/* Personal Details */}
      <div className="card">
        <h2>👤 Personal Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <strong>📛 Name:</strong> Alex Johnson
          </div>
          <div className="detail-item">
            <strong>📞 Phone:</strong> +1 (555) 123-4567
          </div>
          <div className="detail-item">
            <strong>📧 Personal Email:</strong> alex.johnson@example.com
          </div>
          <div className="detail-item">
            <strong>🎓 College Email:</strong> alex.johnson@university.edu
          </div>
        </div>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>💪 Skills</h3>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skill-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>Tailwind</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="skill-list">
              <span>Node.js</span>
              <span>Python</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <div className="skill-list">
              <span>Git/GitHub</span>
              <span>VS Code</span>
              <span>Docker</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;