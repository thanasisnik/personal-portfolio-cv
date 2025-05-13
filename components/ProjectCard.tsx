"use client";

import { motion } from "framer-motion";
import { FiGithub, FiGlobe } from "react-icons/fi"; // Added FiGlobe icon for website
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string; // Προαιρετική φωτογραφία
  githubLink?: string;
  demoLink?: string;
  website?: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubLink,
  website
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.06,
        boxShadow: "0 0 15px var(--accent)",
        borderColor: "var(--accent)",
        transition: { 
            duration: 0.3,
            ease: "easeOut"
        }
      }}
      className=" w-full max-w-2xl rounded-xl 
    backdrop-blur-sm 
    bg-white/10 dark:bg-gray-800/50 
    border border-light dark:border-dark
    overflow-hidden transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        {/* Εικόνα (Αριστερά) - Placeholder αν λείπει */}
        <div className="w-full md:w-1/3 p-4 flex justify-center items-center bg-gray-100/30 dark:bg-gray-900/30">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={300}
              height={250}
              className="object-cover rounded-lg"
            />
          ) : (
            <FiGithub className="text-6xl text-gray-400 dark:text-gray-600" />
          )}
        </div>

        {/* Περιγραφή (Δεξιά) */}
        <div className="w-full md:w-2/3 p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            {description}
          </p>
          
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:underline"
            >
              <FiGlobe className="mr-2" />
              View Website
            </a>
          ) : githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:underline"
            >
              <FiGithub className="mr-2" />
              View on GitHub
            </a>
          ) : null}
        
        </div>
      </div>
    </motion.div>
  );
}