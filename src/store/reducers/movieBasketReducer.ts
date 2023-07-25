import { IMovieBasket } from "../../interface/film"
export const initialState: IMovieBasket = {
    counter: 1
}
export const MovieBasketReducer = (state = initialState, action: any): IMovieBasket => {
    switch(action.type) {
        case "MOVIE_ADD":
            return{...state, counter: state.counter + 1}
        default:
            return state
    }
}
