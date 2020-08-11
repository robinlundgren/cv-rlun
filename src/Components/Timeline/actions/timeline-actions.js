import { TIMELINE_INFORMATION } from './types'

export const setTimelineInformation = () => (dispatch, getState) => {
    dispatch({
        type: TIMELINE_INFORMATION,
        payload: {}
    })
}