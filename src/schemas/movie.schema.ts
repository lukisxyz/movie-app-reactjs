import { z } from "zod";

export const MovieSchema = z.object({
	Title: z.string(),
	Year: z.string(),
	imdbID: z.string(),
	Type: z.string(),
	Poster: z.string(),
});

export type MovieType = z.infer<typeof MovieSchema>;

export const ListOfMovieSchema = z.object({
	Search: z.array(MovieSchema),
	totalResults: z.string(),
	Response: z.string(),
});

export type ListOfMovieType = z.infer<typeof ListOfMovieSchema>;
