import React, {useEffect, useState} from 'react';
import { getFilmList } from './store/action-creators/fiim';
import { useTypedSelector } from './hooks/useTypedSelector';
import List from './components/List';


function App() {


  return (
    <div>
      <div>
        <List/>
      </div>
    </div>
  )
  
}

export default App;


