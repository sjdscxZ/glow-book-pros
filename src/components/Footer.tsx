import { Sparkles, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-['Playfair_Display'] text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Glowify
              </span>
            </a>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Your trusted platform for discovering and booking premium beauty and wellness services.
            </p>
            
            {/* Newsletter */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button className="bg-gradient-accent hover:opacity-90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#salons" className="text-muted-foreground hover:text-foreground transition-colors">Find Salons</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#for-business" className="text-muted-foreground hover:text-foreground transition-colors">For Business</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@glowify.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">123 Beauty Lane<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Glowify. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
