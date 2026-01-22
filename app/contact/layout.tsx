import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Two Oceans Hotel",
  description: "Get in touch with Two Oceans Hotel in Voi, Kenya. Book your stay or inquire about our services, rooms, and conference facilities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
