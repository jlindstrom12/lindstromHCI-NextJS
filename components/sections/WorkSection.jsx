"use client"

import AnimatedSection from "@/components/animated-section"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/projects"

export default function WorkSection() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-primary font-medium mb-4">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Selected Projects</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
            A collection of my favorite projects from internships and undergrad.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}