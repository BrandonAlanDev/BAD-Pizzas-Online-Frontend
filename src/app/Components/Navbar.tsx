'use client';

import React from 'react';
import BotonJSX from './Boton';

interface NavbarProps {
    admin: boolean;
    user: string;
}

export default function Boton({ admin,user}: NavbarProps) {
    const logOut = ()=>{
        console.log("Salir");
    }
    return (
        <div className='w-full h-[70px] border-b-2 align-middle items-center px-2'>
            <div className='flex w-full h-full flex-row justify-between align-middle items-center'>
                <div className='gap-4 flex flex-row align-middle items-center'>
                    <p>Pizza Online</p>
                    {admin?
                        (
                        <>
                            <BotonJSX text='Inicio' onClick={logOut} primary={true} />
                            <BotonJSX text='Combos' onClick={logOut} primary={true} />
                            <BotonJSX text='Pizzas' onClick={logOut} primary={true} />
                            <BotonJSX text='Bebidas' onClick={logOut} primary={true} />
                        </>
                        )
                    :
                        (
                        <>
                            <BotonJSX text='Inicio' onClick={logOut} primary={true} />
                            <BotonJSX text='Combos' onClick={logOut} primary={true} />
                            <BotonJSX text='Pizzas' onClick={logOut} primary={true} />
                            <BotonJSX text='Bebidas' onClick={logOut} primary={true} />
                        </>
                        )
                    }
                </div>
                <div className='gap-4 flex flex-row align-middle items-center'>
                    {user.toLocaleUpperCase()}
                    <BotonJSX text='Salir' onClick={logOut} primary={false} />
                </div>
            </div>
        </div>
    );
}
