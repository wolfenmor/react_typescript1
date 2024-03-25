import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import {AxiosError} from "axios";
import {searchService} from "../../services/searchService";

interface IState {
    search: IMovie[];
    total_pages: number;
}
const initialState: IState  = {
    search: [],
    total_pages: null
}
const getBySearch = createAsyncThunk<IMovie, {
    querySearch: string,
    page: any
}>(
    "searchSlice/getBySearch",
    async ({querySearch, page}, {rejectWithValue}) => {
        try {
            const {data} = await searchService.getBySearch(querySearch, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getBySearch.fulfilled, (state, action) => {
                const {results, total_pages} = action.payload
                state.search = results
                state.total_pages = total_pages
            })
})

const {reducer: searchReducer, actions} = searchSlice;

const searchActions = {
    ...actions,
    getBySearch
}

export {searchReducer, searchActions}