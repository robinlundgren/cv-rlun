import { START_INFORMATION } from '../actions/types'

import CreateStartState from '../states/start-state.js'

const initialState = {
    start: CreateStartState()
}

export default function(state = initialState, action) {
    switch (action.type) {
        case START_INFORMATION:
            return {
                ...state,
                start: initialState.start
            }
        default: return state
    }
}