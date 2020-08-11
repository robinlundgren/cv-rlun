import { SHOW_INFORMATION } from './types'

export const setShowInformation = () => (dispatch, getState) => {
    dispatch({
        type: SHOW_INFORMATION,
        payload: {}
    })
}