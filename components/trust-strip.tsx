import { Monitor, Smartphone, Globe, TabletSmartphone } from "lucide-react";
import { trustStrip } from "@/lib/content";

const platformIcons: Record<string, React.ReactNode> = {
  Web: <Monitor size={16} />,
  PWA: <Globe size={16} />,
  Android: <Smartphone size={16} />,
  iOS: <TabletSmartphone size={16} />,
};

export default function TrustStrip() {
  return (
    <section
      aria-label="Platform capabilities"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div
        className="section-container-wide"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-4)",
          padding: "var(--space-6) var(--container-padding)",
        }}
      >
        {/* Platforms */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-6)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {trustStrip.platforms.map((p) => (
            <div
              key={p}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--color-text-tertiary)",
              }}
            >
              {platformIcons[p]}
              {p}
            </div>
          ))}

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "20px",
              backgroundColor: "var(--color-border)",
            }}
            aria-hidden="true"
          />

          {/* Capabilities */}
          {trustStrip.capabilities.map((cap) => (
            <span
              key={cap}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
