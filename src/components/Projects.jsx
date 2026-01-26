"use client";

import { ExternalLink, Github, Eye, Sparkles, Zap, Code2, Layers, ArrowUpRight } from "lucide-react";
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

// FloatingCodeBlocks component
function FloatingCodeBlocks() {
  const [codeBlocks, setCodeBlocks] = useState([]);

  useEffect(() => {
    setCodeBlocks(
      [...Array(8)].map((_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 5 + Math.random() * 5
      }))
    );
  }, []);

  if (codeBlocks.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {codeBlocks.map((block, i) => (
        <div
          key={i}
          className="absolute font-mono text-[#009F9D] text-sm"
          style={{
            left: `${block.left}%`,
            top: `${block.top}%`,
            animation: `codeFloat ${block.duration}s linear ${block.delay}s infinite`
          }}
        >
          {`<Project ${i + 1} />`}
        </div>
      ))}
    </div>
  );
}

// FloatingTechTags component
function FloatingTechTags({ tech }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(
      tech.map((_, techIndex) => ({
        left: 10 + techIndex * 15,
        top: 10 + techIndex * 10,
        delay: techIndex * 0.2,
        duration: 3 + techIndex * 0.5
      }))
    );
  }, [tech]);

  return (
    <>
      {tech.map((techItem, techIndex) => (
        <div
          key={techItem}
          className="absolute px-2 py-1 bg-black/80 backdrop-blur-sm border border-[#009F9D]/30 rounded-lg text-xs text-[#009F9D] opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            left: `${tags[techIndex]?.left || 10 + techIndex * 15}%`,
            top: `${tags[techIndex]?.top || 10 + techIndex * 10}%`,
            animation: `tagFloat ${tags[techIndex]?.duration || 3 + techIndex * 0.5}s ease-in-out ${tags[techIndex]?.delay || techIndex * 0.2}s infinite`
          }}
        >
          {techItem}
        </div>
      ))}
    </>
  );
}

