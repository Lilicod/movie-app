import Link from "next/link"
import React from "react"
import fetcher from "@/util/api"
import MovieCard from "@/components/cards/MovieCard"

export default function Movies({ nowPlaying, popular, topRated, upcoming }) {
  const options = ["Top Rated", "Popular", "Now Playing", "Upcoming"]
  return (
    <div className="container mx-auto p-4 text-white font-bold">
      <ul className="flex justify-center space-x-4">
  {options.map((option) => (
    <li
      key={option}
      className="flex flex-row mt-10 ml-10 hover:text-purple text-gray-400 active text-base"
    >
      <Link href={`/category/${option.toLowerCase().replace(/\s+/g, "_")}`}>
        {option}
      </Link>
    </li>
  ))}
 
</ul>
      <h1 className="text-3xl m-10">Now Playing</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 m-0 lg:m-20">
        {nowPlaying.results.map((movie) => (
          <>
            <Link href={`/movie/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </>
        ))}
      </div>

      <h1 className="text-3xl m-10">Popular</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 m-0 lg:m-20">
        {popular.results.map((movie) => (
          <>
             <Link href={`/movie/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </>
        ))}
      </div>

      <h1 className="text-3xl m-10">Top Rated</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 m-0 lg:m-20">
        {topRated.results.map((movie) => (
          <>
              <Link href={`/movie/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </>
        ))}
      </div>

      <h1 className="text-3xl m-10">Upcoming</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 m-0 lg:m-20">
        {upcoming.results.map((movie) => (
          <>
            <Link href={`/movie/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data1 = await fetcher("/movie/now_playing?language=en-US&page=1")
  const data2 = await fetcher("movie/popular?language=en-US&page=1")
  const data3 = await fetcher("movie/top_rated?language=en-US&page=1")
  const data4 = await fetcher("/movie/upcoming?language=en-US&page=1")

  return {
    props: {
      nowPlaying: data1,
      popular: data2,
      topRated: data3,
      upcoming: data4,
    },
  }
}
