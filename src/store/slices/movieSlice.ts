import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[];
    page: number;
    total_page: IMovie;
    currentPage: number;
    movieById: IMovie;
    movieByGenreId: IMovie[];
    movieBySearch: IMovie[]
}
const initialState: IState = {
    movies: [],
    page: null,
    total_page: null,
    currentPage: 1,
    movieById: null,
    movieByGenreId: [],
    movieBySearch: []
}
const getAll = createAsyncThunk<any, any>(
    "movieSlice/getAll",
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getAllById = createAsyncThunk<any, any>(
    "movieSlice/getAllById",
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getByGenreId = createAsyncThunk<any, any>(
    "movieSlice/getByGenreId",
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(id, page)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getBySearch = createAsyncThunk<any, any>(
    "movieSlice/getBySearch",
    async ({page, search}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getBySearch(page, search)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.movies = results
                state.page = page
                state.total_page = total_pages

            })
            .addCase(getAllById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })
            .addCase(getByGenreId.fulfilled, (state, action) => {
                const {results, page} = action.payload
                state.movieByGenreId = results
                state.page = page
            })
            .addCase(getBySearch.fulfilled, (state, action) => {
                const {results, page, total_page} = action.payload
                state.movieBySearch = results
                state.page = page
                state.total_page = total_page
            })
})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getAllById,
    getByGenreId,
    getBySearch
}

export {
    movieActions,
    movieReducer
}