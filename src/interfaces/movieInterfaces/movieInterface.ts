import {ICollection} from "./collectionInterface";
import {IGenres} from "./genreInterface";
import {IProductionCompany} from "./productionCompaniesInterface";
import {IProductionCountry} from "./productionCountryInterface";
import {ISpokenLanguage} from "./spokenLanguageInterface";

export interface IMovie {
    results: [];
    id: number;
    imdb_id: number;
    adult: boolean;
    backdrop_path: string;
    poster_path: string;
    belongs_to_collection: ICollection | null;
    budget: number;
    original_language: string;
    original_title: string;
    overview: string;
    production_companies: IProductionCompany[]
    production_countries: IProductionCountry[]
    release_date: string;
    runtime: string;
    spoken_languages: ISpokenLanguage;
    tagline: string;
    video: boolean;
    page: number;
    total_pages: number;
    "genre_ids": number[]
    genres: IGenres[];
    vote_average: number;
}