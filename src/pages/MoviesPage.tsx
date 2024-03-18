import React from 'react';
import Movies from "../components/MovieComponent/Movies";
import MoviePagination from "../components/MovieComponent/MoviePagination";

const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <MoviePagination/>
        </div>
    );
};

export default MoviesPage;