"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";


export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect( () => {
        const moveCursor = ( e: MouseEvent) => {
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY- 8);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50
            bg-gray-600/80 dark:bg-white/80  
            shadow-[0_0_30px_10px_rgba(100,100,100,0.3)] dark:shadow-[0_0_35px_10px_rgba(255,255,255,0.3)]"
        style={{
            x: cursorX,
            y: cursorY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        />
    );
}