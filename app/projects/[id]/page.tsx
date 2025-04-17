// app/projects/[id]/page.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, ExternalLink, Github, Tag } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

export default function ProjectDetail() {
  const { id } = useParams()

  // This would typically come from an API or database
  const project = {
    id: Number(id),
    title: `Project ${id}`,
    description: "A comprehensive project showcasing various technologies and problem-solving approaches.",
    longDescription: `
      This project was developed to address specific challenges in the industry. It features a modern architecture with a focus on performance, scalability, and user experience.
      
      The frontend is built with React and Next.js, providing a fast and responsive interface. The backend uses Node.js with Express, connected to a MongoDB database for data storage.
      
      Key features include user authentication, real-time updates, data visualization, and a responsive design that works across all devices.
    `,
    technologies: ["React",   "Tailwind CSS"],
    image: "/images/flickco.png",
    demoUrl: "https://www.flickco.info/",
    githubUrl: "https://github.com/saranidinethma/Flickco",
    date: "January 2023",
    category: "Web Application",
    challenges: [
      
      "Creating an intuitive and accessible user interface",
    ],
    solutions: [
    
      "Conducted user testing and applied feedback for UI improvements",
    ],
  }

  return (
    <div className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="aspect-video bg-muted rounded-lg relative overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5" />
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold mr-auto">{project.title}</h1>
            <Link href={project.demoUrl} className="inline-flex items-center gap-1 text-sm">
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </Link>
            <Link href={project.githubUrl} className="inline-flex items-center gap-1 text-sm">
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              {project.date}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Tag className="mr-2 h-4 w-4" />
              {project.category}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="text-muted-foreground whitespace-pre-line">{project.longDescription}</div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Challenges</h2>
              <ul className="space-y-2 text-muted-foreground">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Solutions</h2>
              <ul className="space-y-2 text-muted-foreground">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3]
                .filter((pid) => pid !== Number(id))
                .map((pid) => (
                  <Link key={pid} href={`/projects/${pid}`} className="block group">
                    <div className="bg-muted aspect-video rounded-lg overflow-hidden relative mb-2">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 group-hover:from-primary/30 transition-all" />
                    </div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">Project {pid}</h3>
                  </Link>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}