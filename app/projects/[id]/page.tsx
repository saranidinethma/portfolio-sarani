// app/projects/[id]/page.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, ExternalLink, Github, Tag } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"

export default function ProjectDetail() {
  const { id } = useParams()

  // Project data from app/projects/page.tsx
  const projects = [
    {
      id: 1,
      title: "Flickco",
      category: "web",
      description:
        "A cinematic visuals and compelling narratives. Specializing in high-quality video production",
      longDescription: `
        Flickco is a platform dedicated to bringing stories to life through cinematic visuals and compelling narratives. Specializing in high-quality video production, we craft stunning music videos, commercials, and creative projects that leave a lasting impact. The project focuses on delivering a seamless user experience with a modern, responsive design.
        
        The frontend is built with React and styled with Tailwind CSS, ensuring a visually appealing and performant interface. The project emphasizes accessibility and smooth animations to enhance user engagement.
        
        Key features include a portfolio showcase, contact forms, and optimized performance for all devices.
      `,
      technologies: ["React", "Tailwind CSS"],
      image: "/images/flickco.png",
      demoUrl: "https://www.flickco.info/",
      githubUrl: "https://github.com/saranidinethma/Flickco",
      date: "January 2025",
      challenges: [
        "Ensuring high-quality video playback across devices",
        "Optimizing performance for media-heavy content",
        "Creating an intuitive and accessible user interface",
      ],
      solutions: [
        "Implemented adaptive streaming for videos",
        "Used lazy loading and image optimization techniques",
        "Conducted user testing and applied feedback for UI improvements",
      ],
    },
    {
      id: 2,
      title: "Virtual Secret Santa",
      category: "web",
      description:
        "An interactive web app for organizing Secret Santa gift exchanges, featuring easy setup and a fun user experience.",
      longDescription: `
        Virtual Secret Santa is an interactive web application designed to simplify and enhance the Secret Santa gift exchange experience. Users can create groups, set budgets, and automatically match participants, all within a fun and engaging interface.
        
        The frontend is built with React and styled with Tailwind CSS for a modern, responsive design. The backend uses Node.js with Express and PostgreSQL for robust data management and secure user authentication.
        
        Key features include group creation, automated matching, wish list sharing, and real-time notifications.
      `,
      technologies: ["React", "Express", "Tailwind CSS", "Node.js", "PostgreSQL"],
      image: "/images/Screenshot 2025-04-17 at 09.40.12.png",
      demoUrl: "https://virtual-secret-santa.vercel.app/",
      githubUrl: "https://github.com/saranidinethma/Virtual-Secret-Santa",
      date: "March 2025",
      challenges: [
        "Ensuring secure and random participant matching",
        "Handling real-time notifications",
        "Creating a scalable backend architecture",
      ],
      solutions: [
        "Implemented a secure randomization algorithm",
        "Used WebSockets for real-time updates",
        "Designed a modular Express backend with PostgreSQL",
      ],
    },
    {
      id: 3,
      title: "We Neighbour",
      category: "mobile",
      description:
        "We Neighbour is an innovative platform designed to improve communication, enhance security, and foster community engagement in urban apartment complexes in Sri Lanka.",
      longDescription: `
        We Neighbour is a mobile application aimed at enhancing community living in urban apartment complexes in Sri Lanka. The platform facilitates communication, improves security, and fosters engagement among residents through features like announcements, facility bookings, and visitor management.
        
        The app is built using Flutter for cross-platform compatibility and Firebase for real-time data synchronization. MongoDB is used for scalable data storage.
        
        Key features include real-time announcements, facility reservation systems, and secure visitor tracking.
      `,
      technologies: ["Firebase", "Flutter", "MongoDB"],
      image: "/images/Screenshot 2025-04-17 at 10.14.51.png",
      demoUrl: "https://www.weneighbour.live/",
      githubUrl: "https://github.com/alwaysPasindu/we_neighbour_project",
      date: "June 2024",
      challenges: [
        "Ensuring cross-platform compatibility",
        "Managing real-time data synchronization",
        "Implementing secure visitor management",
      ],
      solutions: [
        "Used Flutter for consistent UI across iOS and Android",
        "Leveraged Firebase for real-time updates",
        "Implemented encrypted authentication for visitor tracking",
      ],
    },
    {
      id: 4,
      title: "Real-Time Event Ticketing System",
      category: "web",
      description:
        "A concurrent ticketing system for real-time event ticket management.",
      longDescription: `
        The Real-Time Event Ticketing System is a web application designed for efficient and concurrent ticket management for events. It allows users to browse events, purchase tickets, and receive real-time updates on ticket availability.
        
        The frontend is built with React and styled with Tailwind CSS, while the backend uses Spring Boot with Java, leveraging REST APIs and periodic polling for real-time updates. The system is designed with object-oriented principles for maintainability.
        
        Key features include event browsing, secure ticket purchasing, and real-time availability tracking.
      `,
      technologies: ["React", "Spring Boot", "OOP", "Java", "REST API", "Periodic Polling"],
      image: "/images/Screenshot 2025-04-17 at 10.19.47.png",
      demoUrl: "https://ticketing-system-frontend-phi.vercel.app/",
      githubUrl: "https://github.com/saranidinethma/Ticketing-System-Backend",
      date: "September 2024", 
      challenges: [
        "Handling concurrent ticket purchases",
        "Ensuring real-time availability updates",
        "Designing a scalable REST API",
      ],
      solutions: [
        "Implemented optimistic locking for concurrent transactions",
        "Used periodic polling for real-time updates",
        "Designed a modular REST API with Spring Boot",
      ],
    },
  ]

  // Find the project with the matching id
  const project = projects.find((p) => p.id === Number(id))

  // If no project is found, trigger notFound
  if (!project) {
    notFound()
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
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
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
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Application
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
              {projects
                .filter((p) => p.id !== Number(id))
                .slice(0, 3)
                .map((p) => (
                  <Link key={p.id} href={`/projects/${p.id}`} className="block group">
                    <div className="bg-muted aspect-video rounded-lg overflow-hidden relative mb-2">
                      <img
                        src={p.image}
                        alt={`${p.title} preview`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 group-hover:from-primary/30 transition-all" />
                    </div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">{p.title}</h3>
                  </Link>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}