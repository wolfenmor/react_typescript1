import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const MoviesOfTheGenre: FC<IProps> = () => {
    return (
        <div>
            MoviesOfTheGenre
        </div>
    );
};

export {MoviesOfTheGenre};