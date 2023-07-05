import React, { useEffect, useState } from "react";
import { getFilmList } from "../api/fiim-list";
import { IFilm } from "../interface/film";
import { FilmCard }  from "./FilmCard";

export interface ListPropts {
    [films: string]: any;
}

export const List: React.FC<ListPropts> = ({films}) => {

    const filmsArr: IFilm[] = films.films
    return (
        <div>
            {filmsArr?.length ?
                filmsArr.map((film) => (
                    <div key={film.filmId}>{film.filmId}</div>
                )):
                <div>Список пуст</div>
            }
        </div>
    )
}