import React from 'react';
import { IFilm} from '../interface/film';


interface IFilmCardParams {
    film: IFilm
}


export const FilmCard = ({film}: any): JSX.Element => {
    return (
        <div>
            <h1>{film.films}</h1>
            <img src={film.photo.posterUrl} alt="photo" />
            
        </div>
    )
}