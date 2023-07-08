export interface IFilm {
    filmId?: number;
    nameEn?: string;
    nameRu?: string;
    posterUrl?: string;
    posterUrlPreview?: string
    rating?: string;
    year?: string; //!!!
    genres?: any;
}

export interface FilmState {
    [film: string]: any;
    loading: boolean;
    error: null | string;
}

export enum FilmActionTypes {
    FETCH_FILMS = 'FETCH_FILMS',
    FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS',
    FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR'
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

export type FilmAction = FetchFilmsAction | FetchFilmsSuccessAction | FetchFilmsErrorAction;