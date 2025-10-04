import { useState } from "react";
import { Menu, X, Sparkles, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
            </div>
            <span className="font-['Playfair_Display'] text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Glowify
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#salons" className="text-foreground/80 hover:text-foreground transition-colors">
              Find Salons
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#for-business" className="text-foreground/80 hover:text-foreground transition-colors">
              For Business
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="gap-2">
              <Calendar className="h-4 w-4" />
              My Bookings
            </Button>
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              Sign In
            </Button>
            <Button className="bg-gradient-accent hover:opacity-90 transition-opacity shadow-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#services" className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                Services
              </a>
              <a href="#salons" className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                Find Salons
              </a>
              <a href="#how-it-works" className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                How It Works
              </a>
              <a href="#for-business" className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                For Business
              </a>
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-border/50">
                <Button variant="outline" className="w-full gap-2">
                  <Calendar className="h-4 w-4" />
                  My Bookings
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-accent hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
