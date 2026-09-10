"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  Scissors,
  Users,
  Layers,
  FlaskConical,
  Package,
  ShoppingCart,
  UserCog,
  Activity,
  ChevronDown,
} from "lucide-react";
import { modules } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  clipboardList: <ClipboardList size={22} />,
  scissors: <Scissors size={22} />,
  users: <Users size={22} />,
  layers: <Layers size={22} />,
  flask: <FlaskConical size={22} />,
  package: <Package size={22} />,
  shoppingCart: <ShoppingCart size={22} />,
  userCog: <UserCog size={22} />,
  activity: <Activity size={22} />,
};

const INITIAL_SHOW = 6;

export default function ModuleGrid() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const visibleModules = showAll
    ? modules.items
    : modules.items.slice(0, INITIAL_SHOW);

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-overline">MODULES</span>
          <h2 className="text-h2">{modules.headline}</h2>
          <p className="text-body-lg">{modules.description}</p>
        </motion.div>

        {/* Module Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "var(--space-4)",
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          {visibleModules.map((mod, i) => (
            <motion.div
              key={mod.title}
              className="card"
              style={{
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "flex-start",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.1 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-accent-subtle)",
                  color: "var(--color-accent)",
                }}
              >
                {iconMap[mod.icon]}
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
                  {mod.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    color: "var(--color-text-tertiary)",
                    margin: 0,
                  }}
                >
                  {mod.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {!showAll && modules.items.length > INITIAL_SHOW && (
          <div
            style={{
              textAlign: "center",
              marginTop: "var(--space-8)",
            }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
              }}
            >
              See all {modules.items.length} modules
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
