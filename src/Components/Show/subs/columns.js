import React from 'react'

const ContentColumns = ({ data }) => {
    return (
        <div className="column-values">
            <div className="columns row">
                {data.map(content => (
                    <div className="col-6 col-md-4 col-lg-3 text-center p-2">
                        <img src={content.icon} />
                        <p className="mt-3 font-weight-bold text-uppercase text-white">{content.title}</p>
                    </div>
                ))}
            </div>
         </div>    
    )
}

export default ContentColumns