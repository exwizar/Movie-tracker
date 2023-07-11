import React from 'react'
import { IFilm } from '../../interface/film'
import './film.scss'

interface FilmProps {
    film: IFilm;
}

const FilmCard: React.FC<FilmProps> = ({film}) => {

  return (
    <div className='card'>
       <img className='card-img' src={film.posterUrlPreview} alt="aaa" />
    </div>
  )
}

export default FilmCard