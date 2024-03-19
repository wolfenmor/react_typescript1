import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {genreActions} from "../../store/slices/genreSlice";
import {Genre} from "./Genre";
import css from "./Genres.module.css"
const Genres = () => {
    const {genres} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch()

    useEffect(()=> {
    dispatch(genreActions.getAll())
    }, [])
    console.log(genres)
    return (
        <div className={css.Genres}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;