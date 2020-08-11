import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { headerState, toggleSidenav } from './actions/header-actions.js'

import './styles/Header.scss'
import github from '../../Assets/icons/github.svg'
import linkedin from '../../Assets/icons/linkedin.svg'
import pdf from '../../Assets/icons/pdf.svg'
import doc from '../../Assets/documents/bachelor_thesis_marcus_robin_2019.pdf'

const Header = props => {
    useEffect(() => {
        props.headerState()
        props.toggleSidenav()
    }, [])

    const toggleNav = click => {
        props.toggleSidenav(click)
    }

    const open = props.status.header.status

    return (
        <div className={(!!open && open.active ? 'header-flex' : 'header')}>
            <div className="header__left">
                <div id="nav-icon3" onClick={() => toggleNav('toggle')} className={(!!open && open.active ? 'open' : 'false')}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="header__middle">
                <div className="header-middle__cols">
                    <a href="https://www.github.com/robinlundgren">
                        <img className="header-middle__cols__img" src={github} />
                    </a>
                </div>
                <div className="header-middle__cols">
                    <a href="https://www.linkedin.com/in/robin-lundgren-301a46179">
                        <img className="header-middle__cols__img" src={linkedin} />
                    </a>
                </div>
                <div className="header-middle__cols">
                    <a href={doc}>
                    <img className="header-middle__cols__img" src={pdf} />
                    </a>
                </div>
            </div>
            <div className="header__right">
                <p className="header__right__text">robin lundgren @ 2020</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    header: state.header.header,
    status: state
})
export default connect(mapStateToProps, {
    headerState, toggleSidenav
}) (Header)