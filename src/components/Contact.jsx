"use client";
import { motion } from "framer-motion";

const details = [
  { label: "Call", value: "+91 98765 43210", href: "tel:+919876543210" },
  {
    label: "Email",
    value: "trade@bkfruits.com",
    href: "mailto:trade@bkfruits.com",
  },
  {
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  { label: "Office", value: "Ahmedabad, Gujarat", href: null },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#15282F" }}
    >
      {/* Top Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C17F3E44, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-14 md:pt-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-10 bg-[#C17F3E]" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C17F3E]">
            Get In Touch
          </span>
        </motion.div>

        {/* Heading + Paragraph */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl leading-tight text-[#F2EBE0]"
          >
            Let&apos;s Do{" "}
            <span className="italic text-[#C17F3E]">Business.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm leading-relaxed text-[rgba(242,235,224,0.55)] max-w-md"
          >
            Whether you're a retailer, distributor, or hospitality partner —
            reach out directly and our team will respond with pricing,
            availability, and sampling options within 24 hours.
          </motion.p>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="origin-left h-[1px] mx-5 md:mx-10 mt-10"
        style={{ background: "rgba(193,127,62,0.3)" }}
      />

      {/* Contact Items */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          {details.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-1"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase text-[rgba(193,127,62,0.7)]">
                {d.label}
              </span>

              {d.href ? (
                <a
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-playfair text-xl md:text-2xl text-[#F2EBE0] transition-colors duration-300 hover:text-[#C17F3E]"
                >
                  {d.value}
                </a>
              ) : (
                <span className="font-playfair text-xl md:text-2xl text-[rgba(242,235,224,0.6)]">
                  {d.value}
                </span>
              )}
            </motion.div>
          ))}

          {/* Spacer for Desktop */}
          <div className="hidden md:block flex-1" />

          {/* CTA */}
          <motion.a
            href="mailto:trade@bkfruits.com"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 md:mt-0 w-full md:w-auto text-center inline-flex justify-center items-center gap-3 px-8 py-4"
            style={{ background: "#C17F3E", color: "#1C1410" }}
          >
            <span className="font-playfair text-sm tracking-wide">
              Request Pricing
            </span>
          </motion.a>
        </div>
      </div>

      {/* Bottom Strip */}
      <div
        className="h-[1px] mx-5 md:mx-10"
        style={{ background: "rgba(193,127,62,0.15)" }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="font-playfair italic text-sm text-[rgba(242,235,224,0.3)]">
          "From grove to global — quality without compromise."
        </p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-[rgba(193,127,62,0.35)]">
          © {new Date().getFullYear()} BK Fruits · All Rights Reserved
        </p>
      </div>
    </section>
  );
}