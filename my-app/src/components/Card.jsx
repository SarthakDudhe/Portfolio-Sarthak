import { Code2, Database, GitBranch, Layers3, Server, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import html from "../assets/htmllogo.png";
import css from "../assets/csslogo.png";
import js from "../assets/javascriptlogo.png";
import java from "../assets/javalogo.png";
import mongo from "../assets/mongodblogo.png";
import mysql from "../assets/mysqllogo.png";
import node from "../assets/nodelogo.png";
import python from "../assets/pythonlogo.png";
import react from "../assets/react.svg";
import "./Card.css";
import { fadeUp, sectionReveal, staggerContainer } from "../lib/motion";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Responsive interfaces, motion systems, component architecture, and product polish.",
    skills: [
      { name: "HTML", logo: html, color: "#E34F26" },
      { name: "CSS", logo: css, color: "#1572B6" },
      { name: "JavaScript", logo: js, color: "#F7DF1E" },
      { name: "React.js", logo: react, color: "#61DAFB" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "APIs, authentication flows, data handling, server logic, and performance-minded endpoints.",
    skills: [
      { name: "Node.js", logo: node, color: "#339933" },
      { name: "Express.js", logo: null, color: "#f7f8fb" },
      { name: "Python", logo: python, color: "#3776AB" },
      { name: "Java", logo: java, color: "#f89820" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Schema design, relational data, document storage, and query-first thinking.",
    skills: [
      { name: "MongoDB", logo: mongo, color: "#47A248" },
      { name: "MySQL", logo: mysql, color: "#00758F" },
      { name: "Firebase", logo: null, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & APIs",
    icon: GitBranch,
    description: "Version control, real-time features, REST integration, and deployment-oriented workflows.",
    skills: [
      { name: "Git", logo: null, color: "#F05032" },
      { name: "GitHub", logo: null, color: "#f7f8fb" },
      { name: "REST APIs", logo: null, color: "#78aaff" },
      { name: "Socket.IO", logo: null, color: "#78d8ff" },
    ],
  },
];

export default function Card() {
  return (
    <MotionSection
      className="tech-stack-section"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
    >
      <div className="tech-container">
        <div className="tech-editorial">
          <div className="section-label">Capabilities</div>
          <MotionH2 className="tech-main-title" variants={fadeUp(0.06)}>
            A practical stack for building <span className="gradient-text">complete web products.</span>
          </MotionH2>
          <MotionP className="tech-desc" variants={fadeUp(0.12)}>
            I work across the product surface and the API layer, with a preference for clean interfaces, readable systems, and interaction details that make software feel finished.
          </MotionP>

          <MotionDiv className="tech-system-note" variants={fadeUp(0.18)}>
            <Sparkles size={18} />
            <span>Design sense plus engineering execution - the useful overlap for frontend-heavy full-stack work.</span>
          </MotionDiv>
        </div>

        <MotionDiv className="capability-grid" variants={staggerContainer(0.16, 0.08)}>
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <MotionDiv
                className="capability-panel"
                variants={fadeUp(0)}
                key={category.title}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className="capability-panel-top">
                  <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="capability-icon">
                    <Icon size={20} />
                  </span>
                </div>

                <h3>{category.title}</h3>
                <p>{category.description}</p>

                <div className="skills-inline-list">
                  {category.skills.map((skill) => (
                    <motion.div
                      className="skill-item"
                      key={skill.name}
                      style={{ "--hover-color": skill.color }}
                      whileHover={{ scale: 1.04 }}
                    >
                      {skill.logo ? (
                        <img src={skill.logo} alt="" className="skill-logo" />
                      ) : (
                        <span className="skill-logo-placeholder">{skill.name.charAt(0)}</span>
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </MotionDiv>
            );
          })}
        </MotionDiv>

        <div className="tech-bottom-strip">
          <Layers3 size={17} />
          <span>Frontend polish</span>
          <span>API thinking</span>
          <span>Database fundamentals</span>
          <span>Deployment-ready structure</span>
        </div>
      </div>
    </MotionSection>
  );
}
