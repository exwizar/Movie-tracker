import { IMovieBasket } from "../../interface/film"
export const initialState: IMovieBasket = {
    movie: localStorage.getItem('movie') ? JSON.parse(localStorage.getItem('movie') || '[]') : [],
    error: null
}
export const MovieBasketReducer = (state = initialState, action: any): IMovieBasket => {
    switch(action.type) {
        case "MOVIE_ADD":
            return {...state,  movie: [...state.movie, action.payload]}
        case "MOVIE_ERROR":
            return {...state, error: action.payload, movie: []}
        default:
            return state
    }
}