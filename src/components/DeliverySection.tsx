import { Truck, MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const deliveryFeatures = [
  { icon: Truck, title: "Home Delivery", desc: "We deliver fresh tender coconuts right to your doorstep across Bengaluru." },
  { icon: MapPin, title: "Distance-Based Charges", desc: "Delivery charges depend on distance from our shop. Nearby areas enjoy minimal charges!" },
  { icon: Clock, title: "Same Day Delivery", desc: "Order before 2 PM and get your fresh coconuts delivered the same day." },
  { icon: MapPin, title: "Serving Bengaluru", desc: "Kumaraswamy Layout, ISRO Layout, JP Nagar, Banashankari, and surrounding areas." },
];

const DeliverySection = () => (
  <section id="delivery" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Delivery</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">Fresh Coconuts at Your Doorstep</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Can't visit the shop? No worries! We offer home delivery with extra charges based on distance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
        {deliveryFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 bg-card rounded-2xl p-5 shadow-[var(--shadow-soft)]"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-primary rounded-2xl p-8 md:p-10 text-center max-w-xl mx-auto">
        <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">📞 To Place an Order, Call or WhatsApp Us!</h3>
        <p className="text-primary-foreground/80 mb-6">Send your address & quantity on WhatsApp for quick delivery.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:7829776202" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-card text-primary font-bold text-lg hover:bg-card/90 transition-colors">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a href="https://wa.me/917829776202?text=Hi%2C%20I%20want%20to%20order%20tender%20coconuts.%20My%20address%20is%3A%20" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
            <MessageCircle className="w-5 h-5" /> WhatsApp Order
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default DeliverySection;
