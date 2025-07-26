import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, ExternalLink } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Bitcoin Reaches New All-Time High as Institutional Adoption Grows",
    excerpt: "Major corporations continue to add Bitcoin to their treasury reserves, driving unprecedented demand...",
    time: "2 hours ago",
    category: "Market News"
  },
  {
    id: 2,
    title: "Lightning Network Sees 400% Growth in Transaction Volume",
    excerpt: "The second-layer solution for Bitcoin continues to evolve, offering faster and cheaper transactions...",
    time: "4 hours ago",
    category: "Technology"
  },
  {
    id: 3,
    title: "El Salvador Announces Additional Bitcoin Mining Facilities",
    excerpt: "The country expands its Bitcoin infrastructure with renewable energy-powered mining operations...",
    time: "6 hours ago",
    category: "Global Adoption"
  },
  {
    id: 4,
    title: "New Bitcoin ETF Approval Sparks Market Rally",
    excerpt: "Regulatory approval for spot Bitcoin ETFs opens new avenues for traditional investors...",
    time: "8 hours ago",
    category: "Regulation"
  },
  {
    id: 5,
    title: "Bitcoin Mining Efficiency Reaches Historic Highs",
    excerpt: "Advanced ASIC technology and renewable energy integration boost mining sustainability...",
    time: "10 hours ago",
    category: "Mining"
  },
  {
    id: 6,
    title: "Central Bank Digital Currencies vs Bitcoin: The Debate Continues",
    excerpt: "As CBDCs emerge globally, experts discuss the unique value proposition of decentralized Bitcoin...",
    time: "12 hours ago",
    category: "Analysis"
  }
];

export default function NewsFeed() {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Latest Bitcoin News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments in the Bitcoin ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-bitcoin transition-all duration-500 group cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {item.time}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <motion.div 
                  className="flex items-center gap-2 text-primary text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ExternalLink size={14} />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-bitcoin text-primary-foreground rounded-lg font-semibold hover:shadow-glow-bitcoin transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All News
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}