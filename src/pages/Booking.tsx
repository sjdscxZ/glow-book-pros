import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services = [
    { id: "1", name: "Women's Haircut", price: 65, duration: "60 min" },
    { id: "2", name: "Color & Highlights", price: 145, duration: "120 min" },
    { id: "3", name: "Blowout", price: 45, duration: "45 min" },
    { id: "4", name: "Deep Conditioning", price: 35, duration: "30 min" }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const steps = [
    { number: 1, title: "Select Service" },
    { number: 2, title: "Choose Date & Time" },
    { number: 3, title: "Payment" },
    { number: 4, title: "Confirmation" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-12 mt-8">
            <div className="flex items-center justify-between">
              {steps.map((s, index) => (
                <div key={s.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all",
                        step >= s.number
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {step > s.number ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <span className="font-semibold">{s.number}</span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-center">{s.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "h-1 flex-1 mx-2 mb-8 transition-all",
                        step > s.number ? "bg-primary" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Select a Service</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-glow",
                      selectedService === service.id && "ring-2 ring-primary"
                    )}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{service.name}</h3>
                        <Badge variant="secondary">{service.duration}</Badge>
                      </div>
                      <p className="text-2xl font-bold text-primary">${service.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  size="lg"
                  disabled={!selectedService}
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Choose Date & Time */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Choose Date & Time</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Select Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className="w-full"
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  size="lg"
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(3)}
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Payment Details</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="max-w-md mx-auto text-center py-12">
                    <p className="text-muted-foreground mb-8">
                      Payment integration would be implemented here using Stripe or another payment processor
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b">
                        <span>Selected Service</span>
                        <span className="font-semibold">
                          {services.find((s) => s.id === selectedService)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span>Date</span>
                        <span className="font-semibold">
                          {selectedDate?.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span>Time</span>
                        <span className="font-semibold">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between py-4 text-lg">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-primary">
                          ${services.find((s) => s.id === selectedService)?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button size="lg" onClick={() => setStep(4)}>
                  Complete Booking
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="animate-fade-in">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                  <p className="text-muted-foreground mb-8">
                    Your appointment has been successfully booked. We've sent a confirmation email with all the details.
                  </p>
                  <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Service</span>
                      <span className="font-semibold">
                        {services.find((s) => s.id === selectedService)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Date</span>
                      <span className="font-semibold">
                        {selectedDate?.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Time</span>
                      <span className="font-semibold">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Booking ID</span>
                      <span className="font-semibold">#GLW{Math.floor(Math.random() * 10000)}</span>
                    </div>
                  </div>
                  <Button size="lg" onClick={() => (window.location.href = "/")}>
                    Back to Home
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
