import React, { useEffect, useState } from 'react'
import { IFilm } from '../../interface/film'
import './film.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useActions } from '../../hooks/useActions';



interface FilmProps {
    film: IFilm;
}


const FilmCard: React.FC<FilmProps> = ({film}) => {

  let countries = film.countries.map(item => item.country)
  const {movieLS} = useTypedSelector(state => state.movieLS)
  const {getFilmIdLS} = useActions()
  const dispatch = useDispatch();



  const handleAddMovie = (id?: any) => {
    let movieId: string = JSON.parse(localStorage.getItem("movieLS") || '[]');
    console.log(movieId)
    if(!movieId.includes(id)) {
      dispatch({type:"MOVIE_ADD", payload: id})
      getFilmIdLS(id)
    } else {
      console.log('no work')
    }
  }
  useEffect(() => {
    localStorage.setItem('movieLS', JSON.stringify(movieLS))
  },[movieLS]);


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
          
            <button className='card-menu__btn' onClick={() => handleAddMovie(film.filmId)}>Буду смотреть</button>
        </div>
    </div>
  )
}

export default FilmCard