import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate(`/search?service=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury salon interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Perfect Glow
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Book premium beauty services with trusted professionals. From hair styling to spa treatments, find your sanctuary.
          </p>

          {/* Search Bar */}
          <div className="bg-card shadow-large rounded-xl p-4 md:p-6 backdrop-blur-sm border border-border/50 animate-slide-up">
            <div className="grid md:grid-cols-[1fr_auto_auto] gap-4">
              {/* Service Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for services (e.g., haircut, facial, massage)" 
                  className="pl-10 h-12 border-border/50 focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Location" 
                  className="pl-10 h-12 border-border/50 focus:border-primary"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              {/* Search Button */}
              <Button 
                size="lg" 
                className="h-12 px-8 bg-gradient-accent hover:opacity-90 transition-opacity shadow-glow"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Hair Salon", "Nail Art", "Spa & Massage", "Makeup", "Skincare"].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  onClick={() => {
                    setSearchTerm(tag);
                    handleSearch();
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {[
              { label: "Verified Salons", value: "500+" },
              { label: "Happy Clients", value: "50K+" },
              { label: "Services", value: "1000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
