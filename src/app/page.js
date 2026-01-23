"use client";

import { useState, useEffect } from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { Github, Linkedin, Mail, Download, ArrowRight, Terminal, Code } from "lucide-react";

export default function Home() {
  const [codeParticles, setCodeParticles] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generate code particles on client side only
    const particles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      text: Math.random() > 0.5 ? '<Code />' : 'const dev = true;'
    }));
    setCodeParticles(particles);
    setMounted(true);
  }, []);

  return (
    <>
      <Header />

      {/* Banner Section - Dark Theme */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-[#001F1E]"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-[#001F1E]"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009F9D]/20 to-[#009F9D]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-black/40 to-[#009F9D]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#009F9D]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, #009F9D 1px, transparent 1px),
                            linear-gradient(to bottom, #009F9D 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Code-like particles - only render after mount */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden">
            {codeParticles.map((particle) => (
              <div
                key={particle.id}
                className="absolute text-[#009F9D]/30 text-xs font-mono"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `float ${particle.duration}s ease-in-out infinite`,
                  animationDelay: `${particle.delay}s`
                }}
              >
                {particle.text}
              </div>
            ))}
          </div>
        )}

        {/* Left side: Name + Paragraph + Links */}
        <div className="md:w-1/2 flex flex-col justify-center items-start mb-10 md:mb-0 z-10">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#009F9D]/20 to-[#009F9D]/10 border border-[#009F9D]/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Terminal size={16} className="text-[#009F9D]" />
            <span className="text-sm font-medium text-gray-300">Software Engineering Student</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-[#009F9D] bg-clip-text text-transparent">
            Avindya <span className="text-[#009F9D]">G.H.S.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
            Crafting <span className="text-white font-semibold">elegant</span> and <span className="text-[#009F9D] font-semibold">high-performance</span> web applications. Passionate about modern full-stack development with cutting-edge technologies.
          </p>

          {/* Social Links with glass effect */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="https://github.com/ghasAvi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black border border-gray-800 text-white px-4 py-2 rounded-lg hover:border-[#009F9D] hover:shadow-[0_0_15px_rgba(0,159,157,0.3)] transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/avindya-g-h-s-811186380"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#009F9D] to-[#007F7D] text-white px-4 py-2 rounded-lg hover:shadow-[0_0_20px_rgba(0,159,157,0.4)] transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            {/* Email button */}
            <a
              href="mailto:ghasavindya@gmail.com"
              className="flex items-center gap-2 border border-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:border-[#009F9D] hover:text-[#009F9D] hover:shadow-[0_0_15px_rgba(0,159,157,0.2)] transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Avindya_G.H.S._CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#009F9D] to-[#007F7D] text-white px-8 py-3 rounded-lg hover:shadow-[0_0_25px_rgba(0,159,157,0.5)] hover:scale-105 transition-all font-medium group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download CV
            </a>
            
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#009F9D] text-[#009F9D] px-8 py-3 rounded-lg hover:bg-[#009F9D] hover:text-black hover:shadow-[0_0_25px_rgba(0,159,157,0.5)] transition-all hover:scale-105 font-medium group"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right side: Profile Picture with futuristic styling */}
        <div className="relative md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          {/* Tech background */}
          <div className="absolute -right-20 -top-20 w-80 h-80">
            <div className="absolute inset-0 border border-[#009F9D]/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-10 border border-[#009F9D]/10 rounded-full animate-spin-slow-reverse"></div>
          </div>

          {/* Profile container */}
          <div className="relative">
            {/* Glowing border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#009F9D] via-black to-[#009F9D] rounded-2xl opacity-30 blur-xl animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#009F9D] to-transparent rounded-xl opacity-20 blur"></div>
            
            {/* Main profile image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-[#009F9D]/30 bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm">
              <img
                src="/profile.png"
                alt="Avindya G.H.S."
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#009F9D]/10 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating tech stats */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl shadow-2xl border border-[#009F9D]/20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#009F9D]/20 to-[#009F9D]/10 flex items-center justify-center border border-[#009F9D]/30">
                  <Code size={18} className="text-[#009F9D]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Projects</p>
                  <p className="font-bold text-white">Completed</p>
                </div>
              </div>
            </div>

            {/* Tech stack indicators */}
            <div className="absolute -left-6 top-1/3 flex flex-col gap-2">
              {['React', 'Next.js', 'Node.js'].map((tech, i) => (
                <div 
                  key={tech}
                  className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-[#009F9D]/20 backdrop-blur-sm"
                  style={{animationDelay: `${i * 0.2}s`}}
                >
                  <div className="w-2 h-2 rounded-full bg-[#009F9D] animate-pulse"></div>
                  <span className="text-xs text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections with dark theme */}
      <div className="relative bg-gradient-to-b from-black to-gray-900">
        {/* Glowing divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#009F9D] to-transparent mx-6 md:mx-20 my-12 shadow-[0_0_20px_rgba(0,159,157,0.5)]"></div>
        
        <About id="about" />
        
        <div className="h-px bg-gradient-to-r from-transparent via-black to-transparent mx-6 md:mx-20 my-12"></div>
        
        <Skills id="skills" />
        
        <div className="h-px bg-gradient-to-r from-transparent via-[#009F9D] to-transparent mx-6 md:mx-20 my-12 shadow-[0_0_20px_rgba(0,159,157,0.3)]"></div>
        
        <Projects id="projects" />
        
        <div className="h-px bg-gradient-to-r from-transparent via-black to-transparent mx-6 md:mx-20 my-12"></div>
        
        <Education id="education" />
        
        <div className="h-px bg-gradient-to-r from-transparent via-[#009F9D] to-transparent mx-6 md:mx-20 my-12 shadow-[0_0_15px_rgba(0,159,157,0.3)]"></div>
        
        <Contact id="contact" />
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        /* Custom scrollbar for dark theme */
        ::-webkit-scrollbar {
          width: 10px;
          background: #111;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #009F9D, #007F7D);
          border-radius: 5px;
          border: 2px solid #111;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00B4B1, #009F9D);
          box-shadow: 0 0 10px rgba(0, 159, 157, 0.5);
        }

        /* Glow effects */
        .glow {
          box-shadow: 0 0 20px rgba(0, 159, 157, 0.3);
        }

        .glow:hover {
          box-shadow: 0 0 30px rgba(0, 159, 157, 0.5);
        }

        /* Text glow */
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 159, 157, 0.5);
        }
      `}</style>
    </>
  );
}