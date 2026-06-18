import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import cbs from "../assets/CBSJAVA.png";
import prepgenie from "../assets/Prepgenie.png";
import chat from "../assets/Quickchat.png";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Cab Booking System",
    description:
      "A Java-based cab booking system that allows users to book cabs, track rides, and manage bookings efficiently.",
    image: cbs,
    tags: ["Core Java", "Java Swing", "MySQL"],
    liveLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    githubLink: "https://github.com/SarthakDudhe/CabBookingSystem",
    gradient: "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
  },
  {
    id: 2,
    title: "Prepgenie",
    description:
      "PrepGenie is a user-friendly platform that helps you prepare for interviews step by step. You can create your own practice sessions, choose different topics like algorithms or system design, and get questions in a clean and easy-to-use interface.",
    image: prepgenie,
    tags: ["React", "MongoDB", "Tailwindcss", "Express", "Node", "GeminiApi"],
    liveLink: "https://prep-genie-k3cd.vercel.app/",
    githubLink: "https://github.com/SarthakDudhe/PrepGenie",
    gradient: "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
  },
  {
    id: 3,
    title: "QuickChat - Chat Application",
    description:
      "Built a secure, real-time chat platform using Socket.IO with authentication and instant messaging. Developed RESTful APIs with Node.js/Express.js and integrated MongoDB for persistent message storage.",
    image: chat,
    tags: ["React", "MongoDB", "Tailwindcss", "Express", "Node"],
    liveLink: "https://chat-application-eight-wine.vercel.app/login",
    githubLink: "https://github.com/SarthakDudhe/ChatApplication",
    gradient: "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
  },
];

const Project = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth * 0.75;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <p className="projects-subtitle">
          Explore some of my recent works showcasing diverse technologies and designs.
        </p>
      </div>

      <div className="carousel-wrapper relative w-full flex items-center mx-auto">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-6 md:left-10 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md hidden sm:block"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="projects-scroll-container flex overflow-x-auto gap-12 py-10 w-full snap-x snap-mandatory scroll-smooth no-scrollbar px-[10vw] md:px-[15vw]"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="snap-center flex-shrink-0 overflow-visible py-4"
            >
              <CardContainer containerClassName="py-0 px-2 sm:px-4">
                <CardBody
                  className="project-card relative group/card w-[82vw] sm:w-[28rem] h-[430px] rounded-[30px] p-6 flex flex-col justify-between text-left overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  style={{
                    '--project-gradient': project.gradient,
                  }}
                >
                  <div>
                    {/* Title */}
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-bold text-white tracking-tight"
                    >
                      {project.title}
                    </CardItem>

                    {/* Tech Tags */}
                    <CardItem
                      translateZ="40"
                      className="flex flex-wrap gap-1.5 mt-2"
                    >
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-semibold tracking-wide uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>

                    {/* Image */}
                    <CardItem
                      translateZ="100"
                      rotateX={12}
                      rotateZ={-5}
                      className="w-full mt-4 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                    >
                      <img
                        src={project.image}
                        className="h-44 w-full object-cover rounded-xl group-hover/card:scale-[1.03] transition-transform duration-500"
                        alt={project.title}
                      />
                    </CardItem>
                  </div>

                  {/* Buttons */}
                  <CardItem
                    translateZ={30}
                    className="flex justify-between items-center w-full mt-6"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-neutral-400 dark:text-neutral-300 border border-white/10 hover:border-white/30 hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer w-[48%] text-center hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.35)] w-[48%] text-center hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-6 md:right-10 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md hidden sm:block"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Project;
