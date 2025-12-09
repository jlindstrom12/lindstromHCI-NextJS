"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="group bg-transparent">
                <Link href="/">
                  <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
                  Go Back
                </Link>
              </Button>
              <Button asChild className="group">
                <Link href="/">
                  <Home className="mr-2" size={18} />
                  Home Page
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
