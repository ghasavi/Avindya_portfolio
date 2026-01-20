import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 pt-20">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold">Hi, I’m Avi 👋</h1>
        <p className="mt-4 text-gray-500 text-lg">
          Software Engineering Student | Web Developer
        </p>

        {/* About Section */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
