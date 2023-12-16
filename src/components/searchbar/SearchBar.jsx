import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/router';

export default function SearchBar() {
    const router = useRouter()

    async function handleSearch(e) {
        e.preventDefault()
        router.push(`/search?query=${e.target[0].value}`)
        e.target[0].value = ""
      }

  return (
    <div>
    <form className="flex" onSubmit={handleSearch}>
  
        <input className="pl-4 text-white focus:outline-none relative py-2 px-2 block w-40 bg-transparent border border-gray-500 rounded-full text-sm focus:border focus:border-pink disabled:opacity-50 disabled:pointer-events-none"  type="search"
                id="searchBar"
                name="searchBar"
                placeholder="Search..."/>
             
        <button type="submit">
    <FiSearch className=' mt-[1px] shadow-pink font-bold shadow-md p-2 text-white text-4xl bg-pink rounded-full'/>
        </button>

    </form>
    <div>           
</div>
</div>
  )
}
