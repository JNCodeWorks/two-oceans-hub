import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
    />
  );
}

export function RoomCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
      <Skeleton className="aspect-video w-full" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-12 w-full" />
        <div className="flex gap-3 pt-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-4" />
        </div>
        <div className="flex gap-3 pt-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </div>
    </div>
  );
}

export function GalleryImageSkeleton() {
  return (
    <Skeleton className="aspect-square rounded-lg" />
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white/10 p-8 rounded-xl">
      <Skeleton className="h-8 w-8 mb-4 bg-white/20" />
      <Skeleton className="h-20 w-full mb-6 bg-white/20" />
      <div className="border-t border-white/20 pt-4 space-y-2">
        <Skeleton className="h-4 w-24 bg-white/20" />
        <Skeleton className="h-3 w-32 bg-white/20" />
      </div>
    </div>
  );
}
