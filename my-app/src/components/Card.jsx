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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 15 },
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
      icon: <Code2 size={20} className="cat-icon" />,
      skills: [
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "JavaScript", logo: js },
        { name: "React.js", logo: react },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={20} className="cat-icon" />,
      skills: [
        { name: "Node.js", logo: node },
        { name: "Express.js", logo: null },
        { name: "Python", logo: python },
        { name: "Java", logo: java },
      ]
    },
    {
      title: "Databases & Integration",
      icon: <Database size={20} className="cat-icon" />,
      skills: [
        { name: "MongoDB", logo: mongo },
        { name: "MySQL", logo: mysql },
        { name: "Firebase", logo: null },
      ]
    },
    {
      title: "Tools & Protocols",
      icon: <Globe size={20} className="cat-icon" />,
      skills: [
        { name: "Git", logo: null },
        { name: "GitHub", logo: null },
        { name: "REST APIs", logo: null },
        { name: "Socket.IO", logo: null },
      ]
    }
  ];

  return (
    <section className="tech-stack-section" id="skills">
      <div className="tech-container">
        
        {/* Left Column: Title & Intro */}
        <motion.div 
          className="tech-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Skills & Tech</span>
          <h2 className="tech-main-title">My Tech Stack</h2>
          <p className="tech-desc">
            A selective collection of languages, frameworks, and development tools I use to build robust, scalable products.
          </p>
        </motion.div>
        
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
                  <div key={sIdx} className="skill-item">
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
