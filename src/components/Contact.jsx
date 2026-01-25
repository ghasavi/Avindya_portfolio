"use client";

import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, Globe, Linkedin, Github, MailCheck } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Contact({ id }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "ghasavindya@gmail.com",
      color: "from-[#009F9D] to-[#007F7D]"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+94 77 397 7465",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Galle, Sri Lanka",
      link: "https://maps.google.com/?q=Galle,Sri+Lanka",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      link: "https://github.com/ghasAvi",
      color: "hover:bg-gray-900 hover:text-white"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/avindya-g-h-s-811186380",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: "Portfolio",
      link: "#",
      color: "hover:bg-green-600 hover:text-white"
    }
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const form = { 
        name: formData.name,
        email: formData.email,
        message: formData.message,
        access_key: "a0a70010-56a7-4283-bb29-eb5a79b90c86",
        to: "ghasavindya@gmail.com"
      };

      console.log("Submitting form...", form);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Web3Forms data:", data);

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(data.message || "Failed to send message.");
        console.error("Web3Forms error:", data);
      }
    } catch (err) {
      setError("Network error.");
      console.error("Fetch failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Static particle positions (won't cause hydration mismatch)
  const particlePositions = [
    { left: '10%', top: '15%' },
    { left: '25%', top: '60%' },
    { left: '45%', top: '25%' },
    { left: '60%', top: '70%' },
    { left: '75%', top: '40%' },
    { left: '85%', top: '80%' },
    { left: '20%', top: '85%' },
    { left: '90%', top: '20%' }
  ];

  return (
    <section id={id} className="relative py-20 px-6 md:px-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#009F9D]/10 to-transparent"></div>
      
      {/* Animated Communication Waves */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#009F9D] rounded-full animate-ripple"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009F9D]/20 to-transparent border border-[#009F9D]/30 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <MessageSquare className="w-4 h-4 text-[#009F9D]" />
            <span className="text-gray-300 text-sm font-medium tracking-wider">LET'S CONNECT</span>
            <Sparkles className="w-3 h-3 text-[#009F9D] animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] animate-gradient-x">
              Touch
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#009F9D] to-transparent mx-auto rounded-full animate-pulse mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block"
                >
                  <div className="absolute -inset-4 rounded-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  </div>
                  
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/50 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-20 border border-gray-800 group-hover:border-[#009F9D] transition-all duration-300`}>
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#009F9D] transition-all duration-300">
                          {info.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 rounded-full bg-[#009F9D] animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D]/10 via-transparent to-[#009F9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#009F9D] group-hover:to-[#00FFFC] transition-all duration-300">
                  Connect With Me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-black/50 to-gray-900/50 border border-gray-800 text-gray-300 hover:text-white transition-all duration-300 ${social.color} hover:scale-105`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="relative p-6 rounded-2xl border border-gray-800 overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-r from-[#009F9D]/20 to-transparent rounded-full blur-2xl group-hover:animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-gray-300 font-medium">Available for work</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  I'm currently accepting new projects and would love to hear about what you're working on.
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#009F9D]/10 via-transparent to-[#009F9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Animated Form Particles - Only render after mount */}
              {mounted && particlePositions.map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-[1px] h-[1px] bg-[#009F9D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-formParticle"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 backdrop-blur-sm group-hover:border-[#009F9D]/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#009F9D] group-hover:to-[#00FFFC] transition-all duration-300">
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#009F9D]/20 to-[#009F9D]/10 border border-[#009F9D]/30 mb-6">
                    <MailCheck className="w-8 h-8 text-[#009F9D]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Message Sent!</h4>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-lg border border-[#009F9D] text-[#009F9D] hover:bg-[#009F9D] hover:text-black transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="relative group/input">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#009F9D] focus:ring-2 focus:ring-[#009F9D]/20 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#009F9D] to-transparent transform scale-x-0 group-hover/input:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                  <div className="relative group/input">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#009F9D] focus:ring-2 focus:ring-[#009F9D]/20 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#009F9D] to-transparent transform scale-x-0 group-hover/input:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                  <div className="relative group/input">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#009F9D] focus:ring-2 focus:ring-[#009F9D]/20 transition-all duration-300 resize-none"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#009F9D] to-transparent transform scale-x-0 group-hover/input:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                  {error && (
                    <div className="mt-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="relative group/button">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full px-6 py-3 rounded-lg font-semibold transition-all duration-500 overflow-hidden ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {/* Base gradient */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#009F9D] to-[#007F7D] opacity-100 group-hover/button:opacity-0 transition-opacity duration-500"></div>

                      {/* Hover gradient */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>

                      <span className="relative flex items-center justify-center gap-2 text-white">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}

              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-gray-400 text-sm text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-400 text-sm">Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="text-gray-400 text-sm">24h Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#009F9D] animate-pulse" style={{animationDelay: '1s'}}></div>
              <span className="text-gray-400 text-sm">Professional Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }

        @keyframes formParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-5px) translateX(5px); opacity: 1; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-ripple {
          animation: ripple 3s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-formParticle {
          animation: formParticle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}