import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, TreePalm, Compass } from "lucide-react";

export const metadata = {
  title: "About Us | Two Oceans Hotel",
  description: "Learn about Two Oceans Hotel in Voi, Kenya. Discover our story, location near Tsavo National Park, and commitment to hospitality.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop&q=80"
          alt="Tsavo National Park - Kenya Safari"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About Two Oceans</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
            Your gateway to the wild beauty of Tsavo
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Nestled in the heart of Voi, at the crossroads between the Indian Ocean coast and the vast savannas of Tsavo, 
                  Two Oceans Hotel stands as a beacon of hospitality in Taita Taveta County.
                </p>
                <p>
                  Our name reflects our unique position – where the warm coastal culture meets the wild spirit of the African bush. 
                  For travelers journeying between Mombasa and Nairobi, we offer more than just a stopover; we provide an experience.
                </p>
                <p>
                  Founded with a vision to offer world-class hospitality while celebrating local culture, 
                  Two Oceans Hotel has become the preferred choice for tourists, corporate travelers, and families alike.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80"
                alt="Two Oceans Hotel Lobby"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Prime Location</h2>
            <p className="text-muted-foreground text-lg">
              Strategically located for adventure and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tsavo East</h3>
              <p className="text-sm text-muted-foreground">30 minutes to the park gate. Perfect for early morning game drives.</p>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TreePalm className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tsavo West</h3>
              <p className="text-sm text-muted-foreground">Gateway to Mzima Springs and the iconic Shetani Lava Flows.</p>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Compass className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Mombasa</h3>
              <p className="text-sm text-muted-foreground">2 hours to the beautiful beaches of the Kenyan coast.</p>
            </div>

            <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Nairobi</h3>
              <p className="text-sm text-muted-foreground">4 hours to the capital via the Nairobi-Mombasa highway.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80"
                alt="Hotel Pool Area"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Our Commitment</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-lg mb-1">Exceptional Service</h3>
                  <p className="text-muted-foreground">Our dedicated staff ensures every guest feels at home from check-in to check-out.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-lg mb-1">Local Authenticity</h3>
                  <p className="text-muted-foreground">We celebrate Taita culture through our cuisine, décor, and community partnerships.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-lg mb-1">Sustainable Tourism</h3>
                  <p className="text-muted-foreground">We're committed to eco-friendly practices that protect Tsavo's natural heritage.</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for an Adventure?</h2>
          <p className="max-w-2xl mx-auto opacity-90 mb-8 text-lg">
            Whether you're embarking on a Tsavo safari, attending a conference, or simply looking for a comfortable stopover, 
            Two Oceans Hotel welcomes you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/rooms">View Our Rooms</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
