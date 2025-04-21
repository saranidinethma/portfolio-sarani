// app/skills/page.tsx
"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Palette, Server } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 65 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 65 },
        { name: "Tailwind CSS", level: 70 },
    
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 65 },
  
        { name: "Python", level: 70 },
        
    
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 80 },
       
        { name: "MySQL", level: 70 },
        
      ],
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Figma", level: 80 },
        
      ],
    },
    {
      name: "DevOps & Tools",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 85 },
       
        { name: "Vercel", level: 80 },
      ],
    },
    
      ]
    
  

  return (
    <div className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">My Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-background border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Professional Development</h2>
          <div className="bg-background border rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
            I am committed to continuous learning and staying updated with the latest technologies and industry best practices. Some of my recent professional development activities include:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Completed certified courses on REST API, Object-Oriented Programming (OOP), Spring Boot, and React.js via LinkedIn Learning</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Continuously engaged in self-driven learning through online resources, technical documentation, and community forums</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Built and deployed multiple full-stack projects using React, Spring Boot, Node.js, and PostgreSQL</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Practiced scalable and responsive UI design with Tailwind CSS, Styled Components, and Figma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Contributed to collaborative academic projects such as the We Neighbour App and a Real-Time Event Ticketing System</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}