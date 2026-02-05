import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl p-8 md:p-16 shadow-xl text-center border overflow-hidden relative">
           <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                Ready to Book Your Stay?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Experience the best hospitality in Voi. Contact us today or book online to secure your reservation at Two Oceans Hotel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                    <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                        WhatsApp Us
                    </a>
                </Button>
              </div>
           </div>
           
           {/* Decorative circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
      </div>
    </section>
  );
}
