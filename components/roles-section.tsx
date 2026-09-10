"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Shield, Settings, User, Briefcase } from "lucide-react";
import { roles } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  crown: <Crown size={24} />,
  shield: <Shield size={24} />,
  settings: <Settings size={24} />,
  user: <User size={24} />,
  briefcase: <Briefcase size={24} />,
};

export default function RolesSection() {
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
          <span className="text-overline">TEAM ACCESS</span>
          <h2 className="text-h2">{roles.headline}</h2>
          <p className="text-body-lg">{roles.description}</p>
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
          {roles.items.map((role, i) => (
            <motion.div
              key={role.title}
              className="card"
              style={{
                textAlign: "center",
                padding: "var(--space-8) var(--space-5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-3)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--color-accent-subtle)",
                  color: role.color,
                }}
              >
                {iconMap[role.icon]}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                }}
              >
                {role.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8125rem",
                  lineHeight: 1.55,
                  color: "var(--color-text-tertiary)",
                  margin: 0,
                }}
              >
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
