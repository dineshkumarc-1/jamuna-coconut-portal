import { motion } from "framer-motion";
import heroCoconut from "@/assets/hero-coconut-new.jpg";
import coconutWater from "@/assets/coconut-water-new.jpg";
import coconutFresh from "@/assets/coconut-fresh-new.jpg";
import coconutStall from "@/assets/coconut-stall.jpg";

const images = [
  { src: heroCoconut, alt: "Young green tender coconuts on palm tree" },
  { src: coconutStall, alt: "Fresh young tender coconuts at stall" },
  { src: coconutWater, alt: "Young tender coconut water being poured" },
  { src: coconutFresh, alt: "Young green tender coconut cut open" },
];

const GallerySection = () => (
  <section className="py-20 md:py-28 bg-section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Gallery</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Fresh & Natural</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="overflow-hidden rounded-2xl aspect-square"
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
