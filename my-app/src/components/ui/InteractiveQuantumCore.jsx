import React, { useEffect, useRef } from "react";

export function InteractiveQuantumCore() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 180 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    
    // Configs
    const particleCount = window.innerWidth < 768 ? 60 : 120;
    const connectionDistance = 110;
    const baseSpeed = 0.5;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    };
    resizeCanvas();

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * baseSpeed;
        this.vy = (Math.random() - 0.5) * baseSpeed;
        this.radius = Math.random() * 2 + 1;
        this.originalVx = this.vx;
        this.originalVy = this.vy;
      }

      update() {
        // Bounce off borders
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Mouse attraction physics
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          
          // Gently nudge particles toward cursor
          this.x += Math.cos(angle) * force * 1.5;
          this.y += Math.sin(angle) * force * 1.5;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fill();
      }
    }

    // Initialize particle array
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);



      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Check if cursor is nearby to light up connection
            if (mouseRef.current.x !== null) {
              const mDist1 = Math.hypot(mouseRef.current.x - particles[i].x, mouseRef.current.y - particles[i].y);
              const mDist2 = Math.hypot(mouseRef.current.x - particles[j].x, mouseRef.current.y - particles[j].y);
              if (mDist1 < mouseRef.current.radius && mDist2 < mouseRef.current.radius) {
                ctx.strokeStyle = `rgba(74, 158, 255, ${alpha * 2.5})`;
              } else {
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              }
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            }

            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event Listeners
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const handleResize = () => {
      resizeCanvas();
      // Re-distribute particles if screen expands
      particles.forEach((p) => {
        if (p.x > canvas.width) p.x = Math.random() * canvas.width;
        if (p.y > canvas.height) p.y = Math.random() * canvas.height;
      });
    };

    window.addEventListener("resize", handleResize);
    canvas.parentElement.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener("mousemove", handleMouseMove);
        canvas.parentElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none z-0"
    />
  );
}
