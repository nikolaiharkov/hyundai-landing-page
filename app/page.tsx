import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import ProductGrid from "@/components/ProductGrid";
import CTASection from "@/components/CTASection";
import FloatingWA from "@/components/FloatingWA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Section 1: Hero Identity
        Bagian visual utama dengan branding sales & logo Hyundai yang diperbesar.
      */}
      <Hero />

      {/* Konten Utama dengan Padding yang Lebih Proporsional */}
      <div className="px-6 py-12 space-y-16">

        {/* Section 2: Navigasi Cepat (Revised)
          Tampilan Linktree yang lebih bersih tanpa Instagram/Tiktok.
        */}
        <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <QuickLinks />
        </section>

        {/* Section 3: Katalog Unit Hyundai
          Layout grid yang rapi dengan heading yang lebih tegas.
        */}
        <section id="catalog" className="scroll-mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-hyundai-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
              Our Collection
            </span>
            <h2 className="text-2xl font-extrabold font-heading text-hyundai-dark tracking-tight uppercase">
              Pilihan Unit Terbaik
            </h2>
            <div className="h-1 w-12 bg-hyundai-blue mt-4 rounded-full"></div>
          </div>

          <ProductGrid />
        </section>

        {/* Section 4: Layanan & Promo
          Kartu informasi dengan gradien premium.
        */}
        <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <CTASection />
        </section>
      </div>

      {/* Section 5: Footer (Revised)
        Informasi kepemilikan domain & kredit developer.
      */}
      <Footer />

      {/* Tombol interaksi cepat WhatsApp */}
      <FloatingWA />
    </div>
  );
}
