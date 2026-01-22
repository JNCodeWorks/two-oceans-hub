import { Wifi, Utensils, Waves, Car, Briefcase, Calendar } from "lucide-react";

export function Amenities() {
  const features = [
    {
      icon: Wifi,
      title: "High-Speed Wifi",
      description: "Stay connected with complimentary high-speed internet access throughout the hotel.",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Savor exquisite local and international cuisine at our in-house restaurant.",
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Relax and unwind in our crystal-clear outdoor swimming pool.",
    },
    {
      icon: Car,
      title: "Secure Parking",
      description: "Ample and secure parking space available for all our guests.",
    },
    {
      icon: Briefcase,
      title: "Conference Halls",
      description: "State-of-the-art facilities for your business meetings and corporate events.",
    },
    {
      icon: Calendar,
      title: "Event Hosting",
      description: "Perfect venues for weddings, parties, and special celebrations.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">First-Class Amenities</h2>
             <p className="text-muted-foreground">
                Everything you need for a comfortable and convenient stay.
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-zinc-50 border border-zinc-100 hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
