import axios from "axios";
import { BookMarkAction, BookMarkActionTypes, IFilm } from "../../interface/film";
import {Dispatch} from "redux";

export const getFilmIdLS =  (movieArr: any) => {
    return async (dispatch: Dispatch<BookMarkAction>) => {
        try {
            movieArr.map(async (item: any) => {
                dispatch({type: BookMarkActionTypes.FETCH_BOOKMARK})
                const response = await axios.get<IFilm[]>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${item}`, {
                 method: 'GET',
                 headers: {
                     'X-API-KEY': 'be634f3e-0f65-4b41-b7db-5f4e73ef8949',
                     'Content-Type': 'application/json',
                 },
             });
             dispatch({type: BookMarkActionTypes.BOOKMARK_ADD, payload: response.data})
            })
         
        } catch (error) {
            dispatch({
                type: BookMarkActionTypes.BOOKMARK_ERROR,
                payload: 'Произошла ошибка при загрузке фильмов!'
            })
        }
    }
}

