import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import css from "../MovieComponent/Movie.module.css";
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Search: FC<IProps> = ({movie}) => {
    const {id, poster_path, original_title} = movie;
    return (
        <div>
            <div className={css.Block}>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
                <span><NavLink to={`/movie/${id}`}>{original_title}</NavLink></span>
            </div>
        </div>
    );
};

export {Search};