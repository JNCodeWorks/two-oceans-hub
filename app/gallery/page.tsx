import Image from "next/image";

export const metadata = {
  title: "Gallery | Two Oceans Hotel",
  description: "View photos of Two Oceans Hotel, our rooms, restaurant, pool, and facilities in Voi, Kenya.",
};

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
    alt: "Hotel exterior view",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=80",
    alt: "Deluxe hotel room",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80",
    alt: "Executive suite",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80",
    alt: "Hotel pool area",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80",
    alt: "Hotel lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80",
    alt: "Poolside loungers",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop&q=80",
    alt: "Conference hall setup",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
    alt: "Restaurant dining",
  },
  {
    src: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&auto=format&fit=crop&q=80",
    alt: "Garden terrace",
  },
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=80",
    alt: "Hotel at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80",
    alt: "Honeymoon suite",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80",
    alt: "Breakfast spread",
  },
];

export default function GalleryPage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Gallery</h1>
            <p className="text-muted-foreground text-lg">
                Glimpses of the Two Oceans experience.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((image, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                        <span className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            {image.alt}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
