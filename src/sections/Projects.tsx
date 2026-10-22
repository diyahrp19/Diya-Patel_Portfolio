import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ElementType, PointerEvent as ReactPointerEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import {
  BrainCircuit,
  Code,
  Database,
  ExternalLink,
  Github,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import {
  SiFlask,
  SiHtml5,
  SiPython,
  SiScikitlearn,
  SiSpacy,
} from "react-icons/si";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  stack: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  features: string[];
  color: string;
  icon: LucideIcon;
  category: string;
}

const technologyIcons: Record<string, ElementType> = {
  Python: SiPython,
  Flask: SiFlask,
  spaCy: SiSpacy,
  "scikit-learn": SiScikitlearn,
  HTML: SiHtml5,
  CSS: Code,
  MongoDB: Database,
  "Express.js": Server,
  "React.js": Code,
  "Node.js": Server,
  "Tailwind CSS": Sparkles,
  TailwindCSS: Sparkles,
  Django: Server,
  SQLite: Database,
  ".NET 9": Code,
  "Blazor Server": MonitorSmartphone,
  FluentValidation: ShieldCheck,
};

/** Diameter (px) of the circular pointer follower. Also used to keep the
 *  circle perfectly centered on the cursor via negative margins, so the
 *  framer-motion transform (x/y) never has to fight a CSS translate. */
