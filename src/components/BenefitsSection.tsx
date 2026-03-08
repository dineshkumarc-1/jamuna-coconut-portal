import { Droplets, Heart, Zap, Shield, Apple, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Droplets, title: "Ultimate Hydration", desc: "Rich in natural electrolytes and potassium, tender coconut water rehydrates faster than plain water — perfect for Bengaluru's warm climate." },
  { icon: Heart, title: "Heart Health", desc: "Regular consumption helps lower cholesterol and blood pressure. The potassium and magnesium content supports a healthy cardiovascular system." },
  { icon: Zap, title: "Instant Energy Boost", desc: "Natural sugars and minerals provide an immediate, sustained energy lift without the crash of caffeinated drinks or sodas." },
  { icon: Shield, title: "Boosts Immunity", desc: "Packed with vitamins C and B-complex, along with antioxidants that strengthen your immune system and fight free radicals." },
  { icon: Apple, title: "Aids Digestion", desc: "Bioactive enzymes in tender coconut water improve digestion, reduce bloating, and help maintain a healthy gut flora." },
  { icon: Sparkles, title: "Glowing Skin & Hair", desc: "Cytokinins and lauric acid promote cell growth, keeping your skin hydrated, youthful, and your hair strong and shiny." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 md:py-28 bg-section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Health Benefits</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">Why Drink Tender Coconut Water?</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Tender coconut water is one of nature's most powerful health drinks. Here's what a glass a day can do for you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
