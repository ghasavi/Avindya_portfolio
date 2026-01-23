"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles } from "lucide-react";

// ClientOnly wrapper component
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return children;
}

// ProgressBar component that's safe to render on client only
function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min((scrollTop / (documentHeight - windowHeight)) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-1 w-full bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-[#009F9D] to-[#007F7D] transition-all duration-300"
        style={{
          width: `${scrollProgress}%`
        }}
      />
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ClientOnly>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#009F9D]/20 to-[#009F9D]/10 border border-[#009F9D]/30 flex items-center justify-center group-hover:border-[#009F9D] transition-all">
                  <Code2 className="text-[#009F9D] group-hover:scale-110 transition-transform" size={22} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#009F9D] rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-white to-[#009F9D] bg-clip-text text-transparent">
                  AVINDYA
                </span>
                <span className="text-xs text-gray-400 font-mono">dev</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.name}
                    {index === 2 && (
                      <Sparkles className="w-3 h-3 text-[#009F9D] animate-pulse" />
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#009F9D]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#009F9D] group-hover:w-8 group-hover:-translate-x-4 transition-all duration-300"></div>
                </a>
              ))}
              
              {/* Download CV Button in Header */}
              <a
                href="/Avindya_G.H.S._CV.pdf"
                download
                className="ml-4 px-4 py-2 bg-gradient-to-r from-[#009F9D] to-[#007F7D] text-white rounded-lg hover:shadow-[0_0_15px_rgba(0,159,157,0.4)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <span className="text-sm font-semibold">CV</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-800 hover:border-[#009F9D] hover:text-[#009F9D] transition-all"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 shadow-2xl">
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#009F9D]/10 hover:to-transparent transition-all border border-transparent hover:border-[#009F9D]/30"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-[#009F9D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  ))}
                  
                  {/* Mobile Download Button */}
                  <a
                    href="/Avindya_G.H.S._CV.pdf"
                    download
                    className="mt-4 py-3 px-6 bg-gradient-to-r from-[#009F9D] to-[#007F7D] text-white rounded-lg hover:shadow-[0_0_15px_rgba(0,159,157,0.4)] transition-all flex items-center justify-center gap-2 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Download CV
                  </a>
                </div>
                
                {/* Social Links in Mobile Menu */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <p className="text-gray-400 text-sm mb-4 text-center">Connect with me</p>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://github.com/ghasAvi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-gray-800 rounded-lg hover:border-[#009F9D] hover:text-[#009F9D] transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/avindya-g-h-s-811186380"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-gray-800 rounded-lg hover:border-[#009F9D] hover:text-[#009F9D] transition-all"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="mailto:ghasavindya@gmail.com"
                      className="p-2 border border-gray-800 rounded-lg hover:border-[#009F9D] hover:text-[#009F9D] transition-all"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar - Wrapped separately since it uses window scroll */}
        <ProgressBar />
      </header>
    </ClientOnly>
  );
}