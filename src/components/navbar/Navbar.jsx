import Link from 'next/link';
import React from 'react'
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className=' z-50 flex flex-row justify-evenly items-center gap-16 md:gap-96 p-4 lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:gap-96 lg:p-4 font-semibold text-gray-400'>
        <div className='font-atkinson text-white text-3xl'>
            <Link href="/">
            <p>Ciné<span className='text-pink'>pop</span></p>
            
            </Link>
        </div>
        <div className='hidden lg:flex'>
            <ul className='hidden lg:flex  lg:gap-x-8'>
                <Link href="/">
                    
                <li className='hover:text-pink'>Home</li>
                </Link>
                {/* <Link href="/">
                    
                <li className='hover:text-pink'>Tv Show</li>
                </Link> */}
                <Link href="/movies">
                <li className='hover:text-pink'>All Movies</li>
                    
                </Link>
            </ul>
        </div>
        
        <div>
            
            <div >

        <FiSearch className='absolute mt-[1px] shadow-pink font-bold shadow-md p-2 text-white text-4xl bg-pink rounded-full'/>
        <input type="text" className="pl-10 relative py-2 px-2 block w-40 bg-transparent border border-gray-500 rounded-full text-sm focus:border focus:border-pink disabled:opacity-50 disabled:pointer-events-none " placeholder="Search"/>
            </div>
        </div>
    </nav>
  )
}
