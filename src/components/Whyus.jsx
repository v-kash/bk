"use client";
import { motion } from "framer-motion";

const points = [
  {
    title: "Direct Farm Partnerships",
    desc: "We work closely with verified farmers across key growing regions, ensuring fresh harvests, better traceability, and fair pricing without unnecessary middle layers.",
  },
  {
    title: "Strict Quality Selection",
    desc: "Every batch undergoes careful grading and inspection to maintain premium appearance, taste consistency, and extended shelf life.",
  },
  {
    title: "Competitive Wholesale Pricing",
    desc: "Optimized sourcing and logistics allow us to offer strong margins for retailers, distributors, and bulk buyers.",
  },
  {
    title: "Reliable & Timely Dispatch",
    desc: "Structured supply planning and efficient transport ensure on-time deliveries that keep your business running smoothly.",
  },
];

const tileTheme = [
  {
    bg: "#15282F",
    number: "rgba(193,127,62,0.25)",
    title: "#F2EBE0",
    desc: "rgba(242,235,224,0.55)",
    accent: "#C17F3E",
  },
  {
    bg: "#F2EBE0",
    number: "rgba(193,127,62,0.18)",
    title: "#1C1410",
    desc: "rgba(28,20,16,0.52)",
    accent: "#C17F3E",
  },
  {
    bg: "#F2EBE0",
    number: "rgba(193,127,62,0.18)",
    title: "#1C1410",
    desc: "rgba(28,20,16,0.52)",
    accent: "#C17F3E",
  },
  {
    bg: "#15282F",
    number: "rgba(193,127,62,0.25)",
    title: "#F2EBE0",
    desc: "rgba(242,235,224,0.55)",
    accent: "#C17F3E",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" style={{ background: "#FDFBF8" }}>
      {/* ── Header Area ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pt-14 md:pt-16 pb-0">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-[#C17F3E]" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#C17F3E]">
            Why Choose Us
          </span>
        </motion.div>

        {/* Heading + Intro */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl leading-tight text-[#1C1410]"
          >
            Why Leading Buyers
            <br />
            <span className="italic text-[#C17F3E]">Choose BK Fruits.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm leading-relaxed text-[rgba(28,20,16,0.6)] max-w-md self-end"
          >
            Trusted by retailers, supermarkets, and hospitality partners for
            consistent quality, dependable supply, and long-term business
            relationships.
          </motion.p>
        </div>
      </div>

      {/* ── Responsive Grid ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pb-20 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((item, i) => {
            const theme = tileTheme[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative px-6 sm:px-8 md:px-14 py-10 sm:py-12 md:py-16 overflow-hidden rounded-xl md:rounded-none"
                style={{ background: theme.bg }}
              >
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      theme.bg === "#15282F"
                        ? "linear-gradient(135deg, rgba(193,127,62,0.07) 0%, transparent 60%)"
                        : "linear-gradient(135deg, rgba(21,40,47,0.05) 0%, transparent 60%)",
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* Background Number */}
                <span
                  className="absolute top-1 right-5 sm:top-6 sm:right-8 font-playfair text-[4.5rem] sm:text-[6rem] md:text-[7rem] leading-none select-none pointer-events-none"
                  style={{ color: theme.number }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Accent Dot */}
                <div
                  className="w-2 h-2 rounded-full mb-6 sm:mb-8"
                  style={{ background: theme.accent }}
                />

                {/* Title */}
                <h3
                  className="font-playfair text-xl sm:text-2xl md:text-[1.65rem] leading-snug mb-4 relative z-10"
                  style={{ color: theme.title }}
                >
                  {item.title}
                </h3>

                {/* Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "2.5rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                  className="mb-5"
                  style={{ height: "1px", background: theme.accent }}
                />

                {/* Description */}
                <p
                  className="text-sm leading-relaxed relative z-10 md:max-w-xs"
                  style={{ color: theme.desc }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}