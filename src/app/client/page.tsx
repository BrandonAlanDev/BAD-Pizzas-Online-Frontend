'use client';
import React from "react";
import Navbar from "../Components/Navbar";

export default function ClientPage() {
  return (
    <div className="w-full">
      <Navbar admin={false} user="Sergio"></Navbar>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Bienvenido a Pizza Online</h1>
        <p>Esta es la página pública accesible a todos los usuarios.</p>
      </div>
    </div>
  );
}