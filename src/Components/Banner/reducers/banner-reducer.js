import { BANNER_INFORMATION } from '../actions/types'

import CreateBannerState from '../states/banner-state.js'

const initialState = {
    banner: CreateBannerState()
}

export default function(state = initialState, action) {
    switch (action.type) {
        case BANNER_INFORMATION:
            return {
                ...state,
                banner: initialState.banner
            }
        default: return state
    }
}