import "./Achieve.css"
import React from 'react';
import { ExternalLink } from 'lucide-react';
function Achieve()
{
    return(  <div className="achievements-container" id="achievements">
          <h1>My Achievements & Certifications</h1>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <h3>Python</h3>
              <p className="issuer">Udemy</p>
              <p className="date">2024</p>
              <p className="description">Demonstrated foundational understanding of Python.</p>
              <a href="#" className="view-cert-btn">
                View Certificate
                <ExternalLink size={16} />
              </a>
            </div>
    
            <div className="achievement-card">
              <h3>HTML,CSS AND JAVASCRIPT</h3>
              <p className="issuer">CSI Bootcamp</p>
              <p className="date">2024</p>
              <p className="description">Mastered modern frontend development practices and technologies.</p>
              <a href="#" className="view-cert-btn">
                View Certificate
                <ExternalLink size={16} />
              </a>
            </div>
    
            <div className="achievement-card">
              <h3>C++</h3>
              <p className="issuer">Udemy</p>
              <p className="date">2024</p>
              <p className="description">Demonstrated foundational understanding of C++.</p>
              <a href="#" className="view-cert-btn">
                View Certificate
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
        )
}
export default Achieve