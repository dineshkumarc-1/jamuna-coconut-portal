import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  { icon: Phone, title: "Phone", detail: "7829776202", sub: "Call us to place your order", href: "tel:7829776202" },
  { icon: MapPin, title: "Shop Address", detail: "3rd Main Rd, Kumaraswamy Layout 2nd Stage,", sub: "ISRO Layout, Bengaluru, Karnataka 560078" },
  { icon: Clock, title: "Working Hours", detail: "Monday – Sunday: 8:30 AM – 10:00 PM", sub: "Open all days" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Visit Us or Call Now</h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {contactItems.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-card)]"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
              <c.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">{c.title}</h3>
            {c.href ? (
              <a href={c.href} className="text-primary font-semibold text-lg hover:underline">{c.detail}</a>
            ) : (
              <p className="text-foreground text-sm font-medium">{c.detail}</p>
            )}
            <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 bg-primary rounded-2xl p-8 text-center max-w-2xl mx-auto"
      >
        <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">🎉 Catering & Function Orders</h3>
        <p className="text-primary-foreground/80 mb-4">
          We take catering and function orders! Just call us to discuss quantity, delivery, pricing, and other details.
        </p>
        <a href="tel:7829776202" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-card text-primary font-bold text-lg hover:bg-card/90 transition-colors">
          <Phone className="w-5 h-5" /> 📱 7829776202
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
