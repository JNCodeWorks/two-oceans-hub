"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <>
        <div className="bg-primary py-16 text-center text-primary-foreground">
            <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto px-4">
              We are here to help. Reach out to us for bookings, inquiries, or feedback.
            </p>
        </div>

        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                         <h2 className="text-3xl font-serif font-bold text-primary mb-8">Get In Touch</h2>
                         <div className="space-y-8">
                             <div className="flex items-start gap-4">
                                 <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                     <MapPin className="h-6 w-6" />
                                 </div>
                                 <div>
                                     <h3 className="font-bold text-lg mb-1">Our Location</h3>
                                     <p className="text-muted-foreground">{SITE_CONFIG.address}</p>
                                     <p className="text-sm text-muted-foreground mt-2">Located near Tsavo East National Park gate.</p>
                                 </div>
                             </div>

                             <div className="flex items-start gap-4">
                                 <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                     <Phone className="h-6 w-6" />
                                 </div>
                                 <div>
                                     <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                                     <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {SITE_CONFIG.phone}
                                     </a>
                                     <p className="text-sm text-muted-foreground mt-1">Available 24/7 for reservations.</p>
                                 </div>
                             </div>

                             <div className="flex items-start gap-4">
                                 <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                     <Mail className="h-6 w-6" />
                                 </div>
                                 <div>
                                     <h3 className="font-bold text-lg mb-1">Email Address</h3>
                                     <a href={`mailto:${SITE_CONFIG.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {SITE_CONFIG.email}
                                     </a>
                                 </div>
                             </div>
                         </div>
                         
                         {/* Google Maps Embed */}
                         <div className="mt-12 h-64 w-full rounded-xl overflow-hidden relative">
                           <iframe
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127500.5!2d38.55!3d-3.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18258f1f0e4b5f5d%3A0x7c7b8d1d3f4e5f6g!2sVoi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                             width="100%"
                             height="100%"
                             style={{ border: 0 }}
                             allowFullScreen
                             loading="lazy"
                             referrerPolicy="no-referrer-when-downgrade"
                             title="Two Oceans Hotel Location - Voi, Kenya"
                           />
                         </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-muted p-8 rounded-2xl border">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send Us a Message</h2>
                        
                        {isSubmitted ? (
                          <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                              <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">
                              Thank you for contacting us. We'll get back to you within 24 hours.
                            </p>
                          </div>
                        ) : (
                          <form className="space-y-6" onSubmit={handleSubmit}>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                      <input 
                                        type="text" 
                                        id="name" 
                                        required
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" 
                                        placeholder="John Doe" 
                                      />
                                  </div>
                                  <div className="space-y-2">
                                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                      <input 
                                        type="email" 
                                        id="email" 
                                        required
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" 
                                        placeholder="john@example.com" 
                                      />
                                  </div>
                              </div>
                              
                              <div className="space-y-2">
                                  <label htmlFor="phone" className="text-sm font-medium">Phone Number (Optional)</label>
                                  <input 
                                    type="tel" 
                                    id="phone" 
                                    className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" 
                                    placeholder="+254 700 000 000" 
                                  />
                              </div>

                              <div className="space-y-2">
                                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                  <select 
                                    id="subject" 
                                    required
                                    className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                                  >
                                    <option value="">Select a subject...</option>
                                    <option value="booking">Room Booking</option>
                                    <option value="conference">Conference Inquiry</option>
                                    <option value="restaurant">Restaurant Reservation</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                  </select>
                              </div>

                              <div className="space-y-2">
                                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                                  <textarea 
                                    id="message" 
                                    rows={5} 
                                    required
                                    className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" 
                                    placeholder="How can we help you?" 
                                  />
                              </div>

                              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                  {isSubmitting ? (
                                    <>
                                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                      Sending...
                                    </>
                                  ) : (
                                    <>
                                      <Send className="h-4 w-4 mr-2" />
                                      Send Message
                                    </>
                                  )}
                              </Button>
                          </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
