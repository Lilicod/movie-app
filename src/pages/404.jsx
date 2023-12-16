import Image from 'next/image'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div  className='text-white h-[100vh] flex flex-col justify-center items-center'>
        <h1 className='font-spartan font-bold text-xl lg:text-5xl'>Page Not Found</h1>
        <Image src="/error.svg" height={200} width={200} 
        className='w-56 lg:w-96 flex justify-center items-center'
        />
    </div>
  )
}
