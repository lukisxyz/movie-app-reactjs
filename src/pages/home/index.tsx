import MovieCard from "@/components/derived/card-movie";
import Dropdown from "@/components/derived/dropdown";
import SkeletonCardMovie from "@/components/derived/skeleton";
import { MovieListQuery } from "@/data/movie.queries"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function HomePage() {
    const [search, setSearch] = useState<string>('');
    const [movieType, setMovieTap] = useState<"movie" |"series" |"episode">('movie');
    const [year, setYear] = useState<string>('2024');

    const { data, isLoading, refetch } = useQuery(MovieListQuery({
        search: search || '',
        page: 0,
        years: year,
        type: movieType,
    }));

    useEffect(() => {
        if (search !== '') refetch();
    }, [year]);

    const handleChangeMovieType = (v: "movie" |"series" |"episode") => {
        setMovieTap(v);
        refetch();
    }

    return (<div className="max-w-screen-md mx-auto w-full mt-16 p-4">
        <div className="flex flex-end my-8">
        </div>
        <div className="flex gap-4">
            <label htmlFor="default-search" className="mb-2 text-md font-medium text-gray-900 sr-only">Search Movie</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" onChange={(e) => {
                    setSearch(e.target.value)
                }} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        refetch();
                    }
                }} className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search movie using title" required />
                <button type="button" onClick={() => refetch()} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base px-4 py-2">Search</button>
            </div>
            <input className="block w-24 p-3 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 flex-shrink-0" type="number" min="1900" max="2099" step="1" value={year} onChange={(e) => setYear(e.target.value)} />
            <Dropdown data={[
                {
                    label: 'Movie',
                    value: 'movie'
                },
                {
                    label: 'Series',
                    value: 'series'
                },
                {
                    label: 'Episode',
                    value: 'episode'
                },
            ]} callback={handleChangeMovieType} />
        </div>
        <br />
        <br />
        {
            isLoading ?
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <SkeletonCardMovie />
                    <SkeletonCardMovie />
                    <SkeletonCardMovie />
                    <SkeletonCardMovie />
                    <SkeletonCardMovie />
                    <SkeletonCardMovie />
                </ul> :
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        data?.Search.map(v => (<li key={v.imdbID}><MovieCard {...v} /></li>))
                    }
                </ul>
        }
    </div>);
}