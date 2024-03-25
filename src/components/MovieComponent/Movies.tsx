import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import css from "./Movies.module.css"
import {useSearchParams} from "react-router-dom";
import {Movie} from "./Movie";

const Movies = () => {
    const {movies, total_pages} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const [query,] = useSearchParams({page: "1"})
    const page = query.get("page")

    console.log(total_pages)
    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page, dispatch])
    return (
        <div className={css.Container}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default Movies;