import React, {useEffect, useState} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {useActions} from "../hooks/useActions";
import { IFilm } from '../interface/film';
import { Pagination } from '@mui/material';
import FilmCard from './filmCard/FilmCard';



const FilmList: React.FC = () => {
  const {film, error, loading, limit, page} = useTypedSelector(state => state.film)
  const {getFilmList, setTodoPage} = useActions()
  const films = film.films
  useEffect(() => {
    getFilmList(page, limit)
}, [page])



const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setTodoPage(value)
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

        </div>
        <Pagination count={13}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="standard"
          size="large"
        />
      </div>
);
};

export default FilmList;