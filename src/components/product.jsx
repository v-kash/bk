"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SEASONS = ["Summer", "Monsoon", "Winter"];

const products = [
  {
    id: 1,
    title: "Alphonso Mango",
    season: "Summer",
    description:
      "Rich, saffron-coloured mango with intense sweetness and smooth texture. A premium summer favourite.",
    image: "/hero15.jpeg",
  },
  {
    id: 2,
    title: "Kesar Mango",
    season: "Summer",
    description:
      "Bright orange flesh with balanced sweetness and a distinctive aroma. Popular across South India.",
    image: "/hero11.jpeg",
  },
  {
    id: 3,
    title: "Banganapalli Mango",
    season: "Summer",
    description:
      "Large, fibreless mango known for its smooth pulp and uniform sweetness.",
    image: "/hero15.jpeg",
  },
  {
    id: 4,
    title: "Watermelon",
    season: "Summer",
    description:
      "Refreshing and naturally sweet fruit, ideal for peak summer demand.",
    image: "/hero5.jpeg",
  },
  {
    id: 5,
    title: "Sapota (Chikoo)",
    season: "Summer",
    description:
      "Soft brown fruit with caramel-like sweetness, widely consumed in South India.",
    image: "/hero6.jpeg",
  },
  {
    id: 6,
    title: "Mosambi (Sweet Lime)",
    season: "Summer",
    description:
      "Juicy and mildly sweet citrus fruit, perfect for fresh juice supply.",
    image: "/hero14.jpeg",
  },
  {
    id: 7,
    title: "Pomegranate",
    season: "Monsoon",
    description: "Deep red arils with balanced sweetness and good shelf life.",
    image: "/hero3.jpeg",
  },
  {
    id: 8,
    title: "Cavendish Banana",
    season: "Year Round",
    description: "Uniform premium bananas available throughout the year.",
    image: "/hero4.jpeg",
  },
  {
    id: 9,
    title: "Robusta Banana",
    season: "Year Round",
    description:
      "Naturally sweet and widely supplied for both retail and bulk demand.",
    image: "/hero4.jpeg",
  },

  {
    id: 10,
    title: "Sapota (Chikoo)",
    season: "Summer",
    description:
      "Soft brown fruit with caramel-like sweetness, widely consumed in South India.",
    image: "/hero6.jpeg",
  },
  {
    id: 11,
    title: "Mosambi (Sweet Lime)",
    season: "Summer",
    description:
      "Juicy and mildly sweet citrus fruit, perfect for fresh juice supply.",
    image: "/hero14.jpeg",
  },
];

const MONTH_LABELS = [
  "J",
  "F",
  "M",
  "A",
  "M",
  "J",
  "J",
  "A",
  "S",
  "O",
  "N",
  "D",
];

function SeasonBar({ months, accent }) {
  return (
    <div className="flex gap-[3px] items-end">
      {months.map((active, i) => (
        <div key={i} className="flex flex-col items-center gap-[3px]">
          <div
            style={{
              width: 16,
              height: 5,
              borderRadius: 2,
              background: active ? accent : "rgba(255,255,255,0.15)",
              transition: "background 0.3s",
            }}
          />
          <span
            style={{
              fontSize: 7,
              color: active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            {MONTH_LABELS[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const imageVariants = {
  enter: (dir) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 40 : -40 }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({ opacity: 0, scale: 0.98, transition: { duration: 0.4 } }),
};

export default function ProductsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeSeason, setActiveSeason] = useState("Summer");
  const [activeCard, setActiveCard] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (product) => product.season === activeSeason,
  );

  const go = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + products.length) % products.length);
  };

  const product = products[current];

  return (
    <section id="products" style={{ background: "#F2EBE0" }}>
      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-5"
        >
          <div className="h-[1px] w-12" style={{ background: "#C17F3E" }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "#C17F3E" }}
          >
            Seasonal Catalogue
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair text-4xl md:text-5xl leading-tight"
            style={{ color: "#1C1410" }}
          >
            India's Finest,{" "}
            <span className="italic" style={{ color: "#C17F3E" }}>
              Season by Season.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "rgba(28,20,16,0.5)" }}
          >
            Every fruit sourced directly from origin farms — quality-checked and
            dispatched with full traceability.
          </motion.p>
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="mt-10"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, #C17F3E, rgba(28,20,16,0.07))",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        {/* ── Season Menu + Product Slider ── */}
        <div className="max-w-7xl mx-auto  md:px-10 pb-15">
          {/* Season Menu */}
          <div className="flex gap-8 border-b border-[#E6DFD6] mb-14">
            {SEASONS.map((season) => (
              <button
                key={season}
                onClick={() => setActiveSeason(season)}
                className="relative pb-4 text-sm tracking-[0.25em] uppercase"
                style={{
                  color: activeSeason === season ? "#1C1410" : "#9C948B",
                }}
              >
                {season}
                {activeSeason === season && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#C17F3E]" />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSeason}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-5"
            >
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.09,
                    ease: "easeOut",
                  }}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setSelectedProduct(product);
                    }
                  }}
                  className="group cursor-pointer relative aspect-[3/4] overflow-hidden"
                >
                  {/* Image */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Permanent gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Single block — title + panel move together */}
                  {/* Permanent title — always visible on image */}
                  <div className="absolute left-0 right-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="font-playfair text-[1rem] leading-snug text-white">
                      {product.title}
                    </h3>
                  </div>

                  {/* White panel — slides up on hover */}
                  <div
                    className="absolute left-0 right-0 bottom-0 [transform:translateY(100%)] md:group-hover:[transform:translateY(0)]"
                    style={{
                      transform:
                        activeCard === product.id ? "translateY(0)" : undefined,
                      transition:
                        "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {/* Title repeated inside panel so it stays visible during slide */}
                    <div className="px-4 py-3 bg-gradient-to-t from-black/50 to-transparent">
                      <h3 className="font-playfair text-[1rem] leading-snug text-white">
                        {product.title}
                      </h3>
                    </div>
                    <div className="h-[100px] bg-white px-4 py-3 flex items-start">
                      <p className="text-[13px] text-[#5A5249] leading-relaxed line-clamp-4">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6  pt-10"
          style={{ borderTop: "1px solid rgba(28,20,16,0.1)" }}
        >
          <div>
            <p
              className="font-playfair text-xl mb-1"
              style={{ color: "#1C1410" }}
            >
              Looking for something not listed?
            </p>
            <p className="text-sm" style={{ color: "rgba(28,20,16,0.5)" }}>
              We source custom varieties on request. Talk to our supply team.
            </p>
          </div>
          <a
            href="#contact"
            className="
    w-full sm:w-auto
    text-center
    px-9 py-4 sm:py-3
    text-xs tracking-[0.25em] uppercase text-white
    bg-[#15282F]
    rounded-md
    transition-all duration-300
    hover:bg-[#068176]
    active:scale-[0.98]
  "
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full md:max-w-lg bg-white rounded-t-2xl md:rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-60 w-full">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl mb-3 text-[#1C1410]">
                  {selectedProduct.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5A5249]">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
