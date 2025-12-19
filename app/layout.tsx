import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE_CONFIG.DOMAIN}`),
  title: "Promo Hyundai Jakarta 2025 - Alfried Taftazani",
  description: "Dapatkan promo Hyundai terbaik. Konsultasi dengan Brand Consultant Alfried.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // KONSTRUKSI JSON-LD UNTUK SEO GOOGLE
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutomotiveBusiness",
        "@id": `https://${SITE_CONFIG.DOMAIN}/#organization`,
        "name": `Hyundai Jakarta - ${SITE_CONFIG.SALES_NAME}`,
        "url": `https://${SITE_CONFIG.DOMAIN}`,
        "telephone": SITE_CONFIG.WHATSAPP_NUMBER,
        "email": SITE_CONFIG.EMAIL,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Teuku Nyak Arief No.14, Grogol Selatan",
          "addressLocality": "Jakarta Selatan",
          "addressRegion": "DKI Jakarta",
          "postalCode": "12220",
          "addressCountry": "ID"
        },
        "image": `https://${SITE_CONFIG.DOMAIN}${SITE_CONFIG.SALES_PHOTO_PATH}`,
        "priceRange": "Rp 249.000.000 - Rp 1.500.000.000"
      },
      {
        "@type": "ItemList",
        "name": "Katalog Mobil Hyundai Jakarta",
        "numberOfItems": PRODUCTS.length,
        "itemListElement": PRODUCTS.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product",
            "name": item.name,
            "description": `${item.category} Hyundai Terbaik - ${item.price}`,
            "image": `https://${SITE_CONFIG.DOMAIN}${item.image}`,
            "brand": {
              "@type": "Brand",
              "name": "Hyundai"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "url": SITE_CONFIG.WHATSAPP_LINK
            }
          }
        }))
      }
    ]
  };

  return (
    <html lang="id" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          src="https://analytics.harkovnet.biz.id/script.js"
          data-website-id="810454d3-d0dd-456f-95e5-1b0256297b7a"
        ></script>
        {/* INJEKSI JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <main className="mx-auto max-w-md mobile-wrapper relative overflow-x-hidden border-x border-slate-200 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
