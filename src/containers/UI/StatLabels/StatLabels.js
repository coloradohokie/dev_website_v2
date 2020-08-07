import React from 'react'
import classes from './StatLabels.module.scss'

const statLabels = (props) => (
    <ul>
        {props.stats.map(stat => (<li><span className={classes.statLabel}> &nbsp; {stat[0]}: . . . . . </span> {stat[1]}</li>))}
    </ul>
)

export default statLabels
