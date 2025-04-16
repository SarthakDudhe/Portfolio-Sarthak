import "./About.css"
import mypic from "../assets/bluepic.png"
import 'animate.css';
export default function About() {

    return <div className="about-section"  id="about">
        <span id="title"><h1>ABOUT ME</h1></span>
<div className="part1">
<div className="about-card">
<img src={mypic} alt="" id="my-img" />
</div>

<div className="personal-info">

<div className="twocard">
  <div className="education">
    <div className="icon">
      
    </div>

    <h1>Experience</h1>
</div>
<div className="education">
<div className="icon">
       
    </div>
    <h1>Education</h1>
    <p>Computer Engineering</p>
    <p>Mumbai University</p>
</div>  
</div>

<div className="speech">
    <p>Hi, I'm Sarthak Dudhe, a Computer Engineering student at Datta Meghe College of Engineering. Throughout my academic journey, I've developed a solid understanding of computer science fundamentals, including programming languages, data structures, and algorithms. I'm particularly passionate about MERN stack development, with a focus on building scalable and efficient web applications. Additionally, I'm interested in Java development.Take a look around my portfolio to see my projects, achievements, and experiences.</p>
</div>

</div>
</div>




    </div>
    
}