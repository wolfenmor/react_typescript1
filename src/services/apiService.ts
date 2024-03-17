import axios from "axios";
import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request => {
    request.headers["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmEwMmEyZTJhYzgyOTVhMWU1YjhjYzQyM2VjMmIzNiIsInN1YiI6IjY1ZGE3MTdjZTljMGRjMDE2M2MwZmVmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BAzcfR2lB6Rhst4kw8IzavlweBl8vkfjqeAvgMMXDag";
    return request;
});
export {
    apiService
}