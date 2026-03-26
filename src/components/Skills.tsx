import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Server,
  Palette,
  GitBranch,
  Smartphone,
  Cloud,
  Zap,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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

  const skillIcons = {
    "React.js": Code,
    JavaScript: Zap,
    HTML5: Code,
    CSS3: Palette,
    "Tailwind CSS": Palette,
    "Responsive Design": Smartphone,
    "Node.js": Server,
    "Express.js": Server,
    Django: Code,
    Python: Code,
    MongoDB: Database,
    SQLite: Database,
    Git: GitBranch,
    GitHub: GitBranch,
    "VS Code": Code,
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                My Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Technologies and tools I work with to build modern, scalable web
                applications
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              delay={0.2 + categoryIndex * 0.05}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Card className="border-2 border-gray-200/80 hover:border-gray-300/80 bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group min-h-[320px]">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {category.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const IconComponent =
                          skillIcons[skill as keyof typeof skillIcons] || Code;
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
                            <div className="bg-gradient-to-r from-white to-gray-50/50 rounded-lg p-4 border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 group-hover/skill:shadow-md text-center">
                              <IconComponent className="w-6 h-6 mx-auto mb-2 text-gray-600 group-hover/skill:text-blue-600 transition-colors" />
                              <span className="font-medium text-gray-900 text-sm">
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
