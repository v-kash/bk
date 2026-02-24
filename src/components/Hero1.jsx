"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// ─── Framer Motion Variants ───────────────────────────────────────────────────

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const lineVariant = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// Heading takes: 0.1 delay + (2 × 0.18 stagger) + 0.9 duration ≈ 1.36s to finish
// So everything after heading should start at ~1.4s+

const afterHeading = (extraDelay = 0) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.4 + extraDelay,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const labelVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const accentBarVariant = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 40,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

const decoLineVariant = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 64,
    opacity: 1,
    transition: {
      delay: 1.5,           // after heading finishes
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const rightSideVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const scrollCueVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2.0, duration: 0.8 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BKFruitsHero() {
  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient overlay for better text readability */}
       <div className="absolute inset-0 bg-[#15282F]/70 z-10" />

        
        {/* Main background image with Ken Burns effect */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero4.jpeg"
            alt="Fresh fruit orchard background"
            fill
            className="object-cover"
            style={{
              animation: 'kenBurnsBg 20s ease-in-out infinite alternate'
            }}
            priority
            quality={85}
          />
        </div>
      </div>

      <style>{`
        /* Ken Burns — slow zoom for main bg */
        @keyframes kenBurnsBg {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
        
        /* Ken Burns — for circular image */
        @keyframes kenBurns {
          from { transform: scale(1.0); }
          to   { transform: scale(1.10); }
        }
        .ken-burns-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform-origin: center center;
          animation: kenBurns 10s ease-in-out 0.5s infinite alternate;
        }

        /* Ring pulse */
        @keyframes ringPulse {
          0%, 100% { transform: scale(1.0);   opacity: 0.5; }
          50%       { transform: scale(1.035); opacity: 1;   }
        }
        .ring-outer { animation: ringPulse 5s ease-in-out infinite; }
        .ring-inner { animation: ringPulse 5s ease-in-out 0.8s infinite; }

        /* Button shimmer */
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
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,255,255,0.18),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }
        .btn-primary:hover::after { left: 160%; }
        .btn-primary:hover { background: #114643; }
      `}</style>

      {/* Enhanced radial glows for depth */}
      <div className="absolute inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_70%_40%,rgba(162,181,104,0.12),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_20%_80%,rgba(6,129,118,0.1),transparent_60%)]" />
      
      {/* Vignette effect for focus */}
      <div className="absolute inset-0 pointer-events-none z-30 shadow-[inset_0_0_150px_rgba(0,0,0,0.3)]" />

      <div className="relative z-40 max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div>

          {/* Micro Label — animates first */}
          <motion.div
            variants={headingContainer}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              variants={accentBarVariant}
              style={{ height: "1px", background: "#A2B568", width: 0 }}
            />
            <motion.span
              variants={labelVariant}
              className="text-[#A2B568] tracking-[0.25em] text-xs uppercase"
            >
              Premium Wholesale Supplier
            </motion.span>
          </motion.div>

          {/* Heading — line by line rise */}
          <motion.h1
            variants={headingContainer}
            initial="hidden"
            animate="visible"
            className="font-playfair text-5xl md:text-7xl leading-[1.05] mb-4"
          >
            <div className="overflow-hidden">
              <motion.div variants={lineVariant}>
                Fresh &amp;
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div variants={lineVariant} className="text-[#A2B568] italic">
                Premium Quality
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div variants={lineVariant}>
                Fruits
              </motion.div>
            </div>
          </motion.h1>

          {/* Decorative line — draws AFTER heading finishes */}
          <motion.div
            variants={decoLineVariant}
            initial="hidden"
            animate="visible"
            style={{
              height: "2px",
              background: "linear-gradient(to right, #A2B568, transparent)",
              borderRadius: "2px",
              marginBottom: "2rem",
              width: 0,
            }}
          />

          {/* Subheading — after heading */}
          <motion.p
            variants={afterHeading(0)}
            initial="hidden"
            animate="visible"
            className="text-gray-200 text-lg max-w-xl leading-relaxed mb-8"
          >
            Supplying retailers, hotels and bulk buyers with export-grade
            produce sourced directly from trusted farms.
          </motion.p>

          {/* CTA Buttons — slight delay after subheading */}
          <motion.div
            variants={afterHeading(0.15)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mb-10"
          >
            <button className="btn-primary px-8 py-4 text-sm tracking-wider uppercase text-white">
              Explore Products
            </button>
            <button className="border border-white hover:bg-white hover:text-[#15282F] px-8 py-4 text-sm tracking-wider uppercase transition duration-300 backdrop-blur-sm bg-white/10">
              Get a Quote
            </button>
          </motion.div>

          {/* Info Strip — last */}
          <motion.div
            variants={afterHeading(0.30)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-gray-300 border-t border-white/20 pt-6"
          >
            <span>Direct From Farmers</span>
            <span>|</span>
            <span>Bulk Supply</span>
            <span>|</span>
            <span>Timely Delivery</span>
          </motion.div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          variants={rightSideVariant}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center items-center"
        >
          {/* Outer Ring */}
          <div className="ring-outer absolute w-[480px] h-[480px] rounded-full border border-[#A2B568]/30 backdrop-blur-[2px]" />

          {/* Inner Ring */}
          <div className="ring-inner absolute w-[440px] h-[440px] rounded-full border border-white/10 backdrop-blur-[2px]" />

          {/* Circular Image with Ken Burns - Now using Next.js Image */}
          <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image
              src="/hero6.jpeg"
              alt="Premium Fruits"
              fill
              className="ken-burns-img"
              sizes="(max-width: 768px) 100vw, 420px"
              priority
            />
          </div>

          {/* Badge — slides up after image appears */}
          <motion.div
            variants={badgeVariant}
            initial="hidden"
            animate="visible"
            className="absolute bottom-10 right-16 bg-[#114643]/90 backdrop-blur-sm px-5 py-3 rounded-md border border-white/10"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-gray-300">
              Export Grade
            </p>
            <p className="font-playfair text-lg text-[#A2B568]">
              Produce
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        variants={scrollCueVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40"
      >
        <span className="text-[#A2B568]/80 text-[10px] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#A2B568] to-transparent" />
      </motion.div>

    </section>
  );
}