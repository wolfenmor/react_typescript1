import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces/movieInterfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const searchService = {
    getBySearch: (search: string, page: string) : IRes<IMovie> => apiService.get(urls.movies.bySearch(page), {params: {search}})
}

export {searchService}