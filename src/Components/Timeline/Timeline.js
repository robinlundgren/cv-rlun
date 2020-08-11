import React, { useEffect, useState, Component } from 'react'
import { connect } from 'react-redux'
import { setTimelineInformation } from './actions/timeline-actions.js'
import { toggleSidenav } from '../../Foundation/Header/actions/header-actions'

import work from '../../Assets/icons/timelineIcons/work.svg'
import education from '../../Assets/icons/timelineIcons/education.svg'
import mwork from '../../Assets/icons/timelineIcons/mini-work.svg'
import meducation from '../../Assets/icons/timelineIcons/mini-education.svg'
import react from '../../Assets/icons/react.svg'

import './styles/Timeline.scss'

const Timeline = ({ props, compKey, value, height }) => {
    const [elemHeight, setHeight] = React.useState(0)
    const [elemOpacity, setOpacity] = React.useState(0)
    const ref = React.useRef(null)

    useEffect(() => {
        if(ref.current) {
            setHeight(height)
            setOpacity(1)
        }
    }, [])

    const active = props.status.menu.menu.fields.menuInformation.navs.find(nav => nav.active)
    const open = props.status.header.status

    return (
        <>
            <div
            ref={ref} 
            className={(!!open && open.active && window.screen.width > 1350 ? 'timeline-flex' : 'timeline')}
            style={{
                height: `${elemHeight}px`,
            }}>
                <div className="timeline__position-divider" />
                <div className="timeline__line" />
                {active.key === `${compKey}` && value.map((val) => {
                    return (
                        <div className="timeline__loop">
                            <div className="timeline__loop__arc">
                                <div className="timeline__loop__arc__inner">
                                    {window.screen.width > 675 ? <img className="timeline__loop__arc__inner__img" src={active.key === 'exp' ? work : education} /> : 
                                    <img className="timeline__loop__arc__inner__img" src={active.key === 'exp' ? mwork : meducation} />}
                                </div>
                            </div>
                            <div className={val.noClass ? "" : "timeline__loop__line"} />
                            <div 
                            className={val.stamp}
                            ref={ref}
                            style={{
                                opacity: `${elemOpacity}`
                            }}>
                                <h4 className="stamp-text">{val.timestamp}</h4>
                            </div>
                            <div 
                            className="timeline__loop__content"
                            ref={ref}
                            style={{
                                opacity: `${elemOpacity}`
                            }}>
                                <div className={val.noClass ? val.noClassClass : val.class}> 
                                    <h3 className="timeline__loop__content__title">{val.title}</h3>
                                    <h5 className="timeline__loop__content__subtitle">{val.subtitle}</h5>
                                    <p className="timeline__loop__content__info">{val.information}</p>
                                </div>
                                <div className={val.noClass ? val.noTail : val.tail} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    timeline: state.timeline.timeline,
    status: state,
})
export default connect(mapStateToProps, {
    setTimelineInformation, toggleSidenav
}) (Timeline)