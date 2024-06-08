"use client";

import { motion } from "framer-motion";

export default function template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
