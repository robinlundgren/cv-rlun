import { combineReducers } from 'redux'

import bannerReducer from '../Components/Banner/reducers/banner-reducer.js'
import headerReducer from '../Foundation/Header/reducers/header-reducer.js'
import menuReducer from '../Components/Menu/reducers/menu-reducers.js'
import timelineReducer from '../Components/Timeline/reducers/timeline-reducers.js'
import startReducer from '../Components/Start/reducers/start-reducer.js'
import showReducer from '../Components/Show/reducers/show-reducer.js'

export default combineReducers({
    banner:  bannerReducer,
    header: headerReducer,
    menu: menuReducer,
    timeline: timelineReducer,
    start: startReducer,
    show: showReducer,
})