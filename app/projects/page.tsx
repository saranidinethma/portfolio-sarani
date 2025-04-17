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
      title: "Flickco",
      category: "web",
      description:
        "A cinematic visuals and compelling narratives. Specializing in high-quality video production",
      technologies: ["React", "Tailwindcss"],
      image: "/images/flickco.png", // Update with your actual PNG path
      demoUrl: "https://www.flickco.info/",
      githubUrl: "https://github.com/saranidinethma/Flickco",
    },
    {
      id: 2,
      title: "Virtual Secret Santa",
      category: "web",
      description: "An interactive web app for organizing Secret Santa gift exchanges, featuring easy setup and a fun user experience.",
      technologies: ["React", "Express", "Tailwind CSS", "Node.js","PostgreSQL"],
      image: "/images/Screenshot 2025-04-17 at 09.40.12.png", // Update with your actual PNG path
      demoUrl: "https://virtual-secret-santa.vercel.app/",
      githubUrl: "https://github.com/saranidinethma/Virtual-Secret-Santa",
    },
    {
      id: 3,
      title: "We Neighbour",
      category: "mobile",
      description: "We Neighbour is an innovative platform designed to improve communication, enhance security, and foster community engagement in urban apartment complexes in Sri Lanka.  ",
      technologies: [ "Firebase", "Flutter", "MongoDB"],
      image: "/images/Screenshot 2025-04-17 at 10.14.51.png", // Update with your actual PNG path
      demoUrl: "https://www.weneighbour.live/",
      githubUrl: "https://github.com/alwaysPasindu/we_neighbour_project",
    },
    {
      id: 4,
      title: "Real-Time Event Ticketing System",
      category: "web",
      description: "A concurrent ticketing system for real-time event ticket management.",
      technologies: ["React", "Spring Boot ", "oop ", "java","REST API","Perodic polling"],
      image: "/images/Screenshot 2025-04-17 at 10.19.47.png", // Update with your actual PNG path
      demoUrl: "https://ticketing-system-frontend-phi.vercel.app/",
      githubUrl: "https://github.com/saranidinethma/Ticketing-System-Backend",
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
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
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