"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Bot } from "lucide-react";
import { ai } from "@/lib/content";

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [started, text]);

  // Respect reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) return <>{text}</>;

  return <>{displayed || "\u00A0"}</>;
}

export default function AISection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeConvo, setActiveConvo] = useState(0);

  return (
    <section
      ref={ref}
      className="section-padding-lg section-dark textile-pattern-dark"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline" style={{ color: "var(--color-accent-muted)" }}>
            RESHAM
          </span>
          <h2 className="text-h2">{ai.headline}</h2>
          <p className="text-body-lg">{ai.description}</p>
        </motion.div>

        {/* Chat Demo */}
        <motion.div
          style={{
            maxWidth: "580px",
            margin: "0 auto",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--color-border-dark)",
            backgroundColor: "var(--color-bg-dark-alt)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Chat header */}
          <div
            style={{
              padding: "var(--space-4) var(--space-5)",
              borderBottom: "1px solid var(--color-border-dark)",
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
            }}
          >
            <Bot size={18} style={{ color: "var(--color-accent)" }} />
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--color-text-on-dark)",
              }}
            >
              RESHAM Assistant
            </span>
            <span className="badge" style={{ fontSize: "0.625rem" }}>
              BETA
            </span>
          </div>

          {/* Messages */}
          <div
            style={{
              padding: "var(--space-5)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
              minHeight: "180px",
            }}
          >
            {/* User message */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-3)",
                  maxWidth: "85%",
                }}
              >
                <div
                  style={{
                    padding: "var(--space-3) var(--space-4)",
                    borderRadius: "var(--radius-md) var(--radius-md) var(--radius-sm) var(--radius-md)",
                    backgroundColor: "var(--color-accent)",
                    color: "#FFFFFF",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                  }}
                >
                  {ai.conversations[activeConvo].question}
                </div>
                <MessageCircle
                  size={16}
                  style={{
                    flexShrink: 0,
                    marginTop: "4px",
                    color: "var(--color-text-on-dark-secondary)",
                  }}
                />
              </div>
            </div>

            {/* AI response */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-3)",
                  maxWidth: "85%",
                }}
              >
                <Bot
                  size={16}
                  style={{
                    flexShrink: 0,
                    marginTop: "4px",
                    color: "var(--color-accent)",
                  }}
                />
                <div
                  style={{
                    padding: "var(--space-3) var(--space-4)",
                    borderRadius: "var(--radius-md) var(--radius-md) var(--radius-md) var(--radius-sm)",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "var(--color-text-on-dark)",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                  }}
                >
                  {isInView ? (
                    <TypingText
                      key={activeConvo}
                      text={ai.conversations[activeConvo].answer}
                      delay={800}
                    />
                  ) : (
                    "\u00A0"
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Conversation switcher */}
          <div
            style={{
              padding: "var(--space-3) var(--space-5)",
              borderTop: "1px solid var(--color-border-dark)",
              display: "flex",
              gap: "var(--space-2)",
              justifyContent: "center",
            }}
          >
            {ai.conversations.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveConvo(i)}
                aria-label={`Show conversation ${i + 1}`}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor:
                    i === activeConvo
                      ? "var(--color-accent)"
                      : "rgba(255, 255, 255, 0.15)",
                  transition: "background-color var(--duration-fast)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
