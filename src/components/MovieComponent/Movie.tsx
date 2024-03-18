import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import {NavLink} from "react-router-dom";
import css from "./Movie.module.css"

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path} = movie;

    return (
        <div className={css.Block}>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
            <span><NavLink to={`/movie/${id}`}>{original_title}</NavLink></span>
        </div>
    );
};

export {Movie};