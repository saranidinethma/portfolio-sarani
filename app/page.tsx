// app/page.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, ExternalLink, User } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="text-primary">Hello, I'm</span> Sarani Liyanage
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm a full-stack web developer passionate about creating beautiful, functional websites and applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
             
            </div>
          </motion.div>
        </div>
      </section>
{/* Featured Projects */}
<section className="py-16 px-4 bg-muted/50">
  <div className="container mx-auto max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Here are some of my recent works that showcase my skills and expertise.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     {/* Project 1: Flickco */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  <div className="group relative overflow-hidden rounded-lg bg-background border shadow-sm hover:shadow-md transition-all">
    <div className="aspect-video bg-muted relative overflow-hidden">
      <img
        src="/images/Screenshot 2025-04-15 at 13.11.24.png" // Replace with the actual path to your image
        alt="Flickco Project Screenshot"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">Flickco</h3>
      <p className="text-muted-foreground mb-4">
      At Flickco, we bring stories to life through cinematic visuals and compelling narratives. Specializing in high-quality video production, we craft stunning music videos, commercials, and creative projects that leave a
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Tailwind CSS</span>
      </div>
      <div className="flex gap-4">
        <Link
          href="images/Screenshot 2025-04-15 at 13.11.24.png"
          className="text-sm font-medium text-primary hover:underline inline-flex items-center"
        >
          View Details <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
        <Link
          href="https://www.flickco.info/"
          className="text-sm font-medium text-muted-foreground hover:text-primary inline-flex items-center"
        >
          Live Demo <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  </div>
</motion.div>

      {/* Project 2: Virtual Secret Santa */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="group relative overflow-hidden rounded-lg bg-background border shadow-sm hover:shadow-md transition-all">
          <div className="aspect-video bg-muted relative overflow-hidden">
          <img
        src="/images/Screenshot 2025-04-17 at 09.40.12.png" // Replace with the actual path to your image
        alt="Flickco Project Screenshot"
        className="w-full h-full object-cover"
      />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Virtual Secret Santa</h3>
            <p className="text-muted-foreground mb-4">
              An interactive web app for organizing Secret Santa gift exchanges, featuring easy setup and a fun user experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Node.js</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Express</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PostgreSQL</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="/projects/virtual-secret-santa"
                className="text-sm font-medium text-primary hover:underline inline-flex items-center"
              >
                View Details <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
              <Link
                href="https://virtual-secret-santa.vercel.app/"
                className="text-sm font-medium text-muted-foreground hover:text-primary inline-flex items-center"
              >
                Live Demo <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="text-center mt-12">
      <Button asChild variant="outline">
        <Link href="/projects">View All Projects</Link>
      </Button>
    </div>
  </div>
</section>

      {/* Skills Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in these technologies and constantly expand my knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "UI/UX Design", "MongoDB"].map(
              (skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-background border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all"
                >
                  <Code className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium">{skill}</h3>
                </motion.div>
              ),
            )}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground mb-4">
                I'm a passionate developer with over 5 years of experience creating web applications. I love solving
                complex problems and turning ideas into reality.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More <User className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can collaborate to bring your
              ideas to life.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}