import React from 'react';
import css from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <ul className={css.Header}>
            <li className={css.LiText}><NavLink to={"movies"}>Movies</NavLink></li>
            <li className={css.LiText}><NavLink to={"Genres"}>Genres</NavLink></li>
        </ul>
    );
};

export default Header;