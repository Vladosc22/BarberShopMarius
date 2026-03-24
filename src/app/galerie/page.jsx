"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ── reuse the same nav items & icons from BarbershopHero ── */
const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Galerie", href: "/galerie#galerie-content", active: true },
  { label: "Contact Us", href: "/#contact" },
  { label: "Book Appointment", href: "/#booking", cta: true },
];

function HamburgerIcon({ open = false }) {
  return (
      <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
      >
        <path d={open ? "M5 5l14 14" : "M4.5 7.5h15"} />
        <path d={open ? "M19 5L5 19" : "M7.5 12h12"} />
        {!open ? <path d="M10.5 16.5h9" /> : null}
      </svg>
  );
}

function ScissorIcon() {
  return (
      <svg
          aria-hidden="true"
          viewBox="0 0 64 64"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <circle cx="18" cy="42" r="6" />
        <circle cx="18" cy="22" r="6" />
        <path d="M23 38l29-22" />
        <path d="M23 26l29 22" />
        <path d="M42 18l10 8" />
        <path d="M42 46l10-8" />
      </svg>
  );
}

/* ── placeholder image card ── */
function GalerieCard({ index }) {
  const [hovered, setHovered] = useState(false);
  const accents = [
    "#c8a96e", "#8b7e5e", "#6e7e5e", "#7e8e9e", "#9e7e7e", "#7e9e8e",
    "#9e8e6e", "#6e7e9e", "#b07070",
  ];
  const color = accents[index % accents.length];

  return (
      <article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hovered
                ? `0 16px 48px ${color}28, 0 0 0 1px ${color}35`
                : "0 2px 16px rgba(0,0,0,0.6)",
          }}
          className="relative overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[linear-gradient(140deg,#1b1512,#0f0d0c)]"
      >
        {/* placeholder gradient fills in for real images */}
        <div
            className="h-52 w-full"
            style={{
              background: `radial-gradient(ellipse at 40% 35%, ${color}40 0%, ${color}15 50%, #0f0d0c 100%)`,
            }}
        >
          {/* camera icon */}
          <div className="flex h-full items-center justify-center">
            <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ border: `1px solid ${color}40`, opacity: 0.45 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                    d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
                    stroke={color}
                    strokeWidth="1.5"
                />
                <circle cx="8.5" cy="8.5" r="1.5" stroke={color} strokeWidth="1.5" />
                <path d="m21 15-5-5L5 21" stroke={color} strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* hover overlay */}
        <div
            className="absolute inset-0 flex items-end p-4 transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
        >
        <span
            className="text-[9px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: color }}
        >
          View Photo
        </span>
        </div>

        {/* bottom accent line */}
        <div
            style={{
              height: 2,
              background: color,
              transformOrigin: "left",
              transform: hovered ? "scaleX(1)" : "scaleX(0.25)",
              opacity: hovered ? 1 : 0.35,
              transition: "transform 0.4s ease, opacity 0.4s ease",
            }}
        />
      </article>
  );
}

/* ── decorative corner diamond (matches hero's framed box) ── */
function CornerDiamond({ className }) {
  return (
      <div
          className={`absolute h-2.5 w-2.5 rotate-45 border border-[#d4af37]/80 bg-[#15110f] ${className}`}
      />
  );
}

