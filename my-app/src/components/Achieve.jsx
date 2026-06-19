import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Calendar, Award } from "lucide-react";
import machineLearning from "../assets/ML_Certificate.png";
import javaCert from "../assets/Java.jpg";
import mysqlCert from "../assets/MySQL.jpg";
import "./Achieve.css";

const certificationData = [
  {
    id: 1,
    title: "Full-Stack Web Development with MERN",
    issuer: "Coursera",
    date: "2025",
    description: "Comprehensive certification covering React, Node.js, Express, MongoDB, and frontend/backend integration principles.",
    image: machineLearning, // using available certificate image as visual preview
  },
  {
    id: 2,
    title: "Java Programming Certification",
    issuer: "IBM SkillsBuild",
    date: "2024",
    description: "Focus on object-oriented programming paradigms, memory management, exception handling, and data structures in Java.",
    image: javaCert,
  },
  {
    id: 3,
    title: "Machine Learning Certification",
    issuer: "SimpliLearn",
    date: "Nov 2025",
    description: "Hands-on foundation in statistical modeling, supervised/unsupervised algorithms, and data preprocessing pipelines.",
    image: machineLearning,
  },
  {
    id: 4,
    title: "MySQL Database Administrator",
    issuer: "Udemy",
    date: "Nov 2025",
    description: "Advanced relational database structures, database normalization, complex query indexing, and schema optimization.",
    image: mysqlCert,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Achieve() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="achieve-section" id="achievements">
      <div className="achieve-container">
        
        {/* Header */}
        <motion.div
          className="achieve-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Credentials</span>
          <h1 className="achieve-title">Certifications</h1>
          <p className="achieve-desc">
            Academic achievements, industry certifications, and structured coursework representing my continuous learning path.
          </p>
        </motion.div>

        {/* Minimal Timeline List */}
        <motion.div
          className="achieve-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="timeline-spine"></div>

          {certificationData.map((cert) => (
            <motion.div
              key={cert.id}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-date">
                    <Calendar size={13} />
                    {cert.date}
                  </span>
                  <span className="timeline-issuer">
                    <Award size={13} />
                    {cert.issuer}
                  </span>
                </div>
                
                <h3 className="timeline-item-title">{cert.title}</h3>
                <p className="timeline-item-desc">{cert.description}</p>
                
                <button
                  className="view-credentials-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  View Certificate <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="cert-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="cert-modal-body"
                initial={{ scale: 0.93, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="cert-modal-header">
                  <div>
                    <h2>{selectedCert.title}</h2>
                    <p>Issued by {selectedCert.issuer} &bull; {selectedCert.date}</p>
                  </div>
                  <button
                    className="cert-modal-close"
                    onClick={() => setSelectedCert(null)}
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="cert-modal-image-wrap">
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} Certificate`}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Achieve;
