import { MovieType } from "@/schemas/movie.schema";
import { generatePrice } from "@/utils/price.util";

export default function MovieCard(props: MovieType) {
    const price = generatePrice(props.Year, props.Type);
    return (
        <a className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition" href="#">
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={`${props.Poster}`} alt={props.Title} />
            </div>
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                    {props.Title}
                </h3>
                <p className="mt-1 text-gray-700">
                    {props.Year}
                </p>
                <p className="mt-1 text-gray-500">
                    {props.Type}
                </p>
                <p className="mt-1 text-lg text-gray-700">
                    {price}
                </p>
            </div>
        </a>)
}