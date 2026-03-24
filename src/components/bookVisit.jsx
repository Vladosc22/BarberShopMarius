
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CTABanner() {
    const bookingUrl = "https://bookingwb.setmore.com/c8djwtkb24?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnI0Yt9O3UQhqpDvfuIPfhIOkbVnfh-ec_-W3W6ghK8V3sTkCH_KqbkBuhyzg_aem_WuU2ByFHYC3tUWdN60EzeA";
    const [isMobile, setIsMobile] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const updateViewport = () => setIsMobile(window.innerWidth < 768);
        updateViewport();
        window.addEventListener("resize", updateViewport);
        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <div style={{
            width: "100%",
            minHeight: "clamp(340px, 48vw, 420px)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxSizing: "border-box",
        }}>
            {/* Solid black background */}
            <div style={{ position: "absolute", inset: 0, background: "#0a0a0a", zIndex: 0 }} />

            {/* Ambient gold glow */}
            <div style={{
                position: "absolute", top: "-10%", left: "30%",
                width: "700px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(201,168,76,0.055) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 1,
            }} />

            {/* Corner dots — decorative */}
            {[
                { top: "18px", left: "18px" },
                { top: "18px", right: "18px" },
                { bottom: "18px", left: "18px" },
                { bottom: "18px", right: "18px" },
            ].map((pos, i) => (
                <div key={i} style={{
                    position: "absolute", ...pos,
                    width: "10px", height: "10px", borderRadius: "50%",
                    border: "2px solid rgba(201,168,76,0.6)",
                    zIndex: 3,
                }} />
            ))}

            {/* Top / bottom gold lines */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                zIndex: 3,
            }} />
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
                background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                zIndex: 3,
            }} />

            {/* Content */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                style={{
                position: "relative", zIndex: 4,
                display: "flex", flexDirection: "column",
                alignItems: "center", textAlign: "center",
                padding: "clamp(44px, 8vw, 60px) clamp(16px, 4vw, 24px)",
                maxWidth: "720px",
            }}>
                {/* Eyebrow */}
                <motion.p variants={fadeUp} style={{
                    color: "#C9A84C",
                    fontSize: "11px",
                    letterSpacing: "0.45em",
                    textTransform: "uppercase",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    margin: "0 0 16px",
                }}>
                    EȘTI GATA?
                </motion.p>

                {/* Headline */}
                <motion.h2 variants={fadeUp} style={{
                    color: "#ffffff",
                    fontSize: "clamp(32px, 5vw, 54px)",
                    fontWeight: "800",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    letterSpacing: "0.02em",
                    margin: "0 0 18px",
                    lineHeight: 1.15,
                }}>
                    Cel mai bun look al tău începe aici
                </motion.h2>

                {/* Subtext */}
                <motion.p variants={fadeUp} style={{
                    color: "rgba(220,210,190,0.7)",
                    fontSize: "clamp(13px, 3.6vw, 15px)",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    letterSpacing: "0.04em",
                    margin: "0 0 40px",
                    lineHeight: 1.6,
                }}>
                    Vino direct sau sună înainte. Suntem pregătiți când ești și tu.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={fadeUp} style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%",
                }}>
                    {/* Primary — gold fill */}
                    <button
                        type="button"
                        style={{
                            background: "#C9A84C",
                            border: "none",
                            color: "#0a0a0a",
                            padding: "16px 26px",
                            fontSize: "12px",
                            fontWeight: "700",
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            fontFamily: "Georgia, serif",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            transition: "background 0.3s ease, transform 0.2s ease",
                            width: "min(100%, 330px)",
                            justifyContent: "center",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#b8932e";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#C9A84C";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                        onClick={() => window.open(bookingUrl, "_blank", "noopener,noreferrer")}
                    >
                        Programează-te Acum
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7h12M8 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Secondary — ghost */}
                    <button
                        type="button"
                        style={{
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.45)",
                            color: "#ffffff",
                            padding: "16px 26px",
                            fontSize: "12px",
                            fontWeight: "600",
                            letterSpacing: "0.18em",
                            fontFamily: "Georgia, serif",
                            cursor: "pointer",
                            transition: "border-color 0.3s ease, color 0.3s ease, transform 0.2s ease",
                            width: "min(100%, 330px)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#C9A84C";
                            e.currentTarget.style.color = "#C9A84C";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                            e.currentTarget.style.color = "#ffffff";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                        onClick={() => {
                            window.location.href = "tel:+37368376883";
                        }}
                    >
                        +373 68 376 883
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}
