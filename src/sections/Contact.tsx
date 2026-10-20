import { motion, type Variants } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { GMAIL_COMPOSE_URL, PERSONAL_INFO } from "@/lib/constants";

interface ContactChannel {
  icon: typeof Mail;
  title: string;
  value: string;
  href: string;
  color: string;
}

/**
 * Single-observer entrance for the Get In Touch card.
 *
 * The card used to nest three `whileInView` observers with mismatched
 * viewport thresholds (AnimatedSection at 0.3, the card and each row at the
 * default 0), so they fired at different scroll depths and the rows — the
 * bottom GitHub row most of all — visibly animated two or three times while
 * scrolling into the section. The whole card is now one variant tree driven
 * by AnimatedSection's single IntersectionObserver; descendant rows inherit
 * the "hidden"/"visible" labels, so the staggered reveal runs exactly once.
 */
const contactCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.15,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const contactRowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Contact = () => {
  const channels: ContactChannel[] = [
    {
      icon: Mail,
      title: "Email",
      value: PERSONAL_INFO.email,
      href: GMAIL_COMPOSE_URL,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/diyapatel19",
      href: PERSONAL_INFO.linkedin,
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/diyahrp19",
      href: PERSONAL_INFO.github,
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Soft background blobs (page-wide background is handled globally) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <SectionHeading
          title="Contact"
          description="I'm always open to discussing new projects, opportunities, or collaborations. Let's create something amazing together!"
        />

        <AnimatedSection delay={0.15} variants={contactCardVariants}>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-md backdrop-blur-sm sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
              <p className="mt-1 text-gray-600">
                Reach out through any of the channels below — I'll get back to
                you as soon as I can.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const isExternal = !channel.href.startsWith("mailto:");

                  return (
                    <motion.a
                      key={channel.title}
                      variants={contactRowVariants}
                      href={channel.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-gray-200/70 bg-gradient-to-r from-white to-gray-50/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${channel.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {channel.title}
                        </h4>
                        <p className="truncate text-sm text-gray-600">
                          {channel.value}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                    </motion.a>
                  );
                })}
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 border-t border-gray-200/70 pt-5 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-gray-400" aria-hidden="true" />
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-100/55 to-purple-100/55 rounded-2xl p-8 border border-gray-300/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to start your project? I'm excited to help bring your
                ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 border border-gray-300/80 bg-white/70 text-gray-700 px-6 py-3 rounded-lg font-semibold backdrop-blur-sm hover:border-blue-300 hover:bg-white hover:text-blue-700 transition-all duration-300"
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
                © {new Date().getFullYear()} Diya Patel. Built with React,
                TypeScript, and Tailwind CSS.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
