"use client";
import { motion } from "framer-motion";

import React from "react";

const svgvariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const pathvariant = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

export default function Loader() {
  return (
    <div>
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{
          delay: 1,
          duration: 1,
          type: "tween",
          ease: [0.76, 0.1, 0.34, 1], //These numbers specify easing speeds 1 is full ease. 0 is no ease//
        }}
        className="fixed top-0 left-0 z-[9999] w-full h-full bg-black "
      >
        <div className="p-4 md:p-10 flex flex-col justify-between h-full ">
          <span className="font-semibold text-white/40 ">John Doe</span>
          <div className="flex  justify-center  ">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={100}
              height={100}
              stroke="white"
              fill="none"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={svgvariant}
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M3 9a2 2 0 0 1 2-2h1.5a2 2 0 0 0 1.6-.8l1.05-1.4a2 2 0 0 1 1.6-.8h2.5a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
                variants={pathvariant}
              />
              <motion.circle cx={12} cy={13} r={3.5} variants={pathvariant} />
            </motion.svg>
          </div>

          <span className="text-text ">Loading...</span>
        </div>
      </motion.div>
    </div>
  );
}
