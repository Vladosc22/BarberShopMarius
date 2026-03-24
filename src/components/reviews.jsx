"use client";

import { useEffect, useRef } from "react";

const reviews = [
    { id: 1, name: "Glen Sparkle", location: "Miami", initials: "GS", text: "Exceptional experience from start to finish. The attention to detail and precision of the cut left me looking sharper than ever." },
    { id: 2, name: "Michael Richards", location: "California", initials: "MR", text: "The hot-towel shave was an absolute revelation. Old-school craft meets modern comfort — I won't go anywhere else." },
    { id: 3, name: "John Hood", location: "New York", initials: "JH", text: "Walked in looking rough, walked out looking like a new man. The barbers here truly understand their craft." },
    { id: 4, name: "David Caruso", location: "Chicago", initials: "DC", text: "Booked the Big Day package for my wedding. Every groomsman was blown away. Couldn't have asked for better service." },
    { id: 5, name: "Marcus Bell", location: "Houston", initials: "MB", text: "The atmosphere alone is worth the visit — dark, refined, no distractions. Pure focus on making you look your best." },
    { id: 6, name: "James Holden", location: "Boston", initials: "JH2", text: "I've been to barbershops all over the country. This is genuinely the best. The facial & shave combo is unmatched." },
];

const allReviews = [...reviews, ...reviews];

export default function ClientReviews() {
    const trackRef = useRef(null);
    const animRef = useRef(null);
    const posRef = useRef(0);
    const pausedRef = useRef(false);

    useEffect(() => {
        const CARD_WIDTH = 340;
        const GAP = 24;
        const UNIT = CARD_WIDTH + GAP;
        const TOTAL = UNIT * reviews.length;
        const SPEED = 0.55;

        const animate = () => {
            if (!pausedRef.current) {
                posRef.current += SPEED;
                if (posRef.current >= TOTAL) posRef.current -= TOTAL;
                if (trackRef.current) {
                    trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
                }
            }
            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <div style={{
            width: "100%",
            height: "516px",
            background: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            boxSizing: "border-box",
        }}>
            {/* Ambient glow */}
            <div style={{
                position: "absolute", top: "-10%", left: "25%",
                width: "700px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(201,168,76,0.055) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Top / bottom gold lines */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "36px", flexShrink: 0 }}>
                <p style={{
                    color: "#C9A84C", fontSize: "10px", letterSpacing: "0.4em",
                    textTransform: "uppercase", fontFamily: "Georgia, serif",
                    fontStyle: "italic", margin: "0 0 8px",
                }}>
                    What People Say About Us
                </p>
                <h2 style={{
                    color: "#ffffff", fontSize: "36px", fontWeight: "700",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    margin: "0 0 14px", fontFamily: "Georgia, 'Times New Roman', serif",
                }}>
                    Clients Reviews
                </h2>
                <div style={{
                    width: "50px", height: "1px", margin: "0 auto",
                    background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                }} />
            </div>

            {/* Left / right fade masks */}
            <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: "130px", zIndex: 2,
                background: "linear-gradient(90deg, #0a0a0a 40%, transparent 100%)",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", right: 0, top: 0, bottom: 0, width: "130px", zIndex: 2,
                background: "linear-gradient(270deg, #0a0a0a 40%, transparent 100%)",
                pointerEvents: "none",
            }} />

            {/* Scrolling track */}
            <div style={{ width: "100%", overflow: "hidden", flexShrink: 0 }}>
                <div
                    ref={trackRef}
                    style={{
                        display: "flex",
                        gap: "24px",
                        willChange: "transform",
                        /* no paddingLeft — removing it eliminates the right-side gap */
                    }}
                >
                    {allReviews.map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            onMouseEnter={() => { pausedRef.current = true; }}
                            onMouseLeave={() => { pausedRef.current = false; }}
                            style={{
                                width: "340px",
                                flexShrink: 0,
                                background: "rgba(255,255,255,0.018)",
                                border: "1px solid rgba(201,168,76,0.18)",
                                padding: "26px 26px 22px",
                                boxSizing: "border-box",
                                display: "flex",
                                flexDirection: "column",
                                transition: "border-color 0.3s ease, background 0.3s ease",
                                cursor: "default",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = "rgba(201,168,76,0.48)";
                                e.currentTarget.style.background = "rgba(201,168,76,0.04)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.018)";
                            }}
                        >
                            {/* Opening quote */}
                            <div style={{
                                color: "rgba(201,168,76,0.18)", fontSize: "54px", lineHeight: "1",
                                fontFamily: "Georgia, serif", fontWeight: "700", marginBottom: "4px",
                                userSelect: "none",
                            }}>
                                "
                            </div>

                            {/* Review text */}
                            <p style={{
                                color: "rgba(220,210,190,0.68)", fontSize: "13px", lineHeight: "1.78",
                                fontFamily: "Georgia, serif", fontStyle: "italic",
                                margin: "0 0 20px", flexGrow: 1,
                            }}>
                                {review.text}
                            </p>

                            {/* Short gold rule */}
                            <div style={{
                                width: "28px", height: "1px", marginBottom: "14px",
                                background: "linear-gradient(90deg, #C9A84C, transparent)",
                            }} />

                            {/* Avatar + name */}
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div style={{
                                    width: "42px", height: "42px", borderRadius: "50%", flexShrink: 0,
                                    background: "radial-gradient(circle at 35% 35%, #3a3530, #18140e)",
                                    border: "1px solid rgba(201,168,76,0.28)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <span style={{
                                        color: "#C9A84C", fontSize: "12px", fontWeight: "600",
                                        fontFamily: "Georgia, serif", letterSpacing: "0.04em",
                                    }}>
                                        {review.initials.slice(0, 2)}
                                    </span>
                                </div>
                                <div>
                                    <div style={{
                                        color: "#C9A84C", fontSize: "10px", fontWeight: "700",
                                        letterSpacing: "0.22em", textTransform: "uppercase",
                                        fontFamily: "Georgia, serif",
                                    }}>
                                        {review.name}
                                    </div>
                                    <div style={{
                                        color: "rgba(201,168,76,0.42)", fontSize: "9px",
                                        letterSpacing: "0.18em", textTransform: "uppercase",
                                        fontFamily: "Georgia, serif", marginTop: "3px",
                                    }}>
                                        {review.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}