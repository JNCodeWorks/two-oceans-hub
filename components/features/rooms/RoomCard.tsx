import Image from "next/image";
import Link from "next/link";
import { Wifi, Wind, Coffee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  capacity: number;
  amenities?: string[];
  className?: string;
}

export function RoomCard({
  id,
  name,
  description,
  price,
  image,
  capacity,
  amenities,
  className,
}: RoomCardProps) {
  return (
    <div className={cn("group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md", className)}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
            <h3 className="font-serif text-xl font-bold">{name}</h3>
            <div className="text-right">
                <span className="text-lg font-bold text-primary">${price}</span>
                <span className="text-sm text-muted-foreground">/night</span>
            </div>
        </div>
        
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Up to {capacity} Guests</span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        
        {/* Basic Amenities Preview */}
        <div className="mt-4 flex gap-3 text-muted-foreground">
            <Wifi className="h-4 w-4" />
            <Wind className="h-4 w-4" />
            <Coffee className="h-4 w-4" />
        </div>

        <div className="mt-6 flex gap-3">
             <Button asChild className="w-full">
                <Link href={`/rooms/${id}`}>Book Now</Link>
             </Button>
             <Button asChild variant="outline" className="w-full">
                <Link href={`/rooms/${id}`}>Details</Link>
             </Button>
        </div>
      </div>
    </div>
  );
}
