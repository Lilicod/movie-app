import MovieCard from "@/components/cards/MovieCard"
import fetcher from "@/util/api"
import Link from "next/link"

export default function Category({ movieCategory, category }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2 mt-5 m-10">{category}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 m-20">
        {movieCategory.results.map((movie) => (
          <div key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { category } = context.query
  const data = await fetcher(`movie/${category}?language=en-US&page=1`)

  return {
    props: {
      movieCategory: data,
      category: category.replace(/_/g, " ").toUpperCase(),
    },
  }
}
