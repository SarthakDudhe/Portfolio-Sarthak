import "./Card.css"
import { Code2, Database, Globe, Server } from 'lucide-react';

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
        <h2>My Tech Stack</h2>
        <div className="skills-container">
          <div className="skill-card">
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
          </div>
  
          <div className="skill-card">
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
          </div>
  
          <div className="skill-card">
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
          </div>
  
          <div className="skill-card">
            <Globe size={48} />
            <h3> Tools</h3>
            <div className="skills">
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card;

