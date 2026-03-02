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

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

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
        .bk-nav-link:hover { color: #A2B568; }

        /* Hamburger */
        .bk-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          background: none;
          border: none;
          z-index: 200;
        }
        .bk-hamburger span {
          height: 2px;
          background: #c8d0cc;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .bk-hamburger span:nth-child(1) { width: 24px; }
        .bk-hamburger span:nth-child(2) { width: 18px; }
        .bk-hamburger span:nth-child(3) { width: 24px; }

        .bk-hamburger.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
          width: 22px;
        }
        .bk-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .bk-hamburger.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
          width: 22px;
        }

        /* Overlay */
 /* Overlay */
.bk-mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 98;
}
.bk-mobile-overlay.open {
  opacity: 1;
  pointer-events: all;
}

/* Drawer - SAME STYLE AS HEADER */
.bk-mobile-menu {
  position: fixed;
  top: 0;
  right: -240px;
  width: 220px;                 /* smaller width */
  height: ;
  background: rgba(21,40,47,0.98); /* SAME as scrolled header */
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: -8px 0 30px rgba(0,0,0,0.25);
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: right 0.35s cubic-bezier(0.4,0,0.2,1);
  z-index: 99;
}

.bk-mobile-menu.open {
  right: 0;
}

/* Links - Slightly Smaller */
.bk-mobile-link {
  font-family: 'Playfair Display', serif;
  font-size: 18px;        /* reduced size */
  color: #c8d0cc;
  text-decoration: none;
  letter-spacing: 0.05em;
  padding: 12px 0;
  width: 160px;
  text-align: center;
  transition: color 0.3s ease;
}

.bk-mobile-link:hover {
  color: #A2B568;
}

        /* Responsive */
        @media (max-width: 768px) {
          .bk-desktop-nav { display: none !important; }
          .bk-hamburger { display: flex !important; }
        }
      `}</style>

      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.45s ease, box-shadow 0.45s ease",
          background: scrolled ? "rgba(21,40,47,0.98)" : "rgba(21,40,47,0.70)",
          backdropFilter: scrolled ? "blur(0px)" : "blur(14px)",
          WebkitBackdropFilter: scrolled ? "blur(0px)" : "blur(14px)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.28)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo2.png"
              alt="BK Fruits Logo"
              style={{
                height: "115px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav
            className="bk-desktop-nav"
            style={{ display: "flex", gap: "36px" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="bk-nav-link"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className={`bk-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`bk-mobile-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <div className={`bk-mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="bk-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
