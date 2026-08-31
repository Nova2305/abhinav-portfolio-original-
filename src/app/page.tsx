import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AIEngineering from "@/components/AiEngineering";
import CloudMLOps from "@/components/CloudMLOps";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseRat from "@/components/MouseRat";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] text-zinc-950">

      <MouseRat />

      <Navbar />
      <Hero />
      <About />
      <AIEngineering />
      <CloudMLOps />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />

    </main>
  );
}