"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Acasă", href: "#home", active: true },
  { label: "Servicii", href: "#services" },
  { label: "Galerie", href: "/galerie#galerie-content" },
  { label: "Contactează-ne", href: "#contact" },
];

const backgroundAsset = "/videos/ezgif.com-video-to-gif-converter.gif";

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

function MustacheIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 48"
      className="h-8 w-28 md:h-10 md:w-36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 18c18-12 34-9 50 8 6 6 14 10 22 10s16-4 22-10c16-17 32-20 50-8-3 10-11 16-23 18-15 2-28-5-39-19-4 10-12 15-22 15s-18-5-22-15c-11 14-24 21-39 19C19 34 11 28 8 18Z" />
    </svg>
  );
}

export function BarbershopHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main id="home" className="relative min-h-[100svh] w-full bg-[#15110f]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="hero-video pointer-events-none absolute inset-0 h-full min-h-screen w-full min-w-full object-cover object-center"
            src={backgroundAsset}
            alt=""
            loading="eager"
            decoding="async"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(12,9,8,0.2),rgba(12,9,8,0.62))]" />
          <div className="soft-haze pointer-events-none absolute inset-0" />
          <div className="dust-layer pointer-events-none absolute inset-0 opacity-55" />
          <div className="pole-flicker pointer-events-none absolute inset-y-0 right-[10%] w-[24%]" />
        </div>

        <div className="relative z-20 px-6 py-[16px] md:px-10 xl:px-[120px]">
          <header className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-11 w-11 items-center justify-center text-[#d4af37] transition hover:opacity-80 md:hidden"
            >
              <HamburgerIcon open={menuOpen} />
            </button>

            <div className="hidden md:block" aria-hidden="true" />

            <nav className="hidden items-center justify-center gap-6 lg:gap-8 md:flex">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group relative font-ui text-[14px] font-medium tracking-[0.18em] text-white transition hover:opacity-80 md:flex md:h-11 md:items-center ${
                      item.active ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {item.label}
                    {item.active ? (
                      <span className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-[#d4af37]" />
                    ) : null}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group relative font-ui text-[14px] font-medium tracking-[0.18em] text-white transition hover:opacity-80 md:flex md:h-11 md:items-center ${
                      item.active ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {item.label}
                    {item.active ? (
                      <span className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-[#d4af37]" />
                    ) : null}
                  </a>
                ),
              )}
            </nav>

            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fbookingwb.setmore.com%2Fc8djwtkb24%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5YZ0eSnziMWoDJLun36eDZiU5uHJw0PWhIbyh04JgYWfVyadWPW57ukVbjk_aem_mvlT1rYHBC0AcxTUaQjr9g&e=AT5hl6ZoO3lVWW3mXhlN8YatdR4nTnMAjEN3s7_SMbHj0w8rGrGaTVveugNAK4CjR8knUSOXDH8tr7O_ZTPQJ8kE22nJoGlXn1kg_fUm7A"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label hidden h-11 items-center justify-self-end border border-[#d4af37] bg-white/0 px-5 py-0 text-center text-[14px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#d4af37]/12 md:inline-flex md:justify-self-end"
            >
              Programează-te
            </a>
          </header>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-30 flex h-[100svh] flex-col bg-[#15110f]/98 px-6 py-8 transition duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-ui text-xs uppercase tracking-[0.35em] text-white/55">
            Navigation
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close mobile menu"
            className="flex h-11 w-11 items-center justify-center text-[#d4af37]"
          >
            <HamburgerIcon open />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`font-ui text-[clamp(1.15rem,5.6vw,1.5rem)] tracking-[0.12em] text-white transition hover:opacity-80 ${
                  item.active ? "text-[#d4af37]" : "opacity-90"
                }`}
              >
                {item.label}
              </Link>
            ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-ui text-[clamp(1.15rem,5.6vw,1.5rem)] tracking-[0.12em] text-white transition hover:opacity-80 ${
                    item.active ? "text-[#d4af37]" : "opacity-90"
                  }`}
                >
                  {item.label}
                </a>
            ),
          )}
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fbookingwb.setmore.com%2Fc8djwtkb24%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5YZ0eSnziMWoDJLun36eDZiU5uHJw0PWhIbyh04JgYWfVyadWPW57ukVbjk_aem_mvlT1rYHBC0AcxTUaQjr9g&e=AT5hl6ZoO3lVWW3mXhlN8YatdR4nTnMAjEN3s7_SMbHj0w8rGrGaTVveugNAK4CjR8knUSOXDH8tr7O_ZTPQJ8kE22nJoGlXn1kg_fUm7A"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-label mt-4 inline-flex border border-[#d4af37] px-5 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-[#d4af37]/12"
          >
            Book Appointment
          </a>
        </nav>
      </div>

      <section className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 pt-24 pb-6 md:px-10 md:pt-28 md:pb-8 xl:px-[120px]">
        <div className="flex max-w-5xl -translate-y-2 flex-col items-center text-center md:-translate-y-4">
          <div className="mb-5 flex flex-col items-center gap-2.5 md:mb-6 md:gap-3">
            <span className="h-px w-8 bg-[#97d9ff]" />

            <div className="flex items-center gap-4 text-[#d4af37] md:gap-6">
              <span className="h-px w-16 bg-[#d4af37]/60 md:w-24 xl:w-32" />
              <ScissorIcon />
              <span className="h-px w-16 bg-[#d4af37]/60 md:w-24 xl:w-32" />
            </div>

            <span className="h-px w-6 bg-[#f2a0ba]" />
          </div>

          <h1 className="font-display max-w-[10ch] text-[clamp(2.9rem,10vw,7.5rem)] uppercase leading-[0.95] tracking-[0.08em] text-white">
            WB Barbershop
          </h1>

          <div className="mt-4 text-[#d4af37] md:mt-5">
            <MustacheIcon />
          </div>

          <div className="relative mt-5 w-full max-w-[330px] px-7 py-4 md:mt-7 md:max-w-[390px] md:px-9">
            <div className="absolute inset-0 border border-[#d4af37]/35" />
            <div className="absolute left-3 top-3 h-2.5 w-2.5 rotate-45 border border-[#d4af37]/80 bg-[#15110f]" />
            <div className="absolute right-3 top-3 h-2.5 w-2.5 rotate-45 border border-[#d4af37]/80 bg-[#15110f]" />
            <div className="absolute bottom-3 left-3 h-2.5 w-2.5 rotate-45 border border-[#d4af37]/80 bg-[#15110f]" />
            <div className="absolute bottom-3 right-3 h-2.5 w-2.5 rotate-45 border border-[#d4af37]/80 bg-[#15110f]" />
            <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-[#d4af37]/70" />
            <div className="absolute bottom-0 left-1/2 h-5 w-px -translate-x-1/2 translate-y-1/2 bg-[#d4af37]/70" />
            <div className="absolute left-0 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37]/70" />
            <div className="absolute right-0 top-1/2 h-px w-5 translate-x-1/2 -translate-y-1/2 bg-[#d4af37]/70" />

            <div className="font-label relative flex items-center justify-between gap-6 text-[10px] uppercase tracking-[0.45em] text-[#d4af37] md:text-xs">
              <span>Est.</span>
              <div className="h-px flex-1 bg-[#d4af37]/30" />
              <span>2024</span>
            </div>
          </div>

          <p className="mt-5 max-w-[620px] text-[14px] leading-[1.8] text-white/60 md:mt-6 md:text-[14px]" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Tunsori clasice, stil modern și o experiență de frizerie atemporală.          </p>

          <div id="booking" className="mt-5 flex w-full max-w-[560px] flex-col items-center justify-center gap-3 sm:flex-row md:mt-7">
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fbookingwb.setmore.com%2Fc8djwtkb24%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5YZ0eSnziMWoDJLun36eDZiU5uHJw0PWhIbyh04JgYWfVyadWPW57ukVbjk_aem_mvlT1rYHBC0AcxTUaQjr9g&e=AT5hl6ZoO3lVWW3mXhlN8YatdR4nTnMAjEN3s7_SMbHj0w8rGrGaTVveugNAK4CjR8knUSOXDH8tr7O_ZTPQJ8kE22nJoGlXn1kg_fUm7A"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label inline-flex w-full items-center justify-center rounded-[10px] bg-[#d4af37] px-6 py-3.5 text-[16px] font-medium text-[#15110f] transition hover:brightness-110 sm:w-auto"
            >
              Programează-te
            </a>
            <a
              href="#services"
              className="font-label inline-flex w-full items-center justify-center rounded-[10px] border border-[#d4af37]/50 bg-[#2a1f1a]/80 px-6 py-3.5 text-[16px] font-medium text-white transition hover:border-[#d4af37] hover:bg-[#342620] sm:w-auto"
            >
              Explorează Serviciile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
