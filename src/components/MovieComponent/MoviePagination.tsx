import React from 'react';
import {UseMoviePageQuery} from "../../hooks/UseMoviePageQuery";

const MoviePagination = () => {
    const {prevPage, nextPage, page} = UseMoviePageQuery()
    return (
        <div>
            <button disabled={page < "2"} onClick={() => prevPage()}>Prev</button>
            <button onClick={() => nextPage()}>Next</button>
        </div>
    );
};

export default MoviePagination;