export default function GaleriePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.querySelector(window.location.hash);
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  return (
      <main className="min-h-screen w-full bg-[#15110f] text-white">

        {/* ── NAV (identical structure to BarbershopHero) ── */}
        <div className="relative z-20 px-6 py-[16px] md:px-10 xl:px-[120px]">
          <header className="grid grid-cols-[auto,1fr] items-center md:grid-cols-[auto,1fr,auto]">
            <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="flex h-11 w-11 items-center justify-center text-[#d4af37] transition hover:opacity-80"
            >
              <HamburgerIcon open={menuOpen} />
            </button>

            <nav className="relative hidden w-full items-center justify-center gap-6 md:flex lg:gap-8">
              {navItems.map((item) =>
                  item.href.startsWith("/") ? (
                      <Link
                          key={item.label}
                          href={item.href}
                          className={`group relative font-ui text-[14px] font-medium tracking-[0.18em] text-white transition hover:opacity-80 md:flex md:h-11 md:items-center ${
                            item.cta
                              ? "absolute right-0 border border-[#d4af37] px-5 text-center font-semibold uppercase tracking-[0.22em] hover:bg-[#d4af37]/12"
                              : item.active
                                ? "opacity-100"
                                : "opacity-80"
                          }`}
                      >
                        {item.label}
                        {item.active && !item.cta && (
                            <span className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-[#d4af37]" />
                        )}
                      </Link>
                  ) : (
                      <a
                          key={item.label}
                          href={item.href}
                          className={`group relative font-ui text-[14px] font-medium tracking-[0.18em] text-white transition hover:opacity-80 md:flex md:h-11 md:items-center ${
                            item.cta
                              ? "absolute right-0 border border-[#d4af37] px-5 text-center font-semibold uppercase tracking-[0.22em] hover:bg-[#d4af37]/12"
                              : item.active
                                ? "opacity-100"
                                : "opacity-80"
                          }`}
                      >
                        {item.label}
                        {item.active && !item.cta && (
                            <span className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-[#d4af37]" />
                        )}
                      </a>
                  )
              )}
            </nav>

          </header>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
            id="mobile-menu"
            className={`fixed inset-0 z-30 flex h-[100svh] flex-col bg-[#15110f]/98 px-6 py-8 transition duration-300 md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-ui text-xs uppercase tracking-[0.35em] text-white/55">Navigation</span>
            <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close mobile menu"
                className="flex h-11 w-11 items-center justify-center text-[#d4af37]"
            >
              <HamburgerIcon open />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-7 text-center">
            {navItems.map((item) =>
                item.href.startsWith("/") ? (
                    <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-ui text-2xl tracking-[0.18em] text-white transition hover:opacity-80 ${item.active ? "text-[#d4af37]" : "opacity-90"}`}
                    >
                      {item.label}
                    </Link>
                ) : (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-ui text-2xl tracking-[0.18em] text-white transition hover:opacity-80 ${item.active ? "text-[#d4af37]" : "opacity-90"}`}
                    >
                      {item.label}
                    </a>
                )
            )}
            <a
                href="/#booking"
                onClick={() => setMenuOpen(false)}
                className="font-label mt-4 inline-flex border border-[#d4af37] px-5 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-[#d4af37]/12"
            >
              Book Appointment
            </a>
          </nav>
        </div>

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-10 md:pt-20 xl:px-[120px]">
          {/* ambient radial glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
               style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 68%)" }}
          />
          {/* scanline texture */}
          <div className="pointer-events-none absolute inset-0"
               style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.07) 3px,rgba(0,0,0,0.07) 4px)" }}
          />

          <div className="relative mx-auto max-w-5xl text-center">
            {/* decorative scissor row — same as hero */}
            <div className="mx-auto mb-8 flex flex-col items-center gap-2.5 md:mb-10">
              <span className="h-px w-8 bg-[#97d9ff]" />
              <div className="flex items-center gap-4 text-[#d4af37] md:gap-6">
                <span className="h-px w-16 bg-[#d4af37]/60 md:w-24 xl:w-32" />
                <ScissorIcon />
                <span className="h-px w-16 bg-[#d4af37]/60 md:w-24 xl:w-32" />
              </div>
              <span className="h-px w-6 bg-[#f2a0ba]" />
            </div>

            <h1 className="font-display mt-4 text-[clamp(2.4rem,6vw,4.5rem)] uppercase leading-[0.95] tracking-[0.08em] text-white">
              Our Signature Work
            </h1>

            {/* framed tagline box — mirrors hero's Est. 2024 box */}
            <div className="relative mt-6 inline-block px-7 py-4 md:mt-8 md:px-9">
              <div className="absolute inset-0 border border-[#d4af37]/35" />
              <CornerDiamond className="left-3 top-3" />
              <CornerDiamond className="right-3 top-3" />
              <CornerDiamond className="bottom-3 left-3" />
              <CornerDiamond className="bottom-3 right-3" />
              <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-[#d4af37]/70" />
              <div className="absolute bottom-0 left-1/2 h-5 w-px -translate-x-1/2 translate-y-1/2 bg-[#d4af37]/70" />
              <div className="absolute left-0 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37]/70" />
              <div className="absolute right-0 top-1/2 h-px w-5 translate-x-1/2 -translate-y-1/2 bg-[#d4af37]/70" />
              <p className="font-body relative text-[15px] leading-7 text-white/65 md:text-[16px]">
                Curated cuts, beard styling, and premium grooming results from our shop.
              </p>
            </div>

            <div className="mt-7 flex gap-3 md:mt-9">
              <a
                  href="#galerie-content"
                  className="font-label inline-flex items-center justify-center rounded-[10px] bg-[#d4af37] px-6 py-3.5 text-[15px] font-medium text-[#15110f] transition hover:brightness-110"
              >
                View Gallery
              </a>
            </div>
          </div>
        </section>

        {/* ── GALLERY GRID ── */}
        <section
            id="galerie-content"
            className="px-6 pb-28 pt-4 md:px-10 xl:px-[120px]"
        >
          <div className="mx-auto max-w-6xl">
            {/* section label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#d4af37]/15" />
              <p className="font-label text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                Latest Work
              </p>
              <span className="h-px flex-1 bg-[#d4af37]/15" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                  <GalerieCard key={i} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
