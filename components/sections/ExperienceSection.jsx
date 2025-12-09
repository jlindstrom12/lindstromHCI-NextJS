"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { experience } from "@/lib/data"

export default function ExperienceSection() {
  return (
    <AnimatedSection className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]" />
                <span className="text-sm text-muted-foreground">{job.period}</span>
                <h3 className="text-xl font-semibold text-foreground mt-1">{job.title}</h3>
                <p className="text-primary font-medium">{job.company}</p>
                <p className="text-muted-foreground mt-2 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}