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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Card = () => {
  return (
   <div className="tech-stack" id="skills">
        <motion.div 
          className="tech-header"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>My Tech Stack</h2>
          <p className="tech-subtitle">Technologies and tools I use to bring designs and products to life</p>
        </motion.div>
        
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div 
            className="skill-card"
            variants={itemVariants}
          >
            <Code2 size={48} />
            <h3>Frontend Development</h3>
            <div className="skills">
              <span>
                <img src={html} alt="HTML" className="tech-logo" />
                HTML
              </span>
              <span>
                <img src={css} alt="CSS" className="tech-logo" />
                CSS
              </span>
              <span>
                <img src={js} alt="JavaScript" className="tech-logo" />
                JavaScript
              </span>
              <span>
                <img src={react} alt="React" className="tech-logo" />
                React
              </span>
            </div>
          </motion.div>
  
          <motion.div 
            className="skill-card"
            variants={itemVariants}
          >
            <Server size={48} />
            <h3>Backend Development</h3>
            <div className="skills">
              <span>
                <img src={node} alt="Node.js" className="tech-logo" />
                Node.js
              </span>
              <span>Express</span>
              <span>
                <img src={python} alt="Python" className="tech-logo" />
                Python
              </span>
              <span>
                <img src={java} alt="Java" className="tech-logo" />
                Java
              </span>
            </div>
          </motion.div>
  
          <motion.div 
            className="skill-card"
            variants={itemVariants}
          >
            <Database size={48} />
            <h3>Databases</h3>
            <div className="skills">
              <span>
                <img src={mongo} alt="MongoDB" className="tech-logo" />
                MongoDB
              </span>
              <span>
                <img src={mysql} alt="MySQL" className="tech-logo" />
                MySQL
              </span>
              <span>Firebase</span>
            </div>
          </motion.div>
  
          <motion.div 
            className="skill-card"
            variants={itemVariants}
          >
            <Globe size={48} />
            <h3> Tools</h3>
            <div className="skills">
              <span>Git</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
  )
}

export default Card;

