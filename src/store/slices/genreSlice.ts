import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenres} from "../../interfaces/movieInterfaces/genreInterface";
import {AxiosError} from "axios";
import {genreService} from "../../services/genreService";

interface IState {
    genres: IGenres[]
}

const initialState: IState = {
    genres: []
}
const getAll = createAsyncThunk(
    "genreSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
            })

})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll
}

export {genreReducer, genreActions}