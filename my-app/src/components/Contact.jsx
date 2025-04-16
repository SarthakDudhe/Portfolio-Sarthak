import { useState } from "react";
import "./Contact.css"
import { Github, Linkedin, Mail, Twitter,Phone,MapPin,Clock } from 'lucide-react';
import emailjs from "@emailjs/browser";
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
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
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
              {/* <div className="contact-item">
                <Clock className="contact-icon" />
                <div>
                  <span className="contact-label">Working Hours:</span>
                  <span>Mon - Fri, 9AM - 6PM PST</span>
                </div>
              </div> */}
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
          </div>

          <form className="contact-form"  onSubmit={handlesubmit}>
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
              {/* <input
                type="text"
                name="subject"
                placeholder="Subject"
                
             
                required
              /> */}
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
          </form>
        </div>
      </section>

    )
}


export default Contact;