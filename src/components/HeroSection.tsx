import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coconut.jpg";
import { whatsappUrl } from "./WhatsAppFloat";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-end overflow-hidden">
    <img src={heroImg} alt="Fresh tender coconuts on palm tree" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-hero-overlay" />

    <div className="relative container pb-16 pt-32 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
          🌴 Fresh from Bengaluru
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
          Jamuna<br />Tender Coconut
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-lg leading-relaxed">
          Sip nature's purest refreshment — farm-fresh tender coconut water delivered to your doorstep in Kumaraswamy Layout and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:7829776202"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" /> Order Now — 7829776202
          </a>
          <a
            href="#delivery"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground font-semibold text-base border border-primary-foreground/20 hover:bg-card/30 transition-colors"
          >
            Home Delivery Available 🚚
          </a>
        </div>
        <p className="mt-8 text-sm text-primary-foreground/60">
          3rd Main Rd, Kumaraswamy Layout 2nd Stage, ISRO Layout, Bengaluru, Karnataka 560078
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
