import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../hooks/UseAppDispatch";
import {useAppSelector} from "../hooks/UseAppSelector";
import {movieActions} from "../store/slices/movieSlice";

const MoviesOfTheGenrePage = () => {
    const {name, id} = useParams()
    const dispatch = useAppDispatch()
    const {movieByGenreId} = useAppSelector(state => state.movies)
    useEffect(()=> {
        dispatch(movieActions.getByGenreId({id}))
    }, [])
    console.log(movieByGenreId)
    return (
        <div>
            {name}
        </div>
    );
};

export default MoviesOfTheGenrePage;