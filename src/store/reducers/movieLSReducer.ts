import { IMovieLSBasket } from "../../interface/film"
export const initialState: IMovieLSBasket = {
    movieLS: localStorage.getItem('movieLS') ? JSON.parse(localStorage.getItem('movieLS') || '[]') : [],
    error: null
}
export const MovieBasketReducer = (state = initialState, action: any): IMovieLSBasket => {
    switch(action.type) {
        case "MOVIE_ADD":
            return {...state,  movieLS: [...state.movieLS, action.payload]}
        case "MOVIE_ERROR":
            return {...state, error: action.payload, movieLS: []}
        case "MOVIE_DELETE":
            return {...state, error: null, movieLS: state.movieLS.filter((item: any)=>item !== action.payload)}
        default:
            return state
    }
}