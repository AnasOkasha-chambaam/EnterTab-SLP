"use client";
import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const MovingUpImage = ({ children }: { children: React.ReactNode }) => {
  const imageContainerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start 95%", "end 25%"],
  });
  const translateY = useTransform(scrollYProgress, [0, 0.5], ["50%", "0%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={imageContainerRef}
      style={{ y: translateY, rotate, opacity }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default MovingUpImage;
