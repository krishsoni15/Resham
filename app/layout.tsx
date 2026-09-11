import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans-main",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const displayFont = Outfit({
  variable: "--font-display-main",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const serifFont = Playfair_Display({
  variable: "--font-serif-main",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resham-ai.vercel.app"),
  title: "RESHAM — The New Standard in Textile Operations",
  description:
    "The New Standard in Textile Operations. The connected operating system for modern textile manufacturers, mill processing, and fabric traders. Manage orders, production, materials, inventory, purchasing, and dispatches in one system.",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "The New Standard in Textile Operations",
    "textile management software",
    "textile ERP",
    "textile manufacturing software",
    "textile inventory management",
    "textile order management",
    "textile production management",
    "textile supplier management",
  ],
  openGraph: {
    title: "RESHAM — The New Standard in Textile Operations",
    description:
      "The New Standard in Textile Operations. The connected operating system for modern textile manufacturers, mill processing, and fabric traders.",
    type: "website",
    locale: "en_IN",
    siteName: "RESHAM",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "RESHAM Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RESHAM — The New Standard in Textile Operations",
    description:
      "The New Standard in Textile Operations. The connected operating system for modern textile manufacturers, mill processing, and fabric traders.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansFont.variable} ${displayFont.variable} ${serifFont.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "RESHAM",
              applicationCategory: "BusinessApplication",
              description:
                "Textile operations management platform — orders, production, materials, inventory, purchasing connected in one system.",
              operatingSystem: "Web, Android, iOS",
              offers: {
                "@type": "Offer",
                category: "SaaS",
              },
              provider: {
                "@type": "Organization",
                name: "RESHAM",
              },
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#FBFBFA] text-[#0F172A] antialiased selection:bg-[#F59E0B]/20 selection:text-[#92400E]"
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

