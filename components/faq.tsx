"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faq } from "@/lib/content";

export default function FAQ() {
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
          <span className="text-overline">FAQ</span>
          <h2 className="text-h2">{faq.headline}</h2>
        </motion.div>

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
          }}
        >
          {faq.items.map((item, i) => (
            <motion.details
              key={i}
              style={{
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.05 + i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <summary
                style={{
                  padding: "var(--space-4) var(--space-5)",
                  cursor: "pointer",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-4)",
                  userSelect: "none",
                }}
              >
                {item.question}
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    fontSize: "1.25rem",
                    color: "var(--color-text-muted)",
                    fontWeight: 300,
                    transition: "transform var(--duration-normal)",
                  }}
                >
                  +
                </span>
              </summary>
              <div
                style={{
                  padding: "0 var(--space-5) var(--space-5)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>

      <style jsx>{`
        details[open] summary span[aria-hidden] {
          transform: rotate(45deg);
        }
        details summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </section>
  );
}
