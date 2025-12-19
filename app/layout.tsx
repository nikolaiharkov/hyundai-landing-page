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
  const baseUrl = `https://${SITE_CONFIG.DOMAIN}`;

  // KONSTRUKSI JSON-LD YANG VALID UNTUK MERCHANT LISTINGS & SNIPPETS
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutomotiveBusiness",
        "@id": `${baseUrl}/#organization`,
        "name": `Hyundai Jakarta - ${SITE_CONFIG.SALES_NAME}`,
        "url": baseUrl,
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
        "image": `${baseUrl}${SITE_CONFIG.SALES_PHOTO_PATH}`
      },
      ...PRODUCTS.map((item) => ({
        "@type": "Product",
        "name": `Hyundai ${item.name} 2025`,
        "image": `${baseUrl}${item.image}`,
        "description": `Beli Hyundai ${item.name} baru di Jakarta. Harga ${item.price}. Proses cepat, data dibantu sampai approve.`,
        "sku": item.id,
        "mpn": item.id,
        "brand": {
          "@type": "Brand",
          "name": "Hyundai"
        },
        "offers": {
          "@type": "Offer",
          "url": baseUrl,
          "priceCurrency": "IDR",
          "price": item.priceNumeric, // HARUS ANGKA
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": SITE_CONFIG.DEALER_NAME
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": 0,
              "currency": "IDR"
            },
            "shippingDestination": [{
              "@type": "DefinedRegion",
              "addressCountry": "ID"
            }]
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "ID",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
            "merchantReturnDays": 30,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "12"
        }
      }))
    ]
  };

  return (
    <html lang="id" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        <main className="mx-auto max-w-md mobile-wrapper relative overflow-x-hidden border-x border-slate-200 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
