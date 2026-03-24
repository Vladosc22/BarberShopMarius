
"use client";

export default function CTABanner() {
    const bookingUrl = "https://l.instagram.com/?u=https%3A%2F%2Fbookingwb.setmore.com%2Fc8djwtkb24%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5YZ0eSnziMWoDJLun36eDZiU5uHJw0PWhIbyh04JgYWfVyadWPW57ukVbjk_aem_mvlT1rYHBC0AcxTUaQjr9g&e=AT5hl6ZoO3lVWW3mXhlN8YatdR4nTnMAjEN3s7_SMbHj0w8rGrGaTVveugNAK4CjR8knUSOXDH8tr7O_ZTPQJ8kE22nJoGlXn1kg_fUm7A";

    return (
        <div style={{
            width: "100%",
            minHeight: "380px",
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
            <div style={{
                position: "relative", zIndex: 4,
                display: "flex", flexDirection: "column",
                alignItems: "center", textAlign: "center",
                padding: "60px 24px",
                maxWidth: "720px",
            }}>
                {/* Eyebrow */}
                <p style={{
                    color: "#C9A84C",
                    fontSize: "11px",
                    letterSpacing: "0.45em",
                    textTransform: "uppercase",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    margin: "0 0 16px",
                }}>
                    EȘTI GATA?
                </p>

                {/* Headline */}
                <h2 style={{
                    color: "#ffffff",
                    fontSize: "clamp(32px, 5vw, 54px)",
                    fontWeight: "800",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    letterSpacing: "0.02em",
                    margin: "0 0 18px",
                    lineHeight: 1.15,
                }}>
                    Cel mai bun look al tău începe aici
                </h2>

                {/* Subtext */}
                <p style={{
                    color: "rgba(220,210,190,0.7)",
                    fontSize: "15px",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    letterSpacing: "0.04em",
                    margin: "0 0 40px",
                    lineHeight: 1.6,
                }}>
                    Vino direct sau sună înainte. Suntem pregătiți când ești și tu.
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                    {/* Primary — gold fill */}
                    <button
                        type="button"
                        style={{
                            background: "#C9A84C",
                            border: "none",
                            color: "#0a0a0a",
                            padding: "16px 36px",
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
                            padding: "16px 36px",
                            fontSize: "12px",
                            fontWeight: "600",
                            letterSpacing: "0.18em",
                            fontFamily: "Georgia, serif",
                            cursor: "pointer",
                            transition: "border-color 0.3s ease, color 0.3s ease, transform 0.2s ease",
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
                </div>
            </div>
        </div>
    );
}
