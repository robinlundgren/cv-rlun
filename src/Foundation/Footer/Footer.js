import React, { useEffect, useState } from 'react'
import './styles/Footer.scss'
import react from '../../Assets/icons/react.svg'

const Header = () => {
    const [elemOpacity, setOpacity] = React.useState(0)
    const ref = React.useRef(null)

    useEffect(() => {
        if(ref.current) {
            setOpacity(1)
        }
    }, [])

    return (

        <footer className="page-footer">
            <div ref={ref} className="footer" style={{opacity: `${elemOpacity}`}}>
                <p className="footer__text">powered by
                    <span className="footer__img">
                        <img src={react} className="logo" />
                    </span>
                </p>
            </div>
        </footer>

    )
}

export default Header