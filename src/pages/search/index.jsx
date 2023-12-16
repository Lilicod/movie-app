import React, { useEffect, useState } from "react"
import fetcher from "@/util/api"
import MovieCard from "@/components/cards/MovieCard"
import Link from "next/link"

export default function Search({searchResults}) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-white m-4 lg:m-10 font-spartan text-xl lg:text-3xl lg:ml-20">Search Results</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 m-0 lg:m-20">
        {searchResults.map((movie) => (
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


export async function getServerSideProps(context) {
    const { query } = context.query;
    const data = await  fetcher(`/search/movie?query=${query}`)
  
    return {
      props: {
        searchResults: data.results,
      },
    };
  }