import { BookMarkAction, BookMarkActionTypes, BookmarkState} from "../../interface/film"
export const initialState: BookmarkState = {
    bookmarkWithFilms: [],
    error: null,
}
export const BookmarkReducer = (state = initialState, action: BookMarkAction): BookmarkState => {
    switch(action.type) {
        case BookMarkActionTypes.BOOKMARK_ADD:
            return {...state, error: null, bookmarkWithFilms: [...state.bookmarkWithFilms, action.payload]}
        case BookMarkActionTypes.BOOKMARK_ERROR:
            return {...state, error: action.payload, bookmarkWithFilms: []}
        case BookMarkActionTypes.BOOKMARK_DELETE:
            return {...state, error: null, bookmarkWithFilms: state.bookmarkWithFilms.filter((item: any)=>item.kinopoiskId !== action.payload)}
        default:
            return state
    }
}