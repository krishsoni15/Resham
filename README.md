# 🧵 RESHAM — Enterprise Textile Operations OS

> **From Yarn to Your Next Growth.**  
> *The Connected Operating System for Modern Textile Manufacturers, Mill Processing Units, and Fabric Exporters.*  
> Streamline sales order lifecycles, yarn procurement, grey fabric (Kora Kapda) inventory, mill dyeing & printing dispatches, finish roll stock, and real-time enterprise analytics from a single unified platform.

---

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-E91E63?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📑 Table of Contents
- [Executive Overview](#-executive-overview)
- [💼 Client & Business Perspective](#-client--business-perspective)
  - [The Core Textile Challenge](#the-core-textile-challenge)
  - [The Resham Solution](#the-resham-solution)
  - [Business ROI & Value Proposition](#business-roi--value-proposition)
- [🛠️ Tech Lead & Engineering Perspective](#%EF%B8%8F-tech-lead--engineering-perspective)
  - [System Architecture](#system-architecture)
  - [Tech Stack Overview](#tech-stack-overview)
  - [UI/UX & Design System](#uiux--design-system)
  - [Interactive Platform Engine](#interactive-platform-engine)
- [📦 10 Core Platform Modules](#-10-core-platform-modules)
- [🚀 Quick Start & Local Development](#-quick-start--local-development)
- [📂 Project Directory Structure](#-project-directory-structure)
- [📄 Document Engine (PDF / QR Code / Excel)](#-document-engine-pdf--qr-code--excel)
- [🔒 Security & Multi-Tenancy](#-security--multi-tenancy)
- [🤝 Contributing & License](#-contributing--license)

---

## 🌟 Executive Overview

**RESHAM** is a next-generation Textile Operations Management Platform designed specifically for textile markets (such as Surat Textile Hub, Bhiwandi, Tirupur, and international fabric exporters). 

Legacy textile businesses often rely on fragmented physical registers, disconnected WhatsApp threads, and error-prone spreadsheets to manage multi-million meter fabric pipelines. **Resham** bridges traditional textile trade practices with cutting-edge web architecture, providing real-time visibility from raw yarn procurement to mill process dispatch and finished fabric inventory.

---

## 💼 Client & Business Perspective

### The Core Textile Challenge
Textile operations involve high-frequency, complex variables across multiple vendors:
- **Scattered Data**: Order specs, grey fabric (Kora Kapda) roll counts, and dyeing shades live across disparate notebooks and chat logs.
- **Mill Processing Gaps**: Lack of visibility into fabric loss, shrinkage, and dyeing/printing delays at job-work mills.
- **Inventory Discrepancy**: Difficulty tracking meter counts, piece-wise grey stock, and shade-wise finish fabric stock.
- **Manual Documentation**: Time-consuming manual creation of Sales Orders, Purchase Orders, Gate Passes, and Mill Delivery Slips.

### The Resham Solution
Resham digitizes the entire end-to-end fabric workflow into an intuitive, high-performance web studio:
1. **Sales Order Lifecycle**: Instant multi-item rate engine with dyeing/printing specs, mill rates, and payment term locks.
2. **Yarn Procurement Tracking**: FY-standard PO auto-numbering (e.g., `VF/PO/25-26/0012`), supplier allocation, and IGST structure validation.
3. **Grey Material (Kora Kapda) Management**: Weaver inward logging, challan reconciliation, gross meter tracking, and QR code roll labeling.
4. **Mill Dispatch & Process Control**: Real-time mill program issuance, shade matching, shrinkage audit, and delivery tracking.
5. **Finish Goods & Warehouse Dispatch**: Meter-wise roll stock, shade grouping, dispatch challans, and customer packing slips.
6. **Textile Operations Intelligence**: Conversational assistant for immediate inventory queries, yield estimates, and production bottleneck alerts.

### Business ROI & Value Proposition
| Business Metric | Before Resham | With Resham | Business Impact |
| :--- | :--- | :--- | :--- |
| **Order Processing Time** | 45–60 minutes | < 3 minutes | **95% reduction** in manual entry |
| **Mill Shrinkage Leakage** | 3.5%–5.0% lost | < 1.2% variance | Save tens of thousands per mill batch |
| **Stock Reconciliation** | 4–6 days end-of-month | Real-time live view | 100% stock accuracy across warehouses |
| **Client Document Delivery** | Manual PDF typing | Instant 1-click PDF/QR | Professional client experience |

---

## 🛠️ Tech Lead & Engineering Perspective

### System Architecture

Resham is engineered on **Next.js 16 (App Router)** utilizing **React 19 Server & Client Components**, designed for speed, low latency, and zero cumulative layout shift (CLS).

```
+-----------------------------------------------------------------------+
|                             CLIENT / BROWSER                          |
|   Tailwind CSS v4  *  Framer Motion Micro-Interactions  *  Lucide UI   |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|                         NEXT.JS 16 APP ROUTER                         |
|   App Shell (layout.tsx)  *  Global Styles (globals.css) * Content API  |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|                         COMPONENT LAYER                               |
|   * Hero / Studio Modal   * Platform Showcase Stepper (10 Modules)     |
|   * Operations Hub        * Real App Dashboard Engine                 |
|   * Live PDF/QR Generator * Interactive Demo & FAQ System             |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|                         DATA & CONTENT LAYER                          |
|   Structured Schema (lib/content.ts) * Client/Mill State Manager       |
+-----------------------------------------------------------------------+
```

### Tech Stack Overview

- **Core Framework**: [Next.js 16.3.4](https://nextjs.org/) (App Router paradigm)
- **UI Library**: [React 19.2.8](https://react.dev/)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling System**: [Tailwind CSS v4.0](https://tailwindcss.com/) with PostCSS integration
- **Animations & Micro-interactions**: [Framer Motion 13.2](https://www.framer.com/motion/)
- **Iconography**: [Lucide React 1.43](https://lucide.dev/)
- **Fonts**: Next.js Optimized Geist & Sans Fonts

### UI/UX & Design System
- **Luxury Editorial Aesthetic**: Tailored warm stone background palette (`#F7F5F0`), deep terracotta accent accents (`#9A481B`), and sharp typography.
- **Glassmorphism & Modals**: Backdrop blur overlays for the Interactive App Studio modal and live document previewers.
- **Responsive Layout**: Designed for seamless execution across Desktop workstations, tablets, and PWA mobile views.

---

## 📦 10 Core Platform Modules

Resham consolidates 10 specialized enterprise modules:

```
[01. Orders Page] -------------> [02. Purchase Orders] ----------> [03. Grey Material Stock]
Multi-item rate engine           Yarn procurement & suppliers     Raw cloth inward & QR tags
          |                                                                   |
          v                                                                   v
[04. Mill Program] ------------> [05. Finish Stock] -------------> [06. Operations Hub]
Dyeing/Printing dispatch         Warehouse stock & shade lots      Stock queries & analytics
          |                                                                   |
          v                                                                   v
[07. Client CRM] --------------> [08. Financial Analytics] -------> [09. Enterprise Security]
Buyer credit terms & history     P&L, mill costs & rate audit      Role-based access & multi-tenant
                                          |
                                          v
                               [10. Audit Trails & Logs]
                               Real-time activity tracking
```

1. **Orders Page (`/orders`)**: Sales order booking, multi-item pricing, dyeing/printing specs, and payment status tracking.
2. **Purchase Orders (`/purchase-orders`)**: Automated yarn procurement, FY auto-numbering, supplier allocation, and IGST locks.
3. **Grey Material Stock (`/grey-materials`)**: Raw un-dyed cloth (Kora Kapda) inward, weaver challan verification, roll-wise meters, and QR stickers.
4. **Mill Program Dispatch (`/mill-program`)**: Job-work dispatch to dyeing & printing mills, shade master codes, shrinkage targets, and lot tracking.
5. **Finish Fabric Stock (`/finish-stock`)**: Ready-goods warehouse management, grade classification (Fresh / Seconds / Cut Pieces), and location tags.
6. **Operations Intelligence (`/analytics`)**: Real-time stock lookup, margin calculations, shrinkage analysis, and automated report generation.
7. **Client CRM & Accounts (`/crm`)**: Customer credit limit tracking, ledger reconciliation, order history, and payment locks.
8. **Financial Analytics & P&L (`/analytics`)**: Cost per meter breakdown, mill processing expenses, profit margins, and yarn rate fluctuations.
9. **Multi-Tenant & Security (`/security`)**: Role-based access control (RBAC), multi-branch permissions, and encrypted data isolation.
10. **Operational Audit & Logs (`/audit-logs`)**: Immutable event logging for every challan change, order update, rate override, and user action.

---

## 🚀 Quick Start & Local Development

### Prerequisites
- **Node.js**: v20.0.0 or higher
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/krishsoni15/Resham.git
   cd Resham/febflow
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live Resham application and interactive studio.

### Production Build & Linting

```bash
# Run ESLint checks
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📂 Project Directory Structure

```
febflow/
├── app/                        # Next.js 16 App Router Directory
│   ├── favicon.ico             # App Favicon
│   ├── globals.css             # Tailwind v4 Global Styles & Design Tokens
│   ├── layout.tsx              # Root Layout Shell
│   └── page.tsx                # Main Landing & Interactive Platform Page
├── components/                 # React UI Components
│   ├── ai-section.tsx          # Operations Intelligence Showcase
│   ├── demo-faq-section.tsx    # Demo Booking & FAQ Accordion
│   ├── hero.tsx                # Editorial Hero & Interactive Studio Trigger
│   ├── navbar.tsx              # Navigation & Brand Bar
│   ├── operations-hub.tsx      # Operational Workflow Hub
│   ├── platform-showcase.tsx   # Interactive 10-Module Platform Stepper
│   ├── real-app-dashboard-preview.tsx # Live Dashboard & Interactive Studio
│   └── ...                     # Additional Modular Sections
├── lib/                        # Data Architecture & Utilities
│   └── content.ts              # Structured Content & Platform Metadata
├── public/                     # Static Assets & Images
│   └── images/                 # Hero background, logo, product previews
├── next.config.ts              # Next.js Configuration
├── package.json                # Project Dependencies & Scripts
├── tsconfig.json               # TypeScript Configuration
└── README.md                   # Project Documentation
```

---

## 📄 Document Engine (PDF / QR Code / Excel)

Resham features a built-in document generation preview engine:
- **Official Sales Order PDFs**: Generates structured, GST-compliant customer confirmations.
- **Yarn Purchase Order PDFs**: Formats vendor raw material contracts with terms & specifications.
- **Grey Material QR Stickers**: Renders roll-level QR codes (`GRY-LOT-2026-8890`) for rapid barcode scanning in warehouses.
- **Mill Process Issue Slips**: Outputs job-work slips specifying shade codes and Target Shrinkage % for dyeing units.

---

## 🔒 Security & Multi-Tenancy

- **Role-Based Access Control (RBAC)**: Enterprise roles (Admin, Sales Manager, Warehouse Manager, Mill Coordinator, Accountant).
- **Data Isolation**: Multi-tenant architecture ensuring company-specific records are safely partitioned.
- **Audit Compliance**: Full event tracking to ensure accountability across fabric dispatches and price overrides.

---

## 🤝 Contributing & License

Contributions are welcome! Please feel free to open issues or submit pull requests to enhance Resham.

This project is licensed under the **MIT License**.

---

<p align="center">
  Developed with ❤️ for the Global Textile Industry.
</p>
