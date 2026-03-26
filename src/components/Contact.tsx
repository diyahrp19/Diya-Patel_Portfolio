import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "diyahrp05@gmail.com",
      href: "mailto:diyahrp05@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahmedabad, Gujarat",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-200/90 via-slate-50/70 to-zinc-200/90"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/25 to-purple-500/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-500/25 to-teal-500/25 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Contact
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                I'm always open to discussing new projects, opportunities, or
                collaborations. Let's create something amazing together!
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="flex flex-col items-center justify-center gap-8 sm:gap-10">
          {/* Contact Information */}
          <AnimatedSection delay={0.3}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Card className="border-2 border-gray-200/80 hover:border-gray-300/80 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 bg-white/90 backdrop-blur-sm w-full max-w-2xl h-full min-h-[320px]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Feel free to reach out through any of the channels below
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group"
                    >
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-gray-50/50 rounded-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 group-hover:shadow-md"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {info.title}
                          </h3>
                          <p className="text-gray-600">{info.value}</p>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  ))}

                  {/* Social Links */}
                  <div className="pt-4 border-t border-gray-200/50">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Follow Me
                    </h3>
                    <div className="flex gap-3">
                      {[
                        {
                          icon: Github,
                          href: "https://github.com/diyahrp19",
                          label: "GitHub",
                          color: "from-gray-600 to-gray-800",
                        },
                        {
                          icon: Linkedin,
                          href: "https://www.linkedin.com/in/diyapatel19",
                          label: "LinkedIn",
                          color: "from-blue-600 to-blue-800",
                        },
                      ].map((social, index) => (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 group"
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <social.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                              {social.label}
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <AnimatedSection delay={0.7}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl p-8 border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to start your project? I'm excited to help bring your
                ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:diyahrp05@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  View Projects
                </motion.a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <p className="text-sm text-gray-600">
                © 2026 Diya Patel. Built with React, TypeScript, and Tailwind
                CSS.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
