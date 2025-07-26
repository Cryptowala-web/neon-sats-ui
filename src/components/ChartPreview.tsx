import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function ChartPreview() {
  // Generate fake chart data
  const chartData = Array.from({ length: 30 }, (_, i) => ({
    day: i,
    price: 65000 + Math.sin(i * 0.2) * 5000 + Math.random() * 2000
  }));

  const maxPrice = Math.max(...chartData.map(d => d.price));
  const minPrice = Math.min(...chartData.map(d => d.price));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-neon transition-all duration-500 group">
        <motion.div 
          className="flex items-center justify-between mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-bold text-foreground">Bitcoin Price History</h3>
          <div className="flex items-center gap-2 text-green-400">
            <TrendingUp size={20} />
            <span className="font-semibold">+12.5%</span>
          </div>
        </motion.div>

        <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-dark">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--bitcoin-orange))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--bitcoin-orange))" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Grid lines */}
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={`${(i * 25)}%`}
                x2="100%"
                y2={`${(i * 25)}%`}
                stroke="hsl(var(--border))"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}

            {/* Chart area */}
            <motion.path
              d={`M 0,${192 - ((chartData[0].price - minPrice) / (maxPrice - minPrice)) * 192} ${chartData
                .map((point, index) => 
                  `L ${(index / (chartData.length - 1)) * 100}%,${192 - ((point.price - minPrice) / (maxPrice - minPrice)) * 192}`
                )
                .join(' ')} L 100%,192 L 0,192 Z`}
              fill="url(#chartGradient)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Chart line */}
            <motion.path
              d={`M 0,${192 - ((chartData[0].price - minPrice) / (maxPrice - minPrice)) * 192} ${chartData
                .map((point, index) => 
                  `L ${(index / (chartData.length - 1)) * 100}%,${192 - ((point.price - minPrice) / (maxPrice - minPrice)) * 192}`
                )
                .join(' ')}`}
              fill="none"
              stroke="hsl(var(--bitcoin-orange))"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="drop-shadow-[0_0_8px_hsl(var(--bitcoin-orange))]"
            />

            {/* Animated dots at data points */}
            {chartData.map((point, index) => (
              <motion.circle
                key={index}
                cx={`${(index / (chartData.length - 1)) * 100}%`}
                cy={192 - ((point.price - minPrice) / (maxPrice - minPrice)) * 192}
                r="3"
                fill="hsl(var(--bitcoin-orange))"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.5 }}
                className="cursor-pointer drop-shadow-[0_0_4px_hsl(var(--bitcoin-orange))]"
              />
            ))}
          </svg>

          {/* Price labels */}
          <div className="absolute top-2 left-2 text-xs text-muted-foreground">
            ${maxPrice.toLocaleString()}
          </div>
          <div className="absolute bottom-2 left-2 text-xs text-muted-foreground">
            ${minPrice.toLocaleString()}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
          <span>30 Days</span>
          <motion.span 
            className="text-primary font-semibold cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            View Full Chart →
          </motion.span>
        </div>
      </Card>
    </motion.div>
  );
}