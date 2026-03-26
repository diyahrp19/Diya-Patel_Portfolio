import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const words = ["Full-Stack", "MERN Stack", "Python"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseDuration = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        // Start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText === "") {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Typing logic
        setDisplayText(currentWord.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, isPaused, words]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="container max-w-5xl mx-auto text-center relative">
        <AnimatedSection delay={0.1}>
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-base sm:text-lg leading-relaxed text-foreground"
            >
              <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Diya Patel
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 mb-2"
            >
              Information Technology Student
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-gray-500 flex items-center justify-center gap-2"
            >
              <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
              Ahmedabad, Gujarat
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mb-8 max-w-3xl mx-auto px-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg leading-relaxed text-foreground"
            >
              Passionate about building efficient, user-friendly web applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60"
            >
              <p className="text-sm sm:text-base text-gray-600 italic">
                Turning ideas into projects using {" "}
                <span className="text-blue-600 font-semibold">{displayText}</span>
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                size="lg"
                className="gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                asChild
              >
                <a
                  href="https://github.com/diyahrp19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  View Projects
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/diyapatel19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                asChild
              >
                <a href="mailto:diyahrp05@gmail.com">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-5 hidden md:block"
        >
          <div className="w-4 h-4 bg-blue-400/30 rounded-full"></div>
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-10 hidden lg:block"
        >
          <div className="w-6 h-6 bg-purple-400/30 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
