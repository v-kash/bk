"use client";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 px-6 md:px-10 lg:px-12"
      style={{ background: "#F2EBE0", color: "#1C1410" }}
    >
      <style>{`
        .about-grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div className="about-grain absolute inset-0" />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_85%_15%,rgba(193,127,62,0.1),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_10%_85%,rgba(162,181,104,0.07),transparent_50%)]" />

      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2
          className="font-playfair text-[160px] md:text-[220px] tracking-widest select-none"
          style={{ color: "rgba(193,127,62,0.06)" }}
        >
          BK FRUITS
        </h2>
      </div>

<div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12" style={{ background: "#C17F3E" }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "#C17F3E" }}
          >
            Who We Are
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-6xl leading-[1.05] mb-20 md:mb-24 max-w-4xl"
          style={{ color: "#1C1410" }}
        >
          Supplying Freshness.
          <br />
          <span className="italic" style={{ color: "#C17F3E" }}>
            Delivering Reliability.
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-20 md:gap-24 items-start">
          {/* Left — Body copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
            style={{ color: "rgba(28,20,16,0.75)" }}
          >
            <p>
              BK Fruits is a dedicated wholesale fruit supplier committed to
              delivering fresh, high-quality produce at competitive wholesale
              prices. We source directly from trusted farmers to ensure
              consistency, freshness, and dependable supply across every order.
            </p>
            <p>
              Our focus goes beyond just distribution. We build long-term
              partnerships with retailers, hotels, and bulk buyers who value
              transparency, quality assurance, and timely logistics.
            </p>
            <p>
              Every shipment is carefully handled and quality-checked to
              maintain freshness from farm to final destination.
            </p>
          </motion.div>

          {/* Right — Mission box */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative p-10"
            style={{
              border: "1px solid rgba(193,127,62,0.3)",
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Floating label */}
            <div
              className="absolute -top-3 left-10 px-4 text-xs tracking-[0.3em] uppercase"
              style={{ background: "#F2EBE0", color: "#C17F3E" }}
            >
              Our Mission
            </div>

            {/* Corner accents */}
            <div
              className="absolute top-3 right-3 w-5 h-5 border-t border-r"
              style={{ borderColor: "rgba(193,127,62,0.4)" }}
            />
            <div
              className="absolute bottom-3 left-3 w-5 h-5 border-b border-l"
              style={{ borderColor: "rgba(193,127,62,0.4)" }}
            />

            <p
              className="font-playfair text-2xl leading-relaxed"
              style={{ color: "#1C1410" }}
            >
              To provide reliable fruit sourcing solutions while maintaining the
              highest standards of freshness, consistency, and service.
            </p>
          </motion.div>
        </div>

        {/* Bottom trust strip */}
        {/* <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-24 pt-10 text-sm tracking-[0.25em] uppercase flex items-center gap-6"
          style={{ borderTop: "1px solid rgba(193,127,62,0.2)", color: "rgba(28,20,16,0.5)" }}
        >
          <span>Trusted by retailers</span>
          <span style={{ color: "#C17F3E", opacity: 0.5 }}>·</span>
          <span>Distributors</span>
          <span style={{ color: "#C17F3E", opacity: 0.5 }}>·</span>
          <span>Bulk buyers</span>
        </motion.div> */}
      </div>
    </section>
  );
}
