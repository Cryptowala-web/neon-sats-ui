import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function PriceTracker() {
  const [price, setPrice] = useState(67843.21);
  const [change, setChange] = useState(2.4);
  const [isPositive, setIsPositive] = useState(true);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = (Math.random() - 0.5) * 1000;
      const newPrice = Math.max(60000, price + randomChange);
      const newChange = ((newPrice - price) / price) * 100;
      
      setPrice(newPrice);
      setChange(Math.abs(newChange));
      setIsPositive(newChange >= 0);
    }, 3000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="p-4 bg-card/90 backdrop-blur-md border-border shadow-glow-bitcoin animate-float">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-bitcoin rounded-full flex items-center justify-center animate-pulse-glow">
            <span className="text-primary-foreground font-bold text-sm">₿</span>
          </div>
          
          <div>
            <div className="flex items-center gap-2">
              <span className="text-foreground font-bold text-lg">
                ${price.toLocaleString('en-US', { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}
              </span>
              <motion.div
                className={`flex items-center gap-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
                key={price} // Re-trigger animation on price change
              >
                {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                <span className="text-sm font-medium">
                  {isPositive ? '+' : '-'}{change.toFixed(2)}%
                </span>
              </motion.div>
            </div>
            <p className="text-xs text-muted-foreground">Bitcoin Price</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}