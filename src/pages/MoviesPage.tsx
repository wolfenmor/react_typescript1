    import React from 'react';
    import Movies from "../components/MovieComponent/Movies";
    import MoviePagination from "../components/Pagination/MoviePagination";

    const MoviesPage = () => {
        return (
            <div>
                <Movies/>
                <MoviePagination/>
            </div>
        );
    };

    export default MoviesPage;