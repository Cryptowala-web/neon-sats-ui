import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bell, Sparkles } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function NotifyButton() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent"
            animate={isInView ? { 
              textShadow: [
                "0 0 20px rgba(0, 255, 255, 0.5)",
                "0 0 40px rgba(0, 255, 255, 0.8)",
                "0 0 20px rgba(0, 255, 255, 0.5)"
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Never Miss a Bitcoin Milestone
          </motion.h2>

          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Get instant notifications for price alerts, market movements, and breaking Bitcoin news
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          >
            <motion.div
              animate={isInView ? { y: [0, -10, 0] } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Button 
                variant="glow" 
                size="xl" 
                className="relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={isInView ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  } : {}}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                <motion.div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    animate={isInView ? { rotate: [0, 15, -15, 0] } : {}}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Bell size={24} />
                  </motion.div>
                  
                  <span className="text-lg font-semibold">Notify Me</span>
                  
                  <motion.div
                    animate={isInView ? { 
                      scale: [1, 1.3, 1],
                      rotate: [0, 90, 180, 270, 360]
                    } : {}}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <Sparkles size={20} />
                  </motion.div>
                </motion.div>

                {/* Sparkle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-accent rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                    animate={isInView ? {
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [-20, 0, 20]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3 + 3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {["Price Alerts", "Market Analysis", "Breaking News", "Portfolio Updates"].map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}