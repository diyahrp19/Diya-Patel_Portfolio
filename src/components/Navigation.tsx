import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg" 
        : "bg-white/60 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Diya Patel
            </h2>
          </motion.div>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {[
              { name: "About Me", id: "about" },
              { name: "My Journey", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="mx-2"
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors px-3 sm:px-4"
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="hidden md:flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/diyahrp19" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-700 hover:text-blue-600 transition-colors" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/diyapatel19" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-600 transition-colors" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:diyahrp05@gmail.com">
                  <Mail className="w-5 h-5 text-gray-700 hover:text-blue-600 transition-colors" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200/50"
            >
              <div className="flex flex-col gap-2">
                {[
                  { name: "About Me", id: "about" },
                  { name: "My Journey", id: "skills" },
                  { name: "Projects", id: "projects" },
                  { name: "Contact", id: "contact" }
                ].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className="w-full justify-start text-base font-medium py-3"
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
