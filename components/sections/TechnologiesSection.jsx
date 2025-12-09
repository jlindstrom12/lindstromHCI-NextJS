"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { technologies } from "@/lib/data"

export default function TechnologiesSection() {
  return (
    <AnimatedSection className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technologies I Work With</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <span className="font-medium text-card-foreground">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}