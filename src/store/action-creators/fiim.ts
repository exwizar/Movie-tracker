import axios from "axios";
import { FilmAction, FilmActionTypes, IFilm } from "../../interface/film";
import {Dispatch} from "redux";

export const getFilmList =  (page = 1) => {
    return async (dispatch: Dispatch<FilmAction>) => {
        try {
            dispatch({type: FilmActionTypes.FETCH_FILMS})
            const response = await axios.get<IFilm[]>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`, {
             method: 'GET',
             headers: {
                 'X-API-KEY': 'be634f3e-0f65-4b41-b7db-5f4e73ef8949',
                 'Content-Type': 'application/json',
             },
         });
         console.log(response.data)
         dispatch({type: FilmActionTypes.FETCH_FILMS_SUCCESS, payload: response.data})
         
        } catch (error) {
            dispatch({
                type: FilmActionTypes.FETCH_FILMS_ERROR,
                payload: 'Произошла ошибка при загрузке фильмов!'
            })
        }
    }
}

