import { useState } from "react";
import "./Contact.css"
import { Github, Linkedin, Mail, Twitter,Phone,MapPin,Clock } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact()
{
const [formData,setformData] =useState({
  name:"",
  email:"",
  feedback:"",
})
const handlechange = (event)=>{
  setformData({...formData,[event.target.name]:event.target.value})
}
const handlesubmit=(event)=>{
  event.preventDefault();
  emailjs.send(
    "service_1jsj213",//service id
    "template_ei4bx4o",//template id
    formData,//from ka data
    "2b_xgeJG1rqw9UmFp",//public key
  )
  .then(()=>{
    alert("Thank You For Your Feedback");
    setformData({
      name:"",
      email:"",
      feedback:""
    });
  })
  .catch((error)=>{alert("EmailJs Error : ",error)})
  .finally(()=>{
    setformData({
      name:"",
      email:"",
      feedback:""
    })
  })
}



    return(
<section className="contact-section" id="contact">
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <span className="contact-label">Email:</span>
                  <a href="mailto:contact@example.com">sarthakdudhe79@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <span className="contact-label">Phone:</span>
                  <a href="tel:+1234567890"></a>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <span className="contact-label">Location:</span>
                  <span>Dombivli, Thane</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github />
              </a>
              <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Mail />
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"  
            onSubmit={handlesubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
               onChange={handlechange}
               value={formData.name}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handlechange}
                value={formData.email}
                required
              />
            </div>
            <div className="form-group">
            </div>
            <div className="form-group">
              <input
              type="text"
                name="feedback"
                placeholder="Your Message"
                value={formData.feedback}
                onChange={handlechange}
                required
              ></input>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

    )
}


export default Contact;