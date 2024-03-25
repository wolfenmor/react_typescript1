import React from 'react';
import {MoviesOfTheGenre} from "../components/MoviesOfTheGenreComponent/MoviesOfTheGenre";
import MoviePagination from "../components/Pagination/MoviePagination";

const MoviesOfTheGenrePage = () => {
    return (
        <div>
            <MoviesOfTheGenre/>
            <MoviePagination/>
        </div>
    );
};

export default MoviesOfTheGenrePage;