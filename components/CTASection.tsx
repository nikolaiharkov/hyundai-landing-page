"use client";

import { SITE_CONFIG } from "@/lib/config";

export default function CTASection() {
  // Semua layanan kini diarahkan ke satu pintu link tracking analitik
  const services = [
    {
      title: "Promo Eksklusif",
      desc: "Dapatkan penawaran DP & Bunga terendah bulan ini.",
      icon: "fas fa-percentage",
      link: SITE_CONFIG.WHATSAPP_LINK,
    },
    {
      title: "Priority Test Drive",
      desc: "Layanan uji coba unit langsung di lokasi Anda.",
      icon: "fas fa-car-side",
      link: SITE_CONFIG.WHATSAPP_LINK,
    },
    {
      title: "Tukar Tambah",
      desc: "Appraisal mobil lama Anda dengan harga kompetitif.",
      icon: "fas fa-sync-alt",
      link: SITE_CONFIG.WHATSAPP_LINK,
    },
    {
      title: "Simulasi Kredit",
      desc: "Konsultasi perhitungan cicilan sesuai budget Anda.",
      icon: "fas fa-calculator",
      link: SITE_CONFIG.WHATSAPP_LINK,
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-hyundai-dark to-[#001c3d] p-10 text-white shadow-2xl shadow-hyundai-dark/20">
      {/* Dekorasi Cahaya Abstrak */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-hyundai-blue/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-black font-heading tracking-tight uppercase mb-3">
            Layanan Prioritas
          </h2>
          <p className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-black">
            Personalized by {SITE_CONFIG.SALES_NAME}
          </p>
          <div className="h-1 w-10 bg-hyundai-blue mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover-effect group flex items-center gap-5 p-5 rounded-[1.5rem] bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-hyundai-blue text-white shadow-glow-blue">
                <i className={`${service.icon} text-lg`}></i>
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-sm tracking-tight">{service.title}</h3>
                <p className="text-white/40 text-[11px] leading-tight mt-1 font-medium">
                  {service.desc}
                </p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                <i className="fas fa-chevron-right text-[10px] text-hyundai-blue"></i>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center pt-8 border-t border-white/5">
          <p className="text-[9px] text-white/30 italic uppercase tracking-[0.15em] leading-relaxed">
            Layanan Resmi Hyundai Mobil Indonesia. <br/>
            Proses Cepat, Transparan, & Profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
