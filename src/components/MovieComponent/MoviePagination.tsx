import React from 'react';
import {UseMoviePageQuery} from "../../hooks/UseMoviePageQuery";
import css from "./MoviePagination.module.css"

const MoviePagination = () => {
    const {prevPage, nextPage, page} = UseMoviePageQuery()
    return (
        <div className={css.Button}>
            <button disabled={page < "2"} onClick={() => prevPage()}>Prev</button>
            <button onClick={() => nextPage()}>Next</button>
        </div>
    );
};

export default MoviePagination;