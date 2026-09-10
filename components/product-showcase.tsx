"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { productShowcase } from "@/lib/content";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const currentTab = productShowcase.tabs[activeTab];

  return (
    <section
      ref={ref}
      id="product"
      className="section-padding-lg"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="section-container-wide">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline">PRODUCT</span>
          <h2 className="text-h2">{productShowcase.headline}</h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-1)",
            marginBottom: "var(--space-10)",
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {productShowcase.tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              role="tab"
              aria-selected={i === activeTab}
              aria-controls={`tab-panel-${tab.id}`}
              className="btn"
              style={{
                backgroundColor:
                  i === activeTab
                    ? "var(--color-accent)"
                    : "transparent",
                color:
                  i === activeTab
                    ? "#FFFFFF"
                    : "var(--color-text-secondary)",
                borderColor:
                  i === activeTab
                    ? "var(--color-accent)"
                    : "var(--color-border)",
                fontWeight: i === activeTab ? 600 : 500,
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            id={`tab-panel-${currentTab.id}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title & Description */}
            <div
              style={{
                textAlign: "center",
                maxWidth: "600px",
                margin: "0 auto var(--space-8)",
              }}
            >
              <h3 className="text-h3" style={{ marginBottom: "var(--space-3)" }}>
                {currentTab.title}
              </h3>
              <p className="text-body" style={{ margin: 0 }}>
                {currentTab.description}
              </p>
            </div>

            {/* Product Screenshot */}
            <div
              className="product-frame"
              style={{
                maxWidth: "1060px",
                margin: "0 auto",
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "var(--space-3) var(--space-4)",
                  backgroundColor: "var(--color-bg-alt)",
                  borderBottom: "1px solid var(--color-border)",
                }}
                aria-hidden="true"
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#E5E3DE",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#E5E3DE",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#E5E3DE",
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    maxWidth: "300px",
                    margin: "0 auto",
                    backgroundColor: "var(--color-surface)",
                    borderRadius: "var(--radius-sm)",
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    textAlign: "center",
                  }}
                >
                  app.resham.in
                </div>
              </div>

              <Image
                src={`/images/product-${currentTab.id === "inventory" ? "inventory" : currentTab.id === "procurement" ? "procurement" : currentTab.id === "orders" ? "orders" : "dashboard"}.png`}
                alt={currentTab.alt}
                width={1060}
                height={700}
                quality={85}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
