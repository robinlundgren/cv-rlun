import React, { useEffect, useState, Component } from 'react'
import { connect } from 'react-redux'
import { toggleSidenav } from '../../Foundation/Header/actions/header-actions'
import { setStartInformation } from './actions/start-action'

import './styles/Start.scss'

const Start = props => {

    useEffect(() => {
        props.setStartInformation()
    }, [])
    
    const start = props.start.fields.startInformation
    const active = props.status.menu.menu.fields.menuInformation.navs.find(nav => nav.active)
    const open = props.status.header.status

    return (
        <>
            <div className={(!!open && open.active && window.screen.width > 1350 ? 'start-flex' : 'start')}>
                <div className="divider" />
                <div className="start__intro">
                    <div className="start__intro__wp-container">
                        <div className="start__intro__wp-container__img">
                            <div className="start__intro__wp-container__img__overlay" />
                        </div>
                    </div>
                </div>
                <div className="start__intro-text">
                    <div className="start__intro-text__grid">
                        <div className="start__intro-text__grid__title">INTRODUKTION</div>
                        <div className="start__intro-text__grid__text">
                            {start.intro}
                        </div>
                    </div>
                </div>
                <div className="show__header">
                    <span className="show__header__text">Kontakt</span>
                </div>
                <div className="start__middle-section">
                    {start.contact.map((item) => {
                        return (
                            <div className={item.bg}>
                                <p className="start__middle-section__square__title">{item.title}</p>
                                <img className="start__middle-section__square__img" src={item.img} />
                                <p className="start__middle-section__square__description">{item.value}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="show__header">
                    <span className="show__header__text">Referenser</span>
                </div>
                <div className="start__reference">
                    <div className="start__reference__images">
                        <div className="start__reference__images__hedin" />
                        <div className="start__reference__images__malmberg" />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    start: state.start.start,
    status: state,
})
export default connect(mapStateToProps, {
    toggleSidenav, setStartInformation
}) (Start)