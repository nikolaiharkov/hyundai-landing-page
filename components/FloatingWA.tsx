"use client";

import { SITE_CONFIG } from "@/lib/config";

export default function FloatingWA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      {/* Tooltip Label Premium - Memberikan alasan untuk klik */}
      <div className="absolute bottom-full right-0 mb-4 whitespace-nowrap bg-white text-hyundai-dark text-[10px] font-black px-4 py-2 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="tracking-widest uppercase">TANYA PROMO HYUNDAI</span>
      </div>

      {/* Tombol Utama diarahkan ke Link Tracking Analytics */}
      <a
        href={SITE_CONFIG.WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-90 transition-all duration-500 group"
      >
        <i className="fab fa-whatsapp text-3xl group-hover:rotate-12 transition-transform"></i>
      </a>

      {/* Style khusus untuk mengatur kecepatan animasi pantulan agar lebih elegan */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
