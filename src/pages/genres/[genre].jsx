import React, { useEffect, useState } from "react";

import Link from "next/link"
import MovieCard from "@/components/cards/MovieCard";
import fetcher from "@/util/api";

export default function GenreCategory({ genreMovies }) {

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 m-20">
        {genreMovies.map((movie) => (
          <div key={movie.id}>
            <Link href={`../movie/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { genre } = context.query;
  const data = await fetcher(`discover/movie?with_genres=${genre}&language=en-US&page=1`);

  return {
    props: {
      genreMovies: data.results,
    },
  };
}