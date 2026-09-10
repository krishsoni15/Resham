"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { pricing } from "@/lib/content";

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="pricing"
      className="section-padding-lg"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline">PRICING</span>
          <h2 className="text-h2">{pricing.headline}</h2>
          <p className="text-body-lg">{pricing.description}</p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "var(--space-5)",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {pricing.tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              style={{
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-8) var(--space-6)",
                backgroundColor: tier.featured
                  ? "var(--color-bg-dark)"
                  : "var(--color-surface)",
                border: tier.featured
                  ? "2px solid var(--color-accent)"
                  : "1px solid var(--color-border)",
                color: tier.featured
                  ? "var(--color-text-on-dark)"
                  : "var(--color-text-primary)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {tier.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "var(--space-1) var(--space-4)",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--color-accent)",
                    color: "#FFFFFF",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </span>
              )}

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "var(--space-2)",
                }}
              >
                {tier.name}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: tier.featured
                    ? "var(--color-text-on-dark-secondary)"
                    : "var(--color-text-tertiary)",
                  marginBottom: "var(--space-6)",
                }}
              >
                {tier.description}
              </p>

              {/* Price placeholder */}
              <div
                style={{
                  marginBottom: "var(--space-6)",
                  paddingBottom: "var(--space-6)",
                  borderBottom: tier.featured
                    ? "1px solid var(--color-border-dark)"
                    : "1px solid var(--color-border)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: tier.featured
                      ? "var(--color-text-on-dark-secondary)"
                      : "var(--color-text-muted)",
                    fontStyle: "italic",
                  }}
                >
                  Custom pricing
                </span>
              </div>

              {/* Highlights */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                  flex: 1,
                  marginBottom: "var(--space-8)",
                }}
              >
                {tier.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--space-3)",
                      fontSize: "0.8125rem",
                      lineHeight: 1.5,
                      color: tier.featured
                        ? "var(--color-text-on-dark-secondary)"
                        : "var(--color-text-secondary)",
                    }}
                  >
                    <Check
                      size={16}
                      style={{
                        flexShrink: 0,
                        marginTop: "2px",
                        color: "var(--color-accent)",
                      }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={pricing.cta.href}
                className={`btn ${tier.featured ? "btn-primary" : "btn-secondary"} btn-lg`}
                style={{
                  textDecoration: "none",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {tier.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
