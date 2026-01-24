"use client";

import { GraduationCap, BookOpen, Award, Calendar, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

// ClientOnly wrapper component
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return children;
}

// FloatingCaps component
function FloatingCaps() {
  const [caps, setCaps] = useState([]);

  useEffect(() => {
    setCaps(
      [...Array(6)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        fontSize: 2 + Math.random() * 2,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 8
      }))
    );
  }, []);

  if (caps.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {caps.map((cap, i) => (
        <div
          key={i}
          className="absolute text-[#009F9D]/10"
          style={{
            left: `${cap.left}%`,
            top: `${cap.top}%`,
            fontSize: `${cap.fontSize}rem`,
            animation: `capFloat ${cap.duration}s linear ${cap.delay}s infinite`
          }}
        >
          🎓
        </div>
      ))}
    </div>
  );
}

// KnowledgeNodes component
function KnowledgeNodes() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setNodes(
      [...Array(4)].map((_, i) => ({
        left: 20 + i * 20,
        top: 10 + i * 15,
        delay: i * 0.3,
        duration: 2 + i * 0.5
      }))
    );
  }, []);

  return (
    <>
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-[#009F9D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
            animation: `nodePulse ${node.duration}s ease-in-out ${node.delay}s infinite`
          }}
        ></div>
      ))}
    </>
  );
}

