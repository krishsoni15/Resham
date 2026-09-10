"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import { platform } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={28} />,
  globe: <Globe size={28} />,
  smartphone: <Smartphone size={28} />,
};

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="platform"
      className="section-padding-lg"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline">PLATFORM</span>
          <h2 className="text-h2">{platform.headline}</h2>
          <p className="text-body-lg">{platform.description}</p>
        </motion.div>

        {/* Platform Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-8)",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Desktop + Mobile visual */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "var(--space-8)",
              alignItems: "end",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Desktop frame */}
            <div
              className="product-frame"
              style={{ flex: 1 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "var(--space-2) var(--space-4)",
                  backgroundColor: "var(--color-bg-alt)",
                  borderBottom: "1px solid var(--color-border)",
                }}
                aria-hidden="true"
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#E5E3DE" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#E5E3DE" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#E5E3DE" }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    maxWidth: "200px",
                    margin: "0 auto",
                    backgroundColor: "var(--color-surface)",
                    borderRadius: "var(--radius-sm)",
                    padding: "2px 10px",
                    fontSize: "0.6875rem",
                    color: "var(--color-text-muted)",
                    textAlign: "center",
                  }}
                >
                  app.resham.in
                </div>
              </div>
              <Image
                src="/images/product-orders.png"
                alt="RESHAM desktop web application showing order management"
                width={800}
                height={530}
                quality={80}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Mobile frame */}
            <div
              style={{
                width: "clamp(140px, 18vw, 220px)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                border: "6px solid var(--color-bg-dark)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/product-mobile.png"
                alt="RESHAM mobile application showing dashboard on phone"
                width={220}
                height={440}
                quality={80}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </motion.div>

          {/* Platform cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            {platform.devices.map((device, i) => (
              <motion.div
                key={device.label}
                className="card-flat"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "var(--space-6) var(--space-4)",
                  gap: "var(--space-3)",
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.4 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div style={{ color: "var(--color-accent)" }}>
                  {iconMap[device.icon]}
                </div>
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {device.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-text-tertiary)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {device.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
