"use client";

import { Cpu, Target, Rocket, Zap, User, Brain, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

// ClientOnly wrapper to prevent hydration errors
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return children;
}

// Optimized FloatingParticles component
function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random positions after mount
    setParticles(
      [...Array(16)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        size: 1 + Math.random() * 2, // Random size between 1-3px
        duration: 3 + Math.random() * 4
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bg-[#009F9D] rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
}

export default function About({ id }) {
  const [hoveredBox, setHoveredBox] = useState(null);

  const stats = [
    { icon: <Cpu className="w-5 h-5" />, label: "Tech Stack", value: "8+" },
    { icon: <Target className="w-5 h-5" />, label: "Projects", value: "15+" },
    { icon: <Rocket className="w-5 h-5" />, label: "Experience", value: "2 Years" },
    { icon: <Zap className="w-5 h-5" />, label: "Passion", value: "100%" },
  ];

  const interests = [
    "Full-Stack Development",
    "UI/UX Design",
    "Cloud Architecture",
    "AI/ML Integration",
    "DevOps Practices",
    "Open Source",
  ];

  return (
    <section 
      id={id} 
      className="relative py-20 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#009F9D]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-black/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(90deg, #009F9D 1px, transparent 1px),
                            linear-gradient(180deg, #009F9D 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      ></div>

      {/* Floating Particles - Wrapped in ClientOnly */}
      <ClientOnly>
        <FloatingParticles />
      </ClientOnly>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009F9D]/20 to-transparent border border-[#009F9D]/30 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <User className="w-4 h-4 text-[#009F9D]" />
            <span className="text-gray-300 text-sm font-medium tracking-wider">GET TO KNOW ME</span>
            <Sparkles className="w-3 h-3 text-[#009F9D] animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] animate-gradient-x">
              Me
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#009F9D] to-transparent mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* My Journey Box */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredBox('journey')}
              onMouseLeave={() => setHoveredBox(null)}
            >
              {/* Animated Gradient Backdrop */}
              <div className="absolute -inset-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D]/20 via-[#009F9D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#009F9D]/10 via-transparent to-[#009F9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-pulse"></div>
                
                {/* Animated Orbs */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#009F9D]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 group-hover:animate-orb-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#009F9D]/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 group-hover:animate-orb-float" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
              
              {/* Main Box Content */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/50 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#009F9D]/20 to-[#009F9D]/10 border border-[#009F9D]/30 group-hover:border-[#00FFFC] group-hover:shadow-[0_0_20px_rgba(0,159,157,0.3)] transition-all duration-300">
                    <Brain className="w-6 h-6 text-[#009F9D] group-hover:text-[#00FFFC] transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#009F9D] group-hover:to-[#00FFFC] transition-all duration-300">
                    My Journey
                  </h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg group-hover:text-gray-200 transition-colors duration-300">
                    I'm <span className="text-white font-semibold group-hover:text-[#009F9D] transition-colors duration-300">Avi</span>, a passionate Software Engineering student driven by the art of crafting 
                    <span className="text-[#009F9D] font-semibold group-hover:text-[#00FFFC] transition-colors duration-300"> elegant digital experiences</span>. My journey began with curiosity and evolved into a deep commitment to building meaningful technology.
                  </p>
                  
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    I specialize in creating <span className="text-white font-medium group-hover:text-[#009F9D] transition-colors duration-300">modern web applications</span> that blend beautiful design with robust functionality. From intuitive user interfaces to scalable backend systems, I strive to build solutions that are both practical and innovative.
                  </p>
                  
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    Throughout my academic journey, I've tackled real-world challenges that taught me to 
                    <span className="text-[#009F9D] font-medium group-hover:text-[#00FFFC] transition-colors duration-300"> think critically</span>, 
                    <span className="text-[#009F9D] font-medium group-hover:text-[#00FFFC] transition-colors duration-300"> adapt quickly</span>, and 
                    <span className="text-[#009F9D] font-medium group-hover:text-[#00FFFC] transition-colors duration-300"> collaborate effectively</span>. Each project has been a stepping stone toward becoming a versatile full-stack developer.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredBox(`stat-${index}`)}
                  onMouseLeave={() => setHoveredBox(null)}
                >
                  {/* Animated Stats Background */}
                  <div className="absolute -inset-3 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#009F9D]/10 via-transparent to-[#009F9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated Particles - Wrapped in ClientOnly */}
                    <ClientOnly>
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-[1px] h-[1px] bg-[#009F9D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `particleMove ${1 + Math.random() * 2}s linear ${i * 0.2}s infinite`
                          }}
                        />
                      ))}
                    </ClientOnly>
                  </div>
                  
                  {/* Stats Box Content */}
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/30 group-hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#009F9D]/20 to-[#009F9D]/10 border border-[#009F9D]/20 group-hover:border-[#009F9D] group-hover:shadow-[0_0_10px_rgba(0,159,157,0.3)] transition-all duration-300">
                        {stat.icon}
                      </div>
                      <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#009F9D] transition-all duration-300">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                    
                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#009F9D] to-transparent group-hover:w-16 group-hover:-translate-x-8 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - More Content */}
          <div className="space-y-8">
            {/* Beyond Code Box */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredBox('beyond')}
              onMouseLeave={() => setHoveredBox(null)}
            >
              {/* Animated Background */}
              <div className="absolute -inset-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-[#009F9D]/20 via-transparent to-[#009F9D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Animated Scan Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent 50% via-[#009F9D] to-transparent animate-scan" style={{animationDelay: '0s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent 50% via-[#009F9D] to-transparent animate-scan" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent 50% via-[#009F9D] to-transparent animate-scan" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
              
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#009F9D] to-[#00FFFC] opacity-0 group-hover:opacity-30 blur-sm group-hover:animate-pulse-slow transition-all duration-500"></div>
              
              {/* Box Content */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#009F9D] group-hover:to-[#00FFFC] transition-all duration-300">
                  Beyond Code
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    I believe great software comes from understanding both technology and people. That's why I'm equally passionate about 
                    <span className="text-white font-medium group-hover:text-[#009F9D] transition-colors duration-300"> user experience</span> and 
                    <span className="text-white font-medium group-hover:text-[#009F9D] transition-colors duration-300"> technical excellence</span>.
                  </p>
                  
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    My approach combines <span className="text-[#009F9D] font-medium group-hover:text-[#00FFFC] transition-colors duration-300">creative problem-solving</span> with 
                    <span className="text-[#009F9D] font-medium group-hover:text-[#00FFFC] transition-colors duration-300"> systematic thinking</span>. I enjoy breaking down complex challenges, experimenting with new solutions, and continuously refining my craft.
                  </p>
                  
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    I'm driven by the desire to create software that 
                    <span className="text-[#009F9D] font-medium group-hover:text-[#00FFFC] transition-colors duration-300"> makes a difference</span>. Whether it's improving daily workflows, enhancing user interactions, or solving meaningful problems, I aim to build technology that positively impacts lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Interests Box */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredBox('interests')}
              onMouseLeave={() => setHoveredBox(null)}
            >
              {/* Animated Background */}
              <div className="absolute -inset-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#009F9D]/15 via-transparent to-[#009F9D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Circles */}
                <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full border border-[#009F9D]/20 opacity-0 group-hover:w-48 group-hover:h-48 group-hover:opacity-100 group-hover:animate-ping-slow transition-all duration-700"></div>
                <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full border border-[#009F9D]/10 opacity-0 group-hover:w-64 group-hover:h-64 group-hover:opacity-100 group-hover:animate-ping-slow transition-all duration-700" style={{animationDelay: '0.2s'}}></div>
              </div>
              
              {/* Box Content */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#009F9D] transition-all duration-300">
                  Areas of Interest
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="relative px-4 py-2 rounded-lg bg-gradient-to-r from-black/50 to-gray-900/50 border border-gray-800 text-gray-300 text-sm group/interests hover:border-[#009F9D] hover:text-[#009F9D] transition-all duration-300 cursor-default"
                    >
                      {interest}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#009F9D] to-transparent group-hover/interests:w-full transition-all duration-500"></span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredBox('quote')}
              onMouseLeave={() => setHoveredBox(null)}
            >
              {/* Animated Background */}
              <div className="absolute -inset-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#009F9D]/10 via-transparent to-[#009F9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Gradient Orb */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-r from-[#009F9D]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:animate-orb-pulse transition-all duration-700"></div>
              </div>
              
              {/* Box Content */}
              <div className="relative p-6 rounded-2xl border border-gray-800 overflow-hidden group-hover:border-[#009F9D]/30 transition-all duration-300">
                <div className="relative z-10">
                  <div className="text-4xl text-[#009F9D] opacity-30 mb-2 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">"</div>
                  <p className="text-gray-300 italic mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    Great software is built at the intersection of creativity and logic, where innovative ideas meet elegant execution.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#009F9D] to-transparent group-hover:w-16 transition-all duration-500"></div>
                    <span className="text-gray-400 text-sm group-hover:text-[#009F9D] transition-colors duration-300">My Philosophy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Ready to build something amazing together?</p>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg overflow-hidden group/cta"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D] to-[#007F7D] opacity-100 group-hover/cta:opacity-0 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
            
            {/* Content */}
            <span className="relative text-white font-semibold">Let's Connect</span>
            <svg className="relative w-5 h-5 text-white group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#009F9D] to-[#00FFFC] rounded-lg blur opacity-0 group-hover/cta:opacity-30 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style >{`
        @keyframes gridMove {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(50px) translateX(50px); }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-15px) translateX(5px); opacity: 0.8; }
        }

        @keyframes particleMove {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          100% { transform: translateY(-20px) translateX(10px); opacity: 0; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes orb-float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-10px) translateX(5px) scale(1.1); }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes orb-pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-gradient-pulse {
          animation: gradient-pulse 2s ease-in-out infinite;
        }

        .animate-orb-float {
          animation: orb-float 3s ease-in-out infinite;
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-out infinite;
        }

        .animate-orb-pulse {
          animation: orb-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}