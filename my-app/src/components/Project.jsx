import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Project.css";
import cbs from "../assets/CBSJAVA.png";
import prepgenie from "../assets/Prepgenie.png";
import chat from "../assets/Quickchat.png";

const projects = [
  {
    id: 1,
    title: "Cab Booking System",
    description:
      "A Java-based cab booking system that allows users to book cabs, track rides, and manage bookings efficiently.",
    image: cbs,
    tags: ["Core Java", "Java Swing", "MySQL"],
    liveLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    githubLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    glowColor: "#00b4ff",
    glowShadow: "rgba(0, 180, 255, 0.12)",
    glowShadowActive: "rgba(0, 180, 255, 0.25)",
  },
  {
    id: 2,
    title: "Prepgenie",
    description:
      "PrepGenie is a user-friendly platform that helps you prepare for interviews step by step. You can create your own practice sessions, choose different topics like algorithms or system design, and get questions in a clean and easy-to-use interface.",
    image: prepgenie,
    tags: ["React", "MongoDB", "Tailwindcss", "Express", "Node", "GeminiApi"],
    liveLink: "https://prep-genie-k3cd.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/PrepGenie",
    glowColor: "#ff007a",
    glowShadow: "rgba(255, 0, 122, 0.12)",
    glowShadowActive: "rgba(255, 0, 122, 0.25)",
  },
  {
    id: 3,
    title: "QuickChat - Chat Application ",
    description:
      "Built a secure, real-time chat platform using Socket.IO with authentication and instant messaging.Developed RESTful APIs with Node.js/Express.js and integrated MongoDB for persistent message storage",
    image: chat,
    tags: ["React", "MongoDB", "Tailwindcss", "Express", "Node"],
    liveLink: "https://chat-application-eight-wine.vercel.app/login",
    githubLink: "https://github.com/SarthakDudhe/ChatApplication",
    glowColor: "#39ff14",
    glowShadow: "rgba(57, 255, 20, 0.12)",
    glowShadowActive: "rgba(57, 255, 20, 0.25)",
  },
];

const ProjectCard = ({ project, index, total }) => {
  const containerRef = useRef(null);
  
  // Track scroll position of the wrapper relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isLast = index === total - 1;

  // Map scrollYProgress to scale, opacity and y translation for 3D depth
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.4]);
  const y = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -20]);

  return (
    <div ref={containerRef} className="project-card-wrapper">
      <motion.div
        className="project-card"
        style={{
          scale,
          opacity,
          y,
          top: `calc(120px + ${index * 30}px)`,
          "--card-glow-color": project.glowColor,
          "--card-glow-shadow": project.glowShadow,
          "--card-glow-shadow-active": project.glowShadowActive,
        }}
      >
        <div className="project-image-container">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        </div>

        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="project-buttons">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn live-btn"
            >
              🔗 Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Project = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <p className="projects-subtitle">
          Explore some of my recent works showcasing diverse technologies and designs.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
