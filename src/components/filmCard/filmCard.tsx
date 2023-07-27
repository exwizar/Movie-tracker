import React from 'react'
import { IFilm } from '../../interface/film'
import './film.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { CompletionTriggerKind } from 'typescript';

interface FilmProps {
    film: IFilm;
}

const FilmCard: React.FC<FilmProps> = ({film}) => {
  let countries = film.countries.map(item => item.country)
  const {movie} = useTypedSelector(state => state.movie)
  const dispatch = useDispatch();

  const movieCounter = (nameRu: any, film: any) => {
    let movieNameRu = movie.map(item => item.nameRu);
    console.log(movieNameRu)
    console.log(film)
    console.log(movie)
    if(!movieNameRu.includes(nameRu) ) {
      dispatch({type:"MOVIE_ADD", payload: film})
    } else {
      console.log('no work')
    }
  }

  
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
          
            <button className='card-menu__btn' onClick={() => movieCounter(film.nameRu, film)}>Буду смотреть</button>
        </div>
    </div>
  )
}

export default FilmCard