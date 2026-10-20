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
    transition={{ duration: 0.5 }}
    className="mb-10 text-center sm:mb-14"
  >
    <h2 className="mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent text-balance sm:text-4xl md:text-5xl">
      {title}
    </h2>
    <span
      aria-hidden="true"
      className="mx-auto mb-4 block h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600"
    ></span>
    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-pretty text-gray-600 sm:text-xl">
      {description}
    </p>
  </motion.div>
);

export default SectionHeading;
