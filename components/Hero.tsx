"use client";

import { SITE_CONFIG } from "@/lib/config";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-slate-100">
      <div className="flex flex-col items-center pt-16 pb-20 px-8 text-center">

        {/* Logo Hyundai Optimized */}
        <div className="mb-14 relative h-14 w-48">
          <Image
            src={SITE_CONFIG.LOGO_PATH}
            alt="Hyundai Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Profil Photo Optimized */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-hyundai-blue/20 animate-pulse scale-110"></div>
          <div className="relative w-40 h-40 rounded-full border-4 border-slate-50 shadow-xl overflow-hidden bg-slate-100 ring-4 ring-slate-50">
            <Image
              src={SITE_CONFIG.SALES_PHOTO_PATH}
              alt={SITE_CONFIG.SALES_NAME}
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
        </div>

        {/* Identitas */}
        <div className="space-y-3">
          <h1 className="text-3xl font-black font-heading text-[#002c5f] tracking-tight uppercase">
            {SITE_CONFIG.SALES_NAME}
          </h1>
          <div className="inline-block px-5 py-1.5 rounded-full bg-[#002c5f] text-white text-[10px] font-black tracking-[0.25em] uppercase shadow-lg">
            {SITE_CONFIG.SALES_TITLE}
          </div>
        </div>

        {/* Headline & Subhead */}
        <div className="mt-14 w-full max-w-[320px]">
          <h2 className="text-[#002c5f] text-2xl font-black font-heading leading-tight mb-4 tracking-tighter">
            {SITE_CONFIG.HERO_HEADLINE}
          </h2>
          <p className="text-slate-500 text-[14px] leading-relaxed mb-10 font-medium">
            {SITE_CONFIG.HERO_SUBHEAD}
          </p>

          <a
            href={SITE_CONFIG.WHATSAPP_LINK}
            target="_blank"
            className="flex items-center justify-center gap-3 w-full py-5 bg-[#002c5f] text-white rounded-[1.5rem] font-black text-xs tracking-[0.15em] shadow-xl hover:bg-[#001c3d] transition-colors"
          >
            <span>HUBUNGI SEKARANG</span>
            <i className="fas fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
