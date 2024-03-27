import React from 'react';
import {UseMoviePageQuery} from "../../hooks/UseMoviePageQuery";
import css from "./MoviePagination.module.css"
import {useAppSelector} from "../../hooks/UseAppSelector";

const MoviePagination = () => {
    const {prevPage, nextPage, page} = UseMoviePageQuery()
    const {total_pages} = useAppSelector(state => state.search)

    return (
        <div className={css.Button}>
            <button disabled={parseInt(page) === 1} onClick={prevPage}>Prev</button>
            <span>{page}</span>
            <button disabled={parseInt(page) === total_pages} onClick={nextPage}>Next</button>
        </div>
    );
};

export default MoviePagination;