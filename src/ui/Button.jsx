import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-lg flex items-center gap-2 transition-colors";
  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-300",
    secondary: "bg-black text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};