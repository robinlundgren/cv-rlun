import { MENU_INFORMATION } from './types'

export const setMenuInformation = () => (dispatch, getState) => {
    dispatch({
        type: MENU_INFORMATION,
        payload: {}
    })
}

export const manipulateMenuState = (value, index) => (dispatch, getState) => {
    const menuNavs = { ...getState().menu.menu.fields.menuInformation }

    menuNavs.navs.find(item => {
        item.active = false
        item.css = 'menu__nav__section__inner__arc--inactive'
        if(item.key == value.key) {
            item.reload = Math.random()
            item.active = true
            item.css = 'menu__nav__section__inner__arc'
        }
    })

    !!value && dispatch({
    type: MENU_INFORMATION,
    payload: menuNavs
    })
}

// export const closeMenu = (value) => (dispatch, getState) => {
//     console.log(value)
// }

