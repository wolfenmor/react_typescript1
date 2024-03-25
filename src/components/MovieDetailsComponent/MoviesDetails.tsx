import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {useParams} from "react-router-dom";
import {movieActions} from "../../store/slices/movieSlice";
import {MovieDetails} from "./MovieDetails";
import css from "./MoviesDetails.module.css"
const MoviesDetails = () => {
    const {movieById} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    useEffect(()=> {
        dispatch(movieActions.getAllById({id}))
    }, [])
    return (
        <div className={css.Container}>
            {movieById && <MovieDetails movieDetails={movieById}/>}
        </div>
    );
};

export default MoviesDetails;