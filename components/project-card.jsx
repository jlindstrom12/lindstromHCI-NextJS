"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`work/${project.id}`} className="group block">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
        >
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowUpRight size={20} className="text-primary-foreground" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                {project.year}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.shortDescription}</p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {project.tools.slice(0, 3).map((tool) => (
                <span key={tool} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {tool}
                </span>
              ))}
              {project.tools.length > 3 && (
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  +{project.tools.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
