"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Geometric decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4"
            >
              <span className="text-primary">Your</span>Name
            </motion.h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Work", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© {new Date().getFullYear()} YourName. All rights reserved.</p>
          <p className="text-background/50 text-sm">Built with Next.js & Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
