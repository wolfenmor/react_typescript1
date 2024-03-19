import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import GenresPage from "./pages/GenresPage";
import MoviesOfTheGenrePage from "./pages/MoviesOfTheGenrePage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"movies"}/>
            },
            {
                path: "movies", element: <MoviesPage/>
            },
            {
                path: "movie/:id", element: <MovieDetailsPage/>
            },
            {
                path: "genres", element : <GenresPage/>
            },
            {
                path: ":name/:id", element: <MoviesOfTheGenrePage/>
            }
        ]
    }
])

export {router}