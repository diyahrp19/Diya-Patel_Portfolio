import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      stack: "MERN Stack",
      description:
        "Developed a job portal with role-based access, job management, and responsive UI for employers and job seekers.",
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
    },
    {
      title: "Habit Tracker",
      stack: "Django",
      description:
        "Built a productivity web app to help users track daily habits with progress visualization and reminders.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      github: "https://github.com/diyahrp19/Habit_Tracker.git",
      features: [
        "User authentication and CRUD habit management",
        "Progress visualization dashboard",
        "Daily tracking and completion history",
        "Lightweight backend with Django ORM",
      ],
    },
    {
      title: "Cyber Security Education Website",
      stack: "Frontend",
      description:
        "Designed an interactive educational platform to teach users about phishing, password safety, and secure browsing.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript","Tailwind CSS"],
      github: "https://github.com/diyahrp19/Cyber-Security-Website.git",
      features: [
        "Engaging UI/UX for learning cyber safety",
        "Responsive layout for mobile and desktop",
        "Sections covering phishing, passwords, and browsing safety",
        "Front-end only project with static assets",
      ],
    },
    {
      title: "Finance Tracker",
      stack: "Python CLI",
      description:
        "Implemented a command-line application to track income and expenses with categorized entries and monthly summaries.",
      technologies: ["Python"],
      github: "https://github.com/diyahrp19/Finance_Tracker.git",
      features: [
        "Track income and expenses with categories",
        "Generate monthly summaries and reports",
        "File handling for data persistence",
        "Modular programming for flexibility",
      ],
    },
    {
      title: "Grade Management System",
      stack: "Python CLI",
      description:
        "Developed a web-based grade management system for teachers to record, update, and analyze student performance efficiently.",
      technologies: ["Python"],
      github: "https://github.com/diyahrp19/Grade_Management.git",
      features: [
        "Add, update, and delete student grade records",
        "Automated GPA and performance summaries",
        "Role-based access for teachers and admins",
        "Flask backend with SQLite integration",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development expertise
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.stack}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
