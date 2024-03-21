import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../hooks/UseAppDispatch";
import {useAppSelector} from "../hooks/UseAppSelector";
import {movieActions} from "../store/slices/movieSlice";
import MoviePagination from "../components/MovieComponent/MoviePagination";
import {Search} from "../components/Search/Search";
import css from "../components/MovieComponent/Movies.module.css";
import {Movie} from "../components/MovieComponent/Movie";

const SearchPage = () => {
    const {search} = useParams()
    const dispatch = useAppDispatch()

    const [query,] = useSearchParams({page: "1"})
    const page = query.get("page")
    const {movieBySearch} = useAppSelector(state => state.movies)

    useEffect(()=> {
    dispatch(movieActions.getBySearch({search, page}))
    }, [page])
    console.log(movieBySearch)
    return (
        <div>
            <div className={css.Container}>
                {movieBySearch.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        <div>
            <MoviePagination/>
        </div>
        </div>
    );
};

export default SearchPage;