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
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Soft ambient glows (page-wide background is handled globally) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <SectionHeading
          title="Contact"
          description="I'm always open to discussing new projects, opportunities, or collaborations. Let's create something amazing together!"
        />

        <AnimatedSection delay={0.15} variants={contactCardVariants}>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Get In Touch
              </h3>
              <p className="mt-1 text-muted-foreground">
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
                      className="group flex items-center gap-4 rounded-xl border border-border bg-muted/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-soft"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${channel.color} text-white shadow-md shadow-black/10 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground">
                          {channel.title}
                        </h4>
                        <p className="truncate text-sm text-muted-foreground">
                          {channel.value}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-muted-foreground/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                    </motion.a>
                  );
                })}
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-muted-foreground/60" aria-hidden="true" />
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
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft">
              {/* Soft brand glows inside the CTA panel. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-[-10%] h-56 w-56 rounded-full bg-blue-400/15 blur-3xl"
              ></div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 left-[-10%] h-56 w-56 rounded-full bg-violet-400/15 blur-3xl"
              ></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  Let's Build Something Amazing
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Ready to start your project? I'm excited to help bring your
                  ideas to life.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                  <motion.a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-shadow duration-300 hover:shadow-xl"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Send Email
                  </motion.a>
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 rounded-lg border border-border bg-background/80 px-6 py-3 font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card hover:text-primary"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
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

