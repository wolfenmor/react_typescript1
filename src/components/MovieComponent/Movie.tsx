import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movieInterfaces/movieInterface";
import {NavLink} from "react-router-dom";
import css from "./Movie.module.css"
import Rating from "../Rating/Rating";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path, vote_average} = movie;

    return (
        <div className={css.Block}>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
            <span><NavLink to={`/movie/${id}`}>{original_title}</NavLink></span>
            <section><Rating numberOfStars={10} name={"rating"} starRatedColor={"gold"} rating={vote_average}
                        starDimension={"10px"}
                />
            </section>
        </div>
    );
};

export {Movie};