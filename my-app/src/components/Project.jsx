import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cbs from "../assets/CBSJAVA.png";
import prepgenie from "../assets/Prepgenie.png";
import chat from "../assets/Quickchat.png";
import spark from "../assets/Spark.png";
import "./Project.css";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Spark — AI Workspace",
    category: "Full-Stack AI Platform",
    description: "An AI-powered career workspace for resume management, automated resume-job matching, content generation for outreach, and automated PDF feedback reports.",
    image: spark,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Gemini AI"],
    liveLink: "https://spark-ai-beige.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/Spark--AI-Powered-Career-Workspace",
  },
  {
    id: 2,
    num: "02",
    title: "QuickChat App",
    category: "Real-time Messaging Service",
    description: "A secure instant messaging platform featuring real-time communication via Socket.IO, JWT user authorization, and persistent chat archives.",
    image: chat,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveLink: "https://chat-application-eight-wine.vercel.app/login",
    githubLink: "https://github.com/SarthakDudhe/ChatApplication",
  },
  {
    id: 3,
    num: "03",
    title: "Feasto Platform",
    category: "Food Ordering System",
    description: "A full-stack food delivery application with user authentication, secure payment gateway processing via Stripe, and clean checkout states.",
    image: chat, // using chat dashboard visual as fallback
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "https://github.com/SarthakDudhe/Feasto-Food-Delivery-Platform",
    githubLink: "https://github.com/SarthakDudhe/Feasto-Food-Delivery-Platform",
  },
  {
    id: 4,
    num: "04",
    title: "Cab Booking System",
    category: "Desktop Application",
    description: "A robust Java-based booking system designed with Swing GUI, implementing database architectures for passenger dispatching and ride logs.",
    image: cbs,
    tags: ["Core Java", "Java Swing", "MySQL"],
    liveLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    githubLink: "https://github.com/SarthakDudhe/CabBookingSystem",
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        {/* Header */}
        <div className="projects-header-minimal">
          <div className="mask-wrapper">
            <motion.span 
              className="section-label"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Selected Works
            </motion.span>
          </div>
          <div className="mask-wrapper" style={{ marginBottom: "20px" }}>
            <motion.h1 
              className="projects-title"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
              Featured Projects
            </motion.h1>
          </div>
          <motion.p 
            className="projects-desc"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            A curated showcase of software systems and full-stack web platforms built with modular architectures.
          </motion.p>
        </div>

        {/* Desktop Split Layout */}
        <div className="projects-split-layout">
          
          {/* Left Column: Interactive Project Rows */}
          <div className="projects-left-list">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-row-item-minimal ${index === activeIndex ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className="project-row-num">{project.num}</span>
                <div className="project-row-main">
                  <h2 className="project-row-title">{project.title}</h2>
                  <span className="project-row-cat">{project.category}</span>
                </div>
                <ArrowUpRight className="row-arrow" size={20} />
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Showcase Preview */}
          <div className="projects-right-showcase">
            <div className="showcase-sticky-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="showcase-inner"
                >
                  <div className="showcase-image-wrap">
                    <img 
                      src={projects[activeIndex].image} 
                      alt={projects[activeIndex].title} 
                      className="showcase-img"
                    />
                  </div>
                  
                  <div className="showcase-details">
                    <span className="showcase-category">{projects[activeIndex].category}</span>
                    <h3 className="showcase-title">{projects[activeIndex].title}</h3>
                    <p className="showcase-description">{projects[activeIndex].description}</p>
                    
                    <div className="showcase-tags">
                      {projects[activeIndex].tags.map((tag, idx) => (
                        <span key={idx} className="showcase-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="showcase-links">
                      <a 
                        href={projects[activeIndex].githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="showcase-link-btn"
                      >
                        <Github size={15} /> Source
                      </a>
                      <a 
                        href={projects[activeIndex].liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="showcase-link-btn primary"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Mobile Layout (Sleek Borderless Cards Stack) */}
        <div className="projects-mobile-list">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-mobile-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project-mobile-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-mobile-body">
                <span className="project-mobile-cat">{project.category}</span>
                <h2 className="project-mobile-title">{project.title}</h2>
                <p className="project-mobile-desc">{project.description}</p>
                
                <div className="project-mobile-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-mobile-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-mobile-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-mobile-link-btn"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-mobile-link-btn primary"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
