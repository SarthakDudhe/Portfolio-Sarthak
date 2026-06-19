import "./About.css"
import mypic from "../assets/bluepic.png"
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";
import 'animate.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1>ABOUT ME</h1>
        <p className="about-subtitle">Get to know my background, experience, and education</p>
      </motion.div>

      <div className="about-content">
        {/* Left column: Profile Card */}
        <motion.div 
          className="about-avatar-container"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-avatar-wrapper">
            <div className="about-avatar-glow"></div>
            <img src={mypic} alt="Sarthak Dudhe" id="my-img" />
          </div>
        </motion.div>

        {/* Right column: Bio + Cards */}
        <motion.div 
          className="about-details"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Info cards (Experience & Education) */}
          <div className="about-cards-grid">
            <div className="education">
              <div className="icon-container">
                <Briefcase size={24} className="card-icon" />
              </div>
              <h1>Experience</h1>
              <p>Ex. AIML Intern</p>
              <p className="highlight">Elevate Labs</p>
            </div>
            
            <div className="education">
              <div className="icon-container">
                <GraduationCap size={24} className="card-icon" />
              </div>
              <h1>Education</h1>
              <p>Computer Engineering</p>
              <p className="highlight">Mumbai University</p>
            </div>  
          </div>

          {/* Bio text */}
          <div className="about-bio">
            <p className="intro-text">
              Hi, I'm <span className="highlight-name">Sarthak Dudhe</span>, a passionate Computer Engineering student at Datta Meghe College of Engineering.
            </p>
            <p className="body-text">
              Throughout my academic journey, I've developed a solid understanding of computer science fundamentals, including programming languages, data structures, and algorithms. I'm particularly passionate about <span className="highlight-tag">MERN stack development</span>, with a focus on building scalable and efficient web applications. Additionally, I'm interested in <span className="highlight-tag">Python</span> and <span className="highlight-tag">Data Science</span>.
            </p>
            <p className="body-text">
              Take a look around my portfolio to see my projects, achievements, and experiences. Feel free to connect with me for opportunities or collaborations!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
