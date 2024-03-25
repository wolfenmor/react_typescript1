import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {searchActions} from "../../store/slices/searchSlice";
import {useParams, useSearchParams} from "react-router-dom";
import css from "../MovieComponent/Movies.module.css";
import {Search} from "./Search";

const Searches = () => {
    const {search} = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()
    const {search: querySearch} = useParams()

    const [query,] = useSearchParams({page: "1"})
    const page = query.get("page")


    useEffect(()=> {
    dispatch(searchActions.getBySearch({querySearch, page}))
    }, [query, dispatch, page])
    return (
        <div className={css.Container}>
            {search.map(movie => <Search key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default Searches;