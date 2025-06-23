
import React from "react";

export const Button = ({ children, onClick, className = "", variant = "default", size = "md" }) => {
  const base = "px-4 py-2 rounded text-white";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

