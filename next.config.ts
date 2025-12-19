/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Mematikan indikator static route untuk tampilan yang lebih bersih saat dev
  devIndicators: {
    appIsrStatus: false,
  },
  // Optimasi gambar untuk aset lokal di folder public
  images: {
    unoptimized: true, // Menggunakan unoptimized agar kompatibel dengan berbagai hosting tanpa serverless function khusus
  },
};

module.exports = nextConfig;
