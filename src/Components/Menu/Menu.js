import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { toggleSidenav } from '../../Foundation/Header/actions/header-actions'
import { setMenuInformation, manipulateMenuState } from './actions/menu-actions.js'

import mobGit from '../../Assets/icons/mobile-github.svg'
import mobLinkedIn from '../../Assets/icons/mobileLinkedIn.svg'
import mobPdf from '../../Assets/icons/mobile-pdf.svg'
import phone from '../../Assets/icons/phone.svg'
import mail from '../../Assets/icons/mail.svg'

import doc from '../../Assets/documents/bachelor_thesis_marcus_robin_2019.pdf'

import './styles/Menu.scss'

const Menu = props => {
    useEffect(() => {
        props.setMenuInformation()
    }, [])
    const menu = props.status.menu.menu.fields.menuInformation
    const open = props.status.header.status

    const toggleActive = (nav, index) => {
        props.manipulateMenuState(nav, index)
    }

    const flexMenu = value => {
        props.toggleSidenav(value)
    }

    return (
        <div className={(!!open && open.active ? 'menu' : 'menu-flex')}>
            <div className="menu__top">
                <div className="menu__top__link--start">
                    <a href="https://www.linkedin.com/in/robin-lundgren-301a46179">
                        <img className="menu__top__link__img" src={mobLinkedIn} />
                    </a>
                </div>
                <div className="menu__top__link">
                    <a href="https://www.github.com/robinlundgren">
                        <img className="menu__top__link__img" src={mobGit} />
                    </a>
                </div>
                <div className={window.screen.width < 510 ? "menu__top__link" : "menu__top__link--end"}>
                    <a href={doc}>
                        <img className="menu__top__link__img" src={mobPdf} />
                    </a>
                </div>
                {window.screen.width < 510 && <div onClick={() => flexMenu('toggle')} className="menu__top__link--end">
                    <div className="divX">
                        <p className="xxx">
                            X
                        </p>
                    </div>
                </div>}
            </div>
            <div className="menu__banner">
                <div className="menu__banner__pb" />
                <h5 className="menu__banner__title">{menu.name}</h5>
                <p className="menu__banner__subtitle">{menu.title}</p>
            </div>
            <div className="menu__nav-divider">
                <div className="menu__nav-divider__innerdiv">
                    <p className="menu__nav-divider__innerdiv__title">{menu.nav}</p>
                </div>
            </div>
            <div className="menu__nav">
                {menu.navs.map((nav, index) => {
                    return (
                    <>
                        <div onClick={() => toggleActive(nav, index)} className="menu__nav__section">
                            <div className="menu__nav__section__inner">
                                <img className="menu__nav__section__inner__img" src={nav.img} />
                            </div>
                            <div className="menu__nav__section__inner">
                                <p className="menu__nav__section__inner__title">{nav.title}</p>
                            </div>
                            <div className="menu__nav__section__inner">
                                <div className={nav.css} />
                            </div>                
                        </div>
                    </>
                    )
                })}
            </div>
            <div className="menu__nav-divider">
                <div className="menu__nav-divider__innerdiv">
                    <p className="menu__nav-divider__innerdiv__title">{menu.kon}</p>
                </div>
            </div>
            <div className="menu__contact">
                <div className="menu__contact__phone"> 
                    <img className="menu__contact__phone__img" src={phone} alt="phone" />
                    <p className="menu__contact__phone__text">{'076 038 93 27'} </p>
                </div>
                <div className="menu__contact__mail"> 
                    <img className="menu__contact__mail__img" src={mail} alt="phone" />
                    <p className="menu__contact__mail__text">{'robinlundgrenska@gmail.com'}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    status: state
})
export default connect(mapStateToProps, {
    toggleSidenav, setMenuInformation, manipulateMenuState
}) (Menu)