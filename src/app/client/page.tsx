'use client';
import React, { ReactNode } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Boton from "../Components/Boton";

export default function ClientPage() {
  return (
    <div className="w-full">
      <Navbar admin={false} user="Sergio"></Navbar>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Bienvenido a Pizza Online</h1>
        <p>Esta es la página pública accesible a todos los usuarios.</p>
        <Card
          icon={<img className="rounded-2xl w-[200px] hover:w-[250px] transition-all duration-200" src={'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2021/03/12/16575/2021031202544061e0e3f25c3041f849de6b510817fb34.jpg'}/>}
          primary={true}
          text={'asdas'}
          botones={<>
          
          <Boton text='Añadir al carrito'
            primary={false} 
            onClick={() => {
            window.alert('hiciste click')
            }}>  
          </Boton>
          </>}
          
          onClick={()=>{}}/>
      </div>
    </div>
  );
}