import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import css from "./Movies.module.css"
import {useSearchParams} from "react-router-dom";

const Movies = () => {
    const {movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const [query, setQuery] = useSearchParams({page: "1"})
    const page = query.get("page")
    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page])
    return (
        <div>
            {movies.map(movie => <div>{movie.original_title}</div>)}
        </div>
    );
};

export default Movies;