import { HEADER_STATE, SIDENAV_TOGGLE } from '../actions/types'

import CreateHeaderState from '../states/header-state.js'

const initialState = {
    header: CreateHeaderState()
}

export default function(state = initialState, action) {
    switch (action.type) {
        case HEADER_STATE:
            return {
                ...state,
                header: initialState.header
            }
        case SIDENAV_TOGGLE:
            return {
                ...state,
                status: action.payload
            }    
        default: return state
    }
}