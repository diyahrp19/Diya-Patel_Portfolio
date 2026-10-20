import { motion, type Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /**
   * Optional variant tree root. When provided, the section becomes the single
   * whileInView trigger for itself and every descendant motion component
   * (which inherit the "hidden"/"visible" labels via their own `variants`).
   * Use this instead of nesting additional `whileInView` observers inside the
   * section — nested observers with different viewport thresholds fire at
   * different scroll depths and make the content visibly animate multiple
   * times. When omitted, the section animates on its own as before.
   */
  variants?: Variants;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  variants,
}) => {
  return (
    <motion.div
      className={className}
      initial={variants ? "hidden" : { opacity: 0, y: 20 }}
      whileInView={variants ? "visible" : { opacity: 1, y: 0 }}
      variants={variants}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;