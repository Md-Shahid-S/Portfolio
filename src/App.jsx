import './App.css';
import profile from './assets/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
const certifications = [
  {
    title: 'Deep Learning (IIT Ropar, NPTEL)',
    link: 'https://www.linkedin.com/posts/mohammed-shahid-s-3b564229b_deep-learning-iit-ropar-activity-7330253735715045379-L6qi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiIC7kBDHtGtL-p92sFM7UmFostB12yHzU',
    issuer: 'IIT Ropar',
    desc: '12-week NPTEL course covering neural networks, CNNs, RNNs, and advanced deep learning. Hands-on with TensorFlow.'
  },
  {
    title: 'Machine Learning Specialization (DeepLearning.AI & Stanford)',
    link: 'https://www.linkedin.com/posts/mohammed-shahid-s-3b564229b_machine-learning-activity-7301279421678686209-7k_G?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiIC7kBDHtGtL-p92sFM7UmFostB12yHzU',
    issuer: 'DeepLearning.AI & Stanford',
    desc: 'Coursera specialization: supervised, unsupervised, and reinforcement learning. Projects in Python.'
  },
  {
    title: 'Python for Data Science, AI & Development (IBM)',
    link: 'https://www.linkedin.com/posts/mohammed-shahid-s-3b564229b_python-for-data-science-ai-development-activity-7295448466946695168-45Tl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiIC7kBDHtGtL-p92sFM7UmFostB12yHzU',
    issuer: 'IBM',
    desc: 'Practical Python for data analysis, AI, and development. Includes Jupyter, Pandas, and Numpy.'
  },
  {
    title: 'SQL Programming Essentials',
    link: 'https://www.linkedin.com/posts/mohammed-shahid-s-3b564229b_sql-programming-essentials-activity-7248276934395076608-JK-N?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiIC7kBDHtGtL-p92sFM7UmFostB12yHzU',
    issuer: 'Certification',
    desc: 'Covers SQL basics, queries, joins, and database management for data-driven applications.'
  },
  {
    title: 'MongoDB Developer’s Toolkit',
    link: 'https://www.linkedin.com/posts/mohammed-shahid-s-3b564229b_mongodb-developers-toolkit-certificate-activity-7247178043499143168-n-nF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiIC7kBDHtGtL-p92sFM7UmFostB12yHzU',
    issuer: 'MongoDB',
    desc: 'Introduction to MongoDB, NoSQL concepts, CRUD operations, and aggregation framework.'
  },
  {
    title: 'Google Crash Course on Python',
    link: 'https://www.linkedin.com/posts/mohammed-shahid-s-3b564229b_completion-certificate-for-crash-course-on-activity-7241121126112763906-pf37?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiIC7kBDHtGtL-p92sFM7UmFostB12yHzU',
    issuer: 'Google',
    desc: 'Fast-paced Python course covering syntax, data structures, and scripting for beginners.'
  },
];

const internship = {
  title: 'Styro Technologies Internship',
  link: 'https://www.linkedin.com/posts/mohammed-shahid-s-3b564229b_internship-certificate-activity-7262635420981604352-ApQH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiIC7kBDHtGtL-p92sFM7UmFostB12yHzU',
  issuer: 'Styro Technologies',
};

const skills = [
  'Machine Learning',
  'Deep Learning',
  'Python',
  'SQL',
  'MongoDB',
  'Docker',
  'WSL',
  'AI Tools',
  'Android Studio',
  'Vibe Coding',
];

const skillIcons = {
  'Machine Learning': 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
  'Deep Learning': 'https://cdn-icons-png.flaticon.com/512/2103/2103634.png',
  'Python': 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  'SQL': 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Docker': 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
  'WSL': 'https://cdn-icons-png.flaticon.com/512/6124/6124995.png',
  'AI Tools': 'https://cdn-icons-png.flaticon.com/512/2103/2103635.png',
  'Android Studio': 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
  'Vibe Coding': 'https://cdn-icons-png.flaticon.com/512/2103/2103636.png',
};

const socialIcons = {
  'LinkedIn': 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  'GitHub': 'https://cdn-icons-png.flaticon.com/512/733/733609.png',
  // No icon for Kaggle
  'Instagram': 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
  'Email': 'https://cdn-icons-png.flaticon.com/512/561/561127.png',
};

const socials = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mohammed-shahid-s-3b564229b/' },
  { name: 'GitHub', link: 'https://github.com/Md-Shahid-S' },
  { name: 'Kaggle', link: 'https://www.kaggle.com/mohammedshahids' },
  { name: 'Instagram', link: 'https://www.instagram.com/mdshahid.27/' },
  { name: 'Email', link: 'mailto:shahidsmohammed47@gmail.com' },
];

