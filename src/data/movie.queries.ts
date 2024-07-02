import {
	ListOfMovieSchema,
	type ListOfMovieType,
} from "@/schemas/movie.schema";
import wretch from "wretch";
import z from "zod";

const key = import.meta.env.VITE_OMDB_API_KEY;

export const SearchMovieSchema = z.object({
	search: z.string().min(1),
	type: z.enum(["movie", "series", "episode"]).optional(),
	years: z.string().optional(),
	page: z.number().int().min(1).max(100).default(1),
});

export type SearchMovieType = z.infer<typeof SearchMovieSchema>;

export function MovieListQuery(option: SearchMovieType) {
	return {
		queryKey: ["movie", "list"],
		async queryFn() {
			const res: ListOfMovieType = await wretch(
				`http://www.omdbapi.com/?s=${option.search}&apikey=${key}&y=${option.years}`,
			)
				.get()
				.json();
			return ListOfMovieSchema.parse(res);
		},
		enabled: false,
	};
}
