import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "./Footer.css";
import { fadeUp, sectionReveal, staggerContainer } from "../lib/motion";

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
    <motion.footer className="footer" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
      <motion.div className="footer-content" variants={staggerContainer(0.06, 0.08)}>
        <motion.div className="footer-brand" variants={fadeUp(0)}>
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
        </motion.div>

        <motion.div className="footer-column" variants={fadeUp(0)}>
          <h3>Navigation</h3>
          <ul>
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="footer-column" variants={fadeUp(0)}>
          <h3>Profile</h3>
          <p>Dombivli, Maharashtra</p>
          <p>Open to internships and frontend-heavy full-stack roles.</p>
          <a href="mailto:sarthakdudhe79@gmail.com">sarthakdudhe79@gmail.com</a>
        </motion.div>
      </motion.div>

      <motion.div className="footer-bottom" variants={fadeUp(0.1)}>
        <span>Portfolio designed and built with React.</span>
        <span>{new Date().getFullYear()} Sarthak Dudhe. All rights reserved.</span>
      </motion.div>
    </motion.footer>
  );
}
