// components/ScrollIndicator.tsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  // Intersection Observer για Hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("bounce");
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.9 } // Εμφανίζεται μόνο όταν το Hero είναι 80% ορατό
    );

    const heroSection = document.getElementById("hero");
    if (heroSection) observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  // Bounce animation
  useEffect(() => {
    const sequence = async () => {
      while (isVisible) {
        await controls.start("bounce");
        await new Promise(resolve => setTimeout(resolve, 2000)); // Repeat every 2s
      }
    };
    sequence();
  }, [isVisible, controls]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div
        variants={{
          bounce: {
            y: [0, 10, 0],
            transition: {
              duration: 1,
              ease: "easeOut"
            }
          }
        }}
        animate={controls}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
      </motion.div>
    </motion.div>
  );
}