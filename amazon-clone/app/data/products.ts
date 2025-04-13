export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  image: string;
  prime: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: "IPSA イプサ ザ・タイムR アクア",
    price: 7700,
    rating: 4,
    description: "【ベスコス受賞！2本5役の時短ケア】Nオーガニックのスキンケア。肌にやさしい化粧水で、しっとりとした潤いを与えます。",
    category: "ビューティー",
    image: "/products/ipsa-1.jpg",
    prime: true
  },
  {
    id: 2,
    title: "N organic Plenum スキンケアセット",
    price: 12800,
    rating: 5,
    description: "オーガニック認証取得の化粧水と美容液のセット。天然由来成分100%で肌に優しい。",
    category: "ビューティー",
    image: "/products/norganic-1.jpg",
    prime: true
  },
  {
    id: 3,
    title: "N organic Bright 美白スキンケアセット",
    price: 15800,
    rating: 4,
    description: "美白有効成分配合。シミ・そばかすを防ぎ、透明感のある肌へ。オーガニック認証取得。",
    category: "ビューティー",
    image: "/products/norganic-2.jpg",
    prime: true
  }
]; 