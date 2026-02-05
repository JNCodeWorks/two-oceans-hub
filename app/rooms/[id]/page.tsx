import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROOMS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Wifi, Wind, Coffee, Tv, Bath, Users, ChevronLeft, Check } from "lucide-react";

interface RoomDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ROOMS.map((room) => ({
    id: room.id,
  }));
}

export async function generateMetadata({ params }: RoomDetailPageProps) {
  const { id } = await params;
  const room = ROOMS.find((r) => r.id === id);
  
  if (!room) {
    return {
      title: "Room Not Found | Two Oceans Hotel",
    };
  }

  return {
    title: `${room.name} | Two Oceans Hotel`,
    description: room.description,
  };
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { id } = await params;
  const room = ROOMS.find((r) => r.id === id);

  if (!room) {
    notFound();
  }

  const allAmenities = [
    { icon: Wifi, label: "Free High-Speed WiFi" },
    { icon: Wind, label: "Air Conditioning" },
    { icon: Coffee, label: "Coffee & Tea Maker" },
    { icon: Tv, label: "55\" Smart TV" },
    { icon: Bath, label: "Luxury Bathroom" },
  ];

  return (
    <>
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/rooms" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to All Rooms
          </Link>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Room Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={room.image}
                alt={room.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Room Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  {room.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span>Up to {room.capacity} Guests</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {room.description}
              </p>

              <div className="border-t border-b py-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-primary">${room.price}</span>
                  <span className="text-muted-foreground mb-1">/ night</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Includes breakfast for {room.capacity} guests
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="font-bold text-lg mb-4">Room Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities?.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                  {allAmenities.slice(0, 4).map((amenity, idx) => (
                    <div key={`all-${idx}`} className="flex items-center gap-2 text-muted-foreground">
                      <amenity.icon className="h-4 w-4 text-accent" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-muted rounded-xl p-6 border">
                <h2 className="font-bold text-lg mb-4">Reserve This Room</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="checkin" className="text-sm font-medium">Check-in</label>
                      <input 
                        type="date" 
                        id="checkin"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="checkout" className="text-sm font-medium">Check-out</label>
                      <input 
                        type="date" 
                        id="checkout"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guests" className="text-sm font-medium">Guests</label>
                    <select 
                      id="guests"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    >
                      {[...Array(room.capacity)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Book Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    No payment required now. Pay at the hotel.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS.filter((r) => r.id !== room.id).slice(0, 3).map((relatedRoom) => (
              <Link 
                key={relatedRoom.id}
                href={`/rooms/${relatedRoom.id}`}
                className="group rounded-lg overflow-hidden border bg-card shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={relatedRoom.image}
                    alt={relatedRoom.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{relatedRoom.name}</h3>
                  <p className="text-primary font-bold text-sm">${relatedRoom.price}/night</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
