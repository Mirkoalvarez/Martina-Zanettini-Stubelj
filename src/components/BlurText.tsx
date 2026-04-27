import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const BlurText = ({
  text,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
  as = "h1",
}: BlurTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, filter: "blur(14px)", y: 16 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.h1;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block mr-[0.25em] will-change-[filter,transform,opacity]"
        >
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default BlurText;
