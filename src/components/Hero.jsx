"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const lineVariant = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const afterHeading = (extraDelay = 0) => ({
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 1.4 + extraDelay, duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
});

const labelVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const accentBarVariant = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: 40, opacity: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const decoLineVariant = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: 64, opacity: 1, transition: { delay: 1.5, duration: 0.9, ease: [0.4, 0, 0.2, 1] } },
};

const scrollCueVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 2.0, duration: 0.8 } },
};

const cardStack = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.4 } },
};

const makeCardVariant = (rotate, x, y) => ({
  hidden: { opacity: 0, rotate: rotate * 2, x: x * 1.5, y: 60 },
  visible: { opacity: 1, rotate, x, y, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
});

const badgeVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function BKFruitsHero() {

  const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});

// Background moves slower
const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

// Content moves slightly
const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

// Optional subtle fade
const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section  ref={ref} className="relative text-white overflow-hidden min-h-screen flex items-center">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#15282F]/70 z-10" />
        <motion.div
  style={{ y: bgY }}
  className="absolute inset-0 overflow-hidden"
>
  <Image
    src="/hero4.jpeg"
    alt="Fresh fruit orchard background"
    fill
    className="object-cover"
    priority
    quality={85}
  />
</motion.div>

      </div>

      <style>{`
        @keyframes kenBurnsBg {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
        .btn-primary {
          position: relative;
          overflow: hidden;
          background: #068176;
          transition: background 0.3s ease;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }
        .btn-primary:hover::after { left: 160%; }
        .btn-primary:hover { background: #114643; }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_70%_40%,rgba(162,181,104,0.12),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_20%_80%,rgba(6,129,118,0.1),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none z-30 shadow-[inset_0_0_150px_rgba(0,0,0,0.3)]" />

     <motion.div
  style={{ y: contentY, opacity }}
  className="relative z-40 max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center"
>


        {/* LEFT */}
        <div>
          <motion.div variants={headingContainer} initial="hidden" animate="visible" className="flex items-center gap-4 mb-6">
            <motion.div variants={accentBarVariant} style={{ height: "1px", background: "#A2B568", width: 0 }} />
            <motion.span variants={labelVariant} className="text-[#A2B568] tracking-[0.25em] text-xs uppercase">
              Premium Wholesale Supplier
            </motion.span>
          </motion.div>

          <motion.h1 variants={headingContainer} initial="hidden" animate="visible" className="font-playfair text-5xl md:text-7xl leading-[1.05] mb-4">
            <div className="overflow-hidden"><motion.div variants={lineVariant}>Fresh &amp;</motion.div></div>
            <div className="overflow-hidden"><motion.div variants={lineVariant} className="text-[#A2B568] italic">Premium Quality</motion.div></div>
            <div className="overflow-hidden"><motion.div variants={lineVariant}>Fruits</motion.div></div>
          </motion.h1>

          <motion.div
            variants={decoLineVariant} initial="hidden" animate="visible"
            style={{ height: "2px", background: "linear-gradient(to right, #A2B568, transparent)", borderRadius: "2px", marginBottom: "2rem", width: 0 }}
          />

          <motion.p variants={afterHeading(0)} initial="hidden" animate="visible" className="text-gray-200 text-lg max-w-xl leading-relaxed mb-8">
            Supplying retailers, hotels and bulk buyers with export-grade produce sourced directly from trusted farms.
          </motion.p>

          <motion.div variants={afterHeading(0.15)} initial="hidden" animate="visible" className="flex flex-wrap gap-4 mb-10">
            <button className="btn-primary px-8 py-4 text-sm tracking-wider uppercase text-white">Explore Products</button>
            <button className="border border-white hover:bg-white hover:text-[#15282F] px-8 py-4 text-sm tracking-wider uppercase transition duration-300 backdrop-blur-sm bg-white/10">Get a Quote</button>
          </motion.div>

          <motion.div variants={afterHeading(0.30)} initial="hidden" animate="visible" className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-gray-300 border-t border-white/20 pt-6">
            <span>Direct From Farmers</span><span>|</span><span>Bulk Supply</span><span>|</span><span>Timely Delivery</span>
          </motion.div>
        </div>

        {/* RIGHT — ANIMATED LAYERED TILTED CARDS */}
        <div className="relative flex justify-center items-center" style={{ minHeight: 520 }}>
          <motion.div
            variants={cardStack}
            initial="hidden"
            animate="visible"
            className="relative"
            style={{ width: 360, height: 440 }}
          >

            {/* Back card */}
            <motion.div
              variants={makeCardVariant(9, 44, 16)}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-white/10"
              style={{ zIndex: 1 }}
            >
              <Image src="/hero14.jpeg" alt="Fresh fruits" fill className="object-cover" sizes="360px" />
              <div style={{ position: "absolute", inset: 0, background: "rgba(21,40,47,0.25)" }} />
            </motion.div>

            {/* Middle card */}
            <motion.div
              variants={makeCardVariant(-6, -32, 24)}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-white/10"
              style={{ zIndex: 2 }}
            >
              <Image src="/hero15.jpeg" alt="Premium produce" fill className="object-cover" sizes="360px" />
              <div style={{ position: "absolute", inset: 0, background: "rgba(21,40,47,0.25)" }} />
            </motion.div>

            {/* Front card — no Ken Burns, just a clean static image */}
            <motion.div
              variants={makeCardVariant(-2, 0, 0)}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)] border border-white/10"
              style={{ zIndex: 3 }}
            >
              <Image src="/hero6.jpeg" alt="Premium Fruits" fill className="object-cover" sizes="360px" priority />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,70,67,0.65) 0%, transparent 55%)", zIndex: 1 }} />
            </motion.div>

            {/* Export Grade badge */}
            <motion.div
              variants={badgeVariant}
              initial="hidden"
              animate="visible"
              className="absolute bg-[#15282F]/90 backdrop-blur-sm px-5 py-3 rounded-xl border border-[#A2B568]/30 shadow-xl"
              style={{ zIndex: 10, bottom: -20, left: -24 }}
            >
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Export Grade</p>
              <p className="font-playfair text-lg text-[#A2B568]">Produce</p>
            </motion.div>

            {/* Farm Fresh tag */}
            <motion.div
              variants={badgeVariant}
              initial="hidden"
              animate="visible"
              className="absolute backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border border-[#15282F]/30"
              style={{ zIndex: 10, top: -16, right: -20, background: "#A2B568" }}
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#15282F] font-bold">Farm Fresh</p>
            </motion.div>

          </motion.div>
        </div>

      </motion.div>

      {/* Scroll cue */}
      <motion.div
        variants={scrollCueVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40"
      >
        <span className="text-[#A2B568]/80 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#A2B568] to-transparent" />
      </motion.div>

    </section>
  );
}