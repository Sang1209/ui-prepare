import React from 'react';

interface ButtonProps {
  children: React.ReactNode,
  className?: string
}

function Button({children, className}: ButtonProps) {
  return (
    <button className={`rounded-full font-HelveticaBold text-base text-primary px-4 py-2 min-w-24 cursor-pointer border border-primary select-none hover:bg-primary/10 transition duration-300 ${className}`}>
      {children}
    </button>
  );
}

export default Button;