"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const dotX = useMotionValue(-100);
    const dotY = useMotionValue(-100);
    const ringX = useMotionValue(-100);
    const ringY = useMotionValue(-100);
    const [hovering, setHovering] = useState(false);
    const [clicking, setClicking] = useState(false);

    const springX = useSpring(ringX, { stiffness: 130, damping: 22, mass: 0.5 });
    const springY = useSpring(ringY, { stiffness: 130, damping: 22, mass: 0.5 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            dotX.set(e.clientX);
            dotY.set(e.clientY);
            ringX.set(e.clientX);
            ringY.set(e.clientY);
        };

        const handleEnter = () => setHovering(true);
        const handleLeave = () => setHovering(false);
        const handleDown = () => setClicking(true);
        const handleUp = () => setClicking(false);

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mousedown", handleDown);
        window.addEventListener("mouseup", handleUp);

        const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select, label");
        interactives.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mouseup", handleUp);
            interactives.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, [dotX, dotY, ringX, ringY]);

    return (
        <>
            {/* Inner dot — instant, shrinks on click */}
            <motion.div
                className="pointer-events-none fixed z-[9999] top-0 left-0 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"
                style={{ x: dotX, y: dotY }}
                animate={{
                    width: clicking ? 6 : hovering ? 10 : 8,
                    height: clicking ? 6 : hovering ? 10 : 8,
                    opacity: clicking ? 0.6 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
            {/* Outer ring — spring lag, grows on hover */}
            <motion.div
                className="pointer-events-none fixed z-[9998] top-0 left-0 rounded-full border border-primary/60 -translate-x-1/2 -translate-y-1/2"
                style={{ x: springX, y: springY }}
                animate={{
                    width: clicking ? 28 : hovering ? 44 : 36,
                    height: clicking ? 28 : hovering ? 44 : 36,
                    borderColor: hovering ? "rgba(74,222,128,0.9)" : "rgba(74,222,128,0.5)",
                    backgroundColor: hovering ? "rgba(74,222,128,0.06)" : "transparent",
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
