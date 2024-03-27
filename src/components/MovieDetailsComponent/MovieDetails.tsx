import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import css from "./MovieDetails.module.css"
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movieDetails: IMovie
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {original_title, backdrop_path, overview, genres, release_date, runtime, imdb_id} = movieDetails
    return (
        <div>
            <ul className={css.BreadCrumbs}>
                <li><span><NavLink to={`/movies`}>Movies</NavLink></span></li>
                <li>{original_title}</li>
            </ul>
        <div className={css.Container}>
            <div className={css.panel1}>
                <img src={`https://image.tmdb.org/t/p/w200/${backdrop_path}`} alt={original_title}/>
            </div>
            <div className={css.panel2}>
                <h1>{original_title}</h1>

                <p><span className={css.Key}>release date:</span> <span className={css.Value}>{release_date}</span></p>

                <span className={css.Key}>Genres:</span> {movieDetails && genres.map(genre => <span key={genre.id} className={css.Value}><h5 key={genre.id}><NavLink to={`/${genre.name}/${genre.id}`}>{genre.name} </NavLink></h5></span>)}
                <p><span className={css.Key}>Runtime min:</span><span className={css.Value}> {runtime}</span></p>
                <span className={css.Key}>Companies:</span> {movieDetails.production_companies.map(movie => <span key={movie.id} className={css.Value}><p key={movie.id}>{movie.name}</p></span>)}
                <span className={css.Key}>Country: </span> {movieDetails.production_countries.map(movie => <span key={movie.iso_3166_1} className={css.Value}><p key={movie.iso_3166_1}>{movie.name}</p></span>)}

                <h3 className={css.Value}>{overview}</h3>
                <NavLink to={`https://www.imdb.com/title/${imdb_id}`} target="_blank">
                    <button className={css.Imdb}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYUlEQVR4nGNgGAWjYBSMglEwCkbBKBgFQxv8388p8/8A++r/B9g//T/I/n9Q4wNgN679f4BNFdnxbwfcYQdJ9sjb/3s4pRnAIT/QjjlINl7JMCSSzUGc+APDIHDEf0owXg+s6JD6r2ZkAcYZsZpgsdpsVbgYCE+tlgeLR4XooojjUq9rZvbfxtH4f1KU1v8rSwXBaq4sEURRA+LTzQMFyepgcTsnY6I8gIzNbEz/f9nFNbAe8PIy+P9zL+d/DRNUx2FTP7FC/v+OSeIo6k7OFcbwwMpOqf9pMVr/3TwM//eVKfz/d4CGHtA0Mf9/a6UARuhiUz+pUh7DsXuniWGI+fvq/dcxM4PzD8wQpZ0HQHhOgyxVPbCiQ+p/gK8eCp+mHogO1aG6BwL96eABW0dIxtU0NkfhDxkPJEVpoVicjMQfEh7oLFZCsbirRHFoeWB9jySKxcj8IeGBvdPEUCowUM2KT31LvvL/5e3SKI49NFMUwwMgNYF+dPJASjQk3VvYmfx/uYmHqFILhvUtzP6/2cKN4QFvbwOwHIy/qpOGHoCl+7hwHaI9oGVq/j8iWPf/8TnCYDXIHrCyN/kfE6oDriBBfANL0/+3VvCT54FH63j/b58kAcZnFwjBLYOJgRz8YC0fmH1psdD/73s4MdS/28YFNgeG32/n+v9rLweKPR+3c8P1XVwM0fdtNyc4SYLk8LlxGDSnD7B/HGhH/KewQ7N2EDjkP1n4APtqhv+H2NT+H2R7MwQd//b/fnYVyMjEHk5pUAd5SCSnA+wfwQMRMMePglEwCkbBKBgFo2AUMJANAD6Iz9B+XasFAAAAAElFTkSuQmCC" alt={"imdb"}></img></button>
                </NavLink>
            </div>
        </div>
        </div>
    );
};

export {MovieDetails};