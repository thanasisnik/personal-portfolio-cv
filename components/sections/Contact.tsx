"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-4">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-light mb-8">Let's Connect</h2>
        
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-center gap-2">
            <FiMail className="text-lg" />
            <a 
              href="mailto:thanasisnikolopoulos@outlook.com" 
              className="hover:underline hover:text-accent transition-colors"
            >
              thanasisnikolopoulos@outlook.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-2">
            <FiPhone className="text-lg" />
            <a 
              href="tel:+306987053941" 
              className="hover:underline hover:text-accent transition-colors"
            >
              +30 6987053941
            </a>
          </div>

          <div className="flex justify-center gap-5 mt-7">
            <a href="https://github.com/thanasisnik" target="_blank" ><FiGithub className="text-xl hover:text-accent" /></a>
            <a href="https://linkedin.com/in/thanasis-nikolopoulos-126a44233" target="_blank"><FiLinkedin className="text-xl hover:text-accent" /></a>
          </div>
        </div>
      </motion.div>

      {/* Closing Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-md text-center border-t border-gray-200 dark:border-gray-700 pt-8"
      >
        <p className="italic font-light text-lg">
          "Simplicity is the ultimate sophistication." 
          <span className="block mt-2 text-base">— Leonardo da Vinci</span>
        </p>
      </motion.div>
    </section>
  );
}