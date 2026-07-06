import { useRef } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import mypic from "../assets/bluepic.png";
import "./About.css";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const statItems = [
  {
    icon: GraduationCap,
    value: "8.99",
    label: "Computer Engineering CGPA",
    detail: "Academic foundation with a focus on software systems.",
  },
  {
    icon: Code2,
    value: "MERN",
    label: "Full-stack development",
    detail: "React, Node, Express, MongoDB, APIs, and product UI.",
  },
  {
    icon: BriefcaseBusiness,
    value: "Intern",
    label: "Sapphire Infocom",
    detail: "Software Engineer Internship, Aug 14 - Nov 13, 2025.",
  },
];

export default function About() {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [8, -8]);
  const rotateY = useTransform(x, [-120, 120], [-8, 8]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionSection
      className="about-section"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="about-container">
        <MotionDiv
          className="about-portrait-column"
          variants={{
            hidden: { opacity: 0, y: 48 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          <MotionDiv
            ref={cardRef}
            className="about-image-card"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="portrait-meta">
              <span>Available for frontend/full-stack roles</span>
              <span>Dombivli, India</span>
            </div>
            <img src={mypic} alt="Sarthak Dudhe" className="profile-img" loading="eager" decoding="async" fetchPriority="high" />
          </MotionDiv>
        </MotionDiv>

        <div className="about-content-column">
          <div className="mask-wrapper">
            <MotionDiv
              className="section-label"
              variants={{
                hidden: { y: "120%" },
                visible: { y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              About
            </MotionDiv>
          </div>

          <div className="mask-wrapper">
            <MotionH1
              className="about-headline"
              variants={{
                hidden: { y: "115%" },
                visible: { y: 0, transition: { duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              I design and engineer <span className="gradient-text">full-stack interfaces</span> that feel fast, useful, and polished.
            </MotionH1>
          </div>

          <MotionP
            className="about-copy"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            I am a Computer Engineering student and full-stack developer working across React, Node, Express, MongoDB, and applied AI workflows. During my Software Engineer Internship at Sapphire Infocom, I built APIs, improved system performance, and translated product requirements into clean, scalable web experiences.
          </MotionP>

          <MotionDiv
            className="about-proof-grid"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delayChildren: 0.25, staggerChildren: 0.1 } },
            }}
          >
            {statItems.map((item) => {
              const Icon = item.icon;
              return (
                <MotionDiv
                  className="about-proof-card"
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <Icon size={18} />
                  <span className="proof-value">{item.value}</span>
                  <span className="proof-label">{item.label}</span>
                  <p>{item.detail}</p>
                </MotionDiv>
              );
            })}
          </MotionDiv>

          <MotionDiv
            className="about-actions"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.38, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <a
              href="https://linkedin.com/in/sarthak-dudhe-67155a327"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button"
            >
              Connect on LinkedIn <ArrowUpRight size={17} />
            </a>
            <a href="#projects" className="text-link">
              View selected work
            </a>
          </MotionDiv>

          <div className="about-running-note">
            <span>Focus</span>
            <strong>Interactive web products, AI workflows, and production-ready React interfaces.</strong>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
