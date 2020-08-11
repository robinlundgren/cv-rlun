import { SHOW_INFORMATION } from '../actions/types'

import CreateShowState from '../states/show-state.js'

const initialState = {
    show: CreateShowState()
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_INFORMATION:
            return {
                ...state,
                show: initialState.show
            }
        default: return state
    }
}