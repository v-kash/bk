"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const REASONS = [
  {
    number: "01",
    title: "Direct Farm Partnerships",
    body: "We work closely with verified farmers across key growing regions, ensuring fresh harvests, better traceability, and fair pricing without unnecessary middle layers.",
  },
  {
    number: "02",
    title: "Strict Quality Selection",
    body: "Every batch undergoes careful grading and inspection to maintain premium appearance, taste consistency, and shelf life.",
  },
  {
    number: "03",
    title: "Competitive Wholesale Pricing",
    body: "Optimized sourcing and logistics allow us to offer strong margins for retailers, distributors, and bulk buyers.",
  },
  {
    number: "04",
    title: "Reliable & Timely Dispatch",
    body: "Structured supply planning and efficient transport ensure on-time deliveries that keep your business running smoothly.",
  },
];

function ReasonRow({ reason, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-6 items-start py-7 relative"
      style={{ borderBottom: "1px solid rgba(28,20,16,0.09)" }}
    >
      {/* Hover left accent bar */}
      <div
        className="absolute left-0 top-7 bottom-7 w-[2px] opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-top"
        style={{
          background: "#C17F3E",
          transition: "opacity 0.3s, transform 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Number */}
      <span
        className="font-playfair text-[2.2rem] leading-none shrink-0 w-12 select-none"
        style={{ color: "rgba(193,127,62,0.2)" }}
      >
        {reason.number}
      </span>

      {/* Text */}
      <div className="flex-1 pl-2">
        <h3
          className="font-playfair text-lg md:text-xl mb-1.5 leading-snug"
          style={{ color: "#1C1410" }}
        >
          {reason.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(28,20,16,0.52)" }}
        >
          {reason.body}
        </p>
      </div>

      {/* Arrow on hover */}
      <div
        className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
        style={{ transition: "opacity 0.3s, transform 0.35s ease" }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M4 10h12M12 6l4 4-4 4"
            stroke="#C17F3E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function WhyChooseSection() {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden" style={{ background: "#F2EBE0" }}>
      <div className="grid md:grid-cols-2 min-h-[90vh]">

        {/* ── LEFT: Full-height image panel ── */}
        <div ref={leftRef} className="relative min-h-[60vw] md:min-h-0 overflow-hidden">
          <Image
            src="/hero15.jpeg"
            alt="BK Fruits farm"
            fill
            className="object-cover"
            priority
          />

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(21,40,47,0.3) 0%, rgba(21,40,47,0.75) 100%)",
            }}
          />

          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          {/* Text content over image */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-[1px] w-8" style={{ background: "#C17F3E" }} />
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "#C17F3E" }}
              >
                Why Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-5"
              style={{ color: "#F2EBE0" }}
            >
              Why Leading Buyers{" "}
              <span className="italic block" style={{ color: "#C17F3E" }}>
                Choose BK Fruits
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={leftInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm leading-relaxed mb-8 max-w-sm"
              style={{ color: "rgba(242,235,224,0.62)" }}
            >
              Trusted by retailers, supermarkets, and hospitality partners for
              consistent quality and dependable supply.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex gap-8"
            >
              {[
                { value: "50+", label: "Farm Partners" },
                { value: "12+", label: "Varieties" },
                { value: "100%", label: "Quality Checked" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="font-playfair text-2xl leading-none mb-1"
                    style={{ color: "#C17F3E" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "rgba(242,235,224,0.42)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT: Reasons ── */}
        <div
          className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-20"
          style={{ background: "#F2EBE0" }}
        >
          {/* Top amber rule */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            style={{
              height: "1px",
              background: "linear-gradient(to right, #C17F3E, rgba(28,20,16,0.06))",
              marginBottom: "2.5rem",
            }}
          />

          {/* Rows */}
          <div>
            {REASONS.map((reason, i) => (
              <ReasonRow key={reason.number} reason={reason} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <button
              className="px-9 py-3 text-xs tracking-[0.25em] uppercase text-white"
              style={{
                background: "#15282F",
                borderRadius: 2,
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#068176")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#15282F")}
            >
              Contact Our Team
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}