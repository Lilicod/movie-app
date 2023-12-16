import Link from 'next/link';
import React, { useState } from 'react'
import SearchBar from '../searchbar/SearchBar';
import Genres from './Genres';
import { MdArrowDropDown } from "react-icons/md";

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
                <Link href="/movies">
                <li className='hover:text-pink'>All Movies</li>
                </Link>
                <li className='hover:text-pink'>
                                    <div className='group inline-block relative flex justify-center items-center flex-col space-y-[340px]'>
                                        <button className='block flex justify-center items-center '>
                                           Genres
                                            <MdArrowDropDown className='text-xl' />
                                        </button>

                                        <div className='absolute hidden bg-white rounded-lg z-50 group-hover:block '>
                                            <Genres />
                                        </div>
                                    </div>
                                </li>
            </ul>
        </div>
        <div className='flex flex-col'>

       <SearchBar/>
        </div>
    </nav>
  )
}
