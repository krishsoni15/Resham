"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { demoForm } from "@/lib/content";

export default function DemoForm() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="demo-form"
      className="section-padding-lg"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="section-container">
        <motion.div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-header">
            <span className="text-overline">21-DAY DEMO</span>
            <h2 className="text-h2">{demoForm.headline}</h2>
            <p className="text-body-lg">{demoForm.description}</p>
          </div>

          {submitted ? (
            /* Success State */
            <motion.div
              style={{
                textAlign: "center",
                padding: "var(--space-12) var(--space-6)",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle
                size={48}
                style={{
                  color: "var(--color-success)",
                  marginBottom: "var(--space-4)",
                }}
              />
              <h3 className="text-h3" style={{ marginBottom: "var(--space-3)" }}>
                Demo request received
              </h3>
              <p className="text-body" style={{ margin: 0 }}>
                {demoForm.successMessage}
              </p>
            </motion.div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
                padding: "var(--space-8)",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {demoForm.fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--color-text-secondary)",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {field.label}
                    {field.required && (
                      <span style={{ color: "var(--color-accent)" }}> *</span>
                    )}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      style={{
                        width: "100%",
                        padding: "var(--space-3) var(--space-4)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border)",
                        backgroundColor: "var(--color-surface)",
                        fontSize: "0.9375rem",
                        color: "var(--color-text-primary)",
                        fontFamily: "var(--font-sans)",
                        outline: "none",
                        transition: "border-color var(--duration-fast)",
                        appearance: "none",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                    >
                      <option value="">Select...</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      style={{
                        width: "100%",
                        padding: "var(--space-3) var(--space-4)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border)",
                        backgroundColor: "var(--color-surface)",
                        fontSize: "0.9375rem",
                        color: "var(--color-text-primary)",
                        fontFamily: "var(--font-sans)",
                        outline: "none",
                        transition: "border-color var(--duration-fast)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{
                  width: "100%",
                  marginTop: "var(--space-2)",
                  justifyContent: "center",
                }}
              >
                {demoForm.cta}
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
