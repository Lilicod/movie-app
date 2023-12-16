import React, { useEffect, useState } from "react"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetcher from "@/util/api"
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import MovieCard from "../cards/MovieCard";

export default function HeroSection({latest}) {
    const [genres, setGenres] = useState([])
  const [productionCompanies, setProductionCompanies] = useState([]) // State for production companies
  const [trailer, setTrailer] = useState("") // State for the trailer URL

  
const movieId = latest.results.id
  useEffect(() => { 
    async function fetchGenres() {
      try {
        const genresData = await fetcher(`movie/${movieId}?language=en-US`)
        setGenres(genresData.genres)
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }

    async function fetchProductionCompanies() {
      try {
        const companiesData = await fetcher(`movie/${movieId}?language=en-US`)
        setProductionCompanies(companiesData.production_companies)
      } catch (error) {
        console.error("Error fetching production companies:", error)
      }
    }

    async function fetchTrailer() {
      try {
        const trailerData = await fetcher(`movie/${movieId}/videos`)
        // Assuming trailerData contains an array of videos, you can find the trailer here.
        const trailerVideo = trailerData.results.find(
          (video) => video.type === "Trailer",
        )
        if (trailerVideo) {
          setTrailer(`https://www.youtube.com/watch?v=${trailerVideo.key}`)
        }
      } catch (error) {
        console.error("Error fetching trailer:", error)
      }
    }

    fetchGenres()
    fetchProductionCompanies()
    fetchTrailer()
  }, [movieId])

    const settings = {
        fade: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    const settings2 = {
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        speed: 500
    };
  return (
    <>
    <div className="hidden lg:block">

    <Slider {...settings} className=' bg-white'>
            {latest.results.map((movie) => (
                <>
                    <div
                        key={movie.id}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                        }}
                        className='h-[90vh] bg-cover bg-center relative'
                    >
                        <div className='flex flex-col items-start justify-center text-white absolute w-full h-full bg-gradient-to-r from-darkBlue to-
    '>
                            <div className='space-y-4 w-1/2 ml-16'>
                            <h1 className="text-6xl font-bold ml-5 mb-3">{movie.title}</h1>
                <p className="text-lg text-gray-400 ml-5 mr-32 ">{movie.overview}</p>
                <div className="flex flex-row gap-x-4 ml-5 text-gray-300 text-lg ">

                <p className="">{movie.release_date}</p>
               <div className="rounded-full bg-white w-2 mt-3 h-2"></div>
                <p className="flex items-center justify-center gap-2">
                  {movie.vote_average}
                  <span className="text-yellow-400  pr-1"><FaStar /></span>
                </p>
                </div>
                <Link href={`/movie/${movie.id}`} >
           
                 <button className="my-8 mx-6 flex items-center justify-center gap-2 bg-gradient-to-r from-purple to-pink hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                   <p>Details</p>  <FaArrowRightLong />
                    </button>
                    </Link>
        
                            </div>
                           
                        </div>
                    </div>
                </>
            ))}
            
        </Slider>
    </div>

    <div className="block lg:hidden">
        <div className="flex items-center jestify-center gap-x-28 mt-8">
    <h2 className='text-white font-bold text-2xl lg:text-4xl mx-8  lg:mx-36 lg:my-8'>Trending</h2>
<Link href="/movies"><p className="text-gray-400">See All</p></Link>
        </div>
    <Slider
          {...settings2}
          className='mx-8 my-8 '
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
      </Slider>
    </div>
     </>
  )
}
