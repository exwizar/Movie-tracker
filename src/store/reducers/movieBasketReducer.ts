import { IMovieBasket } from "../../interface/film"
export const initialState: IMovieBasket = {
    movie: localStorage.getItem('movie') ? JSON.parse(localStorage.getItem('movie') || '[]') : []
}
export const MovieBasketReducer = (state = initialState, action: any): IMovieBasket => {
    switch(action.type) {
        case "MOVIE_ADD":
            return {...state,  movie: [...state.movie, action.payload]}
        default:
            return state
    }
}