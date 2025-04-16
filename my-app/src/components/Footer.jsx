import "./Footer.css"
import React from 'react';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
function Footer()
{
return(
    <div className="foot">
   
    
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section main-info">
          <h2>Sarthak Dudhe</h2>
          <p>Creative Developer </p>
          <div className="social-links">
            <a href="https://github.com" aria-label="GitHub"><Github size={24} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={24} /></a>
            
            <a href="https://mail.google.com" aria-label="Email"><Mail size={24} /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          {/* <h3>Services</h3>
          <ul>
            <li><a href="#web-development">Web Development</a></li>
            <li><a href="#ui-design">UI Design</a></li>
            
          </ul> */}
        </div>
        
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Dombivli,Thane</p>
          <p>sarthakdudhe79@gmail.com</p>
          <p>Phone No. </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>&copy; {new Date().getFullYear()} Sarthak Dudhe. All rights reserved.</p>
      </div>
    </footer>
  </div>



)
}

export default Footer;