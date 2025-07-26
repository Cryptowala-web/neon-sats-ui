import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PriceTracker from "@/components/PriceTracker";
import ChartPreview from "@/components/ChartPreview";
import NewsFeed from "@/components/NewsFeed";
import AuthModal from "@/components/AuthModal";
import NotifyButton from "@/components/NotifyButton";
import { motion } from "framer-motion";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-bitcoin rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">₿</span>
              </div>
              <span className="text-xl font-bold bg-gradient-bitcoin bg-clip-text text-transparent">
                BitcoinEra
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Trading</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Markets</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Learn</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">News</a>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAuthModalOpen(true)}
                className="hidden sm:flex"
              >
                <User size={16} className="mr-2" />
                Login
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={20} />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Price Tracker */}
      <PriceTracker />

      {/* Hero Section */}
      <HeroSection />

      {/* Chart Preview Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-bitcoin bg-clip-text text-transparent">
              Track Bitcoin Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze historical data and trends to make informed investment decisions
            </p>
          </motion.div>
          <ChartPreview />
        </div>
      </section>

      {/* News Feed */}
      <NewsFeed />

      {/* Notify Button Section */}
      <NotifyButton />

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-bitcoin rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">₿</span>
                </div>
                <span className="text-xl font-bold bg-gradient-bitcoin bg-clip-text text-transparent">
                  BitcoinEra
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your gateway to the future of digital currency. Secure, decentralized, revolutionary.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Trading</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Spot Trading</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Futures</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Options</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">DCA</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Learn</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Bitcoin Basics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Wallets</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mining</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 BitcoinEra. All rights reserved. Cryptocurrency investments are subject to market risk.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Index;