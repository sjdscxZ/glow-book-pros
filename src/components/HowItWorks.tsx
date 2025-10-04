import { Search, Calendar, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Discover",
    description: "Browse hundreds of verified salons and services in your area. Filter by location, price, ratings, and availability.",
  },
  {
    icon: Calendar,
    title: "Book Your Slot",
    description: "Choose your preferred date and time from real-time availability. Get instant confirmation for your appointment.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Pay securely online or choose to pay at the salon. Flexible payment options with full refund protection.",
  },
  {
    icon: CheckCircle,
    title: "Enjoy & Review",
    description: "Show up and enjoy your service. Share your experience and earn loyalty points for your next booking.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-hero">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your perfect beauty experience in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number Circle */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    {/* Outer Glow Circle */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                    
                    {/* Main Circle */}
                    <div className="relative w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow">
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-medium">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
