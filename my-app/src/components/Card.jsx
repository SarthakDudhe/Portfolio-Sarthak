import "./Card.css"
import { Code2, Database, Globe, Server } from 'lucide-react';
import { motion } from "framer-motion";
import html from "../assets/htmllogo.png"
import css from "../assets/csslogo.png"
import js from "../assets/javascriptlogo.png"
import java from "../assets/javalogo.png"
import mongo from "../assets/mongodblogo.png"
import mysql from "../assets/mysqllogo.png"
import node from "../assets/nodelogo.png"
import python from "../assets/pythonlogo.png"
import react from "../assets/react.svg"
import React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Card = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={18} className="cat-icon" />,
      skills: [
        { name: "HTML", logo: html, color: "#E34F26" },
        { name: "CSS", logo: css, color: "#1572B6" },
        { name: "JavaScript", logo: js, color: "#F7DF1E" },
        { name: "React.js", logo: react, color: "#61DAFB" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={18} className="cat-icon" />,
      skills: [
        { name: "Node.js", logo: node, color: "#339933" },
        { name: "Express.js", logo: null, color: "#ffffff" },
        { name: "Python", logo: python, color: "#3776AB" },
        { name: "Java", logo: java, color: "#f89820" },
      ]
    },
    {
      title: "Databases & Integration",
      icon: <Database size={18} className="cat-icon" />,
      skills: [
        { name: "MongoDB", logo: mongo, color: "#47A248" },
        { name: "MySQL", logo: mysql, color: "#00758F" },
        { name: "Firebase", logo: null, color: "#FFCA28" },
      ]
    },
    {
      title: "Tools & Protocols",
      icon: <Globe size={18} className="cat-icon" />,
      skills: [
        { name: "Git", logo: null, color: "#F05032" },
        { name: "GitHub", logo: null, color: "#ffffff" },
        { name: "REST APIs", logo: null, color: "#4a9eff" },
        { name: "Socket.IO", logo: null, color: "#00c0ff" },
      ]
    }
  ];

  return (
    <section className="tech-stack-section" id="skills">
      <div className="tech-container">
        
        {/* Left Column: Heading */}
        <div className="tech-left">
          <div className="mask-wrapper">
            <motion.span 
              className="section-label"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Capabilities
            </motion.span>
          </div>
          
          <div className="mask-wrapper">
            <motion.h2 
              className="tech-main-title"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
              My Tech Stack
            </motion.h2>
          </div>
          
          <motion.p 
            className="tech-desc"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            A selective collection of languages, frameworks, and development tools I use to build robust, scalable products.
          </motion.p>
        </div>
        
        {/* Right Column: Typographic Row List */}
        <motion.div 
          className="tech-right-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              className="tech-category-row"
              variants={categoryVariants}
            >
              <div className="category-header">
                {cat.icon}
                <h3>{cat.title}</h3>
              </div>
              <div className="skills-inline-list">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="skill-item"
                    style={{ "--hover-color": skill.color }}
                  >
                    {skill.logo ? (
                      <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    ) : (
                      <div className="skill-logo-placeholder">{skill.name.charAt(0)}</div>
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Card;
