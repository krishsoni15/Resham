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
  title: "RESHAM — Textile Operations Management Platform",
  description:
    "Run your entire textile operation from one connected platform. Manage orders, production, materials, inventory, purchasing and business operations across web and mobile.",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "textile management software",
    "textile ERP",
    "textile manufacturing software",
    "textile inventory management",
    "textile order management",
    "textile production management",
    "textile supplier management",
  ],
  openGraph: {
    title: "RESHAM — Textile Operations Management Platform",
    description:
      "Run your entire textile operation from one connected platform. Orders, production, materials, inventory, purchasing — connected in one system.",
    type: "website",
    locale: "en_IN",
    siteName: "RESHAM",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "RESHAM Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RESHAM — Textile Operations Management Platform",
    description:
      "Run your entire textile operation from one connected platform.",
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
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFA] text-[#0F172A] antialiased selection:bg-[#F59E0B]/20 selection:text-[#92400E]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

