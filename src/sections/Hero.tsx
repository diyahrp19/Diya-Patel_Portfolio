import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { PERSONAL_INFO } from "@/lib/constants";

const TYPING_WORDS = ["Full-Stack", "MERN Stack", "Python"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect: type the word, hold, delete, then move to the next.
  // The timeout is always cleaned up so the effect can't race or leak.
  useEffect(() => {
    const currentWord = TYPING_WORDS[currentWordIndex];
    let timeoutId: number;

    if (!isDeleting && displayText === currentWord) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
      }, 500);
    } else {
      timeoutId = window.setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1),
        );
      }, isDeleting ? 100 : 150);
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Soft background blobs (page-wide background is handled globally) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="container max-w-5xl mx-auto text-center relative">
        <AnimatedSection delay={0.1}>
          <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-4 text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-balance drop-shadow-sm sm:text-6xl md:text-7xl"
            >
              Diya Patel
            </motion.h1>
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
              Passionate about building efficient, user-friendly web
              applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mt-5 inline-block max-w-full rounded-2xl border border-white/70 bg-white/60 px-5 py-3 shadow-sm backdrop-blur-sm"
            >
              <p className="min-h-[1.5rem] text-sm text-gray-600 italic sm:text-base">
                Turning ideas into projects using{" "}
                <span className="text-blue-600 font-semibold">
                  {displayText}
                </span>
                <span
                  aria-hidden="true"
                  className="animate-pulse text-blue-400"
                >
                  |
                </span>
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
                className="gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-600/25"
                asChild
              >
                <a
                  href={PERSONAL_INFO.github}
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
                className="gap-3 border border-gray-300/80 bg-white/70 text-gray-700 backdrop-blur-sm hover:border-blue-300 hover:bg-white hover:text-blue-700"
                asChild
              >
                <a
                  href={PERSONAL_INFO.linkedin}
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
                className="gap-3 border border-gray-300/80 bg-white/70 text-gray-700 backdrop-blur-sm hover:border-blue-300 hover:bg-white hover:text-blue-700"
                asChild
              >
                <a href={`mailto:${PERSONAL_INFO.email}`}>
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
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-10 hidden lg:block"
        >
          <div className="w-6 h-6 bg-purple-400/30 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