export default function Education({ id }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(null);

  const educationList = [
    {
      degree: "Bachelor of Science Honours in Software Engineering",
      institution: "SLIIT",
      year: "2023 - Present",
      duration: "4 Years",
      details: "Pursuing an undergraduate degree with specialized focus on Full-Stack Development, Machine Learning, Cloud Computing, and Software Architecture.",
      courses: ["Advanced Web Technologies", "Data Structures", "Software Design", "Database Systems"],
      location: "Malabe, Sri Lanka",
      color: "from-[#009F9D] to-[#007F7D]",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Advanced Level",
      institution: "G/Prajapathi Girls' College",
      year: "2021 - 2023",
      duration: "2 Years",
      details: "Completed Advanced Levels in Physical Science Stream with distinction in Mathematics. ",
       attempts: [
    "1st Attempt: 2C, 1S",
    "2nd Attempt: 1C, 2S"
  ],
      courses: ["Combined Mathematics", "Physics", "Chemistry"],
      location: "Galle, Sri Lanka",
      color: "from-purple-500 to-pink-500",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      degree: "Professional Certifications",
      institution: "Online Platforms",
      year: "2022 - Present",
      duration: "Continuous",
      details: "Complementing formal education with industry-recognized certifications in modern web technologies and development practices.",
      courses: ["Frontend Development", "Backend Development", "DevOps", "UI/UX Design"],
      location: "Online",
      color: "from-orange-500 to-yellow-500",
      icon: <Award className="w-6 h-6" />
    },
  ];

  const timeline = [
    { year: "2020", event: "Started A/L Studies", icon: "🎓" },
    { year: "2023", event: "Started University", icon: "🏫" },
    { year: "2026", event: "Expected Industry Internship", icon: "👨‍💼" },
    { year: "2027", event: "Expected Graduation", icon: "🎉" },
  ];

  return (
    <section 
      id={id} 
      className="relative py-20 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#009F9D]/10 to-transparent"></div>
      
      {/* Animated Graduation Caps - Wrapped in ClientOnly */}
      <ClientOnly>
        <FloatingCaps />
      </ClientOnly>

      {/* Animated Knowledge Graph */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#009F9D" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00FFFC" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M50,50 C150,50 150,150 250,150 C350,150 350,250 450,250"
            stroke="url(#graphGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-draw"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009F9D]/20 to-transparent border border-[#009F9D]/30 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-[#009F9D]" />
            <span className="text-gray-300 text-sm font-medium tracking-wider">ACADEMIC JOURNEY</span>
            <Sparkles className="w-3 h-3 text-[#009F9D] animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Education & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] animate-gradient-x">
              Learning
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#009F9D] to-transparent mx-auto rounded-full animate-pulse mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey through formal education and continuous learning in the field of technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#009F9D] via-[#009F9D]/50 to-transparent"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                onMouseEnter={() => setActiveTimeline(index)}
                onMouseLeave={() => setActiveTimeline(null)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gray-900 bg-gradient-to-br ${index <= 2 ? 'from-[#009F9D] to-[#007F7D]' : 'from-gray-800 to-gray-700'} transition-all duration-300 ${activeTimeline === index ? 'scale-125 shadow-[0_0_20px_rgba(0,159,157,0.5)]' : ''}`}></div>
                
                {/* Timeline Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="relative group">
                    <div className={`absolute -inset-4 rounded-xl bg-gradient-to-r ${index % 2 === 0 ? 'from-[#009F9D]/10 to-transparent' : 'from-transparent to-[#009F9D]/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/30 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#009F9D] transition-all duration-300">
                            {item.year}
                          </div>
                          <div className="text-sm text-gray-400">{item.event}</div>
                        </div>
                      </div>
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent group-hover:via-[#009F9D] transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {educationList.map((edu, index) => (
            <div 
              key={edu.degree}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div className="absolute -inset-4 rounded-3xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Animated Knowledge Nodes - Wrapped in ClientOnly */}
                <ClientOnly>
                  <KnowledgeNodes />
                </ClientOnly>
              </div>
              
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#009F9D] to-transparent opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
              
              {/* Education Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/50 transition-all duration-500 h-full">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 group-hover:border-[#009F9D] transition-all duration-300">
                      <div className="text-[#009F9D] group-hover:text-[#00FFFC] transition-colors duration-300">
                        {edu.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-gray-800 to-black border border-gray-700 text-xs text-gray-300">
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#009F9D] transition-all duration-300">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.institution}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#009F9D]" />
                      <span className="text-sm text-gray-300">{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#009F9D]" />
                      <span className="text-xs text-gray-400">Progress</span>
                    </div>
                  </div>
                </div>
                
                {/* Details */}
                <div className="px-6 pb-6">
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {edu.details}
                  </p>
                  
                  {/* Attempts (A/L only) */}
{edu.attempts && (
  <div className="mb-6 space-y-1">
    {edu.attempts.map((attempt, i) => (
      <p
        key={i}
        className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
      >
        {attempt}
      </p>
    ))}
  </div>
)}

                  
                  {/* Courses */}
                  <div>
                    <div className="text-sm font-semibold text-white mb-3">Relevant Courses</div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-gradient-to-r from-black/50 to-gray-900/50 border border-gray-800 text-gray-300 text-xs hover:border-[#009F9D] hover:text-[#009F9D] transition-all duration-300 cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Location Footer */}
                <div className="px-6 py-4 border-t border-gray-800 bg-gradient-to-r from-transparent via-gray-900/50 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#009F9D]" />
                      <span className="text-sm text-gray-400">{edu.location}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {edu.year.includes('Present') ? 'Currently Studying' : 'Completed'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Interested in my academic journey?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg overflow-hidden group/cta"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D] to-[#007F7D] opacity-100 group-hover/cta:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
              <span className="relative text-white font-semibold">Get Transcript</span>
              <BookOpen className="relative w-5 h-5 text-white" />
            </a>
            
            <a
              href="#projects"
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg overflow-hidden group/cta2"
            >
              <div className="absolute inset-0 border-2 border-[#009F9D] opacity-100 group-hover/cta2:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#009F9D]/20 to-transparent opacity-0 group-hover/cta2:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-[#009F9D] group-hover/cta2:text-white font-semibold transition-colors duration-500">See Projects</span>
              <TrendingUp className="relative w-5 h-5 text-[#009F9D] group-hover/cta2:text-white transition-colors duration-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style >{`
        @keyframes capFloat {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-40px) translateX(20px) rotate(10deg); opacity: 0.05; }
        }

        @keyframes nodePulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 10s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}