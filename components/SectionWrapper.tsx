// components/SectionWrapper.tsx
"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-25% 10px" }}
      transition={{ duration: 0.7 }}
      className="min-h-screen py-20 px-8"
    >
      {children}
    </motion.section>
  );
}