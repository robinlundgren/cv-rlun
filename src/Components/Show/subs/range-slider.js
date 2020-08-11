import React from 'react'

const RangeSlider = ({ rangeType, value, skill }) => {
    return (
        <div className="slider-wrapper">
            <p className="slider-wrapper__title">
                {skill}
            </p>
            <section>
                <input
                    className={`${rangeType}`}
                    type="range"
                    value={value}
                    min={1}
                    max={10}
                    readOnly
                />
            </section>
        </div>
    )
}

export default RangeSlider