"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { proof } from "@/lib/content";

export default function ProofSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
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
          <span className="text-overline">REAL PRODUCT</span>
          <h2 className="text-h2">{proof.headline}</h2>
          <p className="text-body-lg">{proof.description}</p>
        </motion.div>

        {/* Image gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "var(--space-5)",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {proof.images.map((img, i) => (
            <motion.div
              key={img.label}
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="product-frame"
                style={{
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src.replace(".webp", ".png")}
                  alt={img.alt}
                  width={500}
                  height={330}
                  quality={80}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--color-text-tertiary)",
                  textAlign: "center",
                }}
              >
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
