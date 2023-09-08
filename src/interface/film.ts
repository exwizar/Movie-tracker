
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

export interface IMovieLSBasket {
    movieLS: IFilm[];
    error: null | string;
}

export enum MovieBasketActionTypes {
    MOVIE_ADD = "MOVIE_ADD",
    MOVIE_ERROR = "MOVIE_ERROR"
}

interface FetchMovieIdAction {
    type: MovieBasketActionTypes.MOVIE_ADD
    payload: any[]
}
interface FetchMovieIdErrorAction {
    type: MovieBasketActionTypes.MOVIE_ERROR;
    payload: string;
}

export type MovieBacketAction = FetchMovieIdErrorAction | FetchMovieIdAction;

export interface BookmarkState {
    [bookmarkWithFilms: string]: any;
    error: null | string
}


export enum BookMarkActionTypes {
    FETCH_BOOKMARK = "FETCH_BOOKMARK",
    BOOKMARK_ADD = "BOOKMARK_ADD",
    BOOKMARK_ERROR = "BOOKMARK_ERROR"
}

interface FETCH_BOOKMARK{
    type: BookMarkActionTypes.FETCH_BOOKMARK;
}

interface BookMarkSuccessAction {
    type: BookMarkActionTypes.BOOKMARK_ADD
    payload: any
}
interface BookMarkErrorAction {
    type: BookMarkActionTypes.BOOKMARK_ERROR
    payload: string;
}

export type BookMarkAction = BookMarkSuccessAction | BookMarkErrorAction | FETCH_BOOKMARK;



