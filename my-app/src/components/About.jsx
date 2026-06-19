import React, { useRef } from "react";
import "./About.css"
import mypic from "../assets/bluepic.png"
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const cardRef = useRef(null);
  
  // 3D Parallax Tilt for Profile Picture
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Column: Interactive 3D Tilt Profile Card */}
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            ref={cardRef}
            className="about-image-card"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="glow-overlay" />
            <img src={mypic} alt="Sarthak Dudhe" className="profile-img" style={{ transform: "translateZ(30px)" }} />
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Minimalist Content */}
        <div className="about-right">
          <div className="mask-wrapper">
            <motion.h2 
              className="section-label"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              ABOUT ME
            </motion.h2>
          </div>
          <div className="mask-wrapper" style={{ marginBottom: "24px" }}>
            <motion.h1 
              className="hero-headline"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
              Crafting high-performance <span className="gradient-text">full-stack applications</span> with engineering precision.
            </motion.h1>
          </div>

          <motion.p 
            className="bio-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            I'm a Computer Engineering student and Full-Stack Developer specializing in the MERN stack (React, Node, Express, MongoDB). I focus on building robust APIs, optimizing system speed, and translating complex designs into interactive, high-fidelity web platforms.
          </motion.p>

          {/* Minimal Key Indicators Grid */}
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="stat-item">
              <span className="stat-number">8.99</span>
              <span className="stat-label">Computer Eng. CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">MERN</span>
              <span className="stat-label">Certified Stack Developer</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Intern</span>
              <span className="stat-label">Software Engineer Experience</span>
            </div>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <a 
              href="https://linkedin.com/in/sarthak-dudhe-67155a327" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-button"
            >
              Connect on LinkedIn <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
