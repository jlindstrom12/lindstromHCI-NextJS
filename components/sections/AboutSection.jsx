"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Download, MapPin, Briefcase } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils.js"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/iceland_portrait.JPG" alt="About me" width={500} height={600} className="object-cover" />
              </div>

            
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection className="order-1 lg:order-2">
            <p className="text-primary font-medium mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Crafting Digital Experiences</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a Carnegie Mellon Alumni that double majored in Information Systems and Human-Compter Interactions. During my studies I focused on front-end web development and user experiences. However, I am looking to expand my horizons and understand as many aspects of tecnology as I can.
              </p>
              <p>
                Outside of work I got my advanced scuba certification, a huge lego star wars collection, and I do yoga nearly every day. I love to stay active and spend time on the things I enjoy most in life. 
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin size={18} className="text-primary" />
              <span>Chicago, IL</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("contact")}>
                Let's Talk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              {/* <Button variant="outline" size="lg" className="group bg-transparent">
                <Download className="mr-2" size={18} />
                Download CV
              </Button> */}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}