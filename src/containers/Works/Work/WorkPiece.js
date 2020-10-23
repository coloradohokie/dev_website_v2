import React from 'react'
import classes from './WorkPiece.module.scss'

const workPiece = (props) => (
    <div className={classes.workPiece}>
        <img src={props.imageUrl} alt={props.imageDescription}></img>
        <h3><a href={props.url}>{props.title}</a></h3>
        <h4>{props.subtitle}</h4>
    </div>
)

export default workPiece