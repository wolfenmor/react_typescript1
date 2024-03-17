import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {movieActions} from "../../store/slices/movieSlice";
import css from "./Movies.module.css"

const Movies = () => {
    const {movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(movieActions.getAll({}))
    }, [])
    return (
        <div>
            {movies.map(movie => <div>{movie.original_title}</div>)}
            <div className={css.Button}>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    );
};

export default Movies;