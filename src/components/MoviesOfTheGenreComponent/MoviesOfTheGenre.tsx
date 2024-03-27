import React, {FC, PropsWithChildren, useEffect} from "react";
import css from "../MovieComponent/Movies.module.css"
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {useAppSelector} from "../../hooks/UseAppSelector";
import {movieActions} from "../../store/slices/movieSlice";
import {MovieOfTheGenre} from "./MovieOfTheGenre";

interface IProps extends PropsWithChildren {

}

const MoviesOfTheGenre: FC<IProps> = () => {

    const {name, id} = useParams()
    const dispatch = useAppDispatch()

    const [query,] = useSearchParams({page: "1"})
    const page = query.get("page") ? parseInt(query.get("page")!) : 1

    const {movieByGenreId} = useAppSelector(state => state.movies)
    useEffect(() => {
        dispatch(movieActions.getByGenreId({id, page}))
    }, [page])

    return (
        <div className={css.Block}>
            <div className={css.GenreBox}>
                {movieByGenreId && movieByGenreId.length > 0 && (
                    <img className={css.GenreImg} src={`https://image.tmdb.org/t/p/w200/${movieByGenreId[1].backdrop_path}`} alt={movieByGenreId[0].original_title} />
                )}
                <span> Movies in the Genre:</span> <h3>{name}</h3>
            </div>
            <div className={css.Container}>
                {movieByGenreId && movieByGenreId.map(movie => <MovieOfTheGenre key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesOfTheGenre};