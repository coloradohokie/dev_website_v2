import React from 'react'
import classes from './WorkPiece.module.scss'

const workPiece = (props) => (
    <div className={classes.workPiece}>
        <img src={props.imageUrl} alt={props.imageDescription}></img>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
    </div>
)

export default workPiece