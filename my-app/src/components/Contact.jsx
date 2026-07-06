import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionForm = motion.form;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/sarthak-dudhe-67155a327", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/SarthakDudhe", label: "GitHub" },
  { icon: Mail, href: "mailto:sarthakdudhe79@gmail.com", label: "Email" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Sending message...");

    emailjs
      .send("service_1jsj213", "template_ei4bx4o", formData, "2b_xgeJG1rqw9UmFp")
      .then(() => {
        setFormStatus("Message sent. Thank you for reaching out.");
        setFormData({ name: "", email: "", feedback: "" });
      })
      .catch((error) => {
        setFormStatus("Message could not be sent. Please email me directly.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <MotionSection
      className="contact-section"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="contact-container">
        <MotionDiv
          className="contact-left"
          variants={{
            hidden: { opacity: 0, y: 34 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          <div className="section-label">Contact</div>
          <MotionH2
            className="contact-title"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Let us build something <span className="gradient-text">sharp and useful.</span>
          </MotionH2>
          <MotionP
            className="contact-sub"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            I am open to internships, frontend-heavy full-stack roles, and product engineering opportunities where polished UI and reliable systems both matter.
          </MotionP>

          <div className="contact-detail-panel">
            <a href="mailto:sarthakdudhe79@gmail.com">
              <Mail size={18} />
              <span>sarthakdudhe79@gmail.com</span>
            </a>
            <div>
              <MapPin size={18} />
              <span>Dombivli, Maharashtra, India</span>
            </div>
          </div>

          <div className="social-links-minimal">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={social.label}>
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </MotionDiv>

        <MotionForm
          className="contact-form"
          onSubmit={handleSubmit}
          variants={{
            hidden: { opacity: 0, y: 34 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          <label className="field-group">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
            <span>Your name</span>
          </label>

          <label className="field-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
            <span>Email address</span>
          </label>

          <label className="field-group message">
            <textarea name="feedback" value={formData.feedback} onChange={handleChange} required placeholder=" " rows={5} />
            <span>Project, role, or message</span>
          </label>

          <div className="form-footer">
            <button type="submit">
              Send message <Send size={16} />
            </button>
            {formStatus && <p>{formStatus}</p>}
          </div>
        </MotionForm>
      </div>
    </MotionSection>
  );
}
