import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  description: string;
}

/**
 * Shared section header (title + description) so every section
 * keeps identical typography and spacing.
 */
const SectionHeading = ({ title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="mb-12 text-center sm:mb-16"
  >
    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
      {title}
    </h2>
    <span
      aria-hidden="true"
      className="mx-auto mb-5 block h-1 w-14 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent-foreground))] to-[hsl(var(--primary))] shadow-[0_2px_12px_rgba(99,102,241,0.35)]"
    ></span>
    <p className="mx-auto max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
      {description}
    </p>
  </motion.div>
);

export default SectionHeading;
