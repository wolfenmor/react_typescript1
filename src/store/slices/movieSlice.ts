import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import {movieService} from "../../services/movieService";

interface IState {
    movies: IMovie[];
    prevPage: number;
    nextPage: number;
    page: number;
}
const initialState: IState = {
    movies: [],
    prevPage: null,
    nextPage: null,
    page: null,
}
const getAll = createAsyncThunk<any, any>(
    "movieSlice/getAll",
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data)
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
})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll
}

export {
    movieActions,
    movieReducer
}