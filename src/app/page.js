import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      {/* Banner Section */}
      <section
        id="hero"
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 md:px-20 py-20"
      >
        {/* Left side: Name + Paragraph */}
        <div className="md:w-1/2 flex flex-col justify-center items-start mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Avindya G.H.S.</h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Software Engineering Student | Web Developer | Passionate about building clean and modern web applications.
          </p>
        </div>

        {/* Right side: Profile Picture */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg border-4 border-gray-200">
            <img
              src="/profile.jpg" // put your picture in the public folder
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
      <Contact id="contact" />
    </>
  );
}
