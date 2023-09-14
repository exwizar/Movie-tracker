import List from './components/List';
import './app.scss'
import Modal from './components/ModalSaveMovie/Modal';

function App() {


  return (
    <div className='app'>
      <Modal/>
      <div className='app-head'>
        <h1 className='app-head__heading'>250 лучших фильмов</h1>
        <p className='app-head__info'>Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм.</p>
        <a 
          target='_blank'
          className='app-head__link'
          href='https://yandex.ru/support/kinopoisk/rating.html#rating__rating-2_1'
        >Как формируется рейтинг</a>
      </div>
      <div>
        <List/>
      </div>
    </div>
  )
  
}

export default App;


