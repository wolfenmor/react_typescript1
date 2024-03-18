import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../../interfaces/movieInterfaces/movieInterface";
import css from "./MovieDetails.module.css"

interface IProps extends PropsWithChildren {
    movieDetails: IMovie
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {original_title, backdrop_path} = movieDetails
    return (
        <div className={css.Container}>
            <div className={css.panel1}>
                <img src={`https://image.tmdb.org/t/p/w200/${backdrop_path}`} alt={original_title}/>
            </div>
            <div className={css.panel2}>
                <div>{original_title}</div>
            </div>
        </div>
    );
};

export {MovieDetails};