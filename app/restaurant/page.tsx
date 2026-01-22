import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MENU_HIGHLIGHTS } from "@/lib/data";

export const metadata = {
  title: "Restaurant & Bar | Two Oceans Hotel",
  description: "Dine at Two Oceans Hotel. Enjoy local Kenyan and international cuisines in a relaxed atmosphere in Voi.",
};

export default function RestaurantPage() {
  return (
    <>
      <div className="relative h-[60vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80"
          alt="Two Oceans Restaurant - Fine dining in Voi"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Dining Experience</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
            Savor the flavors of Voi with our exquisite culinary offerings.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                 <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">The Ocean Restaurant</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Our main restaurant offers a diverse menu featuring local Kenyan delicacies and international favorites. 
                        Whether you are in the mood for fresh seafood, grilled meats, or vegetarian delights, our chefs prepare every dish with passion and fresh, locally sourced ingredients.
                    </p>
                    <div className="space-y-2 text-sm text-foreground">
                        <p><strong>Breakfast:</strong> 6:30 AM – 10:00 AM</p>
                        <p><strong>Lunch:</strong> 12:30 PM – 3:00 PM</p>
                        <p><strong>Dinner:</strong> 7:00 PM – 10:30 PM</p>
                    </div>
                    <Button asChild className="mt-4">
                        <Link href="/contact">Reserve a Table</Link>
                    </Button>
                 </div>
                 <div className="flex-1 relative aspect-square w-full md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80" 
                        alt="Restaurant Interior"
                        fill
                        className="object-cover"
                    />
                 </div>
            </div>

            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Menu Highlights</h2>
                <p className="text-muted-foreground">A sneak peek into our chef's favorites.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {MENU_HIGHLIGHTS.map((item, idx) => (
                    <div key={idx} className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
                        <div className="relative aspect-video overflow-hidden">
                             <Image 
                                src={item.image} 
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">{item.name}</h3>
                                <span className="text-primary font-bold text-sm whitespace-nowrap">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

       <section className="py-24 bg-zinc-50">
           <div className="container mx-auto px-4 text-center">
               <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Pool Bar</h2>
               <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                   Unwind with a refreshing cocktail or a cold beer at our poolside bar. The perfect spot to relax after a day of exploring Tsavo.
               </p>
                <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                     <Image 
                        src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1200&auto=format&fit=crop&q=80" 
                        alt="Pool Bar"
                        fill
                        className="object-cover"
                    />
                </div>
           </div>
       </section>
    </>
  );
}
