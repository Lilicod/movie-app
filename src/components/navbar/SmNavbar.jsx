import Link from 'next/link';
import React from 'react'
import { GoHome } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";

export default function SmNavbar() {
  return (
    <nav className='lg:hidden sticky bottom-0 flex flex-row text-gray-400 justify-evenly bg-navbar p-2 rounded-t-3xl'>
        <Link href="/" className='flex flex-col justify-center items-center hover:text-white'>
          <GoHome className='text-xl' />
            <p>Home</p>
        </Link>
        <Link href="/"  className='flex flex-col justify-center items-center hover:text-white'>
        <PiTelevisionSimpleBold className='text-xl'/>
            <p>Tv shows</p>
        </Link>
        <Link href="/"  className='flex flex-col justify-center items-center hover:text-white'>
        <RiMovie2Line className='text-xl'/>
            <p>Movies</p>
        </Link>
    </nav>
  )
}
