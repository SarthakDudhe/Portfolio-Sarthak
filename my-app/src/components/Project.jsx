import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Layers3 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import cbs from "../assets/CBSJAVA.png";
import chat from "../assets/Quickchat.png";
import spark from "../assets/Spark.png";
import feasto from "../assets/Feasto.png";
import insider from "../assets/InsiderJobs.png";
import "./Project.css";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const projects = [
  {
    id: 1,
    num: "01",
    title: "Spark - AI Workspace",
    category: "Full-Stack AI Platform",
    outcome: "Career workspace for resume intelligence",
    description: "An AI-powered career workspace for resume management, job matching, outreach content generation, and automated PDF feedback reports.",
    image: spark,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Gemini AI"],
    liveLink: "https://spark-ai-beige.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/Spark--AI-Powered-Career-Workspace",
  },
  {
    id: 2,
    num: "02",
    title: "InsiderJobs",
    category: "Job Search Command Center",
    outcome: "Focused portal for candidates and recruiters",
    description: "A comprehensive career portal with verified listings, recruiter dashboard utilities, and application status tracking.",
    image: insider,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://insider-jobs-ecru.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/InsiderJobs",
  },
  {
    id: 3,
    num: "03",
    title: "Feasto",
    category: "Food Ordering Platform",
    outcome: "Full-stack ordering with secure checkout",
    description: "A food delivery application with authentication, Stripe payment processing, cart flow, and clean checkout states.",
    image: feasto,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "https://feasto-delta.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/Feasto-Food-Order-Platform",
  },
  {
    id: 4,
    num: "04",
    title: "QuickChat App",
    category: "Real-time Messaging",
    outcome: "Socket-based communication experience",
    description: "A secure instant messaging platform with Socket.IO communication, JWT authorization, and persistent chat archives.",
    image: chat,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveLink: "https://chat-application-eight-wine.vercel.app/login",
    githubLink: "https://github.com/SarthakDudhe/ChatApplication",
  },
  {
    id: 5,
    num: "05",
    title: "Cab Booking System",
    category: "Desktop Application",
    outcome: "Java booking workflow and ride records",
    description: "A Java Swing booking system using database architecture for passenger dispatching, ride logs, and desktop UI workflows.",
    image: cbs,
    tags: ["Core Java", "Java Swing", "MySQL"],
    liveLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    githubLink: "https://github.com/SarthakDudhe/CabBookingSystem",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
};

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <MotionSection
      className="projects-section"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="projects-container">
        <div className="projects-header">
          <div>
            <div className="section-label">Selected works</div>
            <MotionH2 className="projects-title" variants={reveal}>
              Case-study style builds with <span className="gradient-text">real product surfaces.</span>
            </MotionH2>
          </div>
          <MotionP className="projects-desc" variants={reveal}>
            A focused selection of full-stack products, AI workflows, real-time features, payment flows, and desktop systems. Hover or tap a project to inspect the build.
          </MotionP>
        </div>

        <div className="projects-showcase-grid">
          <MotionDiv
            className="projects-index"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {projects.map((project, index) => (
              <MotionDiv
                key={project.id}
                className={`project-index-row ${index === activeIndex ? "active" : ""}`}
                variants={reveal}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setActiveIndex(index);
                }}
              >
                <span className="project-index-num">{project.num}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.outcome}</p>
                </div>
                <ArrowUpRight size={20} />
              </MotionDiv>
            ))}
          </MotionDiv>

          <div className="project-case-study">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={activeProject.id}
                className="case-study-card"
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.985 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="case-media">
                  <img src={activeProject.image} alt={`${activeProject.title} interface preview`} />
                  <span className="case-floating-label">
                    <Layers3 size={15} />
                    {activeProject.category}
                  </span>
                </div>

                <div className="case-body">
                  <div className="case-kicker">{activeProject.num} / Featured system</div>
                  <h3>{activeProject.title}</h3>
                  <p>{activeProject.description}</p>

                  <div className="case-tags">
                    {activeProject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="case-actions">
                    <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> Source
                    </a>
                    <a className="primary" href={activeProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={15} /> Live demo
                    </a>
                  </div>
                </div>
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>

        <div className="projects-mobile-list">
          {projects.map((project) => (
            <MotionDiv className="project-mobile-card" key={project.id} variants={reveal}>
              <div className="project-mobile-image">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
              <div className="project-mobile-body">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-mobile-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-mobile-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={15} /> Live
                  </a>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
