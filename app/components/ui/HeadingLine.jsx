"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeadingLine() {
  return (
    <div className="">
      <svg
        viewBox="0 0 100 10"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#d8d8d8"
        width={110}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          strokeWidth={2}
          d="M 0, 5 L 100, 5"
        />
      </svg>
    </div>
  );
}
