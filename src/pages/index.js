

import fetcher from '@/util/api'

import HeroSection from "@/components/home/HeroSection";
import LatestMovies from '@/components/home/LatestMovies';
import Upcoming from '@/components/home/Popular';
import Popular from '@/components/home/Popular';
import TopRated from '@/components/home/TopRated';


export default function Home({ latest, nowPlaying, popular, topRated, upcoming }) {
 
  return (
    <main>
        <HeroSection latest={latest} />
        <LatestMovies latest={latest} />
        <TopRated topRated={topRated} />
        <Popular popular={popular}/>
     
            
    </main>
  )
}

export async function getServerSideProps() {
  const data = await fetcher("trending/movie/day?language=en-US")
  const data1 = await fetcher("/movie/now_playing?language=en-US&page=1")
  const data2 = await fetcher("movie/popular?language=en-US&page=1")
  const data3 = await fetcher("movie/top_rated?language=en-US&page=1")
  const data4 = await fetcher("/movie/upcoming?language=en-US&page=1")

  return {
    props: {
      latest: data,
      nowPlaying: data1,
      popular: data2,
      topRated: data3,
      upcoming: data4,
    },
  }
}
