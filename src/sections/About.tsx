import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, MapPin, Code2, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const stats = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Information Technology Student",
      description: "LJ University, Ahmedabad",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad",
      description: "Gujarat, India",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      label: "Specialization",
      value: "Full-Stack Development",
      description: "MERN Stack & Python",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          description="Passionate developer focused on creating impactful solutions that bridge technology and user needs"
        />

        {/* Stats Grid */}
        <AnimatedSection delay={0.2}>
          {/* Equal-height cards: the grid stretches every item to the row
              height, the h-full chain carries that down to the Card, and the
              two-line min-height on the value keeps long text (e.g.
              "Information Technology Student") from skewing card heights.
              Descriptions are bottom-anchored so icons, labels, values, and
              descriptions line up across all three cards. */}
          <div className="mb-12 grid grid-cols-1 items-stretch gap-6 sm:mb-16 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="group flex h-full flex-col rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border/60 hover:shadow-lifted">
                  <CardContent className="flex flex-1 flex-col pt-6">
                    <div
                      className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${stat.color} shadow-md shadow-black/10 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                      {stat.label}
                    </p>
                    <h3 className="mb-2 min-h-[3.5rem] text-lg font-semibold leading-snug text-foreground text-balance">
                      {stat.value}
                    </h3>
                    <p className="mt-auto text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <div className="flex justify-center">
          <AnimatedSection delay={0.3} className="w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="group rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border/60 hover:shadow-lifted">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-foreground sm:text-2xl">
                    My Journey
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Building the future, one line of code at a time
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    My expertise lies in building scalable and efficient web
                    applications using modern technologies like the{" "}
                    <span className="font-semibold text-blue-600">
                      MERN Stack
                    </span>
                    (MongoDB, Express.js, React.js, Node.js) and
                    <span className="font-semibold text-violet-600">
                      {" "}
                      Python
                    </span>
                    .
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    I believe in writing clean, maintainable code and creating
                    user experiences that are both functional and intuitive.
                    Currently, I'm focused on expanding my knowledge and skills
                    in full-stack web development.
                  </p>

                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
                    <Rocket className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    <span>Always learning, always building</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;

