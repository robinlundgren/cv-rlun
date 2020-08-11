import { SIDENAV_TOGGLE } from './types'
import { HEADER_STATE } from './types'


export const headerState = () => (dispatch, getState) => {
    dispatch({
        type: HEADER_STATE,
        payload: {}
    })
}

export const toggleSidenav = value => (dispatch, getState) => {
    const hamburger = getState().header.header.fields.hamburger
    
    if(value === 'toggle') {
        hamburger.active = !hamburger.active
    }
    
    dispatch({
        type: SIDENAV_TOGGLE,
        payload: hamburger
    })
}