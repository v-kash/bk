"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Products", "Why Us", "Contact"];

export default function BKFruitsHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.45s ease, box-shadow 0.45s ease, backdrop-filter 0.45s ease",
        background: scrolled
          ? "rgba(21,40,47,0.98)"
          : "rgba(21,40,47,0.70)",
        backdropFilter: scrolled ? "blur(0px)" : "blur(14px)",
        WebkitBackdropFilter: scrolled ? "blur(0px)" : "blur(14px)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.28)" : "none",
        borderBottom: scrolled ? "1px solid rgba(162,181,104,0.15)" : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500&display=swap');

        .bk-nav-link {
          position: relative;
          color: #c8d0cc;
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.3s ease;
        }
        .bk-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #A2B568;
          transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .bk-nav-link:hover {
          color: #A2B568;
        }
        .bk-nav-link:hover::after {
          width: 100%;
        }

        .bk-cta-btn {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #068176;
          border: 1.5px solid #068176;
          background: transparent;
          padding: 9px 24px;
          border-radius: 3px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .bk-cta-btn:hover {
          background: #068176;
          color: #fff;
        }
      `}</style>

      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 48px",
        height: "76px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "26px",
          color: "#ffffff",
          letterSpacing: "0.06em",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <span style={{
            display: "inline-block",
            width: "6px",
            height: "24px",
            background: "linear-gradient(to bottom, #A2B568, #068176)",
            borderRadius: "2px",
            marginRight: "4px",
          }} />
          BK Fruits
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="bk-nav-link">
              {link}
            </a>
          ))}
          <button className="bk-cta-btn">Call Now</button>
        </nav>
      </div>
    </header>
  );
}