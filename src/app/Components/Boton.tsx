'use client';
import React from 'react';

interface BotonProps {
  icon?: React.ReactNode;
  primary: boolean;
  text: string;
  onClick: () => void;
}

export default function Boton({ icon, primary, text, onClick }: BotonProps) {
  const clase = primary
    ? "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] text-white"
    : "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto text-black";

  return (
    <button className={clase} onClick={onClick}>
      <span className="flex items-center gap-2">
        {icon && <span className="inline-flex">{icon}</span>}
        {text}
      </span>
    </button>
  );
}
