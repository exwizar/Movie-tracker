import {combineReducers} from 'redux'
import { filmReducer } from './filmReducer'


export const rootReducer = combineReducers({
    film: filmReducer
})

export type RootState = ReturnType<typeof rootReducer>