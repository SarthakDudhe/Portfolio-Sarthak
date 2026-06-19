import "./About.css"
import mypic from "../assets/bluepic.png"
import { Briefcase, GraduationCap } from 'lucide-react';
import 'animate.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h1>ABOUT ME</h1>
        <p className="about-subtitle">Get to know my background, experience, and education</p>
      </div>

      <div className="about-content">
        {/* Left column: Profile Card */}
        <div className="about-avatar-container">
          <div className="about-avatar-wrapper">
            <div className="about-avatar-glow"></div>
            <img src={mypic} alt="Sarthak Dudhe" id="my-img" />
          </div>
        </div>

        {/* Right column: Bio + Cards */}
        <div className="about-details">
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
        </div>
      </div>
    </section>
  );
}
