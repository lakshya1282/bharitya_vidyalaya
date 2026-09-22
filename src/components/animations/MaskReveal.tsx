"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function MaskReveal({ 
  children, 
  direction = "bottom-up",
  delay = 0,
  duration = 0.8,
  className = ""
}: { 
  children: React.ReactNode, 
  direction?: "bottom-up" | "top-down" | "left-right" | "right-left",
  delay?: number,
  duration?: number,
  className?: string
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getInitialY = () => {
    if (direction === "bottom-up") return "100%";
    if (direction === "top-down") return "-100%";
    return 0;
  };

  const getInitialX = () => {
    if (direction === "left-right") return "-100%";
    if (direction === "right-left") return "100%";
    return 0;
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: getInitialY(), x: getInitialX() }}
        animate={isInView ? { y: 0, x: 0 } : { y: getInitialY(), x: getInitialX() }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
      >
        {children}
      </motion.div>
    </div>
  );
}
