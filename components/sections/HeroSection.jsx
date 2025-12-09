"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/data"
import { scrollToSection } from "@/lib/utils.js"

export default function HeroSection() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const n = 5000 // number of particles
    let ps = [] // array of particles
    let frameCount = 0

    // Generate a random ocean color for lines (blue/teal/turquoise)
    const randomOceanColor = () => {
      const hue = Math.random() * 30 + 180 // 180-210
      const saturation = Math.random() * 40 + 50 // 50-90
      const brightness = Math.random() * 40 + 60 // 60-100
      return { h: hue, s: saturation, b: brightness }
    }

    // HSB to RGB conversion
    const hsbToRgb = (h, s, b) => {
      s = s / 100
      b = b / 100
      const k = (n) => (n + h / 60) % 6
      const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)))
      return [255 * f(5), 255 * f(3), 255 * f(1)]
    }

    // Simple noise function (Perlin-like)
    const noise = (x, y) => {
      return (Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123) % 1
    }

    // Initialize particles
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < n; i++) {
      ps.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: randomOceanColor()
      })
    }

    const animate = () => {
      frameCount++
      const f1 = 0.015 * frameCount
      const f2 = 0.01 * frameCount

      for (let i = 0; i < n; i++) {
        const p = ps[i]

        const theta = noise(0.003 * p.x, 0.003 * p.y) * 4 * Math.PI
        const ax = Math.cos(theta)
        const ay = Math.sin(theta)
        const bx = Math.cos(f1)
        const by = Math.cos(f2)

        // Lerp between a and b
        const vx = ax + (bx - ax) * 0.4
        const vy = ay + (by - ay) * 0.4

        p.x += vx
        p.y += vy

        // Reset if out of bounds
        if (
          Math.random() < 0.005 ||
          p.x < 0 || p.x > canvas.width ||
          p.y < 0 || p.y > canvas.height
        ) {
          ps[i] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            color: randomOceanColor()
          }
          continue
        }

        // Fade edges
        const distanceToCenter = Math.sqrt(
          Math.pow(p.x - canvas.width / 2, 2) + 
          Math.pow(p.y - canvas.height / 2, 2)
        )
        const squareSize = Math.min(canvas.width, canvas.height) / 1.5
        const opacity = Math.max(0, Math.min(255, 
          255 - (distanceToCenter / (squareSize / 2)) * 255
        ))

        const [r, g, b] = hsbToRgb(p.color.h, p.color.s, p.color.b)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity / 255})`
        ctx.fillRect(p.x, p.y, 1, 1)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* P5.js-style Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'white' }}
      />

      {/* Content Overlay */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            >
              Jonathan Lindstrom
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-12"
            >
              Designer . Programmer . Diver
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="group" onClick={() => scrollToSection("work")}>
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 mt-12 justify-center"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors backdrop-blur-sm bg-background/50"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}