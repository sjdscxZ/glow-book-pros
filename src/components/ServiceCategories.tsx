import { Scissors, Sparkles, Droplet, Heart, Flower2, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: Scissors,
    name: "Hair Services",
    description: "Cuts, colors, styling",
    count: "250+ salons",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Sparkles,
    name: "Nail Art",
    description: "Manicure, pedicure, designs",
    count: "180+ salons",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Droplet,
    name: "Spa & Massage",
    description: "Relaxation, wellness",
    count: "120+ spas",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    name: "Makeup",
    description: "Bridal, party, professional",
    count: "90+ artists",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Heart,
    name: "Skincare",
    description: "Facials, treatments",
    count: "150+ clinics",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Flower2,
    name: "Wellness",
    description: "Yoga, meditation, holistic",
    count: "80+ centers",
    color: "from-green-500 to-emerald-500",
  },
];

const ServiceCategories = () => {
  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">
            Explore Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From head to toe, discover premium beauty and wellness services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="group relative overflow-hidden bg-gradient-card border-border/50 hover:shadow-large transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="p-6 relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {category.count}
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
