import React from 'react'
import { IFilm } from '../../interface/film'
import './film.scss'

interface FilmProps {
    film: IFilm;
}

const FilmCard: React.FC<FilmProps> = ({film}) => {
  let countries = film.countries.map(item => item.country)


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
          
            <button className='card-menu__btn'>Буду смотреть</button>
        </div>
    </div>
  )
}

export default FilmCard