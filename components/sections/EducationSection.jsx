"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { education } from "@/lib/data"

export default function EducationSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Education</h2>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
                <h3 className="text-xl font-semibold text-foreground mt-1">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}