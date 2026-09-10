"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Table2,
  FileText,
  Users,
  RefreshCw,
  Unlink,
  Eye,
} from "lucide-react";
import { problem } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  table: <Table2 size={22} />,
  fileText: <FileText size={22} />,
  users: <Users size={22} />,
  refreshCw: <RefreshCw size={22} />,
  unlink: <Unlink size={22} />,
  eye: <Eye size={22} />,
};

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="problem"
      className="section-padding"
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
          <h2 className="text-h2">{problem.headline}</h2>
          <p className="text-body-lg">{problem.description}</p>
        </motion.div>

        {/* Pain Points Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-4)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {problem.painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              className="card-flat"
              style={{
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "flex-start",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                {iconMap[point.icon]}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    marginBottom: "var(--space-1)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    color: "var(--color-text-tertiary)",
                    margin: 0,
                  }}
                >
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
