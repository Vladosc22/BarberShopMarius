"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
    {
        id: 1,
        value: 2500,
        label: "bărbieriri",
        icon: (
            <svg viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="56">
                <rect x="18" y="2" width="14" height="28" rx="2" stroke="#C9A84C" strokeWidth="1.8"/>
                <line x1="25" y1="30" x2="25" y2="78" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="18" y1="10" x2="32" y2="10" stroke="#C9A84C" strokeWidth="1.8"/>
                <line x1="18" y1="17" x2="32" y2="17" stroke="#C9A84C" strokeWidth="1.8"/>
                <line x1="18" y1="24" x2="32" y2="24" stroke="#C9A84C" strokeWidth="1.8"/>
            </svg>
        ),
    },
    {
        id: 2,
        value: 4500,
        label: "tunsori",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
                <path d="M20 10 L10 30 M20 10 L30 30 M12 24 L28 24" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="34" r="5" stroke="#C9A84C" strokeWidth="1.8"/>
                <circle cx="30" cy="34" r="5" stroke="#C9A84C" strokeWidth="1.8"/>
                <line x1="14.5" y1="30.5" x2="8" y2="37" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="25.5" y1="30.5" x2="32" y2="37" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        id: 3,
        value: 23,
        label: "tratamente & proceduri faciale",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                <path d="M15 28 Q10 22 14 16 Q20 8 30 10 Q40 8 46 16 Q50 22 45 28 Q42 38 30 44 Q18 38 15 28Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M22 30 Q26 34 30 34 Q34 34 38 30" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
    },
];

function useCountUp(target, duration = 2000, start = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);

    return count;
}

function StatItem({ stat, animate }) {
    const count = useCountUp(stat.value, 2200, animate);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                padding: "40px 20px",
                position: "relative",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
        >
            {/* Icon */}
            <div style={{ marginBottom: "20px", height: "60px", display: "flex", alignItems: "center" }}>
                {stat.icon}
            </div>

            {/* Number */}
            <div
                style={{
                    color: "#C9A84C",
                    fontSize: "clamp(48px, 6vw, 72px)",
                    fontWeight: "800",
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    lineHeight: 1,
                    marginBottom: "14px",
                    letterSpacing: "-0.02em",
                    minWidth: "120px",
                    textAlign: "center",
                }}
            >
                {count.toLocaleString()}
            </div>

            {/* Label */}
            <div
                style={{
                    color: "#ffffff",
                    fontSize: "clamp(10px, 2.5vw, 11px)",
                    fontWeight: "700",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontFamily: "'Georgia', serif",
                    textAlign: "center",
                    maxWidth: "240px",
                }}
            >
                {stat.label}
            </div>
        </div>
    );
}

export default function StatsSection() {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                background: "#0a0a0a",
                borderTop: "1px solid rgba(201,168,76,0.3)",
                borderBottom: "1px solid rgba(201,168,76,0.3)",
                width: "100%",
                position: "relative",
                overflow: "hidden",
                padding: "clamp(18px, 4vw, 28px) clamp(14px, 4vw, 24px)",
            }}
        >
            {/* Subtle top/bottom gold lines */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }} />
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }} />

            <div
                style={{
                    width: "100%",
                    maxWidth: "1120px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "12px",
                }}
            >
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        style={{
                            border: "1px solid rgba(201,168,76,0.18)",
                            background: "rgba(255,255,255,0.015)",
                        }}
                    >
                        <StatItem stat={stat} animate={animate} />
                    </div>
                ))}
            </div>
        </div>
    );
}
