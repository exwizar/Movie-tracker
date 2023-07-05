import axios from "axios";
import { IFilm } from "../interface/film";
import { useState } from "react";

export const getFilmList = async () => {
    const [films, setFilms] = useState<IFilm[]>([])
    try {
        const result = await axios.get<IFilm[]>('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
         method: 'GET',
         headers: {
             'X-API-KEY': 'be634f3e-0f65-4b41-b7db-5f4e73ef8949',
             'Content-Type': 'application/json',
         },
     });
     setFilms(result.data)
    } catch (error) {
        alert(error)
    }
}


