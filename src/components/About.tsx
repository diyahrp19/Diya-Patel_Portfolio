import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, MapPin, Code2, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                About Me
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate developer focused on creating impactful solutions
                that bridge technology and user needs
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="group border-2 border-gray-300/80 hover:border-gray-400/80 bg-white/60 backdrop-blur-sm min-h-[280px] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="pt-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-2xl font-bold text-gray-800 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <div className="flex justify-center">
          <AnimatedSection delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <section className="flex justify-center items-center w-full py-16">
                <div className="w-full max-w-3xl">
                  <Card className="group border-2 border-gray-300/80 hover:border-gray-400/80 bg-gradient-to-br from-white to-gray-50/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        My Journey
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        Building the future, one line of code at a time
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 text-center">
                      <p className="text-gray-700 leading-relaxed">
                        My expertise lies in building scalable and efficient web
                        applications using modern technologies like the{" "}
                        <span className="font-semibold text-blue-600">
                          MERN Stack
                        </span>
                        (MongoDB, Express.js, React.js, Node.js) and
                        <span className="font-semibold text-purple-600">
                          {" "}
                          Python
                        </span>
                        .
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        I believe in writing clean, maintainable code and
                        creating user experiences that are both functional and
                        intuitive. Currently, I'm focused on expanding my
                        knowledge and skills in full-stack web development.
                      </p>

                      <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
                        <Rocket className="w-4 h-4 text-blue-600" />
                        <span>Always learning, always building</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
