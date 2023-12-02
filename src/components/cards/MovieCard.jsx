import React from "react"

export default function MovieCard({ title, poster_path, vote_average }) {
  return (
<div className="mx-2 my-0 lg:mx-4 lg:my-4 ">
<img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} Poster`}
          className="object-cover rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-pink"
          // className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
        />
</div>


//      <div className="mx-2">
//       <a class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#">
//   <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
  // <img
  //         src={`https://image.tmdb.org/t/p/w500${poster_path}`}
  //         alt={`${title} Poster`}
  //         className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
  //       />
   
//   </div>
//   {/* <div class="p-4 md:p-5">
//     <h3 class="text-md font-bold text-gray-800 dark:text-white">
//     {title}
//     </h3>
//     <p class="mt-1 text-gray-500 dark:text-gray-400">
//     <span className="text-yellow-400 pr-1">&#9733;</span>
//     {vote_average}
//     </p>
//   </div> */}
// </a>
//      </div>
    
    
    
  )
}

  // <div
    //   className="bg-grey w-48 h-96 border-4 border-black"
     
    // >
    //   <div className="overflow-visible p-0">
        // <img
        //   src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        //   alt={`${title} Poster`}
        // />
    //   </div>
    //   <div className="text-small justify-between">
    //     <b>{title}</b>
    //     <p className="text-default-500">
    //       <span className="text-yellow-400 pr-1">&#9733;</span>
    //       {vote_average}
    //     </p>
    //   </div>
    // </div>