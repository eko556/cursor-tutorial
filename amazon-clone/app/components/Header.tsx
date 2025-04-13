'use client';

import Image from 'next/image';
import { Search, ShoppingCart, Menu, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Upper Header */}
      <div className="flex items-center bg-[#131921] p-2 flex-grow">
        {/* Logo */}
        <Link href="/" className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <div className="flex items-center mx-2">
            <Image
              src="/amazon-logo-white.png"
              alt="Amazon Logo"
              width={97}
              height={30}
              className="object-contain cursor-pointer"
            />
            <span className="text-white text-xs">.co.jp</span>
          </div>
        </Link>

        {/* Location */}
        <div className="hidden sm:flex items-center text-white hover:cursor-pointer mx-4">
          <MapPin className="h-4 w-4" />
          <div className="ml-1">
            <p className="text-xs text-gray-300">お届け先</p>
            <p className="text-sm font-bold">日本</p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden sm:flex flex-grow h-10 rounded-md overflow-hidden">
          <select className="px-2 bg-[#f3f3f3] text-sm text-gray-700 border-none outline-none cursor-pointer hover:bg-[#dadada]">
            <option>すべて</option>
          </select>
          <input 
            type="text" 
            className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4" 
            placeholder="検索 Amazon.co.jp"
          />
          <button className="w-12 bg-[#febd69] hover:bg-[#f3a847] flex items-center justify-center">
            <Search className="h-5 w-5 text-[#131921]" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center mx-6 space-x-6 whitespace-nowrap text-white">
          <div className="link hidden sm:inline-block">
            <p className="text-xs">こんにちは</p>
            <p className="font-extrabold md:text-sm">アカウント＆リスト</p>
          </div>

          <div className="link hidden sm:inline-block">
            <p className="text-xs">返品も</p>
            <p className="font-extrabold md:text-sm">注文履歴</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-[#febd69] text-black font-bold rounded-full text-center text-xs">
              0
            </span>
            <ShoppingCart className="h-8 w-8" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ml-1">カート</p>
          </div>
        </div>
      </div>

      {/* Lower Header */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-[#232f3e] text-white text-sm overflow-x-auto">
        <p className="link flex items-center font-bold">
          <Menu className="h-6 w-6 mr-1" />
          すべて
        </p>
        <p className="link whitespace-nowrap">タイムセール</p>
        <p className="link whitespace-nowrap">プライム</p>
        <p className="link whitespace-nowrap">ランキング</p>
        <p className="link whitespace-nowrap">新着商品</p>
        <p className="link whitespace-nowrap">AmazonBasics</p>
        <p className="link whitespace-nowrap">ギフト券</p>
        <p className="link whitespace-nowrap">本</p>
        <p className="link whitespace-nowrap">DVD</p>
        <p className="link whitespace-nowrap">家電＆カメラ</p>
        <p className="link whitespace-nowrap">PCソフト</p>
        <p className="link whitespace-nowrap">ホーム＆キッチン</p>
      </div>
    </header>
  );
} 