import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      stack: "MERN Stack",
      description:
        "A comprehensive job portal connecting employers with job seekers through an intuitive platform.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/diyahrp19/Job_Portal.git",
      features: [
        "Role-based authentication and authorization",
        "Job posting and management system",
        "Advanced search and filter functionality",
        "Responsive and intuitive user interface",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      category: "Full-Stack Web Application",
    },
    {
      title: "Habit Tracker",
      stack: "Django",
      description:
        "A productivity web application designed to help users build and maintain positive habits.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      github: "https://github.com/diyahrp19/Habit_Tracker.git",
      features: [
        "User authentication and CRUD habit management",
        "Progress visualization dashboard",
        "Daily tracking and completion history",
        "Lightweight backend with Django ORM",
      ],
      color: "from-purple-500 to-pink-500",
      icon: Smartphone,
      category: "Web Application",
    },
    {
      title: "Cyber Security Education Website",
      stack: "Frontend",
      description:
        "An interactive educational platform teaching users about online security and safe browsing practices.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/diyahrp19/Cyber-Security-Website.git",
      features: [
        "Engaging UI/UX for learning cyber safety",
        "Responsive layout for mobile and desktop",
        "Sections covering phishing, passwords, and browsing safety",
        "Front-end only project with static assets",
      ],
      color: "from-green-500 to-emerald-500",
      icon: Code,
      category: "Educational Website",
    },
    {
      title: "Finance Tracker",
      stack: "Python CLI",
      description:
        "A command-line application for tracking personal income and expenses with detailed reporting.",
      technologies: ["Python"],
      github: "https://github.com/diyahrp19/Finance_Tracker.git",
      features: [
        "Track income and expenses with categories",
        "Generate monthly summaries and reports",
        "File handling for data persistence",
        "Modular programming for flexibility",
      ],
      color: "from-orange-500 to-red-500",
      icon: Database,
      category: "CLI Application",
    },
    {
      title: "Grade Management System",
      stack: "Python CLI",
      description:
        "A web-based system for teachers to efficiently manage and analyze student academic performance.",
      technologies: ["Python"],
      github: "https://github.com/diyahrp19/Grade_Management.git",
      features: [
        "Add, update, and delete student grade records",
        "Automated GPA and performance summaries",
        "Role-based access for teachers and admins",
        "Flask backend with SQLite integration",
      ],
      color: "from-indigo-500 to-purple-500",
      icon: Server,
      category: "Web Application",
    },
    {
      title: "Task Manager",
      stack: ".NET 9 Blazor Server",
      description:
        "A full-stack task management application that allows users to create, organize, and track tasks efficiently with filtering and search capabilities.",
      technologies: [
        ".NET 9",
        "Blazor Server",
        "MongoDB",
        "TailwindCSS",
        "FluentValidation",
      ],
      github: "https://github.com/diyahrp19/Task_Manager.git",
      features: [
        "Create, update, and delete tasks (CRUD operations)",
        "Filter tasks by status and priority",
        "Search tasks by title or description",
        "Responsive and clean UI",
      ],
      color: "from-indigo-500 to-blue-500",
      icon: Code,
      category: "Full-Stack Web Application",
    },
  ];

  const getProjectIcon = (stack: string) => {
    switch (stack) {
      case "MERN Stack":
        return Code;
      case "Django":
        return Smartphone;
      case "Frontend":
        return Code;
      case "Python CLI":
        return Database;
      default:
        return Code;
    }
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/85 via-slate-100/80 to-purple-100/85"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="container max-w-7xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Projects
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world applications showcasing full-stack development
                expertise and problem-solving skills
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon || getProjectIcon(project.stack);

            return (
              <AnimatedSection key={project.title} delay={0.2 + index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <Card className="border-2 border-gray-300/80 hover:border-gray-400/80 bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 h-full min-h-[480px]">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <ProjectIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="text-sm text-gray-600 mt-1">
                                {project.category}
                              </CardDescription>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="outline"
                              size="icon"
                              asChild
                              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View on GitHub"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Code className="w-4 h-4 text-blue-600" />
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50/50 rounded-lg p-2 group-hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Database className="w-4 h-4 text-green-600" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.3,
                                  delay: idx * 0.05,
                                }}
                              >
                                <Badge
                                  variant="outline"
                                  className={`text-xs bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 text-gray-700 hover:from-gray-100 hover:to-gray-200 transition-all duration-300`}
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-200/50">
                          <Badge
                            variant="secondary"
                            className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 text-xs font-medium`}
                          >
                            {project.stack}
                          </Badge>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Github className="w-3 h-3" />
                                View Code
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
