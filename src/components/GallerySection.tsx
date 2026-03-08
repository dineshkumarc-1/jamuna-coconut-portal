import { motion } from "framer-motion";
import coconutTrees from "@/assets/coconut-trees.jpg";
import heroCoconut from "@/assets/hero-coconut.jpg";
import coconutWater from "@/assets/coconut-water.jpg";
import coconutFresh from "@/assets/coconut-fresh.jpg";

const images = [
  { src: coconutTrees, alt: "Coconut palm trees at sunset" },
  { src: heroCoconut, alt: "Fresh tender coconuts on tree" },
  { src: coconutWater, alt: "Tender coconut water pouring" },
  { src: coconutFresh, alt: "Fresh coconut half" },
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