export default function Projects({ id }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeTech, setActiveTech] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Anime Recommendation Web App (AniRec)",
      desc: "Anime Recommendation Web App that provides personalized suggestions through a concise 5-question quiz. Users can also explore and browse anime efficiently, organized by categories for seamless discovery.",
      img: "/projects/anirec.png",
      tech: ["React", "Node.js", "MongoDB", "Tailwind", "Supabase", "Vercel", "Postmon", "Render"],
      github: "https://github.com/ghasAvi",
      live: "https://anime-recommender-demo.netlify.app",
      category: "Full Stack",
      status: "In Development",
      report: {
        overview:
          "AniRec is a personalized anime recommendation platform that suggests anime based on user preferences collected through a short quiz.",
        problem:
          "Anime platforms overwhelm users with too many choices, making it hard to find shows that actually match their taste.",
        solution:
          "A 5-question quiz-based system that filters anime intelligently and presents curated results instantly.",
        features: [
          "Quiz-based recommendations",
          "Category-wise anime browsing",
          "Responsive UI",
          "Fast filtering logic"
        ],
        future:
          "User accounts, watchlists, AI-based recommendations, and social sharing."
      }
    },
    {
      name: "Hand-Drawn Art E-Commerce (Pixaku)",
      desc: "Digital marketplace platform connecting artists with collectors, featuring secure payments and commission management system.",
      img: "/projects/pixaku.png",
      tech: ["Node.js", "Stripe", "Supabase", "Ngrok", "React", "MongoDB", "Tailwind", "Vercel", "Postmon", "Render"],
      github: "https://github.com/ghasAvi",
      live: "https://art-marketplace-demo.netlify.app",
      category: "E-Commerce",
      status: "Completed",
      report: {
        overview:
          "Pixaku is a digital marketplace dedicated to hand-drawn art, connecting art works whcih were drawn by myself",
        problem:
          "Artists struggle to find a dedicated platform for hand-drawn art, while collectors have difficulty discovering unique, authentic pieces.",
        solution:
          "A specialized e-commerce platform with artist profiles, secure commission systems, and curated art collections.",
        features: [
          "Artist portfolio management",
          "Secure commission system",
          "Stripe payment integration",
          "Real-time order tracking",
          "Art collection curation"
        ],
        future:
          "AR preview feature, artist mentoring programs, art competitions, and international shipping integration."
      }
    },
    {
      name: "Online Ordering & Reservation System",
      desc: "University Online Ordering & Reservation System built with the MERN stack. Handles order and payment management, including secure transactions via Stripe and refunds through Ngrok.",
      img: "/projects/royalbakes.png",
      tech: ["React", "Express", "Socket.io", "MongoDB", "Tailwind", "Node.js", "Stripe", "Ngrok"],
      github: "https://github.com/wayodyavitharka/royalbakes.git",
      live: null,
      category: "Productivity",
      status: "Completed",
      report: {
        overview:
          "A comprehensive university ordering system for managing food orders, table reservations, and payment processing for royalbakes restaurant.",
        problem:
          "Food services face long queues, manual order taking errors, and inefficient reservation management.",
        solution:
          "Digital ordering system with real-time updates, automated reservations, and integrated payment processing.",
        features: [
          "Real-time order tracking",
          "Table reservation system",
          "Payment processing with Stripe",
          "Order history and receipts",
          "Admin dashboard"
        ],
        future:
          "Mobile app integration, meal plan management, and inventory tracking."
      }
    },
    {
      name: "Android Habit Tracking App (MIMI Days)",
      desc: "University Android Habit Tracking App that helps users manage habits with add, edit, and delete functionality, track daily water intake reminders, and log current mood.",
      img: "/projects/mimidays.png",
      tech: ["XML", "Kotlin"],
      github: "https://github.com/ghasavi/MAD_LabExam_03.git",
      live: null,
      category: "Mobile App",
      status: "Completed",
      report: {
        overview:
          "MIMI Days is a minimalist habit tracking app designed to help users build positive routines and maintain daily consistency.",
        problem:
          "People struggle to maintain consistency with habits due to lack of tracking, reminders, and visual progress indicators.",
        solution:
          "Simple yet powerful habit tracker with streak tracking, reminders, and mood logging to keep users motivated.",
        features: [
          "Habit creation and management",
          "Daily streak tracking",
          "Water intake reminders",
          "Mood logging",
          "Progress visualization"
        ],
        future:
          "Social accountability features, habit challenges, data export, and wearable integration."
      }
    },
    {
      name: "Counselling Support Android App (Mood Lift)",
      desc: "University Android Studio project for a Counselling Support Android app that delivers practical tips and guidance when users feel angry, sad, or anxious.",
      img: "/projects/moodlift.png",
      tech: ["Kotlin", "XML"],
      github: "https://github.com/ghasavi/MAD_LabExam_02.git",
      live: null,
      category: "Mobile App",
      status: "Completed",
      report: {
        overview:
          "Mood Lift is a mental wellness app providing immediate emotional support and coping strategies for moments of distress.",
        problem:
          "Many people experience emotional distress without immediate access to professional help or coping resources.",
        solution:
          "Instant access to curated coping strategies, breathing exercises, and mood tracking tools in a private, accessible format.",
        features: [
          "Emotion-based coping strategies",
          "Guided breathing exercises",
          "Mood tracking and history",
          "Emergency contact setup",
          "Privacy-focused design"
        ],
        future:
          "AI chat support, therapist matching, community support groups, and crisis intervention resources."
      }
    },
  ];

  const categories = [
    { name: "All", count: projects.length },
    { name: "Full Stack", count: 1 },
    { name: "E-Commerce", count: 1 },
    { name: "Productivity", count: 1 },
    { name: "Mobile App", count: 2 },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section 
      id={id} 
      className="relative py-20 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#009F9D]/10 to-transparent"></div>
      
      {/* Floating Code Blocks - Wrapped in ClientOnly */}
      <ClientOnly>
        <FloatingCodeBlocks />
      </ClientOnly>

      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #009F9D 1px, transparent 1px),
            linear-gradient(180deg, #009F9D 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 30s linear infinite'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009F9D]/20 to-transparent border border-[#009F9D]/30 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Layers className="w-4 h-4 text-[#009F9D]" />
            <span className="text-gray-300 text-sm font-medium tracking-wider">MY PORTFOLIO</span>
            <Sparkles className="w-3 h-3 text-[#009F9D] animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] animate-gradient-x">
              Projects
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#009F9D] to-transparent mx-auto rounded-full animate-pulse mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, innovative solutions, and creative implementations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`relative group px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.name 
                  ? 'bg-gradient-to-r from-[#009F9D] to-[#007F7D] text-white' 
                  : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.name}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.name 
                    ? 'bg-white/20' 
                    : 'bg-gray-800'
                }`}>
                  {category.count}
                </span>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#009F9D] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => {
                setHoveredProject(null);
                setActiveTech(null);
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Animated Background */}
              <div className="absolute -inset-4 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#009F9D]/10 via-transparent to-[#009F9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Tech Tags - Wrapped in ClientOnly */}
                <ClientOnly>
                  <FloatingTechTags tech={project.tech} />
                </ClientOnly>
              </div>
              
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
              
              {/* Project Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/50 transition-all duration-500 cursor-pointer">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : project.status === 'Completed'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#009F9D]/20 text-[#009F9D] border border-[#009F9D]/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Project Image */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#009F9D]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                        className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 text-white hover:border-[#009F9D] hover:shadow-[0_0_20px_rgba(0,159,157,0.4)] transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </button>
                      {project.live && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.live, '_blank');
                          }}
                          className="p-3 rounded-full bg-gradient-to-br from-[#009F9D] to-[#007F7D] text-white hover:shadow-[0_0_20px_rgba(0,159,157,0.5)] transition-all duration-300 hover:scale-110"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#009F9D] transition-all duration-300">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-[#009F9D] transition-colors duration-300" />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.desc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="relative group/tech"
                        onMouseEnter={() => setActiveTech(tech)}
                        onMouseLeave={() => setActiveTech(null)}
                      >
                        <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-black/50 to-gray-900/50 border border-gray-800 text-gray-300 text-xs hover:border-[#009F9D] hover:text-[#009F9D] transition-all duration-300 cursor-default">
                          {tech}
                          {activeTech === tech && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#009F9D] rounded-full animate-ping"></span>
                          )}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#009F9D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative group mb-16">
          <div className="absolute -inset-4 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{projects.length}+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10k+</div>
                <div className="text-gray-400 text-sm">Lines of Code</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Want to collaborate on something amazing?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/ghasAvi"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg overflow-hidden group/cta"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-100 group-hover/cta:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D]/20 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
              <Github className="relative w-5 h-5 text-white" />
              <span className="relative text-white font-semibold">View All Projects</span>
            </a>
            
            <a
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg overflow-hidden group/cta2 bg-gradient-to-r from-[#009F9D] to-[#007F7D] text-white transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D] to-[#007F7D] opacity-100 group-hover/cta2:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] opacity-0 group-hover/cta2:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
              <span className="relative text-white font-semibold">Start a Project</span>
              <Zap className="relative w-5 h-5 text-white group-hover/cta2:animate-pulse" />
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-7xl h-[85vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden grid md:grid-cols-5">
            {/* LEFT – REPORT */}
            <div className="md:col-span-2 p-6 overflow-y-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProject.name}
              </h2>

              <section className="mb-5">
                <h3 className="text-[#009F9D] font-semibold mb-1">Overview</h3>
                <p className="text-gray-400 text-sm">
                  {selectedProject.report.overview}
                </p>
              </section>

              <section className="mb-5">
                <h3 className="text-[#009F9D] font-semibold mb-1">Problem</h3>
                <p className="text-gray-400 text-sm">
                  {selectedProject.report.problem}
                </p>
              </section>

              <section className="mb-5">
                <h3 className="text-[#009F9D] font-semibold mb-1">Solution</h3>
                <p className="text-gray-400 text-sm">
                  {selectedProject.report.solution}
                </p>
              </section>

              <section className="mb-5">
                <h3 className="text-[#009F9D] font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  {selectedProject.report.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-5">
                <h3 className="text-[#009F9D] font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-black/60 border border-gray-700 text-xs text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-[#009F9D] font-semibold mb-1">Future Improvements</h3>
                <p className="text-gray-400 text-sm">
                  {selectedProject.report.future}
                </p>
              </section>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-[#009F9D] text-black font-semibold hover:opacity-80 transition flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Live Site
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT – WEBSITE PREVIEW */}
            <div className="md:col-span-3 relative">
              <img
                src={selectedProject.img}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent"></div>
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition bg-black/50 p-1 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style >{`
        @keyframes gridMove {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(60px) translateX(60px); }
        }

        @keyframes codeFloat {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) translateX(20px) rotate(5deg); opacity: 0.05; }
        }

        @keyframes tagFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-5px) translateX(5px); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}