import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CONFERENCE_HALLS } from "@/lib/data";

export const metadata = {
  title: "Conferences & Events | Two Oceans Hotel",
  description: "Host your meetings, weddings, and corporate events at Two Oceans Hotel in Voi. State-of-the-art facilities and professional service.",
};

export default function ConferencesPage() {
  return (
    <>
      <div className="relative h-[60vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&auto=format&fit=crop&q=80"
          alt="Conference facilities at Two Oceans Hotel"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Meetings & Events</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
            The perfect venue for your corporate and social gatherings in Voi.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Facilities</h2>
                 <p className="text-muted-foreground text-lg leading-relaxed">
                    We offer versatile event spaces equipped with modern technology to ensure your event runs smoothly. 
                    From intimate board meetings to grand wedding receptions, we have the perfect space for you.
                 </p>
            </div>

            <div className="space-y-24">
                {CONFERENCE_HALLS.map((hall, idx) => (
                    <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
                         <div className="flex-1 w-full">
                            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={hall.image}
                                    alt={hall.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                         </div>
                         <div className="flex-1 w-full space-y-4">
                             <h3 className="text-3xl font-serif font-bold text-foreground">{hall.name}</h3>
                             <p className="text-accent font-medium uppercase tracking-wider text-sm">Capacity: {hall.capacity}</p>
                             <p className="text-muted-foreground text-lg">{hall.description}</p>
                             <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                                 <li>Projector & Screen</li>
                                 <li>Sound System</li>
                                 <li>High-Speed Wifi</li>
                                 <li>Stationery Provided</li>
                             </ul>
                             <div className="pt-4">
                                <Button asChild size="lg">
                                    <Link href="/contact">Inquire Now</Link>
                                </Button>
                             </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Plan Your Big Day With Us</h2>
              <p className="max-w-2xl mx-auto opacity-90 mb-8 text-lg">
                  Let us make your wedding or special celebration truly unforgettable. Our dedicated events team will assist you every step of the way.
              </p>
              <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">Contact Events Team</Link>
              </Button>
          </div>
      </section>
    </>
  );
}
