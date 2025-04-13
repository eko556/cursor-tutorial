'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  image: string;
  prime?: boolean;
}

export default function ProductCard({
  title,
  price,
  rating,
  description,
  category,
  image,
  prime = false,
}: ProductCardProps) {
  return (
    <div className="relative flex flex-col bg-white p-6 z-30 rounded-sm transition-transform duration-200 ease-out hover:scale-[1.02]">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

      <div className="relative h-52 mb-4">
        <Image
          src={image}
          fill
          alt={title}
          className="object-contain"
        />
      </div>

      <h4 className="mb-2 line-clamp-2 min-h-[2.5rem] text-sm font-medium">{title}</h4>

      <div className="flex mb-2">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <Star 
              key={i} 
              className="h-4 w-4" 
              fill="#F59E0B"
              stroke="none"
            />
          ))}
      </div>

      <p className="text-xs mb-2 line-clamp-2 text-gray-500">{description}</p>

      <div className="mb-4">
        <p className="text-lg font-semibold">
          ¥{price.toLocaleString()}
        </p>
        {prime && (
          <div className="flex items-center space-x-2 mt-1">
            <Image
              src="/prime-logo.png"
              alt="Prime Logo"
              width={48}
              height={16}
              className="w-12"
            />
            <p className="text-xs text-gray-500">Prime会員は無料配送</p>
          </div>
        )}
      </div>

      <button className="mt-auto button bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] rounded-full py-2 px-4 text-sm font-medium text-[#0F1111] focus:outline-none focus:ring-2 focus:ring-[#fcd200] active:bg-[#f0b800]">
        カートに追加
      </button>
    </div>
  );
} 