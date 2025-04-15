// app/about/page.tsx
"use client"

import { motion } from "framer-motion"
import { Calendar, Code, Download, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Sarani Liyanage , a passionate Full Stack Developer and UI/UX Designer . I
                enjoy creating beautiful, functional, and user-friendly digital experiences.
              </p>
              
              <p>
                I believe in continuous learning and staying updated with the latest technologies and design trends.
                This allows me to bring fresh perspectives and innovative solutions to every project I work on.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link href="/files/resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium min-w-24">Name:</span>
                <span className="text-muted-foreground">Sarani Liyanage</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium min-w-24">Location:</span>
                <span className="text-muted-foreground">Negombo ,srilanka</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium min-w-24">Email:</span>
                <span className="text-muted-foreground">saranidinethma@gmail.com</span>
              </li>
              
            </ul>
          </motion.div>
        </div>

     
         
        

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "Master's in Computer Science",
                school: "Tech University",
                period: "2014 - 2016",
                description: "Specialized in web technologies and user interface design. Graduated with honors.",
              },
              {
                degree: "Bachelor's in Software Engineering",
                school: "State University",
                period: "2010 - 2014",
                description:
                  "Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions.",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="relative pl-8 border-l"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 p-1 bg-background border rounded-full">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span>{edu.school}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "JavaScript",
            
              "React",
              "Next.js",
              "Node.js",
       
              "MongoDB",
       
              "HTML5",
              "CSS",
              "Tailwind CSS",
         
              "Git",
       
          
              "Figma",
            ].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                className="bg-background border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <Code className="h-5 w-5 mx-auto mb-2 text-primary" />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}