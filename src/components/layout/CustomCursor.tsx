"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const dotX = useMotionValue(-100);
    const dotY = useMotionValue(-100);
    const ringX = useMotionValue(-100);
    const ringY = useMotionValue(-100);

    const springX = useSpring(ringX, { stiffness: 120, damping: 20, mass: 0.5 });
    const springY = useSpring(ringY, { stiffness: 120, damping: 20, mass: 0.5 });

    const isHoveringRef = useRef(false);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            dotX.set(e.clientX);
            dotY.set(e.clientY);
            ringX.set(e.clientX);
            ringY.set(e.clientY);
        };

        const handleEnter = () => { isHoveringRef.current = true; };
        const handleLeave = () => { isHoveringRef.current = false; };

        window.addEventListener("mousemove", handleMove);

        const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea");
        interactives.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            window.removeEventListener("mousemove", handleMove);
            interactives.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, [dotX, dotY, ringX, ringY]);

    return (
        <>
            {/* Dot — instant */}
            <motion.div
                className="pointer-events-none fixed z-[9999] top-0 left-0 h-2 w-2 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"
                style={{ x: dotX, y: dotY }}
            />
            {/* Ring — spring lag */}
            <motion.div
                className="pointer-events-none fixed z-[9998] top-0 left-0 h-9 w-9 rounded-full border border-primary/50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{ x: springX, y: springY }}
            />
        </>
    );
}
