import { FilmAction, FilmActionTypes, FilmState, IFilm } from "../../interface/film"

export const initialState: FilmState = {
    film: [],
    loading: false,
    error: null
}

export const filmReducer = (state = initialState, action: FilmAction): FilmState => {
    switch(action.type) {
        case FilmActionTypes.FETCH_FILMS:
            return {loading: true, error: null, film: []}
        case FilmActionTypes.FETCH_FILMS_SUCCESS:
            return {loading: false, error: null, film: action.payload}
        case FilmActionTypes.FETCH_FILMS_ERROR:
            return {loading: false, error: action.payload, film: []}
        default:
            return state
    }
}