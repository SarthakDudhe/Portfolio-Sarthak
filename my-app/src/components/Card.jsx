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

const Card = () => {
  return (
   <div className="tech-stack" id="skills">
        <motion.div 
          className="tech-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>My Tech Stack</h2>
          <p className="tech-subtitle">Technologies and tools I use to bring designs and products to life</p>
        </motion.div>
        
        <div className="skills-container">
          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Globe size={48} />
            <h3> Tools</h3>
            <div className="skills">
              <span>Git</span>
            </div>
          </motion.div>
        </div>
      </div>
  )
}

export default Card;

