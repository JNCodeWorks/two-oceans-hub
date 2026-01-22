import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-primary/20">
            404
          </h1>
          
          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary -mt-4 mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. 
            Perhaps you've mistyped the URL or the page has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/rooms" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                View Rooms
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">Or try one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/restaurant" className="text-primary hover:underline">Restaurant</Link>
              <Link href="/conferences" className="text-primary hover:underline">Conferences</Link>
              <Link href="/gallery" className="text-primary hover:underline">Gallery</Link>
              <Link href="/contact" className="text-primary hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
