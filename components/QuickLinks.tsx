"use client";

import { SITE_CONFIG } from "@/lib/config";

export default function QuickLinks() {
  const links = [
    {
      title: "WhatsApp Konsultasi",
      subtitle: "Respon cepat via Brand Consultant",
      icon: "fab fa-whatsapp",
      url: SITE_CONFIG.WHATSAPP_LINK,
      bgColor: "bg-[#25D366]",
      textColor: "text-white"
    },
    {
      title: "Telepon Sales",
      subtitle: "Layanan panggilan suara 24/7",
      icon: "fas fa-phone-volume",
      url: `tel:${SITE_CONFIG.WHATSAPP_NUMBER}`,
      bgColor: "bg-[#002c5f]",
      textColor: "text-white"
    },
    {
      title: "Lokasi Showroom",
      subtitle: "Kunjungi Hyundai Mobil Indonesia",
      icon: "fas fa-map-marked-alt",
      url: SITE_CONFIG.SHOWROOM_MAPS_URL,
      bgColor: "bg-white",
      textColor: "text-slate-800",
      extraClass: "border border-slate-200"
    }
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target={link.url.startsWith('http') ? "_blank" : "_self"}
          className={`flex items-center gap-5 p-5 rounded-[2rem] shadow-lg ${link.bgColor} ${link.textColor} ${link.extraClass || ""}`}
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-black/5">
            <i className={`${link.icon} text-xl`}></i>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-widest uppercase opacity-60">{link.subtitle}</span>
            <span className="text-base font-black">{link.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
