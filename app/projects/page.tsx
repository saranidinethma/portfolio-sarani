// app/projects/page.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web",
      description: "A collaborative task management application with real-time updates and team functionality.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      category: "mobile",
      description: "A mobile application for tracking workouts, nutrition, and fitness progress.",
      technologies: ["React Native", "TypeScript", "GraphQL", "MongoDB"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "web",
      description: "A weather dashboard with location-based forecasts and interactive maps.",
      technologies: ["JavaScript", "OpenWeather API", "Mapbox", "Chart.js"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "web",
      description: "A responsive portfolio website showcasing projects and skills.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Recipe Finder",
      category: "mobile",
      description: "A mobile app for finding recipes based on available ingredients.",
      technologies: ["React Native", "Redux", "Spoonacular API"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and the technologies I've been working with.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-muted rounded-lg p-1">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className="rounded-md"
            >
              All
            </Button>
            <Button
              variant={filter === "web" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("web")}
              className="rounded-md"
            >
              Web
            </Button>
            <Button
              variant={filter === "mobile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("mobile")}
              className="rounded-md"
            >
              Mobile
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-lg bg-background border shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                    >
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                    <Link
                      href={project.demoUrl}
                      className="text-sm font-medium text-muted-foreground hover:text-primary inline-flex items-center"
                    >
                      Live Demo <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="text-sm font-medium text-muted-foreground hover:text-primary inline-flex items-center ml-auto"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}