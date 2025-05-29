import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
// import Chatbot from "@/components/Chatbot";


export default function Home() {
  return (
    <div className="min-h-screen w-full flex transition-all duration-300">
      <div className="w-full  space-y-6">
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <Chatbot /> */}
      </div>
    </div>
  );
}
