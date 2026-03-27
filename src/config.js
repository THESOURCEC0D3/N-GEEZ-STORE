export const config = {
  businessName: "N-GEEZ",
  whatsappNumber: "2348064409580", // ← You need to add her WhatsApp number here
  currency: "₦",
  footerName: "N-GEEZ Perfumery & Body Care",
  contactMessage:
    "Hi! I'm visiting from your website and would like to speak with you.",
  orderMessage: "I would like to order:",

  // ── Theme ─────────────────────────────────────────────
  // Deep plum — matches her existing branding but more refined
  theme: {
    accent: "#6B2D5B", // Deep plum — luxury feel
    accentLight: "#F5EBF2", // Soft lavender tint for backgrounds
    accentHover: "#552348", // Darker plum for hover states
    dark: "#1C1017", // Warm dark for text/headers
    light: "#FFFFFF",
    muted: "#78716C", // Warm gray for secondary text
    cardBg: "#FFFFFF",
    pageBg: "#FDFBFC", // Very subtle warm white with pink undertone
    border: "#E8E3E6",
  },

  // ── Hero Section ──────────────────────────────────────
  hero: {
    headline: "Long Lasting Perfumes & Body Care",
    subheadline:
      "Premium fragrances and skincare from the world's finest houses — Clarins, Louis Vuitton, Dior, Amouage & more. Browse and order directly on WhatsApp.",
    ctaText: "Shop Now",
    ctaLink: "/products",
  },

  heroImages: {
    mobile: "/assets/MobileHeroImg.webp",
    desktop: "/assets/DesktopHeroImg.webp",
    extra: "/assets/contactpagebgimg1.webp",
  },

  contactBgImage: { extra1: "/assets/contactpgbgimg1.webp" },

  services: [
    {
      title: "Premium Fragrances",
      description:
        "Luxury perfumes from Dior, Louis Vuitton, Amouage, MFK and more — for every occasion.",
      image: "/assets/Manwithperfume.jpg",
    },
    {
      title: "Clarins Skincare",
      description:
        "High-quality Clarins skincare and body care products for radiant, healthy skin.",
      image: "/assets/D22.jpg",
    },
    {
      title: "Easy WhatsApp Ordering",
      description:
        "Browse our collection, order on WhatsApp, and pick up from our GRA location. Bulk orders get delivery.",
      image: "/assets/quickdelivery.png",
    },
  ],

  whyChooseUs: [
    {
      title: "100% Authentic",
      desc: "Every product is genuine — sourced directly from trusted suppliers.",
    },
    {
      title: "For Him & For Her",
      desc: "Masculine, feminine, and unisex collections for every personality.",
    },
    {
      title: "Long-Lasting Scents",
      desc: "Fragrances designed to stay fresh and elegant all day long.",
    },
   {
  title: "Bulk Order Delivery",
  desc: "Ordering in bulk? We deliver straight to your doorstep. Walk-in customers welcome at our GRA location.",
},
    {
      title: "Tested & Trusted",
      desc: "Loved by fragrance and skincare enthusiasts across Port Harcourt.",
    },
  ],
};
