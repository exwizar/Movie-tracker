export const initialState: any = {
    active: false
}

export default function navbarReducer(state = initialState, action: any) {
    switch (action.type) {
        case "SET_ACTION":
            
            return {
                ...state,
                isFocused: !state.isFocused
            }

        default:
            return state
    }
}