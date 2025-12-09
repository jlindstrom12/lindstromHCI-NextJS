"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { skillCategories } from "@/lib/data"

export default function SkillsSection() {
  return (
    <AnimatedSection className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I Do Best</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-4">{category.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}