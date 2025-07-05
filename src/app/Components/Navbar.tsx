'use client';

import React from 'react';
import BotonJSX from './Boton';

interface NavbarProps {
    admin: boolean;
    user: string;
}

interface IconJSXProps {
  path: string;
}
function IconJSX({path}:IconJSXProps){
    return(
        <>
            <img src={path}  width={20} height={20} />
        </>
    );
} 

export default function Boton({ admin,user}: NavbarProps) {
    const logOut = ()=>{
        console.log("Salir");
    }
    return (
        <div className='w-full h-[70px] border-b-4 align-middle items-center px-2'>
            <div className='flex w-full h-full flex-row justify-between align-middle items-center'>
                <div className='gap-4 flex flex-row align-middle items-center'>
                    {admin?
                        (
                        <>
                            <BotonJSX text='Pizza Online' onClick={logOut} primary={false} />
                            <BotonJSX icon={<IconJSX path='/img/pizza.svg'/>} text='Combos' onClick={logOut} primary={true} />
                            <BotonJSX icon={<IconJSX path='/img/pizza-part.svg'/>} text='Pizzas' onClick={logOut} primary={true} />
                            <BotonJSX icon={<IconJSX path='/img/juice.svg'/>} text='Bebidas' onClick={logOut} primary={true} />
                            <BotonJSX icon={<IconJSX path='/img/beer.svg'/>} text='Bebidas Alcoholicas' onClick={logOut} primary={true} />
                        </>
                        )
                    :
                        (
                        <>
                            <BotonJSX text='Pizza Online' onClick={logOut} primary={false} />
                            <BotonJSX icon={<IconJSX path='/img/pizza.svg'/>} text='Combos' onClick={logOut} primary={true} />
                            <BotonJSX icon={<IconJSX path='/img/pizza-part.svg'/>} text='Pizzas' onClick={logOut} primary={true} />
                            <BotonJSX icon={<IconJSX path='/img/juice.svg'/>} text='Bebidas' onClick={logOut} primary={true} />
                            <BotonJSX icon={<IconJSX path='/img/beer.svg'/>} text='Bebidas Alcoholicas' onClick={logOut} primary={true} />
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
