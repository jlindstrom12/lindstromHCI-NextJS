"use client"

import { motion } from "framer-motion"

export default function GeometricBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle top right */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
      />

      {/* Small circle bottom left */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-2xl"
      />

      {/* Geometric shapes */}
      <motion.div
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/10 rounded-3xl"
        style={{ transform: "rotate(15deg)" }}
      />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-primary/5 rounded-full"
      />

      {/* Dot pattern */}
      <div className="absolute top-1/2 left-10 grid grid-cols-4 gap-3 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        ))}
      </div>
    </div>
  )
}
