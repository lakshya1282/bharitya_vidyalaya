"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

export function SplitTextReveal({
  children,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.8,
  className = ""
}: {
  children: React.ReactNode,
  delay?: number,
  staggerDelay?: number,
  duration?: number,
  className?: string
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Convert children to an array to animate them staggered
  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => (
        <div key={index} className="overflow-hidden inline-block w-full">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration,
              delay: delay + index * staggerDelay,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {child}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
