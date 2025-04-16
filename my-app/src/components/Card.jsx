import "./Card.css"
import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

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
import styled from 'styled-components';


const Card = () => {
  return (
   <div className="tech-stack"  id="skills">
        <h2>My Tech Stack</h2>
        <div className="skills-container">
          <div className="skill-card">
            <Code2 size={48} />
            <h3>Frontend Development</h3>
            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              
            </div>
          </div>
  
          <div className="skill-card">
            <Server size={48} />
            <h3>Backend Development</h3>
            <div className="skills">
              <span>Node.js</span>
              <span>Express</span>
              <span>Python</span>
              <span>Java</span>
            </div>
          </div>
  
          <div className="skill-card">
            <Database size={48} />
            <h3>Databases</h3>
            <div className="skills">
              <span>MongoDB</span>
              <span>MySQL</span>
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
  
          {/* <div className="skill-card">
            <Layout size={48} />
            <h3>UI/UX Design</h3>
            <div className="skills">
              <span>Figma</span>
              <span>Adobe XD</span>
              <span>Photoshop</span>
            </div>
          </div> */}
  
          {/* <div className="skill-card">
            <Smartphone size={48} />
            <h3>Mobile Development</h3>
            <div className="skills">
              <span>React Native</span>
              <span>Flutter</span>
              <span>iOS</span>
              <span>Android</span>
            </div>

          </div> */}
        </div>
      </div>


)
  }

export default Card;

