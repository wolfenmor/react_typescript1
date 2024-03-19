import React, {useEffect} from 'react';
import {MovieDetails} from "../components/MovieDetails/MovieDetails";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../hooks/UseAppSelector";
import {useAppDispatch} from "../hooks/UseAppDispatch";
import {movieActions} from "../store/slices/movieSlice";

const MovieDetailsPage = () => {
    const {movieById} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    console.log(id)
    useEffect(()=> {
        dispatch(movieActions.getAllById(id))
    }, [])
    console.log(movieById)
    return (
        <div>
            {movieById && <MovieDetails movieDetails={movieById}/>}
        </div>
    );
};

export default MovieDetailsPage;