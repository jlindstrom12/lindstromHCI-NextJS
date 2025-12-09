"use client"

import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils.js"

export default function CTASection() {
  return (
    <AnimatedSection className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-background blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-background blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
          want to say hi, feel free to reach out!
        </p>
        <Button size="lg" variant="secondary" className="group" onClick={() => scrollToSection("contact")}>
          Get In Touch
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
        </Button>
      </div>
    </AnimatedSection>
  )
}