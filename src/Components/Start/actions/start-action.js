import { START_INFORMATION } from './types'

export const setStartInformation = () => (dispatch, getState) => {
    dispatch({
        type: START_INFORMATION,
        payload: {}
    })
}