import React from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">Multiple sizes available</p>
        </div>
        <p className="text-lg font-medium text-gray-900">${price}</p>
      </div>
      <button className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}