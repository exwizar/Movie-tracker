import React, { useEffect, useState } from 'react'
import { IFilm } from '../../interface/film'
import './film.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

interface FilmProps {
    film: IFilm;
}


const FilmCard: React.FC<FilmProps> = ({film}) => {
  const items =
  localStorage.getItem("movie") !== null
    ? JSON.parse(localStorage.getItem("movie") || '[]')
    : [];


  let countries = film.countries.map(item => item.country)
  const {movie} = useTypedSelector(state => state.movie)
  const dispatch = useDispatch();

  const movieAdd = (id?: any) => {
    let movieId = movie.map(item => item);
    console.log(movieId)
    if(!movieId.includes(id)) {
      dispatch({type:"MOVIE_ADD", payload: id})
    } else {
      console.log('no work')
    }
  }
  localStorage.setItem('movie', JSON.stringify(movie.map(item=>item)))

  useEffect(() => {
    localStorage.setItem('movie', JSON.stringify(items))
    console.log(movie)
  },[items]);

  
  return (
    <div className='card'>

        
        <div className="card-block">
        <img className='card-img' src={film.posterUrlPreview} alt="aaa" />
        <div className='card-info'>
          <h3 className='card-info__name'>{film.nameRu}</h3>
          <p className='card-info__about'>{film.nameEn}, {film.year}, {film.filmLength} мин</p>
          <div className='card-info__countries'>{countries.join(', ')}</div>
        </div>
        </div>

        <div className='card-menu'>

            <span className='card-menu__span item1'></span>
                <p className='card-menu__rating'>{film.rating}</p>
            <span className='card-menu__span item2'></span>
          
            <button className='card-menu__btn' onClick={() => movieAdd(film.filmId)}>Буду смотреть</button>
        </div>
    </div>
  )
}

export default FilmCard