import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces/movieInterfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
const movieService = {
    getAll:(page: number):IRes<IMovie> => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id: string):IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByGenreId: (id: string, page: string): IRes<IMovie> => apiService.get(urls.movies.byGenreId(id), {params: {page}}),
    getBySearch: (search: string, page: string) : IRes<IMovie> => apiService.get(urls.movies.bySearch(page), {params: {search}})

}

export {movieService}