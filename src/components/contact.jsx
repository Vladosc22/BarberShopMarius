"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ContactUs() {
    const prefersReducedMotion = useReducedMotion();
    const fadeUp = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 26 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const items = [
        {
            icon: (
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="13" r="5" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M16 3C10.477 3 6 7.477 6 13c0 7 10 16 10 16s10-9 10-16c0-5.523-4.477-10-10-10z" stroke="#C9A84C" strokeWidth="1.5"/>
                </svg>
            ),
            label: "ADRESA",
            lines: ["Bacioi str sfantul Mihail 6, Chișinău, Moldova"],
        },
        {
            icon: (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" stroke="#C9A84C" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4.2" stroke="#C9A84C" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.7" r="1.1" fill="#C9A84C" />
                </svg>
            ),
            label: "INSTAGRAM",
            lines: ["@wb_barbershop_"],
            link: "https://www.instagram.com/wb_barbershop_/",
        },
        {
            icon: (
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <path d="M6 5h5l2 5-2.5 2.5c1.5 3 4 5.5 7 7L20 17l5 2v5c0 1.1-.9 2-2 2C10.4 26 6 11.6 6 7c0-1.1.9-2 2-2z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
            ),
            label: "TELEFON",
            lines: ["+373 68 376 883"],
        },
        {
            icon: (
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="11" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M16 9v7l4 4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            label: "PROGRAM DE LUCRU",
            lines: ["Luni - Vineri: 9 - 19", "Sâmbătă - Duminică: 10 - 18"],
        },
    ];

    return (
        <div id="contact" style={{
            width: "100%",
            background: "#0a0a0a",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Ambient glow */}
            <div style={{
                position: "absolute", top: "-10%", left: "25%",
                width: "700px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Top gold line */}
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                style={{ textAlign: "center", padding: "clamp(48px, 9vw, 72px) 20px clamp(36px, 7vw, 52px)" }}
            >
                <h2 style={{
                    color: "#ffffff",
                    fontSize: "clamp(28px, 7vw, 52px)",
                    fontWeight: "700",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    margin: "0 0 20px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                }}>
                    CONTACTEAZĂ-NE
                </h2>
                <p style={{
                    color: "rgba(220,210,190,0.6)",
                    fontSize: "clamp(13px, 3.6vw, 14px)",
                    lineHeight: "1.8",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    maxWidth: "580px",
                    margin: "0 auto",
                }}>
                    Fiecare detaliu contează atunci când vine vorba de stilul tău. Programează-ți vizita sau contactează-ne pentru orice întrebare — echipa noastră este pregătită să îți ofere o experiență rafinată, de la început până la final.
                </p>
            </motion.div>

            {/* 4 columns — icon / label / values, all centered */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "14px",
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "0 clamp(14px, 4vw, 40px) clamp(42px, 7vw, 64px)",
            }}>
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        variants={fadeUp}
                        onClick={() => {
                            if (item.link) window.open(item.link, "_blank", "noopener,noreferrer");
                        }}
                        onKeyDown={(e) => {
                            if (!item.link) return;
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                window.open(item.link, "_blank", "noopener,noreferrer");
                            }
                        }}
                        role={item.link ? "button" : undefined}
                        tabIndex={item.link ? 0 : -1}
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "20px 18px",
                        border: "1px solid rgba(201,168,76,0.12)",
                        minHeight: "170px",
                        cursor: item.link ? "pointer" : "default",
                    }}>
                        {/* Icon */}
                        <div style={{ marginBottom: "14px" }}>{item.icon}</div>

                        {/* Label */}
                        <div style={{
                            color: "#C9A84C",
                            fontSize: "11px",
                            fontWeight: "700",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            fontFamily: "Georgia, serif",
                            marginBottom: "14px",
                        }}>
                            {item.label}
                        </div>

                        {/* Value lines */}
                        {item.lines.map((line, j) => (
                            <div key={j} style={{
                                color: "rgba(220,210,190,0.65)",
                                fontSize: "13px",
                                fontFamily: "Georgia, serif",
                                fontStyle: "italic",
                                lineHeight: "1.9",
                                wordBreak: "break-word",
                            }}>
                                {line}
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* Divider */}
            <div style={{
                height: "1px",
                maxWidth: "1100px",
                margin: "0 auto",
                width: "calc(100% - 28px)",
                background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
            }} />

            {/* Copyright */}
            <div style={{
                textAlign: "center",
                padding: "28px 24px",
                color: "rgba(201,168,76,0.4)",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontFamily: "Georgia, serif",
                textTransform: "uppercase",
            }}>
                © Copyright WB Barbershop 2024
            </div>
        </div>
    );
}
