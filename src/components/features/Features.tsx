import React from 'react';
import { Shield, Truck, Award, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Museum-grade materials and archival inks ensure your prints last a lifetime"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $150. Fast and secure delivery worldwide"
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Each print is carefully inspected and handled by our master printers"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund"
  }
];

export function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="h-8 w-8 mx-auto text-gray-900" />
              <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}