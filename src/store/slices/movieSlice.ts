import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {IPagination} from "../../interfaces/paginationInterface";

interface IState {
    movies: IMovie[];
    movieById: IMovie;
    movieByGenreId: IMovie[];
    total_pages: number;
    page: number;
}

const initialState: IState = {
    movies: [],
    movieById: null,
    movieByGenreId: [],
    total_pages: null,
    page: 1

}
const getAll = createAsyncThunk<IPagination<IMovie>, {
    page: number
}>(
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
const getAllById = createAsyncThunk<IMovie, {
    id: string;
}>(
    "movieSlice/getAllById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getByGenreId = createAsyncThunk<IMovie, {
    id: string,
    page: number
}>(
    "movieSlice/getByGenreId",
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(id, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.movies = results
                state.page = page
                state.total_pages = total_pages
            })
            .addCase(getAllById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })
            .addCase(getByGenreId.fulfilled, (state, action) => {
                const {results} = action.payload
                state.movieByGenreId = results
            })
})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getAllById,
    getByGenreId
}

export {
    movieActions,
    movieReducer
}