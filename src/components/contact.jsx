"use client";

export default function ContactUs() {
    const items = [
        {
            icon: (
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="13" r="5" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M16 3C10.477 3 6 7.477 6 13c0 7 10 16 10 16s10-9 10-16c0-5.523-4.477-10-10-10z" stroke="#C9A84C" strokeWidth="1.5"/>
                </svg>
            ),
            label: "Address",
            lines: ["304 North Cardinal St.", "Dorchester Center, MA 02124"],
        },
        {
            icon: (
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="8" width="24" height="16" rx="2" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M4 10l12 8 12-8" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            ),
            label: "Email",
            lines: ["info@company.com"],
        },
        {
            icon: (
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <path d="M6 5h5l2 5-2.5 2.5c1.5 3 4 5.5 7 7L20 17l5 2v5c0 1.1-.9 2-2 2C10.4 26 6 11.6 6 7c0-1.1.9-2 2-2z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
            ),
            label: "Phone",
            lines: ["(+63) 555 1212", "(+63) 555 1212"],
        },
        {
            icon: (
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="11" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M16 9v7l4 4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            label: "Working Hours",
            lines: ["Mon - Fri: 10am - 6pm", "Sat - Sun: 10am - 6pm"],
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
            <div style={{ textAlign: "center", padding: "72px 24px 52px" }}>
                <h2 style={{
                    color: "#ffffff",
                    fontSize: "clamp(32px, 5vw, 52px)",
                    fontWeight: "700",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    margin: "0 0 20px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                }}>
                    Contact Us
                </h2>
                <p style={{
                    color: "rgba(220,210,190,0.6)",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    maxWidth: "580px",
                    margin: "0 auto",
                }}>
                    Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas.
                    Nam nec nisl placerat, tempus erat a, condimentum metusurabitur nulla nisi.
                </p>
            </div>

            {/* 4 columns — icon / label / values, all centered */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "0 40px 64px",
            }}>
                {items.map((item, i) => (
                    <div key={i} style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "0 24px",
                        borderRight: i < items.length - 1 ? "1px solid rgba(201,168,76,0.12)" : "none",
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
                            }}>
                                {line}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div style={{
                height: "1px",
                maxWidth: "1100px",
                margin: "0 auto",
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
