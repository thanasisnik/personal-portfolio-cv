"use client";
import { motion } from "framer-motion";
import { SiAngular, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import SectionWrapper from "../SectionWrapper";
import { DiGithubBadge } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <SectionWrapper id="about" >
      <div className="max-w-4xl mx-auto md:pl-10 lg:pl-20 text-justify">
        {/* Πρώτη Παράγραφος */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg mb-6"
        >
         Hi, I’m Thanasis — a junior software developer with a background in programming. I enjoy solving real problems through code and has a strong interest in building things that work well and make sense. My goal is to write clean, maintainable code and create solutions that are both practical and thoughtful. From front-end to back-end logic, I aim to build systems that are efficient, secure, and easy to maintain — always in line with modern development practices.
        </motion.p>

        {/* Δεύτερη Παράγραφος */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 "
        >
          <div className="mb-8">
            {/* Header με accent underline */}
            <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-semibold mb-4 relative inline-block"
            >
                Tech Stack
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
            </motion.h3>

            {/* Λίστα με grid layout */}
            <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="grid grid-cols-2 gap-2 md:grid-cols-3"
            >
                {["Java", "Python", "JavaScript", "NodeJS", "SQL", "MongoDB"].map((tech) => (
                <motion.li
                    key={tech}
                    whileHover={{ scale: 1.02 }}
                    className="text-lg p-2 hover:bg-gray-100/30 dark:hover:bg-gray-800/30 rounded-lg transition-colors"
                >
                    → {tech}
                </motion.li>
                ))}
            </motion.ul>
            </div>

            <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg mb-4 mt-6 font-medium text-accent"
            >
            Extra:
            </motion.p>
          <div className="flex gap-4">
            {/* React - Κυανό (#61DAFB) */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <SiReact 
                className="text-3xl text-[#61DAFB] hover:opacity-80" 
                />
            </motion.div>

            {/* Angular - Κόκκινο (#DD0031) */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <SiAngular 
                className="text-3xl text-[#DD0031] hover:opacity-80" 
                />
            </motion.div>

            {/* Next.js - Μαύρο/Λευκό (default) */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <SiNextdotjs 
                className="text-3xl hover:opacity-80 dark:text-white text-black" 
                />
            </motion.div>

            {/* Tailwind - Κυανό (#38BDF8) */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <SiTailwindcss 
                className="text-3xl text-[#38BDF8] hover:opacity-80" 
                />
            </motion.div>

            {/* GitHub - Λευκό/Μαύρο */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <FaGithub 
                className="text-3xl hover:opacity-80 dark:text-white text-black" 
                />
            </motion.div>
          </div>
        </motion.div>

        {/* Τρίτη Παράγραφος */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg mt-10"
        >
          I’m always eager to learn and grow, constantly seeking ways to improve my skills and take the next step in my career. While I’m still building my professional experience, I’m currently working as a freelancer, applying my knowledge in real-world projects, and continuing to expand my expertise through education. I keep myself up to date with the latest industry trends to ensure I’m ready to tackle new challenges and deliver high-quality solutions.

          Outside of work, I enjoy planning trips and exploring new destinations. I also make time to stay informed on technology trends through podcasts, articles, and various other resources, keeping my curiosity sharp and my passion for development alive.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}