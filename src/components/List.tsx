import React, {useEffect} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {useActions} from "../hooks/useActions";
import { IFilm } from '../interface/film';
import { Pagination } from '@mui/material';
import FilmCard from './filmCard/filmCard';
import './list.scss'




const FilmList: React.FC = () => {
  const {film, error, loading, limit, page} = useTypedSelector(state => state.film)
  const {getFilmList, setFilmPage} = useActions()
  const {bookmarkWithFilms} = useTypedSelector(state => state.bookmark)

  const films = film.films
  useEffect(() => {
    getFilmList(page, limit)
}, [page])


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