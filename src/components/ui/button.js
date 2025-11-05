import React from "react";

export function Button({ children, className = "", href, onClick, ...props }) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium shadow-md transition-transform transform focus:outline-none";
  if (href) {
    return (
      <a
        href={href}
        {...props}
        className={`${base} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button {...props} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
