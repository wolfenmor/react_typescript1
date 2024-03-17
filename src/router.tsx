import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MoviesPage from "./pages/MoviesPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"movies"}/>
            },
            {
                path: "movies", element: <MoviesPage/>
            }
        ]
    }
])

export {router}