const projects = [
  {
    title: 'Notes App',
    link: 'https://github.com/Md-Shahid-S/NotesApp',
    desc: 'A feature-rich Notes App built using Vibe Coding and Android Studio. Allows users to create, edit, and organize notes with a clean, intuitive interface. Designed for seamless note-taking and productivity on mobile devices.',
    tech: ['Android Studio', 'Vibe Coding', 'Mobile Dev']
  },
  {
    title: 'End-to-End ML Project: Linear Regression',
    link: 'https://github.com/Md-Shahid-S/E2E-ML-Proj/tree/main',
    desc: 'A complete machine learning pipeline for linear regression, from data preprocessing to model deployment. Demonstrates best practices in data science, reproducibility, and automation for real-world ML workflows.',
    tech: ['Python', 'ML', 'Data Science']
  },
  {
    title: 'AI Chat Bot using Gemini API',
    link: 'https://github.com/Md-Shahid-S/MyGPT',
    desc: 'An AI-powered chatbot leveraging the Gemini API for natural language conversations. Integrates advanced language models to provide intelligent, context-aware responses and a smooth chat experience.',
    tech: ['AI', 'Gemini API', 'NLP']
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);
  // Close menu on navigation
  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };
  return (
    <div className="portfolio-root">
      <nav className="portfolio-nav" data-aos="fade-down">
        <span className="portfolio-logo" onClick={() => handleNavClick('hero')}>MS</span>
        <button
          className="hamburger-menu"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
        </button>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li onClick={() => handleNavClick('hero')}>Home</li>
          <li onClick={() => handleNavClick('projects')}>Projects</li>
          <li onClick={() => handleNavClick('certifications')}>Certifications</li>
          <li onClick={() => handleNavClick('contact')}>Contact</li>
        </ul>
      </nav>
      <header className="portfolio-hero" id="hero" data-aos="fade-up">
      <img src={profile} alt="Profile Picture" className="profile-lamp" />
        <h1>Mohammed Shahid S</h1>
        <p className="portfolio-tagline">Aspiring Data Scientist | AI & DS Enthusiast | ML, DL, Web Dev</p>
        <p className="portfolio-intro">Empowering innovation through data-driven intelligence. I specialize in building smart solutions with AI, machine learning, and modern web technologies—transforming complex challenges into actionable insights and real-world impact.</p>
        <div className="portfolio-socials">
          {socials.map((s) => (
            <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer">
              <span>{s.name}</span>
              {socialIcons[s.name] && (
                <img src={socialIcons[s.name]} alt={s.name} className="social-icon" />
              )}
            </a>
          ))}
        </div>
      </header>
      <section className="portfolio-certifications" id="certifications" data-aos="fade-right">
        <h2>Certifications</h2>
        <div className="certification-roadmap">
          {certifications.map((cert, index) => (
            <div className="cert-item" key={cert.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="cert-connector">
                <div className="cert-dot"></div>
                {index < certifications.length - 1 && <div className="cert-line"></div>}
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  <span className="cert-number">{(index + 1).toString().padStart(2, '0')}</span>
                  <h3>{cert.title}</h3>
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-desc">{cert.desc}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  <span>View Certificate</span>
                  <span className="link-icon">→</span>
                </a>
                <div className="cert-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="portfolio-internship" data-aos="fade-left">
        <h2>Internship Experience</h2>
        <div className="internship-showcase">
          <div className="internship-item" data-aos="fade-up">
            <div className="internship-content">
              <div className="internship-info">
                <div className="internship-title-section">
                  <h3>{internship.title}</h3>
                </div>
                <p className="internship-issuer">{internship.issuer}</p>
                <p className="internship-desc">During this internship, I gained hands-on experience with AI technologies and machine learning frameworks. Worked on real-world projects involving data analysis, model development, and AI implementation. Developed practical skills in Python, TensorFlow, and various AI tools while contributing to innovative solutions.</p>
                <div className="internship-tech-stack">
                  <span className="tech-pill">AI</span>
                  <span className="tech-pill">Machine Learning</span>
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">Data Analysis</span>
                </div>
                <a href={internship.link} target="_blank" rel="noopener noreferrer" className="internship-action">
                  <span>View Certificate</span>
                  <div className="action-icon">⚡</div>
                </a>
              </div>
            </div>
            <div className="internship-glow"></div>
          </div>
        </div>
      </section>
      <section className="portfolio-skills" data-aos="fade-up">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, idx) => (
            <li key={skill} data-aos="zoom-in" data-aos-delay={idx * 60}>
              <img src={skillIcons[skill]} alt={skill} className="skill-icon" />
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section className="portfolio-learning-now">
        <h2>What I’m Learning Now</h2>
        <div className="learning-now-showcase">
          <div className="learning-now-item" data-aos="fade-up" data-aos-delay="100">
            <div className="learning-now-content">
              <div className="learning-now-info">
                <h3 className="learning-now-title">Large Language Models (LLMs)</h3>
                <p className="learning-now-desc">
                  Exploring the latest in AI with LLMs—building, fine-tuning, and applying advanced language models for real-world solutions. Passionate about prompt engineering, conversational AI, and unlocking new possibilities in natural language understanding.
                </p>
                <div className="learning-now-tech-stack">
                  <span className="tech-pill">LLM</span>
                  <span className="tech-pill">LangChain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-projects" id="projects" data-aos="fade-right">
        <h2>Projects</h2>
        <div className="projects-showcase">
          {projects.map((proj, index) => (
            <div className="project-item" key={proj.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-content">
                <div className="project-badge">
                  <span className="project-number">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-section">
                    <h3>{proj.title}</h3>
                  </div>
                  <p className="project-desc">{proj.desc}</p>
                  <div className="project-tech-stack">
                    {proj.tech.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-action">
                    <span>Explore Project</span>
                    <div className="action-icon">⚡</div>
                  </a>
                </div>
              </div>
              <div className="project-glow"></div>
            </div>
          ))}
        </div>
      </section>
      <section className="portfolio-contact" id="contact" data-aos="fade-up">
        <h2 className="contact-title">Contact Me</h2>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Thank you for reaching out!'); }}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button className="contact-btn" type="submit">Send Message</button>
        </form>
      </section>
      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Mohammed Shahid S</p>
      </footer>
    </div>
  );
}

export default App;
