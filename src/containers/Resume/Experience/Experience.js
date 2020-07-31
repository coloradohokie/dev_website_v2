import React from 'react'
import classes from './Experience.module.scss'

const experience = (props) => (
    <div className={classes.experience}>
        {props.dates ? <div className={classes.badge}>{props.dates}</div> : null }
        <h3>{props.title}</h3>
        {props.company? <h4>{props.company}</h4> : null }
        <p>{props.children}</p>
    </div>
)

export default experience