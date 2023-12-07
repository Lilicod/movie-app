import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetcher from "@/util/api";
import { HiMiniPlay } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import MovieCard from "@/components/cards/MovieCard";

export default function SingleMovie({ movieDetails }) {
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]); // State for production companies
  const [actors, setActors] = useState([]); // State for actors
  const [relatedMovies, setRelatedMovies] = useState([]); // State for related movies
  const [trailer, setTrailer] = useState(""); // State for the trailer URL

  const movieId = movieDetails.id;

  useEffect(() => {
    async function fetchGenres() {
      try {
        const genresData = await fetcher(`movie/${movieId}?language=en-US`);
        setGenres(genresData.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    async function fetchProductionCompanies() {
      try {
        const companiesData = await fetcher(`movie/${movieId}?language=en-US`);
        setProductionCompanies(companiesData.production_companies);
      } catch (error) {
        console.error("Error fetching production companies:", error);
      }
    }

    async function fetchActors() {
      try {
        const actorsData = await fetcher(`movie/${movieId}/credits`);
        const topActors = actorsData.cast.slice(0, 5);
        setActors(topActors);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    }

    async function fetchRelatedMovies() {
      try {
        const relatedMoviesData = await fetcher(
          `movie/${movieId}/recommendations`
        );
        // Assuming relatedMoviesData contains an array of related movies, you can extract the first 5 here.
        const topRelatedMovies = relatedMoviesData.results.slice(0, 5);
        setRelatedMovies(topRelatedMovies);
      } catch (error) {
        console.error("Error fetching related movies:", error);
      }
    }

    async function fetchTrailer() {
      try {
        const trailerData = await fetcher(`movie/${movieId}/videos`);
        // Assuming trailerData contains an array of videos, you can find the trailer here.
        const trailerVideo = trailerData.results.find(
          (video) => video.type === "Trailer"
        );
        if (trailerVideo) {
          setTrailer(`https://www.youtube.com/watch?v=${trailerVideo.key}`);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    }

    fetchGenres();
    fetchProductionCompanies();
    fetchActors();
    fetchRelatedMovies();
    fetchTrailer();
  }, [movieId]);

  const genre = genres.slice(0, 1).shift();

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
    <div>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
        }}
        className="h-[45vh] md:h-[80vh] bg-auto bg-no-repeat md:bg-cover md:bg-no-repeat relative "
      >
        <div className="flex flex-col items-center justify-center gap-y-4 md:gap-y-20 pt-20 lg:pt-40 text-white absolute w-full h-[45vh] md:h-[80vh] bg-gradient-to-t from-darkBlue ">
          <div className="bg-gray-400 rounded-full h-14 w-14 lg:h-24 lg:w-24 flex items-center justify-center">
            <Link href={trailer} target="_blank" rel="noopener noreferrer">
              <button className="z-50 text-xl lg:text-4xl bg-gradient-to-r from-purple to-pink shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 rounded-full p-3 lg:p-4">
                <HiMiniPlay />
              </button>
            </Link>
          </div>
          <h2 className="text-xl lg:text-6xl font-bold"> {movieDetails.title}</h2>
          <div className="flex flex-row gap-4 ">
            {/* <button className="shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 bg-blue rounded-lg py-2 px-4">{genre.name} </button> */}
            <button className="shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 bg-purple rounded-lg py-2 px-4">
              {movieDetails.runtime}
            </button>
            <button className="shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 flex items-center justify-center gap-2 bg-pink rounded-lg py-2 px-4">
              {movieDetails.vote_average}
              <FaStar />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 lg:flex lg:flex-row lg:gap-x-2 px-0 py-0 lg:px-40 lg:py-10">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={`${movieDetails.title} Poster`}
            className="hidden lg:block lg:w-[800px] rounded-xl"
          />
        </div>

        <div className="text-sm lg:text-lg flex flex-col gap-y-8 lg:gap-y-8 items-center pt-6 px-10 lg:pt-6 lg:px-16">

          <div className="flex flex-row gap-x-12 lg:gap-x-32 text-white">
        <p className="flex flex-col items-center">Director name <span className="text-gray-400">name</span></p>
          <p className="flex flex-col items-center">Release date <span className="text-gray-400">{movieDetails.release_date}</span>  </p>
          <p className="flex flex-col items-center"> Languages <span className="text-gray-400">{movieDetails.original_language} </span></p>
          </div>

          <div className="bg-darkBlue text-gray-300 rounded-xl p-6">
            <p>Overview of the movie : {movieDetails.overview} </p>
          </div>

          <div>
          <p className="text-white">
            Production Companies :{" "}
            <span className="text-gray-300">

            {productionCompanies.map((company) => company.name).join(", ")}
            <div className="flex flex-wrap gap-x-8 justify-cneter items-center p-8">
            {productionCompanies.map((company) => (

                <img
                key={company.id}
                  src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                  alt="company"
                  className="w-[40px] lg:w-[60px]"
                />
                ))}
                </div>
            </span>
          </p>
          </div>

        </div>

      </div>

      <div className="px-6 lg:px-40 text-white space-y-8"> 
        <h2 className="text-2xl lg:text-4xl uppercase font-bold">Cast</h2>
        <div className="flex flex-row gap-x-4"> 
          {actors.map((actor) =>  <div key={actor.id} className="flex flex-col items-center"><img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt="actor"
            className="w-[150px] rounded-xl" /><p className="hidden lg:block">{actor.name}</p></div>
                )}
                </div>
     
          <h2 className="text-2xl lg:text-4xl uppercase font-bold">
            Related Movies
          </h2>
          <div className="flex flex-row gap-x-0 lg:gap-x-4 pb-16"> 
          {relatedMovies.map((movie) => (
              <div
                  key={movie.id}
              >
                  <Link href={`/movie/${movie.id}`}>
                      <MovieCard {...movie} />
                  </Link>
              </div>
          ))}
                </div>
           
      </div>

    </div>
  );
}

export async function getServerSideProps(context) {
  const { movieId } = context.query;
  const data = await fetcher(`movie/${movieId}?language=en-US`);

  return {
    props: {
      movieDetails: data,
    },
  };
}
