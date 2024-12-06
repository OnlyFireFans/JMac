import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a 
      href={href} 
      className={`text-gray-700 hover:text-gray-900 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}