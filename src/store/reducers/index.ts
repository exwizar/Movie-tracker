import {combineReducers} from 'redux'
import { filmReducer } from './filmReducer'
import { MovieBasketReducer } from './movieBasketReducer'


export const rootReducer = combineReducers({
    film: filmReducer,
    movie: MovieBasketReducer
})

export type RootState = ReturnType<typeof rootReducer>