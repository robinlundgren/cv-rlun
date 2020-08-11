import React, { useEffect, useState, Component } from 'react'
import { connect } from 'react-redux'
import { toggleSidenav } from '../../Foundation/Header/actions/header-actions'
import { setShowInformation } from './actions/show-actions'

import Columns from './subs/columns'
import RangeSlider from './subs/range-slider'
import './styles/Show.scss'

const Show = props => {

    useEffect(() => {
        props.setShowInformation()
    }, [])
    
    const show = props.show.fields.showInformation
    // const active = props.status.menu.menu.fields.menuInformation.navs.find(nav => nav.active)
    const open = props.status.header.status
    console.log(show)

    return (
        <>
            <div className={(!!open && open.active && window.screen.width > 1350 ? 'show-flex' : 'show')}>
                <div className="divider" />
                <div className="show__header">
                    <span className="show__header__text">
                        {show.title1}
                    </span>
                </div>
                <div className="show__featured">
                    {show.features.map((item) => {
                        return (
                        <a className={item.style}>
                            <div className={item.bg} />
                            <div className="show__featured__text-block">
                                <div className="show__featured__text-block__overline" />
                                <div className="show__featured__text-block__subtitle">
                                    {item.title}
                                </div>
                            </div>
                        </a>
                        )
                    })}
                </div>
                <div className="show__header">
                    <span className="show__header__text">
                        {show.title2}
                    </span>
                </div>
                <div className="show__flex-wrapper">
                    <div className="show__flex-wrapper__main">
                        <Columns data={show.columnValues} />
                    </div>
                    <div className="show__flex-wrapper__statistics">
                        <h5 className="text-uppercase font-weight-bold">
                            {show.fieldName}
                        </h5>
                        {show.sliderValues.map((item, index) => {
                            return (
                            <>
                                <RangeSlider
                                key={index}
                                skill={item.skill} 
                                rangeType={item.key} 
                                value={item.value}
                                />
                            </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    show: state.show.show,
    status: state,
})
export default connect(mapStateToProps, {
    toggleSidenav, setShowInformation
}) (Show)