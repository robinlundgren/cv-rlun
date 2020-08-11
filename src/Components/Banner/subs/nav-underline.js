import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setBannerInformation } from '.././actions/banner-action'
import { toggleSidenav } from '../../../Foundation/Header/actions/header-actions'

const Underline = ({ props, cssClass }) => {
    const [width, setWidth] = React.useState(0)
    const ref = React.useRef(null)
    useEffect(() => {
        if(ref.current) {
            setWidth(120)
        }
    }, [])

    return (
        <>
            <div ref={ref} className={cssClass} style={{width: `${width}px`}}/>
        </>
    )
}

const mapStateToProps = state => ({
    banner: state.banner.banner,
    status: state
})
export default connect(mapStateToProps, {
    setBannerInformation, toggleSidenav
}) (Underline)