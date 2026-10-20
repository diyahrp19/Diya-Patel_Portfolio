import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/constants";

const SCROLL_SPY_IDS = ["home", ...NAV_ITEMS.map((item) => item.id)];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy: highlight the link for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    SCROLL_SPY_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const linkClasses = (id: string, isMobile = false) =>
    `rounded-lg font-medium transition-all ${
      isMobile
        ? "w-full justify-start px-4 py-3 text-base"
        : "px-3 sm:px-4 text-sm sm:text-base"
    } ${
      activeSection === id
        ? "bg-blue-50/80 font-semibold text-blue-700 shadow-sm"
        : "text-gray-700 hover:bg-blue-50/50 hover:text-blue-600"
    }`;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200/60 bg-white/85 shadow-sm backdrop-blur-lg"
          : "border-b border-transparent bg-white/45 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSection("home")}
            className="flex-shrink-0 cursor-pointer text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-2xl"
            aria-label="Diya Patel — scroll to top"
          >
            Diya Patel
          </motion.button>

          {/* Center: Navigation links */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="mx-1"
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={linkClasses(item.id)}
                  aria-current={
                    activeSection === item.id ? "location" : undefined
                  }
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Right: Social icons */}
          <div className="hidden items-center gap-2 md:flex">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5 text-gray-700 transition-colors hover:text-blue-600" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 transition-colors hover:text-blue-600" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Send email"
                >
                  <Mail className="w-5 h-5 text-gray-700 transition-colors hover:text-blue-600" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </motion.div>
        </div>

        {/* Mobile navigation — CSS grid collapse. framer-motion height/layout
            animations suspend scrolling and would cancel an in-flight smooth
            scroll (they call window.scrollTo with a stale position). */}
        <div
          className={`grid transition-all duration-300 ease-out md:hidden ${
            isOpen
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-4 flex flex-col gap-1 border-t border-gray-200/50 pb-4">
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={linkClasses(item.id, true)}
                  aria-current={
                    activeSection === item.id ? "location" : undefined
                  }
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
