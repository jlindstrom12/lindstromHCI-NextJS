"use client"

import Layout from "@/components/layout"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import EducationSection from "@/components/sections/EducationSection"
import SkillsSection from "@/components/sections/SkillsSection"
import WorkSection from "@/components/sections/WorkSection"
import TechnologiesSection from "@/components/sections/TechnologiesSection"
import ContactSection from "@/components/sections/ContactSection"
import CTASection from "@/components/sections/CTASection"

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
      <CTASection />
      {/* 
      <EducationSection />
      <SkillsSection />
      <TechnologiesSection /> */}
    </Layout>
  )
}