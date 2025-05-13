"use client";

import SectionWrapper from "../SectionWrapper";
import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="space-y-8 flex flex-col justify-center items-center ">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="flex flex-col lg:ml-30  lg:mt-20 mt-6 space-y-8">
          
          <ProjectCard
            imageUrl="/img/pestSite.png"
            title="PestXperts Website"
            description="Professional pest-control, disinfection & integrated pest-management site — built on vanilla JavaScript, semantic HTML, Tailwind CSS and a touch of custom styling."
            website="https://pestxperts.gr/"
          />

          
          <ProjectCard
            title="GitHub Repositories"
            description="Διάφορα μικρά projects και experiments σε frontend και backend. Συνεχής ενημέρωση!"
            githubLink="https://github.com/thanasisnik"
          />
        </div>
        
      </div>
    </SectionWrapper>
  );
}