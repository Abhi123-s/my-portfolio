import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
