import { Github, Linkedin, Mail } from "lucide-react";
import "./Footer.css";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Credentials", "#achievements"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span>SD</span>
          <h2>Sarthak Dudhe</h2>
          <p>Full-stack developer focused on polished frontend experiences, reliable APIs, and product-minded engineering.</p>
          <div className="footer-socials">
            <a href="https://github.com/SarthakDudhe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/sarthak-dudhe-67155a327" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sarthakdudhe79@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Profile</h3>
          <p>Dombivli, Maharashtra</p>
          <p>Open to internships and frontend-heavy full-stack roles.</p>
          <a href="mailto:sarthakdudhe79@gmail.com">sarthakdudhe79@gmail.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Portfolio designed and built with React.</span>
        <span>{new Date().getFullYear()} Sarthak Dudhe. All rights reserved.</span>
      </div>
    </footer>
  );
}
