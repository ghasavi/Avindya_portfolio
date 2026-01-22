import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      {/* Banner Section */}
      <section
        id="hero"
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 md:px-20 pt-36 pb-20"
      >
        {/* Left side: Name + Paragraph + Links */}
        <div className="md:w-1/2 flex flex-col justify-center items-start mb-10 md:mb-0 z-10">
          <h1 className="text-5xl font-bold mb-4 text-black">
            Avindya G.H.S.
          </h1>

          <p className="text-gray-700 text-lg max-w-lg mb-6">
            Software Engineering Student | Web Developer | Passionate about building clean and modern web applications.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5 mb-4">
            <a
              href="https://github.com/ghasAvi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <Github size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/avindya-g-h-s-811186380"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <Linkedin size={28} />
            </a>

            {/* Email display */}
            <div className="flex items-center gap-2">
              <Mail size={28} className="text-gray-700" />
              <span className="text-gray-700 select-all">ghasavindya@gmail.com</span>
            </div>
          </div>

          {/* Download CV Button */}
          <a
            href="/Avindya_G.H.S._CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* Right side: Profile Picture */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg border-4 border-gray-200">
            <img
              src="/profile.png" // make sure profile.png is in the public folder
              alt="Avindya G.H.S."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Education id="education" />
      <Contact id="contact" />
    </>
  );
}
