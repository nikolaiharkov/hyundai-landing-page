"use client";

import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-28 px-8">
      <div className="flex flex-col items-center text-center">
        <div className="mb-10 opacity-80">
           <img
            src={SITE_CONFIG.LOGO_PATH}
            alt="Hyundai Logo"
            className="h-10 w-auto object-contain mx-auto"
          />
        </div>

        <div className="space-y-5 mb-12">
          <div className="text-[10px] font-black text-[#002c5f] uppercase tracking-[0.3em]">
            {SITE_CONFIG.DEALER_NAME}
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-[260px] mx-auto font-medium">
            Jl. Teuku Nyak Arief No.14, Grogol Selatan, Kec. Kebayoran Lama, Jakarta Selatan
          </p>
        </div>

        {/* Copyright & Developer Info */}
        <div className="space-y-3">
          <div className="text-[10px] text-slate-500 font-bold tracking-tight">
            &copy; {currentYear} <span className="text-[#002c5f]">{SITE_CONFIG.DOMAIN}</span>
          </div>
          <div className="text-[9px] text-slate-400 font-medium tracking-wide">
            Developed by{" "}
            <a
              href={SITE_CONFIG.DEVELOPER_URL}
              target="_blank"
              className="text-[#00aad2] hover:underline font-extrabold"
            >
              {SITE_CONFIG.DEVELOPER_NAME}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
