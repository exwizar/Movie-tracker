import React, {useEffect, useState} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {useActions} from "../hooks/useActions";
import { IFilm } from '../interface/film';
import ReactPaginate from 'react-paginate';
import { Pagination } from '@mui/material';



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
  <div>
    {films?.map((item: IFilm) => 
      <div key={item.filmId}>{item.nameRu}</div>
    )}
    <div style={{fontSize: 20}}>

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