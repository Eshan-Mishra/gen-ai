import React from 'react';

interface PriceTagProps {
  originalPrice: number;
  discountedPrice: number;
}

export default function PriceTag({ originalPrice, discountedPrice }: PriceTagProps) {
  const discount = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-2xl font-bold text-purple-700">₹{discountedPrice}</span>
      <span className="text-lg text-gray-500 line-through">₹{originalPrice}</span>
      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
        {discount}% off
      </span>
    </div>
  );
}