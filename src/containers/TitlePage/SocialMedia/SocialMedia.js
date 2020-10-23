import React from 'react'

const socialMedia = (props) => (
    <div>
        <a href={props.url}>
            <i className={props.icon}></i>
        </a>
    </div>
)

export default socialMedia