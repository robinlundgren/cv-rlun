import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setBannerInformation, manipulateBannerState } from './actions/banner-action'
import { manipulateMenuState } from '../Menu/actions/menu-actions'
import { toggleSidenav } from '../../Foundation/Header/actions/header-actions'

import video from '../../Assets/videos/ocean.mp4'
import './styles/Banner.scss'

const Banner = props => {
    useEffect(() => {
        props.setBannerInformation()
    }, [])

    const toggleActive = (nav) => {
        props.manipulateBannerState(nav)
        props.manipulateMenuState(nav)
    }

    const info = props.banner.fields.bannerInformation
    const open = props.status.header.status
    const active = props.status.menu.menu.fields.menuInformation.navs.find(nav => nav.active)
    
    return (
        <div className={(!!open && open.active && window.screen.width > 1350 ? 'banner-flex' : 'banner')}>
            <div className="vid">
                <div className="vid__bg"/>
                <video className="vid__vid" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/ogg" />
                        Your browser does not support the standard html video tag. Please update your software.
                </video>
            </div>
            <div className="banner__container">
                <div className="banner__pb"/>
                <h4 className="banner__title">{info.name}</h4>
                <p className="banner__undertitle">{info.title}</p>
                <div className="banner__navs">
                    <ul className="banner__navs__ul">
                        <li 
                        onClick={() => toggleActive(info.sta)} 
                        style={active.key === 'sta' ? {color: 'white', 
                        textShadow: '0px -1px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5)'} : 
                        { color: '' }}>
                            {info.sta.title}
                        </li>
                        <li 
                        onClick={() => toggleActive(info.com)} 
                        style={active.key === 'com' ? {color: 'white', 
                        textShadow: '0px -1px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5)'} : 
                        { color: '' }}>
                            {info.com.title}
                        </li>
                        <li 
                        onClick={() => toggleActive(info.exp)} 
                        style={active.key === 'exp' ? {color: 'white', 
                        textShadow: '0px -1px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5)'} : 
                        { color: '' }}>
                            {info.exp.title}
                        </li>
                        <li 
                        onClick={() => toggleActive(info.edu)} 
                        style={active.key === 'edu' ? {color: 'white', 
                        textShadow: '0px -1px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5)'} : 
                        { color: '' }}>
                            {info.edu.title}
                        </li>
                        <div className="underbar" />
                    </ul>
                </div> 
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    banner: state.banner.banner,
    status: state
})
export default connect(mapStateToProps, {
    setBannerInformation, toggleSidenav, manipulateBannerState, manipulateMenuState
}) (Banner)