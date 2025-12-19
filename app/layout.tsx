import type { Metadata } from "next";
import "./globals.css"; // PASTIKAN BARIS INI ADA
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE_CONFIG.DOMAIN}`),
  title: "Promo Hyundai Jakarta 2025 - Alfried Taftazani",
  description: "Dapatkan promo Hyundai terbaik. Konsultasi dengan Brand Consultant Alfried.",
  icons: { icon: SITE_CONFIG.LOGO_PATH }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="light" style={{ colorScheme: 'light' }}>
      <head>
        {/* Failsafe Tailwind CDN: Agar gaya tidak hilang jika config lokal bermasalah */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    hyundai: {
                      dark: '#002c5f',
                      blue: '#00aad2',
                    }
                  }
                }
              }
            }
          `
        }} />

        <script defer src="https://analytics.harkovnet.biz.id/script.js" data-website-id="810454d3-d0dd-456f-95e5-1b0256297b7a"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-slate-100">
        {/* Kontainer Utama: max-w-md membuat tampilan seperti HP di tengah layar */}
        <main className="mx-auto max-w-md mobile-wrapper relative overflow-x-hidden border-x border-slate-200">
          {children}
        </main>
      </body>
    </html>
  );
}
