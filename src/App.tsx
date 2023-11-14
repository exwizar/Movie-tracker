import List from './components/List';
import './app.scss'
import Modal from './components/ModalSaveMovie/Modal';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import FilmCard from './components/filmCard/filmCard';
import AboutFilmPage from './components/filmCard/aboutFilm/aboutFilmPage';

function App() {

  const dispatch = useDispatch();
  const {active} = useTypedSelector(state => state.active)

  return (
    <div className='app'>
<BrowserRouter>
      <Modal/>

        <div className='app-head'>

          <div className='app-main'>
            <h1 className='app-main__heading'>250 лучших фильмов</h1>
            <p className='app-main__info'>Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм.</p>
            <a 
              target='_blank'
              className='app-main__link'
              href='https://yandex.ru/support/kinopoisk/rating.html#rating__rating-2_1' rel="noreferrer"
              >Как формируется рейтинг
            </a>
          </div>
          
          <div className='app-modal'>
            <button className='app-modal__open' onClick={() => dispatch({type:"MODAL_ACTIVE", payload: !active})}></button>
          </div>
          
        </div>

        <Routes>
          <Route path="/" element = {<List />} />  
          <Route path={"/:id"} element = {<AboutFilmPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;


