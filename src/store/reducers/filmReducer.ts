import { FilmAction, FilmActionTypes, FilmState, IFilm } from "../../interface/film"

export const initialState: FilmState = {
    film: [],
    page: 1,
    loading: false,
    error: null,
    limit: 20
    
}

export const filmReducer = (state = initialState, action: FilmAction): FilmState => {
    switch(action.type) {
        case FilmActionTypes.FETCH_FILMS:
            return {...state, loading: true, error: null, film: []}
        case FilmActionTypes.FETCH_FILMS_SUCCESS:
            return {...state,loading: false, error: null, film: action.payload}
        case FilmActionTypes.FETCH_FILMS_ERROR:
            return {...state,loading: false, error: action.payload, film: []}
        case FilmActionTypes.SET_FILM_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}