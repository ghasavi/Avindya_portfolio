"use client";

import { Code2, Layout, Server, Database, Wrench, Zap, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Skills({ id }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML", "Java", "JavaScript", "PHP", "Python", "C#", "C++", "Kotlin"],
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Vite"],
      icon: <Layout className="w-6 h-6" />,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Java servlets"],
      icon: <Server className="w-6 h-6" />,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Postman", "Eclipse", "Android Studio"],
      icon: <Wrench className="w-6 h-6" />,
      color: "from-yellow-500/20 to-amber-500/20",
    },
  ];

  const skillLevels = {
    "HTML": 95,
    "Java": 90,
    "JavaScript": 88,
    "PHP": 85,
    "Python": 82,
    "C#": 80,
    "C++": 78,
    "Kotlin": 75,
    "React": 92,
    "Next.js": 88,
    "Tailwind CSS": 95,
    "Vite": 85,
    "Node.js": 90,
    "Express.js": 87,
    "Java servlets": 83,
    "MongoDB": 88,
    "MySQL": 85,
    "Git": 93,
    "VS Code": 96,
    "Postman": 89,
    "Eclipse": 84,
    "Android Studio": 82,
  };

  return (
    <section 
      id={id} 
      className="relative py-20 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#009F9D]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-black/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#009F9D]/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-[#009F9D]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#009F9D] to-transparent"></div>
      </div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {['{', '}', '<', '>', ';', '=', '(', ')'].map((char, i) => (
          <div
            key={i}
            className="absolute text-[#009F9D]/20 text-2xl font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `iconFloat ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {char}
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009F9D]/20 to-transparent border border-[#009F9D]/30 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-[#009F9D]" />
            <span className="text-gray-300 text-sm font-medium tracking-wider">TECHNICAL EXPERTISE</span>
            <Sparkles className="w-3 h-3 text-[#009F9D] animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Technical </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] animate-gradient-x">
              Skills
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#009F9D] to-transparent mx-auto rounded-full animate-pulse"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive collection of technologies and tools I work with to build amazing digital experiences
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Animated Background */}
              <div className="absolute -inset-4 rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Animated Particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[2px] h-[2px] bg-[#009F9D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `particleFloat ${2 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#009F9D] to-transparent opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
              
              {/* Category Card */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/50 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 group-hover:border-[#009F9D] group-hover:bg-gradient-to-br group-hover:from-[#009F9D]/20 group-hover:to-[#009F9D]/10 transition-all duration-300">
                    <div className="text-[#009F9D] group-hover:text-[#00FFFC] transition-colors duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#009F9D] transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="relative group/skill"
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-black/50 to-gray-900/50 border border-gray-800 text-gray-300 text-sm group-hover/skill:border-[#009F9D] group-hover/skill:text-[#009F9D] transition-all duration-300 cursor-default">
                        {skill}
                        {activeSkill === skill && (
                          <span className="ml-1 w-2 h-2 bg-[#009F9D] rounded-full animate-ping"></span>
                        )}
                      </span>
                      
                      {/* Skill Level Indicator (on hover) */}
                      {activeSkill === skill && (
                        <div className="absolute bottom-full left-0 mb-2 p-2 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl backdrop-blur-sm z-20">
                          <div className="flex items-center justify-between w-32 mb-1">
                            <span className="text-xs text-gray-300">Proficiency</span>
                            <span className="text-xs font-bold text-[#009F9D]">{skillLevels[skill]}%</span>
                          </div>
                          <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#009F9D] to-[#00FFFC] rounded-full transition-all duration-700"
                              style={{ width: `${skillLevels[skill]}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </span>
                  ))}
                </div>
                
                {/* Animated Corner */}
                <div className="absolute top-4 right-4">
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 h-1 rounded-full bg-[#009F9D] animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Proficiency Chart */}
        <div className="relative group">
          {/* Animated Background */}
          <div className="absolute -inset-4 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D]/10 via-transparent to-[#009F9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Animated Scan Lines */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent 50% via-[#009F9D] to-transparent animate-scan"></div>
            </div>
          </div>
          
          {/* Chart Container */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/30 transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#009F9D] group-hover:to-[#00FFFC] transition-all duration-300">
                Proficiency Overview
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#009F9D] to-[#00FFFC] animate-pulse"></div>
                <span className="text-sm text-gray-400">Real-time progress</span>
              </div>
            </div>
            
            {/* Progress Bars */}
            <div className="space-y-6">
              {Object.entries(skillLevels).slice(0, 8).map(([skill, level]) => (
                <div key={skill} className="group/progress">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 group-hover/progress:text-white transition-colors duration-300">
                      {skill}
                    </span>
                    <span className="text-sm font-bold text-[#009F9D] group-hover/progress:text-[#00FFFC] transition-colors duration-300">
                      {level}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#009F9D] to-[#00FFFC] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${level}%` }}
                    >
                      <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-r from-transparent to-white/30 animate-shimmer"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/progress:opacity-100 animate-shimmer"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#009F9D] to-[#00FFFC]"></div>
                <span className="text-sm text-gray-400">Current Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <span className="text-sm text-gray-400">Remaining</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Want to see these skills in action?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg overflow-hidden group/cta"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D] to-[#007F7D] opacity-100 group-hover/cta:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
              <span className="relative text-white font-semibold">View Projects</span>
              <svg className="relative w-5 h-5 text-white group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg overflow-hidden group/cta2"
            >
              <div className="absolute inset-0 border-2 border-[#009F9D] opacity-100 group-hover/cta2:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#009F9D]/20 to-transparent opacity-0 group-hover/cta2:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-[#009F9D] group-hover/cta2:text-white font-semibold transition-colors duration-500">Get in Touch</span>
              <svg className="relative w-5 h-5 text-[#009F9D] group-hover/cta2:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(10px) rotate(10deg); opacity: 0.1; }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-10px) translateX(5px); opacity: 1; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}