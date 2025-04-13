'use client';

import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      
      {/* Main Content - Add padding-top to account for fixed header */}
      <main className="pt-[110px]">
        {/* Banner */}
        <div className="relative">
          <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
          <img
            src="/amazon-banner.jpg"
            alt="Amazon Banner"
            className="w-full object-cover"
            style={{ maxHeight: '600px' }}
          />
        </div>

        {/* Product Feed */}
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 -mt-20 relative z-30">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
