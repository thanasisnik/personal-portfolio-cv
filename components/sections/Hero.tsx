"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ScrollIndicator from "../ScrollIndicator";

export default function Hero() {
    return (
        <motion.section 
            id="hero"
            initial={{ opacity: 0 }}
            animate = {{ opacity: 1}}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col justify-center text-accent  dark:text-gray-50 items-start px-8 md:px-16 lg:px-32"
        >
            <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="text-4xl md:text-6xl font-bold  mb-4"
            >
                Thanasis Nikolopoulos
            </motion.h1>

            <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-4xl text-text"
      >
        <Typewriter
          words={[
            "Junior Developer",
            "Tech Enthusiast",
            "Problem Solver",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          
        />
      </motion.div>
      <ScrollIndicator />
    </motion.section>

    );
}