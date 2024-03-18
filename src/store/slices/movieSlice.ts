import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {IPagination} from "../../interfaces/paginationInterface";

interface IState {
    movies: IMovie[];
    page: number;
    movieById: IMovie;
}
const initialState: IState = {
    movies: [],
    page: null,
    movieById: null
}
const getAll = createAsyncThunk<IPagination<IMovie>, any>(
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
const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page} = action.payload
                state.movies = results
                state.page = page
            })
            .addCase(getAllById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })
})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getAllById
}

export {
    movieActions,
    movieReducer
}