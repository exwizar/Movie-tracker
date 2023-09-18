import React, { useEffect } from 'react'
import './modal.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { BookMarkActionTypes } from '../../interface/film'


const Modal = () => {
  const dispatch = useDispatch();
  const {active} = useTypedSelector(state => state.active)
  const {movieLS} = useTypedSelector(state => state.movieLS)
  const {bookmarkWithFilms} = useTypedSelector(state => state.bookmark)
  const {getFilmIdLS} = useActions()

  useEffect(() => {
    movieLS.map((item :number) => {
      getFilmIdLS(item)
    })
  },[]);

  function modalDeleteFilm(id: number) {
    dispatch({type: BookMarkActionTypes.BOOKMARK_DELETE, payload: id})
    dispatch({type: "MOVIE_DELETE", payload: id})
  }
  console.log(movieLS)
 
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => dispatch({type:"MODAL_ACTIVE", payload: !active})}>
    
      <div className={active ?'modal__content active' : "modal__content"} onClick={e => e.stopPropagation()}>

        {bookmarkWithFilms?.map((film: any) => 
          <div key={film.kinopoiskId} className='film'>
            <div className="film-block">
            <img className='film-img' style={{width: '100px'}} src={film.posterUrlPreview} alt="aaa" />
              <div className='film-info'>
                <h3 className='film-info__name'>{film.nameRu}</h3>
                <p className='film-info__about'>{film.nameOriginal} {film.year}, {film.filmLength} мин</p>
                <p className='film-menu__rating'> Рейтинг: {film.ratingKinopoisk}</p>
              </div>
            </div>

            <div className='film-delete'>
                <button className='film-delete__btn' onClick={() => modalDeleteFilm(film.kinopoiskId)}>Удалить <span className='basket'></span></button>
            </div>
          </div>

        )}

      </div>
    </div>
  )
}

export default Modal