import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
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
              className="project-card-container relative snap-center flex-shrink-0 py-8 px-4 group overflow-visible isolate"
            >
              {/* LAYER 1 — MULTICOLOR GLOW (behind card) */}
              <div
                className="project-glow"
                style={{
                  background: project.gradient,
                }}
              />

              {/* LAYER 2 — GRADIENT BORDER & LAYER 3 — CARD SURFACE */}
              <div
                className="project-card"
                style={{
                  '--project-gradient': project.gradient,
                }}
              >
                {/* Top Section: Image */}
                <div className="project-card-image-wrapper w-full h-[58%] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Section: Content */}
                <div className="project-card-content w-full h-[42%] p-5 sm:p-6 md:p-7 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-white font-semibold text-lg md:text-xl mb-2 tracking-tight transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-3 line-clamp-3 font-normal">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[9px] md:text-[11px] font-normal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex gap-3 w-full mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-xs md:text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-[1.02] cursor-pointer"
                    >
                      <ExternalLink size={14} className="md:size-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full text-xs md:text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-[1.02] cursor-pointer backdrop-blur-sm"
                    >
                      <Github size={14} className="md:size-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
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
