import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import machineLearning from "../assets/ML_Certificate.png"
import java from "../assets/Java.jpg"
import MySQL from "../assets/MySQL.jpg"
import "./Achieve.css";

const certificateData = [
  {
    id: 1,
    title: "Machine Learning",
    issuer: "SimpliLearn",
    date: "2 Nov 2025",
    description:
      "Gained a strong foundation in Machine Learning and automation.",
    image: machineLearning,
  },
  {
    id: 2,
    title: "Java Programming",
    issuer: "Success Class",
    date: "2024-25",
    description:
      "Completed a focused training in Core Java, gaining hands-on experience with fundamental programming constructs, control flow, data types, and exception handling. Developed a strong grasp of Object-Oriented Programming principles including encapsulation, inheritance, polymorphism, and abstraction.",
    image: java,
  },
  {
    id: 3,
    title: "MySQL",
    issuer: "Udemy",
    date: "6 Nov 2025",
    description:
      "Completed a comprehensive MySQL course covering database design, querying, joins, indexing, and CRUD operations. Gained hands-on experience in managing relational data and optimizing SQL performance.",
    image: MySQL,
  },
];

function TiltCard({ cert, index, onView }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 5);
    y.set(offsetY / 5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="achievement-card"
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image">
        <img src={cert.image} alt={`${cert.title} Certificate`} loading="lazy" />
      </div>
      <div className="card-content">
        <h3>{cert.title}</h3>
        <p className="issuer">
          <span>Issued by</span> {cert.issuer}
        </p>
        <p className="date">{cert.date}</p>
        <p className="description">{cert.description}</p>
        <button className="view-cert-btn" onClick={() => onView(cert)}>
          View Certificate <ExternalLink size={16} />
        </button>
      </div>
    </motion.div>
  );
}

function Achieve() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="achievements-container" id="achievements">
      <motion.h1
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        My Achievements & Certifications
      </motion.h1>

      <div className="achievements-grid">
        {certificateData.map((cert, index) => (
          <TiltCard
            key={cert.id}
            cert={cert}
            index={index}
            onView={setSelectedCert}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close Certificate"
              >
                <X size={22} />
              </button>
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} Certificate`}
                className="modal-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Achieve;
