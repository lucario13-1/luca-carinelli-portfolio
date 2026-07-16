"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      className="mt-16 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1 text-muted-foreground/60"
      >
        <span className="text-[11px] font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown className="size-4" />
      </motion.div>
    </motion.div>
  );
}
