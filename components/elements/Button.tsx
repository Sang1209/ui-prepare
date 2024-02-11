import React from 'react';
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  type?: "submit" | "button" | "reset",
  href?: string
}

function Button({children, className, type, href}: ButtonProps) {
  if (href) {
    return (
      <button
        className={`text-gray-900 text-base font-HelveticaBold bg-white border border-dark-0/20 focus:outline-none hover:bg-dark-0/20 rounded-full px-4 py-2 min-w-24 customTransition dark:bg-dark-300 dark:text-gray-300 dark:hover:bg-dark-100 dark:hover:border-dark-600 ${className}`}
        type={type || "button"}>
        <Link href={href}>
          {children}
        </Link>
      </button>
  );
  }
  return (
    <button
      className={`text-gray-900 text-base font-HelveticaBold bg-white border border-dark-0/20 focus:outline-none hover:bg-dark-0/20 rounded-full px-4 py-2 min-w-24 customTransition dark:bg-dark-300 dark:text-gray-300 dark:hover:bg-dark-100 dark:hover:border-dark-600 ${className}`}
      type={type || "button"}>
      {children}
    </button>
  );
}

export default Button;