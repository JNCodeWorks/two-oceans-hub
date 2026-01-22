import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand & Description */}
          <div className="md:col-span-1">
             <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                Two Oceans
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {SITE_CONFIG.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
          
           {/* Socials & Newsletter (Placeholder) */}
           <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-4">
                <a href={SITE_CONFIG.links.facebook} className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-5 w-5" />
                </a>
                <a href={SITE_CONFIG.links.instagram} className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-5 w-5" />
                </a>
                <a href={SITE_CONFIG.links.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                </a>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
