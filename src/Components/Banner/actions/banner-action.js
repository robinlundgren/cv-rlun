import { BANNER_INFORMATION } from './types'

export const setBannerInformation = () => (dispatch, getState) => {
    dispatch({
        type: BANNER_INFORMATION,
        payload: {}
    })
}

export const manipulateBannerState = (value) => (dispatch, getState) => {
    const bannerNavs = { ...getState().banner.banner.fields.bannerInformation }
    console.log(bannerNavs)
    bannerNavs.sites.find(item => {
        item.active = false
        if(item.key == value.key) {
            item.reload = Math.random()
            item.active = true
        }
    })

    !!value && dispatch({
        type: BANNER_INFORMATION,
        payload: bannerNavs
        })
}