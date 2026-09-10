"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { demo } from "@/lib/content";

export default function DemoSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="demo"
      className="section-padding-lg section-dark textile-pattern-dark"
    >
      <div className="section-container">
        <motion.div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline" style={{ color: "var(--color-accent-muted)", marginBottom: "var(--space-3)", display: "block" }}>
            INTERACTIVE DEMO
          </span>
          <h2 className="text-h2" style={{ marginBottom: "var(--space-4)" }}>
            {demo.headline}
          </h2>
          <p className="text-body-lg" style={{ marginBottom: "var(--space-8)" }}>
            {demo.description}
          </p>

          {/* Demo badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              marginBottom: "var(--space-6)",
              padding: "var(--space-2) var(--space-4)",
              borderRadius: "var(--radius-full)",
              backgroundColor: "rgba(45, 138, 78, 0.15)",
              border: "1px solid rgba(45, 138, 78, 0.2)",
              color: "#6BC48D",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#6BC48D",
              }}
            />
            {demo.badge}
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)" }}>
            <a
              href={demo.cta.href}
              className="btn btn-primary btn-lg"
              style={{ textDecoration: "none" }}
            >
              {demo.cta.label}
              <ExternalLink size={16} />
            </a>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-on-dark-secondary)",
                margin: 0,
              }}
            >
              {demo.notice}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
