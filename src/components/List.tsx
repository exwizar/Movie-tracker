import React, {useEffect, useState} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {useActions} from "../hooks/useActions";
import { IFilm } from '../interface/film';
import { Pagination } from '@mui/material';
import FilmCard from './filmCard/FilmCard';
import './list.scss'




const FilmList: React.FC = () => {
  const {film, error, loading, limit, page} = useTypedSelector(state => state.film)
  const {getFilmList, setFilmPage} = useActions()
  const {getFilmIdLS} = useActions()
  const films = film.films
  const {movie} = useTypedSelector(state => state.movie)
  useEffect(() => {
    getFilmList(page, limit)
}, [page])

useEffect(() => {
  getFilmIdLS(movie)
}, [])

const {bookmarkWithFilms} = useTypedSelector(state => state.bookmark)

console.log(bookmarkWithFilms)

const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setFilmPage(value)
};


if (loading) {
  return <h1>Идет загрузка...</h1>
}
if (error) {
  return <h1>{error}</h1>
}

return (
  <div className='list'>
    {films?.map((film: IFilm) => 
      <FilmCard key={film.filmId} film={film} />
    )}
    <div className='pagination'>
        <Pagination count={13}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="standard"
          size="large"
        />
      </div>
  </div>
);
};

export default FilmList;