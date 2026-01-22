import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
      {/* Background Image - Using Next.js Image for optimization */}
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&auto=format&fit=crop&q=80"
        alt="Two Oceans Hotel - Luxury accommodation in Voi, Kenya"
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30 z-0" /> {/* Dark overlay for text readability */}

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 animate-fade-in-up">
            Two Oceans Hotel
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light text-zinc-100">
            Luxury accommodation in the heart of Voi, Kenya.
            <br className="hidden md:block" />
            Where business meets tranquility.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white rounded-full transition-transform hover:scale-105" asChild>
                <Link href="/contact">Check Availability</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-white text-white hover:bg-white hover:text-black rounded-full backdrop-blur-sm" asChild>
                <Link href="/rooms">View Rooms</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
