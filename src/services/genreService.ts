import {IRes} from "../types/responseType";
import {IGenres} from "../interfaces/movieInterfaces/genreInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const genreService = {
    getAll: () : IRes<IGenres> => apiService.get(urls.genres.base)
}

export {genreService}