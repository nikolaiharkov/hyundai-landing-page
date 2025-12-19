import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";

// KONFIGURASI METADATA
// Tips: Jika favicon.ico ada di folder 'app', baris 'icons' di bawah bisa dihapus.
// Next.js akan otomatis membacanya.
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
  return (
    <html lang="id" className="light" style={{ colorScheme: 'light' }}>
      <head>
        {/* Font Awesome & Google Fonts */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* Script Analitik */}
        <script
          defer
          src="https://analytics.harkovnet.biz.id/script.js"
          data-website-id="810454d3-d0dd-456f-95e5-1b0256297b7a"
        ></script>
      </head>
      <body className="antialiased">
        {/* Kontainer Utama Mobile-First */}
        <main className="mx-auto max-w-md mobile-wrapper relative overflow-x-hidden border-x border-slate-200 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
