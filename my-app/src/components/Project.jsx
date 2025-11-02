import React from "react";
import { motion } from "framer-motion";
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
  },
  {
    id: 2,
    title: "Prepgenie",
    description:
      "PrepGenie is a user-friendly platform that helps you prepare for interviews step by step. You can create your own practice sessions, choose different topics like algorithms or system design, and get questions in a clean and easy-to-use interface.",
    image: prepgenie,
    tags: ["React", "MongoDB","Tailwindcss","Express","Node","GeminiApi"],
    liveLink: "https://prep-genie-k3cd.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/PrepGenie",
  },
  {
    id: 3,
    title: "QuickChat - Chat Application ",
    description:
      "Built a secure, real-time chat platform using Socket.IO with authentication and instant messaging.Developed RESTful APIs with Node.js/Express.js and integrated MongoDB for persistent message storage",
    image: chat,
    tags: ["React", "MongoDB","Tailwindcss","Express","Node"],
    liveLink: "https://chat-application-eight-wine.vercel.app/login",
    githubLink: "https://github.com/SarthakDudhe/ChatApplication",
  },
];

const Project = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <p className="projects-subtitle">
          Explore some of my recent works showcasing diverse technologies and designs.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
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
        ))}
      </div>
    </section>
  );
};

export default Project;
