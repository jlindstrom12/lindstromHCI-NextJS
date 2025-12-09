"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Layout from "@/components/layout"
import AnimatedSection from "@/components/animated-section"
import { projects } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {project.year}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">{project.shortDescription}</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button asChild size="lg" className="group">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" size={18} />
                Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group bg-transparent">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={18} />
                View Code
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <AnimatedSection className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Project Details */}
      <AnimatedSection className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">About This Project</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This project was built with a focus on user experience, performance, and scalability. The architecture
                  was designed to handle growth while maintaining code quality and development velocity.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Key features include responsive design across all devices, optimized performance with lazy loading and
                  code splitting, and accessibility compliance following WCAG guidelines.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Other Projects */}
      <AnimatedSection className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <Link href={`/work/${p.id}`}>
                    <div className="relative h-40">
                      <Image src={p.image || "/placeholder.svg"} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-card-foreground hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{p.shortDescription}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  )
}
