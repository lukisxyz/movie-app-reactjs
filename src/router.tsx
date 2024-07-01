import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/layout/base-layout";
import HomePage from "@/pages/home";
import MovieDetailPage from "@/pages/movie-detail";
import CheckoutPage from "@/pages/checkout";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "/movie/:id",
				element: <MovieDetailPage />,
			},
			{
				path: "/checkout",
				element: <CheckoutPage />,
			},
		],
	},
]);

export { router };
