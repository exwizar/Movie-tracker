import {combineReducers} from 'redux'
import { filmReducer } from './filmReducer'
import { MovieBasketReducer } from './movieLSReducer'
import { BookmarkReducer } from './bookmarkWithFilms'
import  ModalActive  from './modalActive'

export const rootReducer = combineReducers({
    film: filmReducer,
    movieLS: MovieBasketReducer,
    bookmark: BookmarkReducer,
    active: ModalActive
})

export type RootState = ReturnType<typeof rootReducer>