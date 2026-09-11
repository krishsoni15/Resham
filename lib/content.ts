// =============================================================================
// RESHAM — Content Architecture
// All marketing content in one structured file for easy editing.
// =============================================================================

// -- Navigation ---------------------------------------------------------------
export const navigation = {
  brand: "RESHAM",
  descriptor: "Textile Operations Management Platform",
  links: [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#solutions" },
    { label: "Platform", href: "#platform" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
  ],
  primaryCta: { label: "Book Demo", href: "#demo-form" },
  secondaryCta: { label: "Open Platform", href: "#" },
};

// -- Hero ---------------------------------------------------------------------
export const hero = {
  eyebrow: "FROM YARN TO YOUR NEXT GROWTH",
  headline: "The New Standard in Textile Operations.",
  description:
    "Manage sales orders, yarn procurement, grey fabric inventory, mill dyeing & printing dispatches, finish roll stock, and real-time enterprise analytics — connected in one unified platform.",
  primaryCta: { label: "Book a Free 21-Day Demo", href: "#demo-form" },
  secondaryCta: { label: "Explore Live Platform", href: "#product" },
  existingUserCta: { label: "Open Platform", href: "#" },
};

// -- Trust Strip --------------------------------------------------------------
export const trustStrip = {
  platforms: ["Web", "PWA", "Android", "iOS"],
  capabilities: [
    "Orders",
    "Inventory",
    "Production",
    "Procurement",
    "Documents",
    "Analytics",
  ],
};

// -- Problem ------------------------------------------------------------------
export const problem = {
  headline: "Your textile operation shouldn't live in scattered information.",
  description:
    "When business-critical data sits across different places, every decision takes longer than it should.",
  painPoints: [
    {
      icon: "table" as const,
      title: "Spreadsheet-based tracking",
      description:
        "Order details, stock quantities and production updates spread across multiple files.",
    },
    {
      icon: "fileText" as const,
      title: "Paper records",
      description:
        "Important business information stored in registers and physical documents.",
    },
    {
      icon: "users" as const,
      title: "Separate supplier information",
      description:
        "Supplier details, rates and purchase history managed independently.",
    },
    {
      icon: "refreshCw" as const,
      title: "Manual production updates",
      description:
        "Production status communicated through calls, messages and manual entries.",
    },
    {
      icon: "unlink" as const,
      title: "Disconnected order information",
      description:
        "Order creation, production and delivery tracked in different systems.",
    },
    {
      icon: "eye" as const,
      title: "Difficult stock visibility",
      description:
        "Grey material, finished lots and fabric stock not visible in one place.",
    },
  ],
};

// -- Solution -----------------------------------------------------------------
export const solution = {
  headline: "One platform. Every important workflow.",
  description:
    "RESHAM connects your business processes instead of treating every operation as an isolated tool.",
  steps: [
    { label: "Orders", icon: "clipboardList" as const },
    { label: "Production", icon: "factory" as const },
    { label: "Materials", icon: "layers" as const },
    { label: "Inventory", icon: "package" as const },
    { label: "Procurement", icon: "shoppingCart" as const },
    { label: "Dispatch", icon: "truck" as const },
    { label: "Documents", icon: "fileOutput" as const },
  ],
};

// -- Product Showcase ---------------------------------------------------------
export const productShowcase = {
  headline: "See the platform in action.",
  tabs: [
    {
      id: "dashboard",
      label: "Dashboard",
      title: "See the state of your operation at a glance.",
      description:
        "Order KPIs, pending and delivered orders, order distribution, delivery information and financial-year filtering — everything on one screen.",
      image: "/images/product-dashboard.webp",
      alt: "RESHAM dashboard showing order KPIs, delivery status and financial year overview",
    },
    {
      id: "orders",
      label: "Orders",
      title: "Create, manage and track orders throughout their lifecycle.",
      description:
        "From order creation through items, quality, production, mill input, mill output, dispatch to delivery — every step connected.",
      image: "/images/product-orders.webp",
      alt: "RESHAM order management interface showing order list with status tracking",
    },
    {
      id: "inventory",
      label: "Inventory & Materials",
      title: "Keep materials and finished stock visible throughout the workflow.",
      description:
        "Fabrics, grey material stock, finish lot stock and sampling — all managed in connected workflows.",
      image: "/images/product-inventory.webp",
      alt: "RESHAM inventory management showing fabric stock quantities and material records",
    },
    {
      id: "procurement",
      label: "Procurement",
      title:
        "Create and manage purchasing workflows with professional documentation.",
      description:
        "Purchase orders, supplier management and procurement tracking with automatically generated documents.",
      image: "/images/product-procurement.webp",
      alt: "RESHAM purchase order management interface with supplier details and order tracking",
    },
  ],
};

// -- Modules ------------------------------------------------------------------
export const modules = {
  headline: "Built for textile operations.",
  description:
    "Every module is designed around how textile businesses actually work.",
  items: [
    {
      icon: "clipboardList" as const,
      title: "Orders",
      description: "Track customer orders from creation through delivery.",
    },
    {
      icon: "scissors" as const,
      title: "Fabrics",
      description: "Manage fabric qualities, specifications and records.",
    },
    {
      icon: "users" as const,
      title: "Weavers",
      description: "Manage weaver information and production relationships.",
    },
    {
      icon: "layers" as const,
      title: "Grey Material Stock",
      description: "Track raw material quantities and related records.",
    },
    {
      icon: "flask" as const,
      title: "Sampling",
      description: "Manage sample and trial workflows.",
    },
    {
      icon: "package" as const,
      title: "Finish Lot Stock",
      description: "Track finished material lots and quantities.",
    },
    {
      icon: "shoppingCart" as const,
      title: "Purchase Orders",
      description:
        "Manage suppliers, purchasing information and documents.",
    },
    {
      icon: "userCog" as const,
      title: "Users",
      description: "Manage teams and role-based access.",
    },
    {
      icon: "activity" as const,
      title: "Activity Logs",
      description: "Track important system activity.",
    },
  ],
};

// -- Workflow -----------------------------------------------------------------
export const workflow = {
  headline: "From order to delivery — without losing the thread.",
  description:
    "Every step in your production connects to the next. RESHAM keeps the entire chain visible.",
  orderFlow: [
    "Customer Order",
    "Order Items",
    "Quality",
    "Weaver / Material",
    "Mill Processing",
    "Finished Material",
    "Dispatch",
    "Delivery",
  ],
  procurementFlow: [
    "Material Requirement",
    "Supplier",
    "Purchase Order",
    "Material",
    "Inventory",
  ],
};

// -- Platform -----------------------------------------------------------------
export const platform = {
  headline: "Your operations don't stop at the desk.",
  description:
    "Access critical business workflows wherever your team works.",
  devices: [
    {
      label: "Desktop",
      description: "Full platform access from any browser.",
      icon: "monitor" as const,
    },
    {
      label: "PWA",
      description: "Install directly — no app store required.",
      icon: "globe" as const,
    },
    {
      label: "Android",
      description: "Native Android application.",
      icon: "smartphone" as const,
    },
    {
      label: "iOS",
      description: "Native iOS application.",
      icon: "smartphone" as const,
    },
  ],
};

// -- Roles --------------------------------------------------------------------
export const roles = {
  headline: "Everyone sees what they need.",
  description:
    "Control access at every level. Each team member sees the workflows and data relevant to their role.",
  items: [
    {
      title: "Master",
      description:
        "Complete platform access with business configuration and system-level controls.",
      icon: "crown" as const,
      color: "var(--color-accent)",
    },
    {
      title: "Superadmin",
      description:
        "Full operational access with team management and advanced settings.",
      icon: "shield" as const,
      color: "var(--color-accent-muted)",
    },
    {
      title: "Admin",
      description:
        "Manage day-to-day operations including orders, inventory and procurement.",
      icon: "settings" as const,
      color: "var(--color-text-secondary)",
    },
    {
      title: "User",
      description:
        "Access assigned workflows and operational tasks within defined permissions.",
      icon: "user" as const,
      color: "var(--color-text-secondary)",
    },
    {
      title: "Party",
      description:
        "External access for customers and suppliers to view relevant information.",
      icon: "briefcase" as const,
      color: "var(--color-text-tertiary)",
    },
  ],
};

// -- Documents ----------------------------------------------------------------
export const documents = {
  headline: "Turn operational data into ready-to-use documents.",
  description:
    "Generate professional documents directly from your business data — no manual formatting needed.",
  types: [
    { icon: "fileText" as const, label: "Order PDFs" },
    { icon: "fileText" as const, label: "Purchase Order PDFs" },
    { icon: "barChart" as const, label: "Inventory Reports" },
    { icon: "qrCode" as const, label: "QR Stickers" },
    { icon: "tag" as const, label: "Sample Stickers" },
    { icon: "tag" as const, label: "Finish-Lot Stickers" },
  ],
};

// -- AI -----------------------------------------------------------------------
export const ai = {
  headline: "Ask your business data.",
  description:
    "Get quick answers about your operations without searching through records manually.",
  conversations: [
    {
      question: "How many pending orders do we have?",
      answer: "You currently have 19 pending orders across 8 customers.",
    },
    {
      question: "What is the grey stock quantity for Silk Crepe?",
      answer:
        "Silk Crepe grey stock: 2,450 meters across 3 lots. Last updated 2 hours ago.",
    },
    {
      question: "Show purchase orders created this week.",
      answer:
        "3 purchase orders created this week totalling ₹4,85,000. PO-2024-047, PO-2024-048, PO-2024-049.",
    },
  ],
};

// -- Real-time ----------------------------------------------------------------
export const realtime = {
  headline: "When something changes, your team stays in sync.",
  description:
    "Updates flow instantly across the platform. When someone updates an order, creates a purchase order, or modifies stock — connected team members see it immediately.",
  steps: [
    { label: "User updates order", icon: "edit" as const },
    { label: "RESHAM processes", icon: "zap" as const },
    { label: "Dashboard updates", icon: "layoutDashboard" as const },
    { label: "Team stays in sync", icon: "users" as const },
  ],
};

// -- Security -----------------------------------------------------------------
export const security = {
  headline: "Built for business operations.",
  description:
    "The platform is designed with operational security practices appropriate for business data management.",
  features: [
    {
      icon: "lock" as const,
      title: "Authentication",
      description: "Controlled account access with secure login.",
    },
    {
      icon: "shield" as const,
      title: "Role-based permissions",
      description: "Different users can have different access levels.",
    },
    {
      icon: "activity" as const,
      title: "Activity tracking",
      description: "Important system activity can be reviewed.",
    },
    {
      icon: "checkCircle" as const,
      title: "Data validation",
      description:
        "Business information is validated before processing.",
    },
    {
      icon: "server" as const,
      title: "API protection",
      description:
        "Infrastructure includes protection against excessive requests.",
    },
  ],
};

// -- Proof --------------------------------------------------------------------
export const proof = {
  headline: "Not a concept. A working platform.",
  description:
    "Designed and developed as a complete operational platform for textile workflows.",
  images: [
    {
      src: "/images/product-dashboard.webp",
      alt: "RESHAM dashboard with live order KPIs and delivery tracking",
      label: "Dashboard",
    },
    {
      src: "/images/product-orders.webp",
      alt: "Order management with full lifecycle tracking",
      label: "Orders",
    },
    {
      src: "/images/product-mobile.webp",
      alt: "RESHAM mobile application showing dashboard on phone",
      label: "Mobile",
    },
    {
      src: "/images/product-procurement.webp",
      alt: "Purchase order management and supplier tracking",
      label: "Procurement",
    },
  ],
};

// -- Demo ---------------------------------------------------------------------
export const demo = {
  headline: "Explore RESHAM yourself.",
  description:
    "Try the platform with demo data. See how orders, inventory, procurement and other workflows connect.",
  notice: "Demo data may be reset periodically.",
  badge: "DEMO ENVIRONMENT",
  cta: { label: "Try the Platform", href: "#" },
};

// -- Demo Form ----------------------------------------------------------------
export const demoForm = {
  headline: "See what RESHAM can do for your business.",
  description:
    "Explore the platform with a guided 21-day demo and see how it can fit your workflow.",
  cta: "Request My 21-Day Demo",
  successMessage:
    "Thank you! We'll set up your demo environment and reach out within 24 hours.",
  fields: [
    { name: "fullName", label: "Full Name", type: "text", required: true },
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      required: true,
    },
    {
      name: "businessType",
      label: "Business Type",
      type: "select",
      required: true,
      options: [
        "Textile Manufacturer",
        "Textile Supplier",
        "Textile Exporter",
        "Production Business",
        "Other",
      ],
    },
    {
      name: "phone",
      label: "Phone / WhatsApp",
      type: "tel",
      required: true,
    },
    { name: "email", label: "Email", type: "email", required: true },
    {
      name: "teamSize",
      label: "Team Size",
      type: "select",
      required: false,
      options: ["1-5", "6-15", "16-50", "50+"],
    },
  ],
};

