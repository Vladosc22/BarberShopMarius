"use client";

export default function ComeVisit() {
    const cards = [
        {
            icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="13" r="5" stroke="#C9A84C" strokeWidth="1.8"/><path d="M16 3C10.477 3 6 7.477 6 13c0 7 10 16 10 16s10-9 10-16c0-5.523-4.477-10-10-10z" stroke="#C9A84C" strokeWidth="1.8"/></svg>,
            label: "ADRESA",
            value: "Bacioi str sfantul Mihail 6, Chișinău, Moldova",
            highlight: false,
        },
        {
            icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M6 5h5l2 5-2.5 2.5c1.5 3 4 5.5 7 7L20 17l5 2v5c0 1.1-.9 2-2 2C10.4 26 6 11.6 6 7c0-1.1.9-2 2-2z" stroke="#C9A84C" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
            label: "TELEFON",
            value: "+373 68 376 883",
            highlight: false,
        },
        {
            icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="24" height="16" rx="2" stroke="#C9A84C" strokeWidth="1.8"/><path d="M4 10l12 8 12-8" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/></svg>,
            label: "EMAIL",
            value: "mariuscoritoru@gmail.com",
            highlight: true,
        },
        {
            icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="#C9A84C" strokeWidth="1.8"/><path d="M16 9v7l4 4" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            label: "AZI",
            value: ["Luni - Vineri: 9 - 19",
                "Sâmbătă - Duminică: 10 - 18"],
            highlight: false,
        },
    ];

    return (
        <div style={{
            width: "100%",
            background: "#0a0a0a",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Ambient glow */}
            <div style={{
                position: "absolute", top: "0%", left: "40%",
                width: "600px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Top gold line */}
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

            {/* Header */}
            <div style={{ textAlign: "center", padding: "56px 24px 40px" }}>
                <p style={{
                    color: "#C9A84C", fontSize: "10px", letterSpacing: "0.45em",
                    textTransform: "uppercase", fontFamily: "Georgia, serif",
                    fontStyle: "italic", margin: "0 0 10px",
                }}>
                    GĂSEȘTE-NE
                </p>
                <h2 style={{
                    color: "#ffffff", fontSize: "clamp(32px, 5vw, 52px)",
                    fontWeight: "800", margin: 0,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    letterSpacing: "0.02em",
                }}>
                    Vino să ne vizitezi
                </h2>
            </div>

            {/* Main row */}
            <div style={{
                display: "flex",
                gap: "28px",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 40px 60px",
                alignItems: "stretch",
            }}>

                {/* MAP — 46% */}
                <div style={{
                    flex: "0 0 46%",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(201,168,76,0.2)",
                    minHeight: "340px",
                }}>
                    <iframe
                        title="Ceban Barber Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.123456789!2d28.8357!3d47.0245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3a4b123abc%3A0x1234567890abcdef!2sCeban%20Barber!5e0!3m2!1sen!2smd!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{
                            border: "none",
                            display: "block",
                            minHeight: "340px",
                            filter: "invert(90%) hue-rotate(180deg)",
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Map bottom bar */}
                    <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        background: "rgba(10,10,10,0.92)",
                        padding: "12px 16px",
                        borderTop: "1px solid rgba(201,168,76,0.2)",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="13" r="5" stroke="#C9A84C" strokeWidth="2"/>
                                <path d="M16 3C10.477 3 6 7.477 6 13c0 7 10 16 10 16s10-9 10-16c0-5.523-4.477-10-10-10z" stroke="#C9A84C" strokeWidth="2"/>
                            </svg>
                            <span style={{ color: "#ffffff", fontSize: "12px", fontFamily: "Georgia, serif", letterSpacing: "0.08em" }}>
                WB BarberShop
              </span>
                        </div>
                        <a
                            href="https://maps.google.com/?q=Ceban+Barber+Chisinau"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "#C9A84C", color: "#0a0a0a",
                                padding: "9px 20px", fontSize: "10px", fontWeight: "700",
                                letterSpacing: "0.22em", textTransform: "uppercase",
                                fontFamily: "Georgia, serif", textDecoration: "none",
                                display: "flex", alignItems: "center", gap: "8px",
                                transition: "background 0.3s ease",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#b8932e"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "#C9A84C"}
                        >
                            Deschide în Hărți
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                <path d="M1 7h12M8 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* RIGHT PANEL — 54% */}
                <div style={{
                    flex: "0 0 calc(54% - 28px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                }}>

                    {/* 2×2 cards */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "14px",
                        flex: 1,
                    }}>
                        {cards.map((card, i) => (
                            <div key={i} style={{
                                background: "rgba(255,255,255,0.025)",
                                border: `1px solid ${card.highlight ? "rgba(201,168,76,0.55)" : "rgba(201,168,76,0.15)"}`,
                                padding: "22px 24px",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "16px",
                                boxSizing: "border-box",
                                minHeight: "90px",
                            }}>
                                <div style={{ marginTop: "2px", flexShrink: 0 }}>{card.icon}</div>
                                <div>
                                    <div style={{
                                        color: "rgba(201,168,76,0.6)", fontSize: "9px", fontWeight: "700",
                                        letterSpacing: "0.3em", textTransform: "uppercase",
                                        fontFamily: "Georgia, serif", marginBottom: "7px",
                                    }}>
                                        {card.label}
                                    </div>
                                    <div style={{
                                        color: card.highlight ? "#C9A84C" : "rgba(220,210,190,0.85)",
                                        fontSize: "14px", fontFamily: "Georgia, serif",
                                        fontStyle: "italic", lineHeight: "1.55",
                                    }}>
                                        {Array.isArray(card.value)
                                            ? card.value.map((line) => (
                                                <div key={line}>{line}</div>
                                            ))
                                            : card.value}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                        <button
                            style={{
                                background: "#C9A84C", border: "none",
                                color: "#0a0a0a", padding: "18px 20px",
                                fontSize: "10px", fontWeight: "700",
                                letterSpacing: "0.25em", textTransform: "uppercase",
                                fontFamily: "Georgia, serif", cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                gap: "10px", transition: "background 0.3s ease",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#b8932e"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "#C9A84C"}
                        >
                            Informații complete de contact
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                <path d="M1 7h12M8 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button
                            type="button"
                            style={{
                                background: "transparent",
                                border: "1px solid rgba(201,168,76,0.35)",
                                color: "#C9A84C", padding: "18px 20px",
                                fontSize: "10px", fontWeight: "700",
                                letterSpacing: "0.25em", textTransform: "uppercase",
                                fontFamily: "Georgia, serif", cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                gap: "10px", transition: "border-color 0.3s ease, background 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#C9A84C";
                                e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
                                e.currentTarget.style.background = "transparent";
                            }}
                            onClick={() => {
                                window.location.href = "tel:+37368376883";
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                                <path d="M6 5h5l2 5-2.5 2.5c1.5 3 4 5.5 7 7L20 17l5 2v5c0 1.1-.9 2-2 2C10.4 26 6 11.6 6 7c0-1.1.9-2 2-2z" stroke="#C9A84C" strokeWidth="2" strokeLinejoin="round"/>
                            </svg>
                            Sună acum
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom gold line */}
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        </div>
    );
}
