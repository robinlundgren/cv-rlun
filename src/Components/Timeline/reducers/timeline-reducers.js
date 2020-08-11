import { TIMELINE_INFORMATION } from '../actions/types'

import CreateTimelineState from '../states/timeline-state.js'

const initialState = {
    timeline: CreateTimelineState()
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TIMELINE_INFORMATION:
            return {
                ...state,
                timeline: initialState.timeline
            }
        default: return state
    }
}