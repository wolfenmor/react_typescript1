import React from 'react';
import Searches from "../components/Search/Searches";
import MoviePagination from "../components/Pagination/MoviePagination";

const SearchPage = () => {
    return (
        <div>
            <Searches/>
            <MoviePagination/>
        </div>
    );
};

export default SearchPage;