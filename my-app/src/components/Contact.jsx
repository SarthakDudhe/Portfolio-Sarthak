import { useState } from "react";
import "./Contact.css"
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handlechange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    emailjs.send(
      "service_1jsj213",
      "template_ei4bx4o",
      formData,
      "2b_xgeJG1rqw9UmFp"
    )
    .then(() => {
      alert("Thank You For Your Message");
      setformData({
        name: "",
        email: "",
        feedback: ""
      });
    })
    .catch((error) => {
      alert("Error sending message: " + error);
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Column: Typographic Details */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mask-wrapper">
            <motion.span 
              className="section-label"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Connect
            </motion.span>
          </div>
          <div className="mask-wrapper" style={{ marginBottom: "20px" }}>
            <motion.h1 
              className="contact-title-minimal"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
              Start a Conversation
            </motion.h1>
          </div>
          <motion.p 
            className="contact-sub"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Have a project in mind, want to discuss software engineering opportunities, or simply say hello? Reach out.
          </motion.p>

          <div className="contact-details-minimal">
            <div className="contact-detail-row">
              <Mail className="contact-detail-icon" size={18} />
              <a href="mailto:sarthakdudhe79@gmail.com">sarthakdudhe79@gmail.com</a>
            </div>
            <div className="contact-detail-row">
              <MapPin className="contact-detail-icon" size={18} />
              <span>Dombivli, Maharashtra, India</span>
            </div>
          </div>

          <div className="social-links-minimal">
            <a href="https://linkedin.com/in/sarthak-dudhe-67155a327" target="_blank" rel="noopener noreferrer" className="social-link-item">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/SarthakDudhe" target="_blank" rel="noopener noreferrer" className="social-link-item">
              <Github size={20} />
            </a>
            <a href="mailto:sarthakdudhe79@gmail.com" className="social-link-item">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Underline Form */}
        <motion.form 
          className="contact-form-minimal"  
          onSubmit={handlesubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="form-group-minimal">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handlechange}
              value={formData.name}
              required
            />
            <span className="input-line"></span>
          </div>

          <div className="form-group-minimal">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handlechange}
              value={formData.email}
              required
            />
            <span className="input-line"></span>
          </div>

          <div className="form-group-minimal">
            <textarea
              name="feedback"
              placeholder="Your Message"
              value={formData.feedback}
              onChange={handlechange}
              required
              rows={4}
            />
            <span className="input-line"></span>
          </div>

          <button type="submit" className="submit-btn-minimal">
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;