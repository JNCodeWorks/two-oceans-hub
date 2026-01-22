import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Guests Say</h2>
          <p className="opacity-80">Real experiences from real guests.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-colors"
            >
              <Quote className="h-8 w-8 mb-4 opacity-50" />
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                "{testimonial.text}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm opacity-70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional testimonials in a smaller format */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.slice(3).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex items-start gap-4 bg-white/5 p-4 rounded-lg"
            >
              <Quote className="h-5 w-5 shrink-0 opacity-50 mt-1" />
              <div>
                <p className="text-sm opacity-80 mb-2">"{testimonial.text}"</p>
                <p className="text-sm font-bold">{testimonial.author} <span className="font-normal opacity-60">• {testimonial.role}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
