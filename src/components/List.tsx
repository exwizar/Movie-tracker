// import React from "react";
// import { IFilm } from "../interface/film";


// export interface ListPropts {
//     [films: string]: any;
// }

// export const List: React.FC<ListPropts> = ({films}) => {

//     const filmsArr: IFilm[] = films.films
//     return (
//         <div>
//             {filmsArr?.length ?
//                 filmsArr.map((film) => (
//                     <div key={film.filmId}>{film.year}</div>
//                 )):
//                 <div>Список пуст</div>
//             }
//         </div>
//     )
// }

import React, {useEffect} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {getFilmList} from "../store/action-creators/fiim";
import {useActions} from "../hooks/useActions";
import { IFilm } from '../interface/film';



const FilmList: React.FC = () => {
  const {film, error, loading} = useTypedSelector(state => state.film)
  const {getFilmList} = useActions()
  useEffect(() => {
    getFilmList()
}, [])

let films = film.films

console.log(film.pagesCount)

if (loading) {
  return <h1>Идет загрузка...</h1>
}
if (error) {
  return <h1>{error}</h1>
}

return (
  <div>
    {films?.map((item: IFilm) => 
      <div key={item.filmId}>{item.filmId}</div>
    )}
  </div>
);
};

export default FilmList;