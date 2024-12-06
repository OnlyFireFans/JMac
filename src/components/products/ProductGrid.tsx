import React from 'react';
import { ProductCard } from './ProductCard';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Mountain Sunrise",
    price: 89,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Ocean Waves",
    price: 75,
    image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Desert Dunes",
    price: 95,
    image: "https://images.unsplash.com/photo-1682686580024-580519d4b2d2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Forest Path",
    price: 82,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80"
  }
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SAMPLE_PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}