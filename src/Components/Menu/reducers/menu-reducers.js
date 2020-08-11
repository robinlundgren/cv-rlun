import { MENU_INFORMATION } from '../actions/types'

import CreateMenuState from '../states/menu-state.js'

const initialState = {
    menu: CreateMenuState()
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MENU_INFORMATION:
            return {
                ...state,
                menu: initialState.menu
            }
        default: return state
    }
}