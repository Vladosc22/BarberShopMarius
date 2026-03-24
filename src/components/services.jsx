"use client";

import { useState, useEffect } from "react";

const services = [
    {
        id: 1,
        title: "Haircut & Beard Trim",
        description:
            "Precision cuts tailored to your face shape, paired with expert beard sculpting for a sharp, polished finish.",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                <path d="M20 10 L10 30 M20 10 L30 30 M12 24 L28 24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="34" r="4" stroke="#C9A84C" strokeWidth="1.5"/>
                <circle cx="30" cy="34" r="4" stroke="#C9A84C" strokeWidth="1.5"/>
            </svg>
        ),
    },
    {
        id: 2,
        title: "Shaves & Haircut",
        description:
            "A traditional straight-razor shave combined with a classic cut — the ultimate grooming experience.",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                <path d="M10 15 L45 38" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M45 38 L50 32 L15 9 L10 15 Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M45 38 L42 46 L38 44" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: 3,
        title: "Facial & Shave",
        description:
            "Deep cleansing facial treatments paired with a hot-towel shave to refresh, restore and rejuvenate.",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                <path d="M15 28 Q10 22 14 16 Q20 8 30 10 Q40 8 46 16 Q50 22 45 28 Q42 38 30 44 Q18 38 15 28Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M22 30 Q26 34 30 34 Q34 34 38 30" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        id: 4,
        title: "The Big Day",
        description:
            "Look your absolute best for weddings, special events or milestones — our signature grooming package.",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                <path d="M12 30 Q16 24 22 26 Q26 28 30 26 Q34 24 38 26 Q44 28 48 30" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 34 Q20 28 26 30 Q30 32 34 30 Q40 28 44 34" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
    },
];

export default function Services() {
    const [hoveredId, setHoveredId] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            id="services"
            style={{
                minHeight: "100vh",
                background: "#0a0a0a",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px 24px",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "20%",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "15%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            {/* Header */}
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "56px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
            >
                <p
                    style={{
                        color: "#C9A84C",
                        fontSize: "11px",
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                        fontFamily: "'Georgia', serif",
                        fontStyle: "italic",
                    }}
                >
                    Our Treatment
                </p>
                <h1
                    style={{
                        color: "#ffffff",
                        fontSize: "clamp(36px, 6vw, 58px)",
                        fontWeight: "700",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        margin: 0,
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}
                >
                    Services
                </h1>
                {/* Gold divider */}
                <div
                    style={{
                        width: "60px",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                        margin: "18px auto 0",
                    }}
                />
            </div>

            {/* Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "2px",
                    maxWidth: "720px",
                    width: "100%",
                }}
            >
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        onMouseEnter={() => setHoveredId(service.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            background: hoveredId === service.id
                                ? "rgba(201,168,76,0.06)"
                                : "rgba(12,12,12,0.95)",
                            border: `1px solid ${hoveredId === service.id ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.25)"}`,
                            padding: "44px 36px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            cursor: "pointer",
                            transition: "all 0.35s ease",
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(30px)",
                            transitionDelay: `${0.15 + index * 0.1}s`,
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Corner accents */}
                        <div style={{
                            position: "absolute", top: 0, left: 0,
                            width: "12px", height: "12px",
                            borderTop: "1px solid rgba(201,168,76,0.5)",
                            borderLeft: "1px solid rgba(201,168,76,0.5)",
                            opacity: hoveredId === service.id ? 1 : 0,
                            transition: "opacity 0.3s ease",
                        }} />
                        <div style={{
                            position: "absolute", bottom: 0, right: 0,
                            width: "12px", height: "12px",
                            borderBottom: "1px solid rgba(201,168,76,0.5)",
                            borderRight: "1px solid rgba(201,168,76,0.5)",
                            opacity: hoveredId === service.id ? 1 : 0,
                            transition: "opacity 0.3s ease",
                        }} />

                        {/* Icon */}
                        <div
                            style={{
                                marginBottom: "24px",
                                transform: hoveredId === service.id ? "scale(1.1)" : "scale(1)",
                                transition: "transform 0.35s ease",
                            }}
                        >
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3
                            style={{
                                color: "#C9A84C",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                marginBottom: "14px",
                                margin: "0 0 14px",
                                fontFamily: "'Georgia', serif",
                            }}
                        >
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p
                            style={{
                                color: "rgba(220,210,190,0.7)",
                                fontSize: "13px",
                                lineHeight: "1.7",
                                margin: 0,
                                fontFamily: "'Georgia', serif",
                                fontStyle: "italic",
                            }}
                        >
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div
                style={{
                    marginTop: "48px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
                }}
            >
                <button
                    style={{
                        background: "transparent",
                        border: "1px solid #C9A84C",
                        color: "#C9A84C",
                        padding: "13px 40px",
                        fontSize: "11px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        fontFamily: "'Georgia', serif",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = "#C9A84C";
                        e.target.style.color = "#0a0a0a";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = "#C9A84C";
                    }}
                >
                    Explore Now
                </button>
            </div>
        </div>
    );
}
