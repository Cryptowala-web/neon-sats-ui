import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bitcoin, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/bitcoin-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Bitcoin Hero" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      </div>

      {/* Animated Bitcoin Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <Bitcoin className="text-primary opacity-20" size={32 + i * 8} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-bitcoin bg-clip-text text-transparent"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255, 159, 0, 0.5)",
                "0 0 40px rgba(255, 159, 0, 0.8)",
                "0 0 20px rgba(255, 159, 0, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Own the Next
            <br />
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Financial Era
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Enter the future of digital currency with Bitcoin. Secure, decentralized, and revolutionary - 
            your gateway to financial freedom starts here.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button variant="bitcoin" size="xl" className="min-w-48">
              <TrendingUp className="mr-2" />
              Start Trading
            </Button>
            <Button variant="outline" size="xl" className="min-w-48 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Shield className="mr-2" />
              Learn More
            </Button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {["Secure", "Decentralized", "24/7 Trading", "Global Access"].map((feature, index) => (
              <motion.span
                key={feature}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm border border-border"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}