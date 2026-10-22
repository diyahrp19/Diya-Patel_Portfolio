import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import {
  Code,
  Database,
  Server,
  Palette,
  GitBranch,
  Zap,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express.js", "Python"],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: ["MongoDB"],
    },
    {
      title: "Tools",
      icon: GitBranch,
      color: "from-orange-500 to-red-500",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  const skillIcons: Record<string, LucideIcon> = {
    "React.js": Code,
    JavaScript: Zap,
    HTML5: Code,
    CSS3: Palette,
    "Tailwind CSS": Palette,
    "Node.js": Server,
    "Express.js": Server,
    Python: Code,
    MongoDB: Database,
    Git: GitBranch,
    GitHub: GitBranch,
    "VS Code": Code,
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <SectionHeading
          title="My Journey"
          description="Technologies and tools I work with to build modern, scalable web applications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              className="h-full"
              delay={0.2 + categoryIndex * 0.05}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <Card className="h-full rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white shadow-md shadow-black/10 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-foreground sm:text-xl">
                          {category.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const IconComponent = skillIcons[skill] || Code;
                        return (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.05,
                            }}
                            className="group/skill"
                          >
                            <div className="rounded-xl border border-border bg-card p-4 text-center transition-all duration-300 group-hover/skill:-translate-y-0.5 group-hover/skill:border-primary/30 group-hover/skill:shadow-soft">
                              <IconComponent className="w-6 h-6 mx-auto mb-2 text-muted-foreground transition-colors group-hover/skill:text-blue-600" />
                              <span className="font-medium text-foreground text-sm">
                                {skill}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

