import { Star, MapPin, Clock, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const salons = [
  {
    id: 1,
    name: "Luxe Beauty Studio",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    rating: 4.9,
    reviews: 234,
    location: "Manhattan, NY",
    distance: "1.2 km",
    services: ["Hair", "Makeup", "Nails"],
    price: "$$$",
    openNow: true,
    featured: true,
  },
  {
    id: 2,
    name: "Serenity Spa & Salon",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80",
    rating: 4.8,
    reviews: 189,
    location: "Brooklyn, NY",
    distance: "2.5 km",
    services: ["Spa", "Massage", "Skincare"],
    price: "$$$$",
    openNow: true,
    featured: false,
  },
  {
    id: 3,
    name: "The Nail Lounge",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    rating: 4.7,
    reviews: 312,
    location: "Queens, NY",
    distance: "3.1 km",
    services: ["Nails", "Pedicure", "Manicure"],
    price: "$$",
    openNow: false,
    featured: false,
  },
  {
    id: 4,
    name: "Glow Skincare Clinic",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    rating: 5.0,
    reviews: 156,
    location: "Manhattan, NY",
    distance: "0.8 km",
    services: ["Skincare", "Facial", "Treatment"],
    price: "$$$",
    openNow: true,
    featured: true,
  },
];

const FeaturedSalons = () => {
  return (
    <section id="salons" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">
              Featured Salons
            </h2>
            <p className="text-xl text-muted-foreground">
              Hand-picked premium beauty destinations
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Salons
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {salons.map((salon, index) => (
            <Card
              key={salon.id}
              className="group overflow-hidden border-border/50 hover:shadow-large transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                  <Heart className="h-5 w-5" />
                </button>

                {/* Featured Badge */}
                {salon.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-accent text-white border-0">
                    Featured
                  </Badge>
                )}

                {/* Open Status */}
                <div className="absolute bottom-3 left-3">
                  <Badge
                    variant={salon.openNow ? "default" : "secondary"}
                    className={salon.openNow ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {salon.openNow ? "Open Now" : "Closed"}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {salon.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">{salon.price}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold">{salon.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({salon.reviews} reviews)
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{salon.location}</span>
                  <span>•</span>
                  <span>{salon.distance}</span>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {salon.services.map((service) => (
                    <Badge key={service} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-accent hover:opacity-90 transition-opacity">
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="w-full">
            View All Salons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSalons;
