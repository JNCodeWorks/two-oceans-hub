import { Hero } from "@/components/sections/Hero";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { Amenities } from "@/components/sections/Amenities";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                    <span className="text-accent font-medium tracking-wider uppercase">Welcome to Voi</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-6">Experience the Two Oceans</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Nestled in the scenic landscapes of Taita Taveta, Two Oceans Hotel offers a perfect blend of modern luxury and natural beauty. Whether you are here for business or leisure, our world-class amenities and warm hospitality ensure an unforgettable stay.
                    </p>
              </div>
          </div>
      </section>

      <FeaturedRooms />
      <Amenities />
      <Testimonials />
      <CTA />
    </>
  );
}
