import { useRef } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import mypic from "../assets/bluepic.png";
import "./About.css";
import { fadeUp, maskReveal, sectionReveal, staggerContainer } from "../lib/motion";

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
      viewport={{ once: true, amount: 0.22 }}
      variants={sectionReveal}
    >
      <div className="about-container">
        <MotionDiv
          className="about-portrait-column"
          variants={fadeUp(0.08)}
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
            <MotionDiv className="section-label" variants={maskReveal}>
              About
            </MotionDiv>
          </div>

          <MotionDiv className="about-chip-row" variants={fadeUp(0.06)}>
            <span>Frontend systems</span>
            <span>Product UI</span>
            <span>Motion details</span>
          </MotionDiv>

          <div className="mask-wrapper">
            <MotionH1
              className="about-headline"
              variants={maskReveal}
            >
              I design and engineer <span className="gradient-text">full-stack interfaces</span> that feel fast, useful, and polished.
            </MotionH1>
          </div>

          <MotionP
            className="about-copy"
            variants={fadeUp(0.12)}
          >
            I am a Computer Engineering student and full-stack developer working across React, Node, Express, MongoDB, and applied AI workflows. During my Software Engineer Internship at Sapphire Infocom, I built APIs, improved system performance, and translated product requirements into clean, scalable web experiences.
          </MotionP>

          <MotionDiv
            className="about-proof-grid"
            variants={staggerContainer(0.16, 0.08)}
          >
            {statItems.map((item) => {
              const Icon = item.icon;
              return (
                <MotionDiv
                  className="about-proof-card"
                  key={item.label}
                  variants={fadeUp(0)}
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
            variants={fadeUp(0.24)}
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

          <MotionDiv className="about-running-note" variants={fadeUp(0.3)}>
            <span>Focus</span>
            <strong>Interactive web products, AI workflows, and production-ready React interfaces.</strong>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
