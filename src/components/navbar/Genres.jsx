import React from 'react'
import { genres } from '@/util/genres'
import Link from 'next/link'

export default function Genres() {
  return (
    <div className='  font-atkinson border p-2 shadow-md rounded-lg '>
    <ul className='max-h-[300px] py-2 first:pt-0 z-60 last:pb-0 overflow-y-auto'>
        {genres.map((genre) => (
                <Link href={`/genres/${genre.name}`}  key={genre.id}>
                <li
                    className=' py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700'
                   
                >
                    {genre.name}
                </li>
            </Link>
        ))}
    
        
    </ul>
</div>
  )
}
