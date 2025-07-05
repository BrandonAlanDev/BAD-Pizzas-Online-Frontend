'use client';
import React from 'react';
import {Item} from '../api/types'

interface CarritoProps {
  icon?: React.ReactNode;
  name: string;
  items?: Item[];
}

export default function Card({ icon, name, items}: CarritoProps) {
  return (
    <div className='flex flex-col items-center sm:border-r-4 p-2 w-full sm:w-[300px] min-h-[100vh] sm:min-h-full bg-gray-500 bg-opacity-20 gap-5'>
        {icon && (
            <div className="flex select-none gap-2 items-center">
                {icon}
                <span>{name}</span>
            </div>
        )}

        {items && items.length > 0 ? (
        <ul className="w-full list-disc list-inside">
            {items.map((item, index) => (
            <li key={index}>
                {item.nombreItem} - ${item.price}
            </li>
            ))}
        </ul>
        ) : (
            <p className="text-sm">No hay ítems en el carrito.</p>
        )}
    </div>
  );
}