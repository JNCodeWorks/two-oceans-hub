import { Suspense } from "react";
import { ROOMS } from "@/lib/data";
import { RoomCard } from "@/components/features/rooms/RoomCard";
import { RoomCardSkeleton } from "@/components/ui/Skeleton";

export const metadata = {
  title: "Rooms & Rates | Two Oceans Hotel",
  description: "Browse our luxurious rooms and suites at Two Oceans Hotel. Find the perfect accommodation for your stay in Voi, Kenya.",
  openGraph: {
    title: "Rooms & Rates | Two Oceans Hotel",
    description: "Luxurious rooms and suites in Voi, Kenya",
    type: "website",
  },
};

function RoomsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ROOMS.map((room) => (
        <RoomCard
          key={room.id}
          {...room}
        />
      ))}
    </div>
  );
}

function RoomsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <RoomCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default function RoomsPage() {
  return (
    <>
      <div className="bg-zinc-900 py-16 text-center text-white">
        <h1 className="text-4xl font-serif font-bold mb-4">Accommodations</h1>
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto px-4">
          Experience comfort and elegance in our thoughtfully designed rooms.
        </p>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Suspense fallback={<RoomsGridSkeleton />}>
            <RoomsGrid />
          </Suspense>
        </div>
      </section>
    </>
  );
}