// -- Pricing ------------------------------------------------------------------
export const pricing = {
  headline: "Plans that grow with your operations.",
  description:
    "Choose the level of access that fits your current team and workflow requirements.",
  cta: { label: "Talk About Your Requirements", href: "#demo-form" },
  tiers: [
    {
      name: "Starter",
      description: "For smaller teams getting started with digital operations.",
      highlights: [
        "Core order management",
        "Basic inventory tracking",
        "Up to 5 users",
        "Web & PWA access",
        "Document generation",
      ],
      cta: "Talk About Your Requirements",
    },
    {
      name: "Business",
      description: "For growing operations that need the full platform.",
      featured: true,
      highlights: [
        "All Starter features",
        "Full inventory & procurement",
        "Up to 20 users",
        "Android & iOS access",
        "RESHAM Assistant",
        "Real-time sync",
        "Priority support",
      ],
      cta: "Talk About Your Requirements",
    },
    {
      name: "Enterprise",
      description:
        "For organizations requiring custom workflows, integrations and support.",
      highlights: [
        "All Business features",
        "Unlimited users",
        "Custom workflows",
        "Custom integrations",
        "Dedicated support",
        "On-premise option",
      ],
      cta: "Talk About Your Requirements",
    },
  ],
};

// -- FAQ ----------------------------------------------------------------------
export const faq = {
  headline: "Common questions.",
  items: [
    {
      question: "What is RESHAM?",
      answer:
        "RESHAM is a textile operations management platform that connects orders, production, materials, inventory, purchasing and business operations in one system. It is available on web, PWA, Android and iOS.",
    },
    {
      question: "Who is it for?",
      answer:
        "RESHAM is built for textile manufacturers, suppliers, exporters and production businesses. It is designed to be understandable by business owners and operational teams, not just IT specialists.",
    },
    {
      question: "Does it work on mobile?",
      answer:
        "Yes. RESHAM includes native Android and iOS applications, plus a PWA that can be installed directly from the browser. Your team can manage critical workflows from anywhere.",
    },
    {
      question: "Does it support web and PWA?",
      answer:
        "Yes. The full platform is accessible through any modern web browser. The PWA can be installed on desktop or mobile without an app store.",
    },
    {
      question: "Can different users have different access?",
      answer:
        "Yes. RESHAM supports five access levels — Master, Superadmin, Admin, User and Party. Each role sees only the workflows and data relevant to their responsibilities.",
    },
    {
      question: "Can workflows be customized?",
      answer:
        "RESHAM is designed to adapt to different textile business workflows. Custom configurations and integrations are available through the Enterprise plan.",
    },
    {
      question: "Can the system generate documents?",
      answer:
        "Yes. RESHAM generates professional PDFs for orders and purchase orders, inventory reports, and QR-based stickers for sampling, finish lots and other materials — directly from your operational data.",
    },
    {
      question: "Can we try it before purchasing?",
      answer:
        "Yes. You can request a free 21-day demo to explore the platform with guided access and see how it fits your workflow.",
    },
    {
      question: "How does the 21-day demo work?",
      answer:
        "After requesting a demo, we set up a dedicated demo environment for your team. You get full platform access for 21 days with sample data and guided onboarding to explore every workflow.",
    },
    {
      question: "Can RESHAM be adapted for our business?",
      answer:
        "Yes. RESHAM can be customized for specific business processes, integrations and requirements. Contact us to discuss how the platform can fit your operation.",
    },
  ],
};

// -- Final CTA ----------------------------------------------------------------
export const finalCta = {
  headline: "Ready to bring your textile operations together?",
  description: "See how RESHAM can fit your business.",
  primaryCta: { label: "Start Your 21-Day Demo", href: "#demo-form" },
  secondaryCta: { label: "Talk About Your Workflow", href: "#demo-form" },
};

// -- Footer -------------------------------------------------------------------
export const footer = {
  brand: "RESHAM",
  descriptor: "Textile Operations Management Platform",
  links: [
    { label: "Product", href: "#product" },
    { label: "Platform", href: "#platform" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#demo-form" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  platformLink: { label: "Open Platform", href: "#" },
};

