import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from '@/components/cards/MovieCard'
import Link from 'next/link'

export default function LatestMovies({latest}) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    
                },
            },
        ],}
  return (
   <><h2 className='text-white font-bold text-2xl lg:text-4xl mx-4 my-2 lg:mx-36 lg:my-8'>Latest Movies</h2>
   <Slider
          {...settings}
          // className='p-1 m-1 md:p-5 md:m-5 lg:m-16 lg:p-5'
          className='mx-8 my-8 lg:mx-32 lg:my-10'
      >
          {latest.results.map((movie) => (
              <div
                  key={movie.id}
              >
                  <Link href={`/movie/${movie.id}`}>
                      <MovieCard {...movie} />
                  </Link>
              </div>
          ))}
      </Slider></>
       
     
  )
}
