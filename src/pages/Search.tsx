import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, MapPin, Star, DollarSign } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);

  const mockSalons = [
    {
      id: 1,
      name: "Luxe Beauty Studio",
      rating: 4.8,
      reviews: 156,
      location: "Downtown, NY",
      image: "/placeholder.svg",
      services: ["Hair", "Nails", "Makeup"],
      price: "$$$",
      availability: "Available Today"
    },
    {
      id: 2,
      name: "Serenity Spa",
      rating: 4.9,
      reviews: 203,
      location: "Upper East, NY",
      image: "/placeholder.svg",
      services: ["Spa", "Massage", "Skincare"],
      price: "$$$$",
      availability: "Book 2 Days Ahead"
    },
    {
      id: 3,
      name: "Glam House",
      rating: 4.7,
      reviews: 98,
      location: "Brooklyn, NY",
      image: "/placeholder.svg",
      services: ["Hair", "Makeup", "Nails"],
      price: "$$",
      availability: "Available Today"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Search Header */}
        <section className="bg-gradient-hero py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Find Your Perfect Salon</h1>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search services or salons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/90"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 bg-white/90"
                  />
                </div>
                <Button className="bg-accent hover:bg-accent/90">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <aside className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Service Type</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Services" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Services</SelectItem>
                          <SelectItem value="hair">Hair</SelectItem>
                          <SelectItem value="nails">Nails</SelectItem>
                          <SelectItem value="spa">Spa</SelectItem>
                          <SelectItem value="makeup">Makeup</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Price Range</h3>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        step={10}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Rating</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Ratings" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Ratings</SelectItem>
                          <SelectItem value="4">4+ Stars</SelectItem>
                          <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Availability</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Time</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="week">This Week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              {/* Results Grid */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-muted-foreground">
                    Showing {mockSalons.length} results
                  </p>
                  <Select defaultValue="rating">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="distance">Nearest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {mockSalons.map((salon) => (
                    <Card key={salon.id} className="group hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={salon.image}
                            alt={salon.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-4 right-4 bg-accent">
                            {salon.availability}
                          </Badge>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{salon.name}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-primary text-primary" />
                              <span className="font-medium">{salon.rating}</span>
                            </div>
                            <span className="text-muted-foreground text-sm">
                              ({salon.reviews} reviews)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{salon.location}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {salon.services.map((service) => (
                              <Badge key={service} variant="secondary">
                                {service}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm font-medium">{salon.price}</span>
                            </div>
                            <Button>Book Now</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
