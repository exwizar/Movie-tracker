export const initialState: any = {
    active: false
}

export default function ModalActive(state = initialState, action: any) {
    switch (action.type) {
        case "MODAL_ACTIVE":
            
            return {
                ...state,
                active: !state.active
            }

        default:
            return state
    }
}