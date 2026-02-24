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

const lineGrow = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "100%",
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  return (
    <section
      className="relative overflow-hidden py-36 px-8"
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

        .micro-hover {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      letter-spacing 0.4s ease;
        }

        .micro-hover:hover {
          transform: translateY(-4px);
          letter-spacing: 0.02em;
        }
      `}</style>

      <div className="about-grain absolute inset-0" />

      {/* Oversized Stroke Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2
          className="font-playfair text-[180px] md:text-[240px] tracking-widest select-none"
          style={{
            WebkitTextStroke: "1px rgba(193,127,62,0.12)",
            color: "transparent",
          }}
        >
          BK FRUITS
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-[1px] w-12 bg-[#C17F3E]" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#C17F3E]">
            Who We Are
          </span>
        </motion.div>

        {/* Heading with Green Accent */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-6xl leading-[1.1] mb-20 max-w-4xl"
        >
          Supplying{" "}
          <span style={{ color: "#A2B568" }}>Freshness</span>.
          <br />
          Delivering{" "}
          <span className="italic" style={{ color: "#C17F3E" }}>
            Reliability
          </span>.
        </motion.h2>

        {/* Shifted Grid Layout */}
        <div className="grid md:grid-cols-12 gap-16 items-start">

          {/* Left — Body copy (shifted inward) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-5 md:col-start-2 space-y-6 text-lg leading-relaxed"
            style={{ color: "rgba(28,20,16,0.75)" }}
          >
            <p className="micro-hover">
              BK Fruits is a dedicated wholesale fruit supplier committed to
              delivering fresh, high-quality produce at competitive wholesale
              prices. We source directly from trusted farmers to ensure
              consistency, freshness, and dependable supply.
            </p>

            <p className="micro-hover">
              Our focus goes beyond distribution. We build long-term
              partnerships with retailers, hotels, and bulk buyers who value
              transparency and quality assurance.
            </p>

            <p className="micro-hover">
              Every shipment is carefully handled and inspected to maintain
              freshness from farm to final destination.
            </p>
          </motion.div>

          {/* Animated Vertical Divider */}
          <motion.div
            variants={lineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:block md:col-span-1 relative"
          >
            <div className="w-[1px] bg-[#C17F3E]/40 absolute left-1/2 -translate-x-1/2 h-full" />
          </motion.div>

          {/* Right — Mission Box */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4 relative p-10 micro-hover"
            style={{
              border: "1px solid rgba(193,127,62,0.3)",
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              className="absolute -top-3 left-10 px-4 text-xs tracking-[0.3em] uppercase"
              style={{ background: "#F2EBE0", color: "#C17F3E" }}
            >
              Our Mission
            </div>

            <p className="font-playfair text-2xl leading-relaxed">
              To provide reliable fruit sourcing solutions while maintaining
              the highest standards of freshness, consistency, and service.
            </p>
          </motion.div>
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-28 pt-10 text-sm tracking-[0.25em] uppercase flex items-center gap-6"
          style={{
            borderTop: "1px solid rgba(193,127,62,0.2)",
            color: "rgba(28,20,16,0.5)",
          }}
        >
          <span className="micro-hover">Trusted by retailers</span>
          <span style={{ color: "#C17F3E", opacity: 0.5 }}>·</span>
          <span className="micro-hover">Distributors</span>
          <span style={{ color: "#C17F3E", opacity: 0.5 }}>·</span>
          <span className="micro-hover">Bulk buyers</span>
        </motion.div>
      </div>
    </section>
  );
}
