"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  Factory,
  Layers,
  Package,
  ShoppingCart,
  Truck,
  FileOutput,
  ArrowRight,
} from "lucide-react";
import { solution } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  clipboardList: <ClipboardList size={24} />,
  factory: <Factory size={24} />,
  layers: <Layers size={24} />,
  package: <Package size={24} />,
  shoppingCart: <ShoppingCart size={24} />,
  truck: <Truck size={24} />,
  fileOutput: <FileOutput size={24} />,
};

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="solutions"
      className="section-padding-lg section-dark textile-pattern-dark"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline" style={{ color: "var(--color-accent-muted)" }}>
            CONNECTED WORKFLOWS
          </span>
          <h2 className="text-h2">{solution.headline}</h2>
          <p className="text-body-lg">{solution.description}</p>
        </motion.div>

        {/* Flow Steps */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {solution.steps.map((step, i) => (
            <motion.div
              key={step.label}
              style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Step */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  padding: "var(--space-3) var(--space-5)",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <span style={{ color: "var(--color-accent-muted)" }}>
                  {iconMap[step.icon]}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-text-on-dark)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.label}
                </span>
              </div>

              {/* Arrow (not after last) */}
              {i < solution.steps.length - 1 && (
                <ArrowRight
                  size={16}
                  style={{ color: "var(--color-text-on-dark-secondary)", flexShrink: 0 }}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Supporting message */}
        <motion.p
          style={{
            textAlign: "center",
            fontSize: "0.9375rem",
            color: "var(--color-text-on-dark-secondary)",
            maxWidth: "480px",
            margin: "var(--space-10) auto 0",
            lineHeight: 1.6,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          The system connects your business processes instead of treating every
          operation as an isolated tool.
        </motion.p>
      </div>
    </section>
  );
}
