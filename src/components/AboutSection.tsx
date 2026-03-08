import { motion } from "framer-motion";
import coconutWater from "@/assets/coconut-water.jpg";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "Fresh", label: "Daily Supply" },
  { value: "Fast", label: "Home Delivery" },
  { value: "Pure", label: "No Additives" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img src={coconutWater} alt="Fresh tender coconut water being poured" className="rounded-2xl shadow-[var(--shadow-elevated)] w-full object-cover aspect-[4/5]" />
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground rounded-xl px-5 py-3 font-display text-lg font-bold shadow-lg">
            100% Natural & Fresh
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">Nature's Perfect Refreshment</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At <strong className="text-foreground">Jamuna Tender Coconut</strong>, we bring you the freshest tender coconuts sourced directly from trusted farms. Every coconut is handpicked to ensure you get the sweetest, most refreshing water nature has to offer.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Tender coconut water is a natural isotonic beverage packed with electrolytes, potassium, and essential minerals. It's nature's own energy drink — no preservatives, no artificial flavours, just pure goodness in every sip.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-secondary rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-primary font-display">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
