import { Phone } from "lucide-react";
import coconutFresh from "@/assets/coconut-fresh.jpg";

const CTABanner = () => (
  <section className="py-16">
    <div className="container">
      <div className="relative rounded-3xl overflow-hidden">
        <img src={coconutFresh} alt="Fresh coconut" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-cta-gradient opacity-85" />
        <div className="relative text-center py-16 px-6 md:py-24">
          <h3 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-3">
            One Coconut a Day Keeps the Doctor Away! 🥥
          </h3>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Order fresh tender coconuts now and feel the difference
          </p>
          <a
            href="tel:7829776202"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-primary font-bold hover:bg-card/90 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
