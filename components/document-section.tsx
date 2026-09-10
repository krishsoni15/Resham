"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, BarChart3, QrCode, Tag, ArrowRight } from "lucide-react";
import { documents } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  fileText: <FileText size={20} />,
  barChart: <BarChart3 size={20} />,
  qrCode: <QrCode size={20} />,
  tag: <Tag size={20} />,
};

export default function DocumentSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
          <span className="text-overline">DOCUMENTS</span>
          <h2 className="text-h2">{documents.headline}</h2>
          <p className="text-body-lg">{documents.description}</p>
        </motion.div>

        {/* Flow visualization */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-6)",
            marginBottom: "var(--space-10)",
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            className="card"
            style={{
              padding: "var(--space-4) var(--space-6)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              Business Data
            </p>
          </div>
          <ArrowRight
            size={20}
            style={{ color: "var(--color-accent)", flexShrink: 0 }}
            aria-hidden="true"
          />
          <div
            style={{
              padding: "var(--space-4) var(--space-6)",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-accent)",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Generate
            </p>
          </div>
          <ArrowRight
            size={20}
            style={{ color: "var(--color-accent)", flexShrink: 0 }}
            aria-hidden="true"
          />
          <div
            className="card"
            style={{
              padding: "var(--space-4) var(--space-6)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              Professional Document
            </p>
          </div>
        </motion.div>

        {/* Document types */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "var(--space-3)",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {documents.types.map((doc, i) => (
            <motion.div
              key={doc.label}
              className="card-flat"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                padding: "var(--space-4)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.3 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>
                {iconMap[doc.icon]}
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                }}
              >
                {doc.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
