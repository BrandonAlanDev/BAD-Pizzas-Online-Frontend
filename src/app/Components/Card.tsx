'use client';
import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  botones?: React.ReactNode;
  primary: boolean;
  text: string;
  onClick: () => void;
}

export default function Card({ icon, primary, text, botones, onClick}: CardProps) {
  const clase = primary
    ? "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] text-white"
    : "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto text-black";

  return (
    <div className='flex flex-col items-center justify-around border-2 p-2 w-[275px] rounded-2xl gap-5' onClick={onClick}>
        {icon && <div className="flex select-none">{icon}</div>}
        <p className='select-none'>{text}</p>
        {botones && <div className="flex flex-row flex-wrap gap-3 items-end justify-end w-full">{botones}</div>}
    </div>
  );
}
