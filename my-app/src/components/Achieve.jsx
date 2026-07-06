import { useRef, useState } from "react";
import { Award, Calendar, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import machineLearning from "../assets/ML_Certificate.png";
import javaCert from "../assets/Java.jpg";
import mysqlCert from "../assets/MySQL.jpg";
import "./Achieve.css";
import { fadeUp, sectionReveal, staggerContainer } from "../lib/motion";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const certificationData = [
  {
    id: 1,
    title: "Full-Stack Web Development with MERN",
    issuer: "Coursera",
    date: "2025",
    description: "Structured full-stack coursework covering React, Node.js, Express, MongoDB, and production-minded integration patterns.",
    image: machineLearning,
  },
  {
    id: 2,
    title: "Java Programming Certification",
    issuer: "IBM SkillsBuild",
    date: "2024",
    description: "Object-oriented programming, exception handling, memory fundamentals, and data structure implementation in Java.",
    image: javaCert,
  },
  {
    id: 3,
    title: "Machine Learning Certification",
    issuer: "SimpliLearn",
    date: "Nov 2025",
    description: "Practical foundation in statistical modeling, supervised and unsupervised algorithms, and preprocessing pipelines.",
    image: machineLearning,
  },
  {
    id: 4,
    title: "MySQL Database Administrator",
    issuer: "Udemy",
    date: "Nov 2025",
    description: "Relational schema design, normalization, indexing concepts, and database administration workflows.",
    image: mysqlCert,
  },
];

export default function Achieve() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCert, setActiveCert] = useState(certificationData[0]);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 55%"],
  });
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <MotionSection
      className="achieve-section"
      id="achievements"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={sectionReveal}
    >
      <div className="achieve-container">
        <div className="achieve-header">
          <div>
            <div className="section-label">Credentials</div>
            <MotionH2 className="achieve-title" variants={fadeUp(0.06)}>
              Learning milestones with <span className="gradient-text">proof you can inspect.</span>
            </MotionH2>
          </div>
          <MotionP className="achieve-desc" variants={fadeUp(0.12)}>
            Certifications and structured coursework that support the engineering side of my portfolio: backend fundamentals, databases, Java, full-stack development, and ML concepts.
          </MotionP>
        </div>

        <div className="achieve-layout">
          <MotionDiv
            className="achieve-timeline"
            ref={timelineRef}
            variants={staggerContainer(0.12, 0.08)}
          >
            <motion.div className="timeline-spine-fill" style={{ scaleY: spineScale }} />

            {certificationData.map((cert, index) => (
              <MotionDiv
                className={`timeline-item ${activeCert.id === cert.id ? "active" : ""}`}
                key={cert.id}
                variants={fadeUp(0)}
                onMouseEnter={() => setActiveCert(cert)}
                onFocus={() => setActiveCert(cert)}
              >
                <span className="timeline-marker">{String(index + 1).padStart(2, "0")}</span>

                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span>
                      <Calendar size={13} />
                      {cert.date}
                    </span>
                    <span>
                      <Award size={13} />
                      {cert.issuer}
                    </span>
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                  <button type="button" onClick={() => setSelectedCert(cert)}>
                    View certificate <ExternalLink size={14} />
                  </button>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>

          <div className="certificate-preview-panel">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={activeCert.id}
                className="certificate-preview-inner"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={activeCert.image} alt={`${activeCert.title} preview`} />
                <div>
                  <span>{activeCert.issuer}</span>
                  <strong>{activeCert.title}</strong>
                </div>
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <MotionDiv
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <MotionDiv
              className="cert-modal-body"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div>
                  <span>{selectedCert.issuer} - {selectedCert.date}</span>
                  <h2>{selectedCert.title}</h2>
                </div>
                <button type="button" onClick={() => setSelectedCert(null)} aria-label="Close certificate preview">
                  <X size={20} />
                </button>
              </div>
              <div className="cert-modal-image-wrap">
                <img src={selectedCert.image} alt={`${selectedCert.title} certificate`} />
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionSection>
  );
}
