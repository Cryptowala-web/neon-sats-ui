import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contentData = [
  {
    title: "The Future Doesn't Wait. Neither Do We",
    subtitle: "You've heard of Bitcoin. Now meet the ones leading through it. Owning the next financial era.",
  },
  {
    title: "Global Standards.",
    subtitle: "🇮🇳 Born in India, we're India's answer to sovereign-grade crypto capital. We hold Bitcoin because it's truth in code. Secure. Strategic. Sovereign.",
  },
  {
    title: "India needs a Leader in this Space",
    subtitle: "Now it has One.",
  },
  {
    title: "We are Bitcoinwala",
    subtitle: "A bold treasury house, an asset management company that doesn't follow trends—we set them.",
  },
  {
    title: "The End of Fiat Thinking",
    subtitle: "The Rise of the Bitcoin Powerhouse.",
  },
];

const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <span ref={ref} className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.02,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const AnimatedSections = () => {
  return (
    <div className="py-20 bg-background">
      {contentData.map((item, index) => (
        <div
          key={index}
          className={`container mx-auto px-6 py-16 ${
            index !== contentData.length - 1 ? "border-b border-border/20" : ""
          }`}
        >
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Content */}
            <div
              className={`space-y-6 ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <AnimatedText 
                  text={item.title} 
                  delay={0.2}
                />
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                <AnimatedText 
                  text={item.subtitle} 
                  delay={0.8}
                />
              </p>
            </div>

            {/* Visual Element */}
            <div
              className={`${
                index % 2 === 1 ? "lg:col-start-1" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-64 md:h-80 bg-gradient-bitcoin rounded-2xl flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-6xl md:text-8xl text-primary-foreground opacity-20"
                >
                  ₿
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-accent/20 rounded-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedSections;