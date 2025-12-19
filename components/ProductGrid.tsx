"use client";

import { PRODUCTS } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="w-full">
      {/* Layout: Single Column
        Alasan: Pada lebar container max-w-md, satu kolom memberikan
        visual yang lebih megah dan fokus pada detail setiap unit mobil.
      */}
      <div className="flex flex-col gap-10">
        {PRODUCTS.map((item, index) => (
          <div
            key={item.id}
            className="animate-fade-up"
            style={{
              animationDelay: `${0.15 * (index + 1)}s`,
              animationFillMode: 'both'
            }}
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>

      {/* State jika data produk kosong (Fallback) */}
      {PRODUCTS.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <i className="fas fa-car-side text-2xl text-slate-200"></i>
          </div>
          <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">
            Katalog Sedang Diperbarui
          </p>
        </div>
      )}
    </div>
  );
}
