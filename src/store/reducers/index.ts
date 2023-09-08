import {combineReducers} from 'redux'
import { filmReducer } from './filmReducer'
import { MovieBasketReducer } from './movieLSReducer'
import { BookmarkReducer } from './bookmarkWithFilms'

export const rootReducer = combineReducers({
    film: filmReducer,
    movieLS: MovieBasketReducer,
    bookmark: BookmarkReducer
})

export type RootState = ReturnType<typeof rootReducer>