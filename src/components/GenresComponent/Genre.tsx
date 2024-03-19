import {FC, PropsWithChildren} from "react";
import {IGenres} from "../../interfaces/movieInterfaces/genreInterface";
import css from "./Genre.module.css"
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenres
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div className={css.Genre}>
            <span><NavLink to={`/${name}/${id}`}>{name}</NavLink></span>
        </div>
    );
};

export {Genre};