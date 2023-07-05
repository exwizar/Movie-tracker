import React, {useEffect, useState} from 'react';
import { List } from './components/List';
import { getFilmList } from './api/fiim-list';
import { IFilm } from './interface/film';
import axios from 'axios';


function App() {
  const [films, setFilms] = useState<IFilm[]>([])

  const getFilmList = async () => {
    try {
        const result = await axios.get<IFilm[]>('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
         method: 'GET',
         headers: {
             'X-API-KEY': 'be634f3e-0f65-4b41-b7db-5f4e73ef8949',
             'Content-Type': 'application/json',
         },
     });
     setFilms(result.data)
    } catch (error) {
        alert(error)
    }
}
useEffect(() => {
  getFilmList()
}, [])

console.log(films)
  return (
    <div>
      <List films={films} />
    </div>
  )
  
}

export default App;
function typedKeys(obj: any) {
  throw new Error('Function not implemented.');
}