const CURSOR_SIZE = 176;

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ProjectIcon = project.icon;

  const [isCursorVisible, setIsCursorVisible] = useState(false);

  // Live re-sync loop: the card animates its own hover lift, which changes
  // its bounding rect *without* any new pointer events. Re-deriving the
  // target every frame keeps the circle exactly under the cursor while the
  // card (or the page) moves under it.
  const cardRef = useRef<HTMLDivElement>(null);
  const lastPointer = useRef<{ x: number; y: number } | null>(null);
  const frameRef = useRef<number | null>(null);

  // Spring-smoothed motion values so the circular follower glides smoothly
  // while staying exactly centered on the pointer. Both axes share the same
  // spring config so the motion stays perfectly circular (no distortion).
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, {
    damping: 28,
    stiffness: 220,
    mass: 0.25,
  });
  const cursorY = useSpring(mouseY, {
    damping: 28,
    stiffness: 220,
    mass: 0.25,
  });

  /** Pointer position in the follower's own coordinate space (the Card's
   *  padding box, which is the circle's containing block). Measuring the
   *  Card itself — border via clientLeft/clientTop, transforms via
   *  getBoundingClientRect — keeps the circle pixel-centered on the cursor
   *  even while the card's hover translate is animating. */
  const toLocalPoint = (
    el: HTMLDivElement,
    clientX: number,
    clientY: number,
  ) => {
    const rect = el.getBoundingClientRect();
    return {
      x: clientX - rect.left - el.clientLeft,
      y: clientY - rect.top - el.clientTop,
    };
  };

  const syncFollower = () => {
    const el = cardRef.current;
    const point = lastPointer.current;
    if (!el || !point) return;
    const { x, y } = toLocalPoint(el, point.x, point.y);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerEnter = (event: ReactPointerEvent<HTMLDivElement>) => {
    // Only track real mice/trackpads; touch and pen never show the follower
    // (it is additionally hidden by CSS on touch devices and small screens).
    if (event.pointerType !== "mouse") return;
    lastPointer.current = { x: event.clientX, y: event.clientY };
    const { x, y } = toLocalPoint(
      event.currentTarget,
      event.clientX,
      event.clientY,
    );
    // Snap targets and springs together so the circle appears exactly under
    // the cursor on the very first hover — no glide-in from elsewhere.
    mouseX.jump(x);
    mouseY.jump(y);
    cursorX.jump(x);
    cursorY.jump(y);
    setIsCursorVisible(true);
    if (frameRef.current == null) {
      const tick = () => {
        syncFollower();
        frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
    }
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    lastPointer.current = { x: event.clientX, y: event.clientY };
    syncFollower();
  };

  const handlePointerLeave = () => {
    lastPointer.current = null;
    if (frameRef.current != null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setIsCursorVisible(false);
  };

  // Stop the re-sync loop if the card unmounts while hovered.
  useEffect(
    () => () => {
      if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  return (
    <AnimatedSection className="h-full" delay={0.2 + index * 0.1}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group h-full"
      >
        <Card
          ref={cardRef}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted"
        >
          {/* Accent line that fades in along the card's top edge on hover. */}
          <div
            aria-hidden="true"
            className={`absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r ${project.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          ></div>
          {/* Circular pointer follower — a fixed-size, perfectly symmetric
              circle (width === height, centered via negative margins so the
              framer-motion x/y transform never fights a CSS translate).
              Purely decorative (pointer-events-none) and only displayed on
              fine-pointer devices with a viewport >= 768px (see
              .project-card-cursor in index.css). */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: isCursorVisible ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="project-card-cursor pointer-events-none absolute left-0 top-0 z-0 rounded-full border border-blue-400/30"
            style={{
              x: cursorX,
              y: cursorY,
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
              marginLeft: -CURSOR_SIZE / 2,
              marginTop: -CURSOR_SIZE / 2,
              // Radial gradient pinned to the exact center of the circle so
              // the fill is perfectly symmetric (no directional off-center
              // blob), with an evenly distributed outer glow.
              background:
                "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.18) 0%, rgba(99, 102, 241, 0.12) 55%, rgba(168, 85, 247, 0.06) 80%, transparent 100%)",
              boxShadow: "0 0 60px 8px rgba(79, 70, 229, 0.14)",
            }}
          />

          <CardHeader className="relative z-10 shrink-0 pb-4">
            {/* Stacks vertically on small screens so the title and
                description never get squeezed by the action buttons. */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${project.color} text-white shadow-md shadow-black/10 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <ProjectIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-blue-600 sm:text-2xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60">
                      {project.category}
                    </CardDescription>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground sm:text-[15px]">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-row flex-wrap items-start gap-2 sm:shrink-0 sm:flex-col sm:items-end">
                {project.demo ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/20 hover:from-blue-700 hover:to-violet-700 hover:shadow-lg"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                ) : null}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border border-border bg-background/80 text-foreground hover:border-primary/50 hover:bg-card hover:text-primary"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      title="View repository"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 flex flex-1 flex-col pt-0">
            <div className="space-y-4 flex-1 flex flex-col">
              <div>
                <h4 className="text-[13px] font-semibold text-foreground mb-2.5 flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-2.5 rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-muted-foreground transition-colors group-hover:bg-muted"
                    >
                      <div
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                      ></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[13px] font-semibold text-foreground mb-2.5 flex items-center gap-2">
                  <Database
                    className="w-4 h-4 text-emerald-600"
                    aria-hidden="true"
                  />
                  Tech Stack
                </h4>
                {/* min-height reserves two badge rows so every card's stack
                    section — and the footer below it — line up identically,
                    even when a project's badges fit on a single row. */}
                <div className="flex min-h-[68px] flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => {
                    const TechIcon = technologyIcons[tech] || Code;

                    return (
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
                          className="flex items-center gap-1.5 rounded-full border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700"
                        >
                          <TechIcon className="w-3.5 h-3.5" aria-hidden="true" />
                          {tech}
                        </Badge>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                <Badge
                  variant="secondary"
                  className={`bg-gradient-to-r ${project.color} px-3 py-1 text-xs font-medium text-white shadow-sm shadow-black/5`}
                >
                  {project.stack}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Job Portal",
      stack: "MERN Stack",
      description:
        "Job portal connecting employers with job seekers through a single platform.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/diyahrp19/Job_Portal.git",
      features: [
        "Role-based authentication",
        "Post and manage job listings",
        "Advanced search and filters",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      category: "Full-Stack Web Application",
    },
    {
      title: "SmartHire AI",
      stack: "Flask · NLP",
      description:
        "AI recruitment platform that ranks candidates against job requirements.",
      technologies: [
        "Python",
        "Flask",
        "spaCy",
        "NLTK",
        "scikit-learn",
        "SQLite",
      ],
      github: "https://github.com/diyahrp19/Smart_Hire_AI",
      features: [
        "Resume parsing with NLP",
        "Automated candidate ranking",
        "Downloadable recruitment reports",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: BrainCircuit,
      category: "AI Recruitment Platform",
    },
    {
      title: "Task Manager",
      stack: ".NET 9 Blazor Server",
      description:
        "Task management app for organizing and tracking work efficiently.",
      technologies: [
        ".NET 9",
        "Blazor Server",
        "MongoDB",
        "TailwindCSS",
        "FluentValidation",
      ],
      github: "https://github.com/diyahrp19/Task_Manager.git",
      features: [
        "Create, edit, and delete tasks",
        "Filter by status and priority",
        "Search by title or description",
      ],
      color: "from-indigo-500 to-blue-500",
      icon: Code,
      category: "Full-Stack Web Application",
    },
    {
      title: "Habit Tracker",
      stack: "Django",
      description:
        "Productivity app that helps users build and maintain positive habits.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      github: "https://github.com/diyahrp19/Habit_Tracker.git",
      features: [
        "User authentication",
        "Visual progress dashboard",
        "Daily tracking and history",
      ],
      color: "from-purple-500 to-pink-500",
      icon: Smartphone,
      category: "Web Application",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute top-40 right-10 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          description="Real-world applications showcasing AI, full-stack development, and problem-solving skills"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


