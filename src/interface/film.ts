export interface IFilm {
    filmId?: number;
    name?: IFilmName;
    photo?: IFilmPhoto;
    rating?: string;
    year?: string; //!!!
    genres?: any;
}

export interface IFilmPhoto {
    posterUrl: string;
    posterUrlPreview: string
}

export interface IFilmName {
    nameEn: string;
    nameRu: string;
}