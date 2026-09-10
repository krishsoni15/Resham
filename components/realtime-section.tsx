"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Edit, Zap, LayoutDashboard, Users } from "lucide-react";
import { realtime } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  edit: <Edit size={20} />,
  zap: <Zap size={20} />,
  layoutDashboard: <LayoutDashboard size={20} />,
  users: <Users size={20} />,
};

export default function RealtimeSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline">REAL-TIME</span>
          <h2 className="text-h2">{realtime.headline}</h2>
          <p className="text-body-lg">{realtime.description}</p>
        </motion.div>

        {/* Sync flow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-4)",
            flexWrap: "wrap",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {realtime.steps.map((step, i) => (
            <motion.div
              key={step.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.15 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "var(--space-5) var(--space-6)",
                  textAlign: "center",
                  minWidth: "120px",
                }}
              >
                <span style={{ color: "var(--color-accent)" }}>
                  {iconMap[step.icon]}
                </span>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector */}
              {i < realtime.steps.length - 1 && (
                <motion.div
                  style={{
                    width: "32px",
                    height: "2px",
                    backgroundColor: "var(--color-accent-light)",
                    borderRadius: "1px",
                    position: "relative",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + i * 0.15,
                  }}
                  aria-hidden="true"
                >
                  {/* Pulse dot */}
                  <motion.div
                    style={{
                      position: "absolute",
                      right: "-3px",
                      top: "-3px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent)",
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: [0.4, 1, 0.4],
                            scale: [0.8, 1.2, 0.8],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
