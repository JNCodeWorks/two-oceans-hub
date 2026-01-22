import Link from "next/link";
import { RoomCard } from "@/components/features/rooms/RoomCard";
import { Button } from "@/components/ui/button";
import { ROOMS } from "@/lib/data";

export function FeaturedRooms() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Luxurious Rooms</h2>
                <p className="text-muted-foreground max-w-xl">
                    Choose from our range of elegantly appointed rooms and suites, designed for your comfort and relaxation.
                </p>
            </div>
            <Button asChild variant="outline">
                <Link href="/rooms">View All Rooms</Link>
            </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.slice(0, 3).map((room) => (
            <RoomCard
              key={room.id}
              {...room}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
