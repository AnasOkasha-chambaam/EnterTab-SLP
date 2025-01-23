"use client";
import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const ProgressiveTitle = ({ title }: { title: string }) => {
  const titleRef = React.useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 95%", "end 25%"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.span ref={titleRef} className="w-fit">
      <motion.span className="text-muted">{title}</motion.span>
      <motion.span
        className="absolute inset-y-0 left-0 block overflow-clip"
        style={{
          width: progress,
        }}
      >
        <motion.span className="min-w-max block">{title}</motion.span>
      </motion.span>
    </motion.span>
  );
};

export default ProgressiveTitle;
