import axios from "axios";
import { BookMarkAction, BookMarkActionTypes} from "../../interface/film";
import {Dispatch} from "redux";

export const getFilmIdLS =  (id: number) => {
    return async (dispatch: Dispatch<BookMarkAction>) => {
        try {
                const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
                 method: 'GET',
                 headers: {
                     'X-API-KEY': 'be634f3e-0f65-4b41-b7db-5f4e73ef8949',
                     'Content-Type': 'application/json',
                 },
             });
             dispatch({type: BookMarkActionTypes.BOOKMARK_ADD, payload: response.data})
         
        } catch (error) {
            dispatch({
                type: BookMarkActionTypes.BOOKMARK_ERROR,
                payload: 'Произошла ошибка при загрузке фильмов!'
            })
        }
    }
}
