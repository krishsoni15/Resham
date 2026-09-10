"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Shield, Activity, CheckCircle, Server } from "lucide-react";
import { security } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  lock: <Lock size={22} />,
  shield: <Shield size={22} />,
  activity: <Activity size={22} />,
  checkCircle: <CheckCircle size={22} />,
  server: <Server size={22} />,
};

export default function SecuritySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline">SECURITY</span>
          <h2 className="text-h2">{security.headline}</h2>
          <p className="text-body-lg">{security.description}</p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "var(--space-4)",
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          {security.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
                padding: "var(--space-6)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.1 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--color-accent-subtle)",
                  color: "var(--color-accent)",
                }}
              >
                {iconMap[feature.icon]}
              </div>
              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8125rem",
                  lineHeight: 1.55,
                  color: "var(--color-text-tertiary)",
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
