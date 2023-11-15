import React, { useEffect } from 'react'
import { BookMarkActionTypes } from '../../interface/film'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import './AddButton.scss'



type Props = {
    id: number
}

const AddButton: React.FC<Props> = ({id}) => {

    const { movieLS } = useTypedSelector(state => state.movieLS)
    const { getFilmIdLS } = useActions()
    const dispatch = useDispatch();

    const handleAddMovie = (id?: any) => {
        let movieId: string = JSON.parse(localStorage.getItem("movieLS") || '[]');
        console.log(movieId)
        if (!movieId.includes(id)) {
          dispatch({ type: "MOVIE_ADD", payload: id })
          getFilmIdLS(id)
    
        } else {
          dispatch({ type: BookMarkActionTypes.BOOKMARK_DELETE, payload: id })
          dispatch({ type: "MOVIE_DELETE", payload: id })
        }
      }
      useEffect(() => {
        localStorage.setItem('movieLS', JSON.stringify(movieLS))
      }, [movieLS]);

  return (
    <button className='card-menu__btn' onClick={() => handleAddMovie(id)}>Буду смотреть <span className={movieLS.includes(id) ? 'span-menu__btn-active ' : 'span-menu__btn'}></span></button>
  )
}

export default AddButton