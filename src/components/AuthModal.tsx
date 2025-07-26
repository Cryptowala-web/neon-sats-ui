import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Mail, Lock, User } from "lucide-react";
import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md mx-4"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="p-8 bg-card/95 backdrop-blur-md border-border shadow-glow-neon">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={onClose}
              >
                <X size={20} />
              </Button>

              <motion.div
                key={isLogin ? 'login' : 'signup'}
                initial={{ x: isLogin ? -20 : 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-bitcoin bg-clip-text text-transparent">
                    {isLogin ? 'Welcome Back' : 'Join Bitcoin Era'}
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {isLogin 
                      ? 'Sign in to access your Bitcoin portfolio' 
                      : 'Create your account to start your Bitcoin journey'
                    }
                  </p>
                </div>

                <form className="space-y-6">
                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Label htmlFor="name" className="text-foreground">Full Name</Label>
                        <div className="relative mt-1">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="pl-10 bg-input/50 border-border focus:border-primary"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 bg-input/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-foreground">Password</Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10 bg-input/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="bitcoin"
                    size="lg"
                    className="w-full"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </p>
                  <Button
                    variant="link"
                    className="text-primary hover:text-primary/80"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-center text-xs text-muted-foreground">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}