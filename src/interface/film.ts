export interface IFilm {
    filmId?: number;
    nameEn?: string;
    nameRu?: string;
    posterUrl?: string;
    posterUrlPreview?: string
    rating?: string;
    year?: string; //!!!
    genres?: any;
    filmLength: string;
    countries: any[]
}

export interface FilmState {
    [film: string]: any;
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
}

export enum FilmActionTypes {
    FETCH_FILMS = 'FETCH_FILMS',
    FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS',
    FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR',
    SET_FILM_PAGE = 'SET_FILM_PAGE'
}


interface FetchFilmsAction {
    type: FilmActionTypes.FETCH_FILMS;
}
interface FetchFilmsSuccessAction {
    type: FilmActionTypes.FETCH_FILMS_SUCCESS;
    payload: any[]
}
interface FetchFilmsErrorAction {
    type: FilmActionTypes.FETCH_FILMS_ERROR;
    payload: string;
}
interface setFilmPage {
    type: FilmActionTypes.SET_FILM_PAGE;
    payload: number;
}

export type FilmAction = FetchFilmsAction | FetchFilmsSuccessAction | FetchFilmsErrorAction | setFilmPage;