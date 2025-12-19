"use client";

import { SITE_CONFIG } from "@/lib/config";
import { Product } from "@/lib/products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-700 flex flex-col">
      {/* Container Visual Produk Optimized */}
      <div className="relative aspect-[4/3] bg-slate-50/50 flex items-center justify-center p-8 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-1000 ease-out"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {/* Label Kategori */}
        <div className="absolute top-6 left-6">
          <span className="bg-hyundai-dark text-white text-[9px] font-black px-3.5 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-lg">
            {product.category}
          </span>
        </div>
      </div>

      {/* Konten Informasi Produk */}
      <div className="p-8 pt-2 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-xl font-black font-heading text-hyundai-dark leading-tight tracking-tight uppercase">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="h-0.5 w-4 bg-hyundai-blue rounded-full"></span>
            <p className="text-hyundai-blue font-black text-sm tracking-wide">
              {product.price}
            </p>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-auto">
          <a
            href={SITE_CONFIG.WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover-effect flex items-center justify-center gap-3 w-full py-4.5 bg-slate-900 hover:bg-hyundai-dark text-white rounded-[1.25rem] text-[11px] font-black tracking-[0.15em] shadow-lg"
            style={{ padding: '1.1rem' }}
          >
            <i className="fab fa-whatsapp text-base text-[#25D366]"></i>
            <span>INFO PROMO UNIT</span>
          </a>
        </div>
      </div>
    </div>
  );
}
