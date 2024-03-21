import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../hooks/UseAppDispatch";
import {useAppSelector} from "../hooks/UseAppSelector";
import {movieActions} from "../store/slices/movieSlice";
import {MoviesOfTheGenre} from "../components/MoviesOfTheGenre/MoviesOfTheGenre";
import css from "../components/MovieComponent/Movies.module.css"
import MoviePagination from "../components/MovieComponent/MoviePagination";

const MoviesOfTheGenrePage = () => {
    const {name, id} = useParams()
    const dispatch = useAppDispatch()

    const [query,] = useSearchParams({page: "1"})
    const page = query.get("page")

    const {movieByGenreId} = useAppSelector(state => state.movies)
    useEffect(() => {
        dispatch(movieActions.getByGenreId({id, page}))
    }, [page])
    console.log(movieByGenreId)
    return (
        <div>
            <div className={css.GenreBox}>
                {movieByGenreId && movieByGenreId.length > 0 && (
                    <img className={css.GenreImg} src={`https://image.tmdb.org/t/p/w200/${movieByGenreId[1].backdrop_path}`} alt={movieByGenreId[0].original_title} />
                )}
                Movies in the Genre: {name}
            </div>
            <div className={css.Container}>
                {movieByGenreId && movieByGenreId.map(movie => <MoviesOfTheGenre key={movie.id} movie={movie}/>)}
            </div>
            <MoviePagination/>
        </div>
    );
};

export default MoviesOfTheGenrePage;